import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import { breadcrumbsJsonLd, createMetadata, pagesSeo, serviceJsonLd } from "@/data/seo";

export const metadata = createMetadata(pagesSeo.engine);

export default function EngineRepairPage() {
  const seo = pagesSeo.engine;

  return (
    <>
      <JsonLd data={[breadcrumbsJsonLd(seo.breadcrumbs), serviceJsonLd("Ремонт двигателя и ГБЦ", seo.description, seo.path)]} />
      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <Breadcrumbs items={seo.breadcrumbs} />
            <p className="text-sm font-semibold uppercase text-bmw">Двигатель</p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl">{seo.h1}</h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              При масложоре, перегреве, ошибках и нестабильной работе нельзя обещать точную цену без диагностики.
              Сначала проверяются симптомы, состояние двигателя и сопутствующие узлы.
            </p>
          </div>
          <LeadForm id="lead-form" compact title="Записаться на диагностику двигателя" service="Ремонт двигателя" />
        </div>
      </section>

      <section className="section bg-white/45">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            ["Диагностика перед ремонтом", "Проверяем причину, чтобы не начинать с дорогой разборки без оснований."],
            ["ГБЦ, турбина, сопутствующие проверки", "Объём работ зависит от симптомов и фактического состояния узлов."],
            ["BMW B58 и сложные задачи", "В отзывах отмечают опыт с непростыми проблемами BMW, включая двигатель B58."]
          ].map(([title, text]) => (
            <article key={title} className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-black/5">
              <h2 className="font-heading text-2xl font-bold text-ink">{title}</h2>
              <p className="mt-4 text-sm leading-6 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
