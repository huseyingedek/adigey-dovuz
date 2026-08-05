"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink text-white shadow-lg">
      {/* Üst bilgi şeridi */}
      <div className="hidden md:block bg-ink-dark">
        <div className="container-x flex items-center justify-between py-2 text-sm text-gray-300">
          <span>{site.address}, {site.district}</span>
          <a href={`tel:${site.phoneHref}`} className="hover:text-gold transition-colors">
            Tel: {site.phone}
          </a>
        </div>
      </div>

      {/* Ana menü */}
      <div className="container-x flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-white.png" alt="Adigey Döviz" className="h-7 w-auto md:h-8" />
          <span className="hidden border-l border-white/20 pl-3 text-xs font-semibold uppercase tracking-widest text-gold sm:block">
            Döviz &amp; Altın
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  active ? "text-gold" : "text-white hover:text-gold"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={`tel:${site.phoneHref}`}
            className="rounded-md bg-gold px-4 py-2 text-sm font-semibold text-ink hover:bg-gold-light transition-colors"
          >
            Bize Ulaşın
          </a>
        </nav>

        {/* Mobil menü butonu */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
        >
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>
      </div>

      {/* Mobil menü */}
      {open && (
        <nav className="md:hidden border-t border-ink-light bg-ink">
          <div className="container-x flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-sm font-medium ${
                  pathname === item.href ? "text-gold" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${site.phoneHref}`}
              className="my-3 rounded-md bg-gold px-4 py-2 text-center text-sm font-semibold text-ink"
            >
              Bize Ulaşın: {site.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
