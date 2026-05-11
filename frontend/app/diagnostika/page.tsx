import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import { diagnosticsFaq } from "@/data/faq";
import { breadcrumbsJsonLd, createMetadata, faqJsonLd, pagesSeo, serviceJsonLd } from "@/data/seo";

export const metadata = createMetadata(pagesSeo.diagnostics);

export default function DiagnosticsPage() {
  const seo = pagesSeo.diagnostics;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbsJsonLd(seo.breadcrumbs),
          faqJsonLd(diagnosticsFaq),
          serviceJsonLd("Компьютерная диагностика автомобиля", seo.description, seo.path)
        ]}
      />
      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <Breadcrumbs items={seo.breadcrumbs} />
            <p className="text-sm font-semibold uppercase text-bmw">Диагностика</p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl">{seo.h1}</h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              Не просто считаем ошибку, а разбираемся, почему она появилась. Это важно для двигателя, коробки, раздатки,
              ходовой, электрики и диагностики перед покупкой.
            </p>
          </div>
          <LeadForm id="lead-form" compact title="Записаться на диагностику" service="Компьютерная диагностика" />
        </div>
      </section>

      <section className="section bg-white/45">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {["Горит ошибка", "Машина дергается", "Проверка перед покупкой", "Непонятный диагноз"].map((item) => (
            <article key={item} className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-black/5">
              <h2 className="font-heading text-xl font-bold text-ink">{item}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                Лучше не стирать ошибку вслепую, а проверить причину и согласовать следующий шаг.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-bmw">Когда срочно</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-ink">Не откладывайте диагностику</h2>
            <p className="mt-4 text-base leading-8 text-muted">
              Если появились сильные вибрации, перегрев, ошибки по давлению масла, нестабильная работа двигателя или заметное ухудшение торможения,
              лучше записаться на проверку как можно раньше.
            </p>
          </div>
          <Faq items={diagnosticsFaq} />
        </div>
      </section>
    </>
  );
}
