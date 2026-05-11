import { BadgeCheck, Banknote, Car, Clock, CreditCard, ParkingCircle, Star, Wifi } from "lucide-react";
import { business } from "@/data/business";

const badges = [
  { label: `${business.rating} рейтинг`, text: `${business.ratingCount} оценок`, icon: Star },
  { label: "BMW/MINI профиль", text: "основной фокус сервиса", icon: Car },
  { label: `Нормочас ${business.normalHour}`, text: "честно до согласования", icon: Banknote },
  { label: "Оплата картой", text: "и наличными", icon: CreditCard },
  { label: "Парковка", text: "у сервиса", icon: ParkingCircle },
  { label: "Wi-Fi", text: "для клиентов", icon: Wifi },
  { label: "По записи", text: "чтобы не держать в очереди", icon: Clock },
  { label: "Отзывы", text: `${business.reviewCount} отзывов на картах`, icon: BadgeCheck }
];

export default function TrustBadges() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {badges.map(({ label, text, icon: Icon }) => (
        <div key={label} className="rounded-3xl bg-white p-5 shadow-card ring-1 ring-black/5">
          <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-slate-100 text-bmw">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <p className="font-semibold text-ink">{label}</p>
          <p className="mt-1 text-sm leading-6 text-muted">{text}</p>
        </div>
      ))}
    </div>
  );
}
