import Breadcrumbs from "@/components/Breadcrumbs";
import ContactBlock from "@/components/ContactBlock";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import { breadcrumbsJsonLd, createMetadata, pagesSeo } from "@/data/seo";

export const metadata = createMetadata(pagesSeo.contacts);

export default function ContactsPage() {
  const seo = pagesSeo.contacts;

  return (
    <>
      <JsonLd data={breadcrumbsJsonLd(seo.breadcrumbs)} />
      <section className="section pb-0">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs items={seo.breadcrumbs} />
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-bmw">Контакты</p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl">{seo.h1}</h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              Адрес, телефон, график, кнопки связи и форма записи. Сервис работает по предварительной записи, воскресенье — выходной.
            </p>
          </div>
        </div>
      </section>
      <ContactBlock />
      <section className="section pt-0">
        <div className="mx-auto max-w-4xl">
          <LeadForm id="lead-form" title="Записаться в Бим Моторс" service="Запись через контакты" />
        </div>
      </section>
    </>
  );
}
