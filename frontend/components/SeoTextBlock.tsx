type SeoTextBlockProps = {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
};

export default function SeoTextBlock({ eyebrow, title, paragraphs }: SeoTextBlockProps) {
  return (
    <section className="section">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-6 shadow-card ring-1 ring-black/5 sm:p-8">
        {eyebrow ? <p className="text-sm font-semibold uppercase text-bmw">{eyebrow}</p> : null}
        <h2 className="mt-2 font-heading text-3xl font-bold text-ink">{title}</h2>
        <div className="mt-5 space-y-4 text-base leading-8 text-muted">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
