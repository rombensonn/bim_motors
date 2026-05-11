import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { breadcrumbsJsonLd, createMetadata, pagesSeo } from "@/data/seo";

export const metadata = createMetadata(pagesSeo.consent);

export default function ConsentPage() {
  const seo = pagesSeo.consent;

  return (
    <>
      <JsonLd data={breadcrumbsJsonLd(seo.breadcrumbs)} />
      <section className="section">
        <article className="mx-auto max-w-4xl rounded-3xl bg-white p-6 shadow-card ring-1 ring-black/5 sm:p-8">
          <Breadcrumbs items={seo.breadcrumbs} />
          <h1 className="font-heading text-4xl font-bold text-ink">{seo.h1}</h1>
          <div className="mt-6 space-y-5 text-base leading-8 text-muted">
            <p>
              Отправляя форму на сайте Бим Моторс, пользователь даёт согласие на обработку персональных данных для обратной связи
              и организации записи в автосервис.
            </p>
            <h2 className="font-heading text-2xl font-bold text-ink">Состав данных</h2>
            <p>
              Обрабатываются имя, телефон, сведения об автомобиле, выбранная услуга, комментарий, удобное время связи,
              страница отправки заявки и технические метки источника перехода.
            </p>
            <h2 className="font-heading text-2xl font-bold text-ink">Действия с данными</h2>
            <p>
              Данные могут собираться, записываться, храниться, уточняться, использоваться для связи с пользователем и удаляться
              после выполнения цели обработки.
            </p>
            <h2 className="font-heading text-2xl font-bold text-ink">Срок действия согласия</h2>
            <p>
              Согласие действует до достижения цели обработки или до момента отзыва пользователем.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
