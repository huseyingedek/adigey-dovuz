import type { Metadata } from "next";
import { site, images } from "@/lib/site";
import {
  PhoneIcon,
  MailIcon,
  PinIcon,
  ClockIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Adigey Döviz iletişim bilgileri. Semerciler Mh. Atatürk Bulvarı, Pasaj 2000 No: 46/47 Adapazarı / Sakarya. Telefon ve e-posta.",
};

const cards = [
  { title: "Adres", Icon: PinIcon, lines: [site.address, site.district] },
  { title: "Telefon", Icon: PhoneIcon, lines: [site.phone] },
  { title: "E-posta", Icon: MailIcon, lines: [site.email] },
  { title: "Çalışma Saatleri", Icon: ClockIcon, lines: [site.hours] },
];

export default function Iletisim() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    site.mapsQuery
  )}&output=embed`;

  return (
    <>
      {/* Sayfa başlığı — fotoğraf banner */}
      <section className="relative isolate overflow-hidden bg-ink py-24 text-center text-white md:py-32">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={images.euro} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
        <div className="container-x relative">
          <div className="gold-rule mx-auto" />
          <span className="mt-4 block text-sm font-semibold uppercase tracking-widest text-gold">
            İletişim
          </span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Bize Ulaşın</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-200">
            Döviz ve altın işlemleriniz ve tüm sorularınız için bizimle
            iletişime geçebilirsiniz.
          </p>
        </div>
      </section>

      {/* İletişim kartları */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-ink text-gold">
                  <c.Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-semibold text-ink">{c.title}</h3>
                <div className="mt-2 space-y-1 text-sm text-gray-600">
                  {c.lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* İletişim + Harita */}
          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <div>
              <div className="gold-rule" />
              <h2 className="mt-4 text-2xl font-bold text-ink md:text-3xl">
                İletişim Bilgileri
              </h2>
              <p className="mt-3 leading-relaxed text-gray-600">
                {site.name} olarak sizi bürolarımızda ağırlamaktan memnuniyet
                duyarız. Aşağıdaki bilgilerden bize kolayca ulaşabilirsiniz.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <PhoneIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-ink">Telefon</div>
                    <a href={`tel:${site.phoneHref}`} className="text-gray-600 hover:text-gold transition-colors">
                      {site.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <MailIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-ink">E-posta</div>
                    {site.emails.map((e) => (
                      <a key={e} href={`mailto:${e}`} className="block text-gray-600 hover:text-gold transition-colors">
                        {e}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <PinIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-ink">Adres</div>
                    <p className="text-gray-600">
                      {site.address}
                      <br />
                      {site.district}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <ClockIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-ink">Çalışma Saatleri</div>
                    <p className="text-gray-600">{site.hours}</p>
                  </div>
                </div>
              </div>

              <a
                href={`tel:${site.phoneHref}`}
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3.5 font-semibold text-ink transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30"
              >
                <PhoneIcon className="h-5 w-5" />
                Hemen Arayın
              </a>
            </div>

            {/* Harita */}
            <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-md">
              <iframe
                title="Adigey Döviz Konum"
                src={mapSrc}
                className="h-full min-h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
