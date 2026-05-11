import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { breadcrumbsJsonLd, createMetadata, pagesSeo } from "@/data/seo";

export const metadata = createMetadata(pagesSeo.privacy);

export default function PrivacyPage() {
  const seo = pagesSeo.privacy;

  return (
    <>
      <JsonLd data={breadcrumbsJsonLd(seo.breadcrumbs)} />
      <section className="section">
        <article className="mx-auto max-w-4xl rounded-3xl bg-white p-6 shadow-card ring-1 ring-black/5 sm:p-8">
          <Breadcrumbs items={seo.breadcrumbs} />
          <h1 className="font-heading text-4xl font-bold text-ink">{seo.h1}</h1>
          <div className="mt-6 space-y-5 text-base leading-8 text-muted">
            <p>
              Настоящая политика описывает, как сайт автосервиса Бим Моторс обрабатывает данные, которые пользователь отправляет через формы заявки.
            </p>
            <h2 className="font-heading text-2xl font-bold text-ink">Какие данные обрабатываются</h2>
            <p>
              Пользователь может передать имя, телефон, марку и модель автомобиля, выбранную услугу, описание проблемы,
              удобное время связи, страницу отправки заявки и UTM-метки.
            </p>
            <h2 className="font-heading text-2xl font-bold text-ink">Цель обработки</h2>
            <p>
              Данные используются для обратной связи, уточнения задачи, записи на диагностику, ремонт, техническое обслуживание или шиномонтаж.
            </p>
            <h2 className="font-heading text-2xl font-bold text-ink">Хранение и передача</h2>
            <p>
              Заявки могут сохраняться в технический файл сайта и передаваться ответственному сотруднику через настроенные каналы связи:
              Telegram или email, если они подключены администратором.
            </p>
            <h2 className="font-heading text-2xl font-bold text-ink">Отзыв согласия</h2>
            <p>
              Пользователь может отказаться от дальнейшей коммуникации, сообщив об этом по телефону сервиса.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
