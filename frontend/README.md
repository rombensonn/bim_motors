# Бим Моторс — frontend

Next.js App Router сайт для автосервиса «Бим Моторс» в Мытищах.

## Запуск

```bash
npm install
npm run dev
```

Откройте `http://localhost:3000`.

## Production build

```bash
npm run typecheck
npm test
npm run build
npm run start
```

## PHP API для заявок

По умолчанию форма отправляет запрос на `/api/lead.php`.

Для локальной разработки можно запустить backend отдельно:

```bash
cd ../backend
php -S 127.0.0.1:8080
```

Затем в `frontend/.env.local` укажите:

```env
NEXT_PUBLIC_LEAD_API_URL=/api/lead.php
LEAD_API_INTERNAL_URL=http://127.0.0.1:8080/api/lead.php
```

Next.js будет проксировать `/api/lead.php` в PHP endpoint.

## Аналитика

Вставьте идентификаторы в `.env.local`:

```env
NEXT_PUBLIC_YANDEX_METRIKA_ID=00000000
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Если переменные пустые, счётчики не подключаются.

## Что заменить перед публикацией

- `NEXT_PUBLIC_SITE_URL` и домен в `public/sitemap.xml` / `public/robots.txt`.
- SVG-заглушки в `public/images` на реальные фото сервиса и точную карту/iframe.
- Юридические реквизиты, если они есть.
- Настройки backend: Telegram, email, разрешённые origin.
