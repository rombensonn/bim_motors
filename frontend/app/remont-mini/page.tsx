import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import ProcessSteps from "@/components/ProcessSteps";
import { breadcrumbsJsonLd, createMetadata, pagesSeo, serviceJsonLd } from "@/data/seo";

export const metadata = createMetadata(pagesSeo.mini);

export default function MiniRepairPage() {
  const seo = pagesSeo.mini;

  return (
    <>
      <JsonLd data={[breadcrumbsJsonLd(seo.breadcrumbs), serviceJsonLd("Ремонт MINI в Мытищах", seo.description, seo.path)]} />
      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <Breadcrumbs items={seo.breadcrumbs} />
            <p className="text-sm font-semibold uppercase text-bmw">MINI</p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl">{seo.h1}</h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              MINI близки к BMW по подходу к диагностике и обслуживанию. Важно не ограничиваться чтением ошибок, а проверить узлы,
              которые реально влияют на симптом.
            </p>
          </div>
          <LeadForm id="lead-form" compact title="Записаться на ремонт MINI" service="Ремонт MINI" />
        </div>
      </section>

      <section className="section bg-white/45">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["ТО и диагностика", "Регламентное обслуживание, замена масла, фильтров и проверка ошибок."],
              ["АКПП и дизельные версии", "Симптомы по коробке, двигателю и сопутствующим системам требуют осмотра."],
              ["Ходовая и тормоза", "Стуки, скрипы, вибрации и плохое торможение проверяются перед согласованием ремонта."]
            ].map(([title, text]) => (
              <article key={title} className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-black/5">
                <h2 className="font-heading text-2xl font-bold text-ink">{title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl">
          <ProcessSteps />
        </div>
      </section>
    </>
  );
}
