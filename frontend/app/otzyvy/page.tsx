import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import ReviewCard from "@/components/ReviewCard";
import { business } from "@/data/business";
import { reviewInsights } from "@/data/reviews";
import { breadcrumbsJsonLd, createMetadata, pagesSeo } from "@/data/seo";

export const metadata = createMetadata(pagesSeo.reviews);

export default function ReviewsPage() {
  const seo = pagesSeo.reviews;

  return (
    <>
      <JsonLd data={breadcrumbsJsonLd(seo.breadcrumbs)} />
      <section className="section">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs items={seo.breadcrumbs} />
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-bmw">Отзывы</p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl">{seo.h1}</h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              Рейтинг {business.rating} на Яндекс.Картах, {business.ratingCount} оценок и {business.reviewCount} отзывов.
              Ниже — аккуратные смысловые выжимки без длинных прямых цитат.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviewInsights.map((review) => (
              <ReviewCard key={review.title} {...review} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white/45">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-bmw">Следующий шаг</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-ink">Хотите понять, что с автомобилем?</h2>
            <p className="mt-4 text-base leading-8 text-muted">
              Опишите проблему — подскажем, с чего начать: диагностика, второе мнение, ТО или запись на конкретную услугу.
            </p>
          </div>
          <LeadForm id="lead-form" title="Опишите проблему" service="Диагностика" />
        </div>
      </section>
    </>
  );
}
