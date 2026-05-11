<?php

declare(strict_types=1);

$defaultConfig = [
    'allowed_origins' => array_filter(array_map('trim', explode(',', getenv('ALLOWED_ORIGINS') ?: 'https://bim-motors.ru,https://www.bim-motors.ru,http://localhost:3000,http://localhost:3001,http://127.0.0.1:3000,http://127.0.0.1:3001'))),
    'telegram_bot_token' => getenv('TELEGRAM_BOT_TOKEN') ?: '',
    'telegram_chat_id' => getenv('TELEGRAM_CHAT_ID') ?: '',
    'admin_email' => getenv('ADMIN_EMAIL') ?: '',
    'rate_limit_salt' => getenv('RATE_LIMIT_SALT') ?: 'change-me-in-production',
    'rate_limit_max' => 5,
    'rate_limit_window_seconds' => 600,
];

$configPath = dirname(__DIR__) . '/config.php';
$localConfig = is_file($configPath) ? require $configPath : [];
$config = is_array($localConfig) ? array_replace($defaultConfig, $localConfig) : $defaultConfig;
$storageDir = dirname(__DIR__) . '/storage';

if (!is_dir($storageDir)) {
    mkdir($storageDir, 0755, true);
}

function respond(int $status, array $payload): never
{
    http_response_code($status);
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function cut_text(string $value, int $max): string
{
    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $max, 'UTF-8');
    }

    return substr($value, 0, $max);
}

function clean_string(mixed $value, int $max = 400, bool $keepLines = false): string
{
    if (!is_string($value)) {
        return '';
    }

    $value = strip_tags($value);
    $value = str_replace(["\r\n", "\r"], "\n", $value);
    $pattern = $keepLines ? '/[^\P{C}\n\t]+/u' : '/[^\P{C}\t]+/u';
    $value = preg_replace($pattern, ' ', $value) ?? '';
    $value = $keepLines
        ? preg_replace("/[ \t]+/u", ' ', $value)
        : preg_replace('/\s+/u', ' ', $value);

    return trim(cut_text((string) $value, $max));
}

function normalize_phone(mixed $value): string
{
    if (!is_string($value)) {
        return '';
    }

    $digits = preg_replace('/\D+/', '', $value) ?? '';

    if (strlen($digits) === 11 && str_starts_with($digits, '8')) {
        return '+7' . substr($digits, 1);
    }

    if (strlen($digits) === 11 && str_starts_with($digits, '7')) {
        return '+' . $digits;
    }

    if (strlen($digits) === 10) {
        return '+7' . $digits;
    }

    return '';
}

function get_client_ip(): string
{
    $ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
    return filter_var($ip, FILTER_VALIDATE_IP) ? $ip : '0.0.0.0';
}

function mask_ip(string $ip): string
{
    if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4)) {
        $parts = explode('.', $ip);
        $parts[3] = '0';
        return implode('.', $parts);
    }

    if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV6)) {
        $parts = explode(':', $ip);
        return implode(':', array_slice($parts, 0, 4)) . '::';
    }

    return '0.0.0.0';
}

function enforce_rate_limit(array $config, string $storageDir, string $ip): void
{
    $path = $storageDir . '/rate-limit.json';
    $key = hash_hmac('sha256', $ip, (string) $config['rate_limit_salt']);
    $now = time();
    $window = (int) $config['rate_limit_window_seconds'];
    $max = (int) $config['rate_limit_max'];

    $handle = fopen($path, 'c+');
    if ($handle === false) {
        respond(500, ['ok' => false, 'message' => 'Не удалось проверить лимит заявок']);
    }

    flock($handle, LOCK_EX);
    $contents = stream_get_contents($handle);
    $data = $contents ? json_decode($contents, true) : [];
    $data = is_array($data) ? $data : [];

    $hits = array_values(array_filter($data[$key] ?? [], static fn ($timestamp) => is_int($timestamp) && $timestamp > ($now - $window)));

    if (count($hits) >= $max) {
        flock($handle, LOCK_UN);
        fclose($handle);
        respond(429, ['ok' => false, 'message' => 'Слишком много заявок. Попробуйте позже или позвоните в сервис.']);
    }

    $hits[] = $now;
    $data[$key] = $hits;

    ftruncate($handle, 0);
    rewind($handle);
    fwrite($handle, json_encode($data, JSON_UNESCAPED_SLASHES));
    fflush($handle);
    flock($handle, LOCK_UN);
    fclose($handle);
}

function clean_utm(mixed $utm): array
{
    if (!is_array($utm)) {
        return [];
    }

    $allowed = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
    $result = [];

    foreach ($allowed as $key) {
        if (isset($utm[$key])) {
            $result[$key] = clean_string($utm[$key], 160);
        }
    }

    return array_filter($result, static fn ($value) => $value !== '');
}

