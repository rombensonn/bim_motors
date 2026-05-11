import ContactBlock from "@/components/ContactBlock";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import PriceTable from "@/components/PriceTable";
import ProcessSteps from "@/components/ProcessSteps";
import ReviewCard from "@/components/ReviewCard";
import SeoTextBlock from "@/components/SeoTextBlock";
import ServiceCard from "@/components/ServiceCard";
import TrustBadges from "@/components/TrustBadges";
import CTAButton from "@/components/CTAButton";
import { commonFaq } from "@/data/faq";
import { reviewInsights } from "@/data/reviews";
import { primaryServices } from "@/data/services";
import {
  breadcrumbsJsonLd,
  createMetadata,
  faqJsonLd,
  pagesSeo,
  serviceJsonLd
} from "@/data/seo";

export const metadata = createMetadata(pagesSeo.home);

const pains = [
  "В другом сервисе выставили дорогой диагноз",
  "Машина дергается, но причина непонятна",
  "Нужно ТО без навязанных работ",
  "Нужна диагностика перед покупкой",
  "Нужно подготовиться к сезону шин",
  "Не хочется переплачивать за лишние детали"
];

const reasons = [
  "Сначала диагностика, потом согласование работ",
  "Не меняем узлы без объяснения причины",
  "Можно приехать за вторым мнением по BMW/MINI",
  "Подбираем запчасти под задачу и бюджет",
  "Объясняем понятным языком, что происходит с автомобилем",
  "Работаем по записи, чтобы не держать вас в очереди"
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbsJsonLd(pagesSeo.home.breadcrumbs),
          faqJsonLd(commonFaq),
          ...primaryServices.map((service) => serviceJsonLd(service.title, service.description, service.href))
        ]}
      />
      <Hero />

      <section className="section">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase text-bmw">С чем приезжают</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-ink sm:text-4xl">С какой проблемой можно приехать</h2>
            <p className="mt-4 text-base leading-8 text-muted">
              Если симптом непонятный, ошибка появляется снова или другой сервис уже предложил дорогой ремонт, начните с диагностики.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pains.map((pain) => (
              <article key={pain} className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-black/5">
                <span className="mb-5 block h-2 w-16 rounded-full bg-orange" aria-hidden="true" />
                <h3 className="font-heading text-xl font-bold text-ink">{pain}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Опишите задачу в форме — подскажем, с какой проверки лучше начать и когда удобнее приехать.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white/45">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-bmw">Почему Бим Моторс</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-ink sm:text-4xl">Честный подход вместо ремонта наугад</h2>
            <p className="mt-4 text-base leading-8 text-muted">
              В отзывах клиенты часто отмечают грамотную диагностику, отсутствие навязывания лишнего и человеческое отношение.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="rounded-3xl bg-white p-5 shadow-card ring-1 ring-black/5">
                <p className="font-semibold text-ink">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-bmw">Услуги</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-ink sm:text-4xl">Диагностика, ремонт, ТО и шиномонтаж</h2>
            </div>
            <CTAButton href="/uslugi" variant="secondary">
              Все услуги
            </CTAButton>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {primaryServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <SeoTextBlock
        eyebrow="BMW и MINI"
        title="Профиль, в котором важен опыт"
        paragraphs={[
          "BMW и MINI требуют аккуратной диагностики: одна ошибка в памяти блока не всегда означает, что нужно менять дорогой узел. Важно связать симптомы, историю обслуживания и фактические проверки.",
          "В Бим Моторс часто обращаются с задачами по двигателю, ходовой, тормозам, автоэлектрике, ТО и сложным неисправностям BMW. Если уже есть дорогое заключение другого сервиса, можно приехать за вторым мнением."
        ]}
      />

      <section className="section">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase text-bmw">Как работаем</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-ink sm:text-4xl">Понятный процесс без сюрпризов</h2>
          </div>
          <ProcessSteps />
        </div>
      </section>

      <section className="section bg-white/45">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase text-bmw">Цены</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-ink sm:text-4xl">Нормочас 800–1500 ₽</h2>
            <p className="mt-4 text-base leading-8 text-muted">
              Точная стоимость зависит от марки, модели, состояния автомобиля и объёма работ. Перед ремонтом работы согласуются.
            </p>
          </div>
          <PriceTable />
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl">
          <TrustBadges />
        </div>
      </section>

      <section className="section bg-white/45">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-bmw">Отзывы</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-ink sm:text-4xl">Что отмечают клиенты</h2>
            </div>
            <CTAButton href="/otzyvy" variant="secondary">
              Подробнее
            </CTAButton>
          </div>
          <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-4">
            {reviewInsights.map((review) => (
              <ReviewCard key={review.title} {...review} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-bmw">FAQ</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-ink sm:text-4xl">Коротко о записи, ценах и диагностике</h2>
          </div>
          <Faq items={commonFaq} />
        </div>
      </section>

      <ContactBlock />

      <section className="section pt-0">
        <div className="mx-auto max-w-7xl rounded-4xl bg-white p-6 text-center shadow-soft ring-1 ring-black/5 sm:p-10">
          <p className="text-sm font-semibold uppercase text-bmw">Запись</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-ink">Хотите понять, что с автомобилем?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted">
            Опишите проблему — подскажем, с чего начать: диагностика, ТО, второе мнение или запись на шиномонтаж.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <CTAButton href="/kontakty#lead-form">Записаться на диагностику</CTAButton>
            <CTAButton href="/kontakty" variant="secondary">
              Контакты сервиса
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
