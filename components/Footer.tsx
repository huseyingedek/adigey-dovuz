import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink-dark text-gray-300">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo-white.png" alt="Adigey Döviz" className="h-7 w-auto" />
            <span className="border-l border-white/20 pl-3 text-xs font-semibold uppercase tracking-widest text-gold">
              Döviz &amp; Altın
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            {site.description}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
            Menü
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-gold transition-colors">Ana Sayfa</Link></li>
            <li><Link href="/hakkimizda" className="hover:text-gold transition-colors">Hakkımızda</Link></li>
            <li><Link href="/iletisim" className="hover:text-gold transition-colors">İletişim</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
            İletişim
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>{site.address}</li>
            <li>{site.district}</li>
            <li>
              <a href={`tel:${site.phoneHref}`} className="hover:text-gold transition-colors">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-gold transition-colors">
                {site.email}
              </a>
            </li>
            <li>{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-light">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-gray-500 md:flex-row">
          <span>© {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.</span>
          <span>Sakarya / Adapazarı</span>
        </div>
      </div>
    </footer>
  );
}
