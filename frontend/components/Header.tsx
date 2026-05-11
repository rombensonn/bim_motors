"use client";

import Link from "next/link";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import { business } from "@/data/business";
import CTAButton from "./CTAButton";

const navItems = [
  { href: "/uslugi", label: "Услуги" },
  { href: "/remont-bmw", label: "BMW" },
  { href: "/remont-mini", label: "MINI" },
  { href: "/shinomontazh", label: "Шиномонтаж" },
  { href: "/ceny", label: "Цены" },
  { href: "/otzyvy", label: "Отзывы" },
  { href: "/kontakty", label: "Контакты" }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-bg/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Бим Моторс — на главную">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-graphite text-sm font-black text-white">
            BM
          </span>
          <span className="leading-tight">
            <span className="block font-heading text-base font-bold text-ink">Бим Моторс</span>
            <span className="block text-xs font-medium text-muted">BMW / MINI · Мытищи</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Основная навигация">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={business.whatsappHref}
            className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-ink ring-1 ring-black/10 transition hover:text-bmw"
            aria-label="Написать в WhatsApp"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
          </a>
          <CTAButton href="/kontakty#lead-form">Записаться</CTAButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={business.phoneHref}
            className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-ink ring-1 ring-black/10"
            aria-label="Позвонить в Бим Моторс"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-2xl bg-graphite text-white"
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-white/70 bg-bg px-4 pb-5 pt-2 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Мобильная навигация">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl bg-white px-4 py-3 text-base font-semibold text-ink ring-1 ring-black/5"
              >
                {item.label}
              </Link>
            ))}
            <CTAButton href="/kontakty#lead-form" className="mt-2" ariaLabel="Записаться через форму">
              Записаться
            </CTAButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
