# Бим Моторс — backend

Лёгкий PHP 8.2+ endpoint для заявок: `/api/lead.php`.

## Запуск локально

```bash
cp config.example.php config.php
php -S 127.0.0.1:8080
```

Endpoint будет доступен по адресу:

```text
http://127.0.0.1:8080/api/lead.php
```

## Конфигурация

Скопируйте `config.example.php` в `config.php` и заполните нужные поля.

```php
'allowed_origins' => [
    'https://your-domain.ru',
    'http://localhost:3000',
],
'telegram_bot_token' => '123456:ABC',
'telegram_chat_id' => '123456789',
'admin_email' => 'admin@example.com',
'rate_limit_salt' => 'long-random-string',
```

Можно также использовать переменные окружения:

```env
ALLOWED_ORIGINS=https://your-domain.ru,http://localhost:3000
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
ADMIN_EMAIL=
RATE_LIMIT_SALT=
```

## Как работает заявка

1. Проверяется CORS origin.
2. Проверяется метод POST и JSON.
3. Срабатывает rate limit: не больше 5 заявок за 10 минут на IP.
4. Honeypot должен быть пустым.
5. Телефон нормализуется в формат `+7XXXXXXXXXX`.
6. Требуется `consent: true`.
7. Заявка сохраняется в `storage/leads.jsonl`.
8. Если настроен Telegram, отправляется сообщение через Bot API.
9. Если настроен email, отправляется письмо через `mail()`.

Если Telegram или email не настроены, API не ломается: заявка всё равно сохраняется в JSONL.

## Ответ API

```json
{
  "ok": true,
  "message": "Заявка отправлена",
  "leadId": "bm-..."
}
```
