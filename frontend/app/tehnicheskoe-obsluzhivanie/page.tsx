import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import { breadcrumbsJsonLd, createMetadata, pagesSeo, serviceJsonLd } from "@/data/seo";

export const metadata = createMetadata(pagesSeo.maintenance);

export default function MaintenancePage() {
  const seo = pagesSeo.maintenance;

  return (
    <>
      <JsonLd data={[breadcrumbsJsonLd(seo.breadcrumbs), serviceJsonLd("Техническое обслуживание автомобиля", seo.description, seo.path)]} />
      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <Breadcrumbs items={seo.breadcrumbs} />
            <p className="text-sm font-semibold uppercase text-bmw">ТО</p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl">{seo.h1}</h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              Регламентное обслуживание, замена масла, фильтров и осмотр перед дальней поездкой. Без лишнего навязывания:
              сначала объясняем, что нужно сейчас, а что можно планировать позже.
            </p>
          </div>
          <LeadForm id="lead-form" compact title="Записаться на ТО" service="Техническое обслуживание" />
        </div>
      </section>

      <section className="section bg-white/45" id="zamena-masla">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {[
            ["Регламентное ТО", "Проверка и обслуживание по задаче и пробегу автомобиля."],
            ["Замена масла", "Масло и фильтры подбираются под марку и модель."],
            ["Фильтры", "Воздушный, салонный, масляный и другие расходники по необходимости."],
            ["Перед поездкой", "Осмотр помогает снизить риск неприятных сюрпризов в дороге."]
          ].map(([title, text]) => (
            <article key={title} className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-black/5">
              <h2 className="font-heading text-xl font-bold text-ink">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
