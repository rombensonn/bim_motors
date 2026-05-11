"use client";

import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { business } from "@/data/business";

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/70 bg-white/92 px-3 py-2 shadow-[0_-12px_32px_rgba(17,24,39,0.12)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <a href={business.phoneHref} className="mobile-cta" aria-label="Позвонить в Бим Моторс">
          <Phone className="h-4 w-4" aria-hidden="true" />
          Позвонить
        </a>
        <a href={business.whatsappHref} className="mobile-cta" aria-label="Написать в WhatsApp">
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
        <a href="/kontakty#lead-form" className="mobile-cta mobile-cta-primary" aria-label="Записаться в сервис">
          <CalendarCheck className="h-4 w-4" aria-hidden="true" />
          Записаться
        </a>
      </div>
    </div>
  );
}
