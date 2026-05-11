import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import { breadcrumbsJsonLd, createMetadata, pagesSeo, serviceJsonLd } from "@/data/seo";

export const metadata = createMetadata(pagesSeo.ac);

export default function AcPage() {
  const seo = pagesSeo.ac;

  return (
    <>
      <JsonLd data={[breadcrumbsJsonLd(seo.breadcrumbs), serviceJsonLd("Заправка и ремонт автокондиционера", seo.description, seo.path)]} />
      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <Breadcrumbs items={seo.breadcrumbs} />
            <p className="text-sm font-semibold uppercase text-bmw">Автокондиционер</p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl">{seo.h1}</h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              Если кондиционер плохо холодит или быстро теряет эффективность, лучше начать с диагностики системы и проверки возможных утечек.
            </p>
          </div>
          <LeadForm id="lead-form" compact title="Записаться на автокондиционер" service="Автокондиционер" />
        </div>
      </section>

      <section className="section bg-white/45">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            ["Диагностика системы", "Проверяем симптомы и состояние системы перед работами."],
            ["Заправка", "Заправка выполняется после оценки необходимости и состояния контура."],
            ["Проверка утечек", "Если есть подозрение на утечку, важно сначала найти причину."]
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
