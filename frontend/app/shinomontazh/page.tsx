import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import { tireFaq } from "@/data/faq";
import { breadcrumbsJsonLd, createMetadata, faqJsonLd, pagesSeo, serviceJsonLd } from "@/data/seo";

export const metadata = createMetadata(pagesSeo.tire);

export default function TirePage() {
  const seo = pagesSeo.tire;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbsJsonLd(seo.breadcrumbs),
          faqJsonLd(tireFaq),
          serviceJsonLd("Шиномонтаж в Мытищах", seo.description, seo.path)
        ]}
      />
      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <Breadcrumbs items={seo.breadcrumbs} />
            <p className="text-sm font-semibold uppercase text-bmw">Шиномонтаж</p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl">{seo.h1}</h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              Сезонная замена шин, балансировка и проверка состояния шин на Волковском шоссе. В сезон лучше записаться заранее,
              чтобы не ждать в очереди.
            </p>
          </div>
          <LeadForm
            id="lead-form"
            compact
            variant="tire"
            title="Записаться на шиномонтаж"
            description="Укажите размер колес, желаемую услугу и удобное время."
            service="Шиномонтаж"
          />
        </div>
      </section>

      <section className="section bg-white/45">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            ["Сезонная замена шин", "Запись помогает распределить поток в пиковые недели."],
            ["Балансировка", "Актуальна при смене колес и вибрациях после движения."],
            ["Проверка состояния", "Можно обратить внимание на износ и состояние шин во время работ."]
          ].map(([title, text]) => (
            <article key={title} className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-black/5">
              <h2 className="font-heading text-2xl font-bold text-ink">{title}</h2>
              <p className="mt-4 text-sm leading-6 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-bmw">FAQ</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-ink">О шиномонтаже</h2>
          </div>
          <Faq items={tireFaq} />
        </div>
      </section>
    </>
  );
}
