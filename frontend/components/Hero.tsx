import { Banknote, CalendarCheck, Gauge, Star } from "lucide-react";
import { business } from "@/data/business";
import { pagesSeo } from "@/data/seo";
import CTAButton from "./CTAButton";

const heroFacts = [
  { label: "Рейтинг", value: business.rating, icon: Star },
  { label: "Нормочас", value: business.normalHour, icon: Banknote },
  { label: "Профиль", value: "BMW / MINI", icon: Gauge },
  { label: "Запись", value: "до 21:00", icon: CalendarCheck }
];

const chips = ["Диагностика", "BMW B58", "MINI", "Ходовая", "ТО", "Шиномонтаж", "Автоэлектрика"];

export default function Hero() {
  return (
    <section className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-4xl bg-white shadow-soft ring-1 ring-black/5">
        <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[minmax(0,1.05fr)_420px] lg:p-12 xl:grid-cols-[minmax(0,1.1fr)_470px]">
          <div className="flex flex-col justify-center">
            <div className="mb-5 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span key={chip} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700">
                  {chip}
                </span>
              ))}
            </div>
            <p className="text-sm font-semibold uppercase text-bmw">Мытищи · Волковское шоссе</p>
            <h1 className="mt-4 max-w-4xl font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
              {pagesSeo.home.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              Диагностика, ремонт, ТО и шиномонтаж на Волковском шоссе. Проверяем причину неисправности,
              согласуем работы до ремонта и помогаем не менять узлы без необходимости.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/kontakty#lead-form">Записаться на диагностику</CTAButton>
              <CTAButton href="/remont-bmw#second-opinion" variant="secondary">
                Получить второе мнение
              </CTAButton>
              <CTAButton href={business.phoneHref} variant="ghost">
                Позвонить
              </CTAButton>
            </div>

          </div>

          <aside className="hero-stats-panel relative overflow-hidden rounded-4xl bg-graphite p-5 text-white shadow-soft sm:p-6">
            <div className="hero-stats-orb hero-stats-orb-blue" aria-hidden="true" />
            <div className="hero-stats-orb hero-stats-orb-orange" aria-hidden="true" />
            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase text-sky-300">Быстрые факты</p>
              <p className="mt-3 font-heading text-2xl font-bold leading-tight">Главное перед записью</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Коротко о сервисе: профиль, стоимость нормочаса, график и доверие по данным карточки.
              </p>
            </div>

            <div className="relative z-10 mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {heroFacts.map(({ label, value, icon: Icon }) => (
                <div key={label} className="hero-stat-card rounded-3xl bg-white/10 p-4 ring-1 ring-white/10 backdrop-blur">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-bmw">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-sm text-slate-300">{label}</p>
                  <p className="font-heading text-2xl font-bold text-white">{value}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