function format_utm(array $utm): string
{
    if ($utm === []) {
        return 'нет';
    }

    return implode(', ', array_map(static fn ($key, $value) => $key . '=' . $value, array_keys($utm), $utm));
}

function lead_text(array $lead): string
{
    return implode("\n", [
        'Новая заявка с сайта Бим Моторс',
        '',
        'Имя: ' . ($lead['name'] ?: 'не указано'),
        'Телефон: ' . $lead['phone'],
        'Авто: ' . ($lead['car'] ?: 'не указано'),
        'Услуга: ' . ($lead['service'] ?: 'не указано'),
        'Проблема: ' . ($lead['message'] ?: 'не указано'),
        'Удобное время: ' . ($lead['preferredTime'] ?: 'не указано'),
        'Страница: ' . ($lead['page'] ?: 'не указано'),
        'UTM: ' . format_utm($lead['utm']),
        'Дата: ' . $lead['createdAt'],
        'IP: ' . $lead['ip'],
    ]);
}

function send_telegram(array $config, string $text): void
{
    $token = (string) $config['telegram_bot_token'];
    $chatId = (string) $config['telegram_chat_id'];

    if ($token === '' || $chatId === '') {
        return;
    }

    $url = 'https://api.telegram.org/bot' . rawurlencode($token) . '/sendMessage';
    $body = http_build_query([
        'chat_id' => $chatId,
        'text' => $text,
        'disable_web_page_preview' => 'true',
    ]);

    $context = stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
            'content' => $body,
            'timeout' => 5,
        ],
    ]);

    @file_get_contents($url, false, $context);
}

function send_email(array $config, string $text): void
{
    $email = (string) $config['admin_email'];
    if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return;
    }

    $host = clean_string($_SERVER['HTTP_HOST'] ?? 'bim-motors.ru', 120);
    $headers = [
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'From: no-reply@' . $host,
    ];

    @mail($email, 'Новая заявка с сайта Бим Моторс', $text, implode("\r\n", $headers));
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '') {
    if (!in_array($origin, $config['allowed_origins'], true)) {
        respond(403, ['ok' => false, 'message' => 'Запрос с этого домена не разрешён']);
    }

    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Max-Age: 86400');

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'OPTIONS') {
    respond(200, ['ok' => true, 'message' => 'OK']);
}

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    respond(405, ['ok' => false, 'message' => 'Метод не поддерживается']);
}

$ip = get_client_ip();
enforce_rate_limit($config, $storageDir, $ip);

$rawBody = file_get_contents('php://input') ?: '';
$payload = json_decode($rawBody, true);

if (!is_array($payload)) {
    respond(400, ['ok' => false, 'message' => 'Некорректный JSON']);
}

$honeypot = clean_string($payload['honeypot'] ?? '', 80);
if ($honeypot !== '') {
    respond(200, ['ok' => true, 'message' => 'Заявка отправлена', 'leadId' => 'accepted']);
}

if (($payload['consent'] ?? false) !== true) {
    respond(400, ['ok' => false, 'message' => 'Необходимо согласие на обработку персональных данных']);
}

$phone = normalize_phone($payload['phone'] ?? '');
if ($phone === '') {
    respond(400, ['ok' => false, 'message' => 'Укажите корректный телефон']);
}

$leadId = 'bm-' . gmdate('Ymd-His') . '-' . bin2hex(random_bytes(4));
$lead = [
    'leadId' => $leadId,
    'createdAt' => gmdate('c'),
    'name' => clean_string($payload['name'] ?? '', 80),
    'phone' => $phone,
    'car' => clean_string($payload['car'] ?? '', 120),
    'service' => clean_string($payload['service'] ?? '', 120),
    'message' => clean_string($payload['message'] ?? '', 1200, true),
    'preferredTime' => clean_string($payload['preferredTime'] ?? '', 160),
    'page' => clean_string($payload['page'] ?? '', 180),
    'utm' => clean_utm($payload['utm'] ?? []),
    'ip' => mask_ip($ip),
    'userAgent' => clean_string($_SERVER['HTTP_USER_AGENT'] ?? '', 300),
];

$line = json_encode($lead, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . PHP_EOL;
$saved = file_put_contents($storageDir . '/leads.jsonl', $line, FILE_APPEND | LOCK_EX);

if ($saved === false) {
    respond(500, ['ok' => false, 'message' => 'Не удалось сохранить заявку']);
}

$text = lead_text($lead);
send_telegram($config, $text);
send_email($config, $text);

respond(200, [
    'ok' => true,
    'message' => 'Заявка отправлена',
    'leadId' => $leadId,
]);
