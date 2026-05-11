<?php

return [
    // Домен сайта и локальные адреса, с которых разрешены POST-запросы.
    'allowed_origins' => [
        'https://bim-motors.ru',
        'https://www.bim-motors.ru',
        'http://localhost:3000',
        'http://localhost:3001',
        'http://127.0.0.1:3000',
        'http://127.0.0.1:3001',
    ],

    // Telegram Bot API. Можно оставить пустыми: заявка всё равно сохранится в JSONL.
    'telegram_bot_token' => '',
    'telegram_chat_id' => '',

    // Email администратора. Можно оставить пустым.
    'admin_email' => '',

    // Рекомендуется заменить на случайную строку в production.
    'rate_limit_salt' => 'change-me-in-production',
    'rate_limit_max' => 5,
    'rate_limit_window_seconds' => 600,
];
