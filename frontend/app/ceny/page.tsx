import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import PriceTable from "@/components/PriceTable";
import { breadcrumbsJsonLd, createMetadata, pagesSeo } from "@/data/seo";

export const metadata = createMetadata(pagesSeo.prices);

export default function PricesPage() {
  const seo = pagesSeo.prices;

  return (
    <>
      <JsonLd data={breadcrumbsJsonLd(seo.breadcrumbs)} />
      <section className="section">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs items={seo.breadcrumbs} />
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-bmw">Цены</p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl">{seo.h1}</h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              Нормочас: 800–1500 ₽. Точная стоимость зависит от марки, модели, состояния автомобиля и объёма работ.
              Сложный ремонт не оценивается точно без диагностики или осмотра.
            </p>
          </div>
          <div className="mt-10">
            <PriceTable />
          </div>
        </div>
      </section>

      <section className="section bg-white/45">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-bmw">Расчёт</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-ink">Хотите понять порядок бюджета?</h2>
            <p className="mt-4 text-base leading-8 text-muted">
              Опишите автомобиль и задачу. Если для оценки нужна диагностика, мы честно скажем об этом до ремонта.
            </p>
          </div>
          <LeadForm id="lead-form" title="Рассчитать стоимость ремонта" service="Расчёт стоимости" />
        </div>
      </section>
    </>
  );
}
