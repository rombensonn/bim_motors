import { Clock, CreditCard, MapPin, MessageCircle, ParkingCircle, Phone, Wifi } from "lucide-react";
import { business } from "@/data/business";
import CTAButton from "./CTAButton";

export default function ContactBlock({ withForm = false }: { withForm?: boolean }) {
  return (
    <section className="section" id="contacts">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-4xl bg-graphite p-6 text-white shadow-soft sm:p-8">
            <p className="text-sm font-semibold uppercase text-sky-300">Контакты</p>
            <h2 className="mt-3 font-heading text-3xl font-bold">Бим Моторс в Мытищах</h2>
            <div className="mt-6 grid gap-4">
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-orange" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Адрес</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{business.address}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-orange" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Телефон</p>
                  <a href={business.phoneHref} className="mt-1 inline-flex text-sm text-slate-300 hover:text-white">
                    {business.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-orange" aria-hidden="true" />
                <div>
                  <p className="font-semibold">График</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    Пн–Сб 10:00–21:00, воскресенье — выходной
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-sm">
              {[
                { label: "Парковка", icon: ParkingCircle },
                { label: "Wi-Fi", icon: Wifi },
                { label: "Оплата картой", icon: CreditCard }
              ].map(({ label, icon: Icon }) => (
                <span key={label} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={business.phoneHref} variant="secondary">
                Позвонить
              </CTAButton>
              <CTAButton href={business.whatsappHref} variant="secondary">
                <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                WhatsApp
              </CTAButton>
              <CTAButton href={business.mapUrl} variant="secondary">
                Открыть в Яндекс.Картах
              </CTAButton>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-4xl bg-white shadow-card ring-1 ring-black/5">
            <iframe
              src={business.yandexMapEmbedUrl}
              title="Яндекс Карта: Бим Моторс, Мытищи, Волковское шоссе, вл17/1"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-full min-h-[360px] w-full border-0"
            />
          </div>
        </div>
        {withForm ? null : null}
      </div>
    </section>
  );
}
