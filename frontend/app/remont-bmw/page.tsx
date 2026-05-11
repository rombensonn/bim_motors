import Breadcrumbs from "@/components/Breadcrumbs";
import CTAButton from "@/components/CTAButton";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import ProcessSteps from "@/components/ProcessSteps";
import { commonFaq } from "@/data/faq";
import { breadcrumbsJsonLd, createMetadata, faqJsonLd, pagesSeo, serviceJsonLd } from "@/data/seo";

export const metadata = createMetadata(pagesSeo.bmw);

const topics = ["двигатель и B58", "раздатка и АКПП", "ходовая и тормоза", "электрика и датчики", "масложор", "генератор и ТО"];

export default function BmwRepairPage() {
  const seo = pagesSeo.bmw;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbsJsonLd(seo.breadcrumbs),
          faqJsonLd(commonFaq),
          serviceJsonLd("Ремонт BMW в Мытищах", seo.description, seo.path)
        ]}
      />
      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <Breadcrumbs items={seo.breadcrumbs} />
            <p className="text-sm font-semibold uppercase text-bmw">BMW</p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl">{seo.h1}</h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              BMW часто требует профильной диагностики: ошибка может быть следствием, а не причиной. В Бим Моторс помогают проверить симптомы,
              найти реальный источник проблемы и согласовать ремонт до начала работ.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {topics.map((topic) => (
                <span key={topic} className="rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-card">
                  {topic}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="#lead-form">Опишите проблему BMW</CTAButton>
              <CTAButton href="#second-opinion" variant="secondary">
                Получить второе мнение
              </CTAButton>
            </div>
          </div>
          <LeadForm id="lead-form" compact title="Записаться на ремонт BMW" service="Ремонт BMW" />
        </div>
      </section>

      <section className="section bg-white/45">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Почему нужен профильный подход", "BMW чувствительны к качеству диагностики, состоянию узлов и правильному подбору деталей."],
              ["Второе мнение", "Если уже назвали дорогой ремонт, можно сначала проверить диагноз и понять, что действительно нужно."],
              ["Согласование работ", "До ремонта обсуждаются работы, запчасти и логика решения проблемы."]
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
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase text-bmw">Диагностика</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-ink">Как проходит проверка BMW</h2>
            <p className="mt-4 text-base leading-8 text-muted">
              Мастер сопоставляет жалобы, ошибки и фактическое состояние узлов. Это помогает не менять дорогие детали только потому,
              что они фигурируют в коде ошибки.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      <section className="section bg-white/45" id="second-opinion">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-bmw">Второе мнение</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-ink">Если в другом сервисе уже назвали дорогой ремонт</h2>
            <p className="mt-4 text-base leading-8 text-muted">
              Можно сначала проверить диагноз. Опишите, что вам сказали, какие симптомы есть и что беспокоит в поведении автомобиля.
            </p>
          </div>
          <LeadForm
            id="second-opinion-form"
            variant="secondOpinion"
            title="Получить второе мнение по BMW/MINI"
            description="Заполните форму: мы поймём контекст и подскажем, с какой проверки начать."
            service="Второе мнение по BMW/MINI"
          />
        </div>
      </section>
    </>
  );
}
