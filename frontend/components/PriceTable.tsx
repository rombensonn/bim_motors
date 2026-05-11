import { priceRows } from "@/data/services";

export default function PriceTable() {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-black/5">
      <div className="overflow-x-auto">
        <table className="min-w-[760px] text-left text-sm">
          <thead className="bg-graphite text-white">
            <tr>
              <th className="px-5 py-4 font-semibold">Услуга</th>
              <th className="px-5 py-4 font-semibold">Что входит</th>
              <th className="px-5 py-4 font-semibold">Когда нужна</th>
              <th className="px-5 py-4 font-semibold">Ориентир / от чего зависит</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {priceRows.map((row) => (
              <tr key={row.service} className="align-top">
                <td className="px-5 py-5 font-semibold text-ink">{row.service}</td>
                <td className="px-5 py-5 leading-6 text-muted">{row.includes}</td>
                <td className="px-5 py-5 leading-6 text-muted">{row.when}</td>
                <td className="px-5 py-5 leading-6 text-muted">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
