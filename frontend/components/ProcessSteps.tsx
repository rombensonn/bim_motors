import { ClipboardList, FileCheck2, MessagesSquare, Wrench } from "lucide-react";

const steps = [
  {
    title: "Оставляете заявку",
    text: "Пишите телефон, автомобиль и коротко описываете задачу.",
    icon: ClipboardList
  },
  {
    title: "Описываете проблему",
    text: "Если уже есть диагноз другого сервиса, тоже укажите его.",
    icon: MessagesSquare
  },
  {
    title: "Приезжаете на диагностику",
    text: "Мастер проверяет симптомы и ищет причину неисправности.",
    icon: Wrench
  },
  {
    title: "Получаете план работ",
    text: "Работы и запчасти согласуются до ремонта автомобиля.",
    icon: FileCheck2
  }
];

export default function ProcessSteps() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {steps.map(({ title, text, icon: Icon }, index) => (
        <article key={title} className="rounded-3xl bg-white p-5 shadow-card ring-1 ring-black/5">
          <div className="mb-5 flex items-center justify-between">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-graphite text-white">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-heading text-3xl font-bold text-slate-200">{index + 1}</span>
          </div>
          <h3 className="font-heading text-lg font-bold text-ink">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
        </article>
      ))}
    </div>
  );
}
