import type { FaqItem } from "@/data/faq";

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <details key={item.question} className="group rounded-3xl bg-white p-5 shadow-card ring-1 ring-black/5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
            {item.question}
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-100 text-bmw transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 text-sm leading-6 text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
