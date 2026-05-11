import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import { breadcrumbsJsonLd, createMetadata, pagesSeo, serviceJsonLd } from "@/data/seo";

export const metadata = createMetadata(pagesSeo.suspension);

export default function SuspensionPage() {
  const seo = pagesSeo.suspension;

  return (
    <>
      <JsonLd data={[breadcrumbsJsonLd(seo.breadcrumbs), serviceJsonLd("Ремонт ходовой и тормозной системы", seo.description, seo.path)]} />
      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <Breadcrumbs items={seo.breadcrumbs} />
            <p className="text-sm font-semibold uppercase text-bmw">Ходовая и тормоза</p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl">{seo.h1}</h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              Стуки, вибрации, скрипы, биение при торможении и плохое торможение требуют осмотра.
              После проверки согласуются детали и объём работ.
            </p>
          </div>
          <LeadForm id="lead-form" compact title="Записаться на осмотр ходовой" service="Ходовая и тормоза" />
        </div>
      </section>

      <section className="section bg-white/45">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {["Стуки", "Вибрации", "Скрипы", "Биение"].map((title) => (
            <article key={title} className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-black/5">
              <h2 className="font-heading text-xl font-bold text-ink">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">Сначала осмотр, затем понятный список работ и согласование ремонта.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
