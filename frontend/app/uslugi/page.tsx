import Breadcrumbs from "@/components/Breadcrumbs";
import CTAButton from "@/components/CTAButton";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import ServiceCard from "@/components/ServiceCard";
import { allServices } from "@/data/services";
import { breadcrumbsJsonLd, createMetadata, pagesSeo, serviceJsonLd } from "@/data/seo";

export const metadata = createMetadata(pagesSeo.services);

export default function ServicesPage() {
  const seo = pagesSeo.services;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbsJsonLd(seo.breadcrumbs),
          ...allServices.map((service) => serviceJsonLd(service.title, service.description, service.href))
        ]}
      />
      <section className="section">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs items={seo.breadcrumbs} />
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-bmw">Все услуги</p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl">{seo.h1}</h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              Диагностика, ремонт BMW и MINI, ТО, двигатель, ходовая, тормоза, автоэлектрика, автокондиционер,
              кузовные и сезонные работы в Мытищах.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {allServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white/45">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-bmw">SEO и польза</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-ink">Автосервис в Мытищах для понятных задач и сложных симптомов</h2>
            <p className="mt-4 text-base leading-8 text-muted">
              Если вы не уверены, какая услуга нужна, начните с описания симптомов. Для BMW и MINI особенно важно сначала разобраться в причине,
              а уже потом согласовывать ремонт и запчасти.
            </p>
            <div className="mt-6">
              <CTAButton href="/diagnostika">Начать с диагностики</CTAButton>
            </div>
          </div>
          <LeadForm id="lead-form" title="Рассчитать стоимость ремонта" service="Расчёт ремонта" />
        </div>
      </section>
    </>
  );
}
