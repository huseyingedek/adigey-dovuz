// Görsel kur panosu — canlı veri DEĞİLDİR, yalnızca bilgi amaçlı sabit gösterimdir.
// Güncel kur her zaman büroda işlem anında uygulanır.

type Row = {
  code: string;
  name: string;
  sym: string;
  buy: string;
  sell: string;
  up: boolean;
};

const doviz: Row[] = [
  { code: "USD", name: "Amerikan Doları", sym: "$", buy: "—", sell: "—", up: true },
  { code: "EUR", name: "Euro", sym: "€", buy: "—", sell: "—", up: true },
  { code: "GBP", name: "İngiliz Sterlini", sym: "£", buy: "—", sell: "—", up: false },
  { code: "CHF", name: "İsviçre Frangı", sym: "₣", buy: "—", sell: "—", up: true },
  { code: "SAR", name: "Suudi Riyali", sym: "﷼", buy: "—", sell: "—", up: false },
];

const altin: Row[] = [
  { code: "GRAM", name: "Gram Altın", sym: "Au", buy: "—", sell: "—", up: true },
  { code: "ÇEYREK", name: "Çeyrek Altın", sym: "¼", buy: "—", sell: "—", up: true },
  { code: "YARIM", name: "Yarım Altın", sym: "½", buy: "—", sell: "—", up: true },
  { code: "TAM", name: "Tam Altın", sym: "1", buy: "—", sell: "—", up: false },
  { code: "GÜMÜŞ", name: "Gümüş", sym: "Ag", buy: "—", sell: "—", up: true },
];

function Arrow({ up }: { up: boolean }) {
  return (
    <span
      className={`inline-flex h-4 w-4 items-center justify-center ${
        up ? "text-emerald-400" : "text-rose-400"
      }`}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-3.5 w-3.5">
        {up ? <path d="M12 19V5M6 11l6-6 6 6" /> : <path d="M12 5v14M6 13l6 6 6-6" />}
      </svg>
    </span>
  );
}

function Table({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <div>
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <span className="text-xs font-bold uppercase tracking-widest text-gold">{title}</span>
        <div className="flex gap-6 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
          <span className="w-14 text-right">Alış</span>
          <span className="w-14 text-right">Satış</span>
        </div>
      </div>
      <ul className="divide-y divide-white/5">
        {rows.map((r) => (
          <li key={r.code} className="flex items-center justify-between px-4 py-2.5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/15 text-[11px] font-bold text-gold">
                {r.sym}
              </span>
              <div className="leading-tight">
                <div className="flex items-center gap-1.5 text-sm font-semibold text-white">
                  {r.code} <Arrow up={r.up} />
                </div>
                <div className="text-[11px] text-gray-400">{r.name}</div>
              </div>
            </div>
            <div className="flex gap-6 font-mono text-sm text-gray-200">
              <span className="w-14 text-right">{r.buy}</span>
              <span className="w-14 text-right text-gold">{r.sell}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function RateBoard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gold/20 bg-ink-dark/80 backdrop-blur glow">
      <div className="flex items-center justify-between bg-white/5 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
          </span>
          <span className="text-sm font-bold text-white">Güncel Kurlar</span>
        </div>
        <span className="rounded-full border border-gold/30 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-gold">
          Bilgi amaçlıdır
        </span>
      </div>

      <Table title="Döviz" rows={doviz} />
      <div className="h-px bg-white/10" />
      <Table title="Altın & Gümüş" rows={altin} />

      <div className="border-t border-white/10 bg-white/[0.03] px-4 py-3 text-center text-[11px] text-gray-400">
        Kurlar bilgi amaçlıdır; işlem anında güncel kur uygulanır.
      </div>
    </div>
  );
}
