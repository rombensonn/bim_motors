type ReviewCardProps = {
  title: string;
  text: string;
};

export default function ReviewCard({ title, text }: ReviewCardProps) {
  return (
    <article className="min-w-[280px] rounded-3xl bg-white p-6 shadow-card ring-1 ring-black/5 sm:min-w-[360px]">
      <p className="text-xs font-semibold uppercase text-bmw">По данным отзывов на Яндекс.Картах</p>
      <h3 className="mt-3 font-heading text-xl font-bold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
    </article>
  );
}
