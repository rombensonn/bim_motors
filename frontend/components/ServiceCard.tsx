import Link from "next/link";
import {
  BatteryCharging,
  Car,
  Disc3,
  Droplets,
  Gauge,
  Paintbrush,
  ScanSearch,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Wrench,
  Zap
} from "lucide-react";
import type { ServiceIcon, ServiceItem } from "@/data/services";

const accentClasses = {
  blue: "from-bmw to-sky-400",
  orange: "from-orange to-amber-300",
  green: "from-trust to-emerald-300",
  dark: "from-graphite to-slate-600"
};

const iconMap: Record<ServiceIcon, typeof Wrench> = {
  scan: ScanSearch,
  car: Car,
  wrench: Wrench,
  droplets: Droplets,
  engine: Gauge,
  shield: ShieldCheck,
  zap: Zap,
  disc: Disc3,
  snowflake: Snowflake,
  sparkles: Sparkles,
  paint: Paintbrush,
  battery: BatteryCharging
};

export default function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = iconMap[service.icon];

  return (
    <Link
      href={service.href}
      id={service.slug}
      className="group block overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bmw focus-visible:ring-offset-2"
    >
      <span className={`block h-2 bg-gradient-to-r ${accentClasses[service.accent]}`} aria-hidden="true" />
      <span className="block p-5 sm:p-6">
        <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-slate-100 text-ink transition group-hover:bg-bmw group-hover:text-white">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <span className="block font-heading text-xl font-bold text-ink">{service.title}</span>
        <span className="mt-3 block text-sm leading-6 text-muted">{service.description}</span>
        <span className="mt-5 inline-flex text-sm font-semibold text-bmw">Подробнее</span>
      </span>
    </Link>
  );
}
