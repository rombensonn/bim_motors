import Link from "next/link";
import { business } from "@/data/business";

const serviceLinks = [
  { href: "/diagnostika", label: "Диагностика" },
  { href: "/remont-bmw", label: "Ремонт BMW" },
  { href: "/remont-mini", label: "Ремонт MINI" },
  { href: "/tehnicheskoe-obsluzhivanie", label: "ТО" },
  { href: "/shinomontazh", label: "Шиномонтаж" }
];

export default function Footer() {
  return (
    <footer className="bg-graphite pb-24 pt-12 text-white md:pb-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <p className="font-heading text-2xl font-bold">{business.name}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
            Профильный сервис BMW и MINI в Мытищах: диагностика, ремонт, ТО, автоэлектрика и шиномонтаж по предварительной записи.
          </p>
          <div className="mt-5 space-y-2 text-sm text-slate-300">
            <p>{business.address}</p>
            <a href={business.phoneHref} className="block hover:text-white">
              {business.phone}
            </a>
            <p>Пн–Сб 10:00–21:00, воскресенье — выходной</p>
          </div>
        </div>
        <div>
          <p className="font-semibold">Услуги</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold">Документы и карты</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>
              <Link href="/politika-konfidencialnosti" className="hover:text-white">
                Политика конфиденциальности
              </Link>
            </li>
            <li>
              <Link href="/soglasie-na-obrabotku-dannyh" className="hover:text-white">
                Согласие на обработку данных
              </Link>
            </li>
            <li>
              <a href={business.mapUrl} className="hover:text-white">
                Карточка на Яндекс.Картах
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl px-4 text-xs text-slate-400 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Бим Моторс. Информация на сайте не является публичной офертой.
      </div>
    </footer>
  );
}
