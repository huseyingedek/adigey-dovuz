import Link from "next/link";
import { site } from "@/lib/site";
import {
  ExchangeIcon,
  GoldIcon,
  ShieldIcon,
  BuildingIcon,
  TrendIcon,
  UsersIcon,
  StarIcon,
  CheckIcon,
  PhoneIcon,
} from "@/components/icons";

const IMG = {
  heroGold:
    "https://images.unsplash.com/photo-1718752773168-a44aa1601ddd?auto=format&fit=crop&q=70&w=1600",
  goldPile:
    "https://images.unsplash.com/photo-1718752773274-4baba3906300?auto=format&fit=crop&q=70&w=1000",
  euro:
    "https://images.unsplash.com/photo-1746682603366-14c27a422e62?auto=format&fit=crop&q=70&w=1000",
};

const services = [
  { title: "Döviz Alım - Satım", desc: "USD, EUR, GBP ve tüm başlıca para birimlerinde rekabetçi kurlarla güvenli işlem.", Icon: ExchangeIcon },
  { title: "Altın Alım - Satım", desc: "Gram, çeyrek, ziynet ve külçe altın alım-satımı güncel piyasa koşullarında.", Icon: GoldIcon },
  { title: "Kurumsal Çözümler", desc: "İthalat, ihracat ve şirketlerin toplu döviz ihtiyaçları için özel çözümler.", Icon: BuildingIcon },
  { title: "Güvenli İşlem", desc: "Şeffaf, güvenilir ve hızlı işlem anlayışıyla her adımda yanınızdayız.", Icon: ShieldIcon },
];

const features = [
  { title: "Güvenilirlik", desc: "Şeffaf ve dürüst işlem anlayışı temel ilkemizdir.", Icon: ShieldIcon },
  { title: "Rekabetçi Kurlar", desc: "Piyasayı yakından takip ederek uygun kurlar sunarız.", Icon: TrendIcon },
  { title: "Deneyimli Kadro", desc: "Sektör tecrübesine sahip uzman ekibimizle hizmet.", Icon: UsersIcon },
  { title: "Müşteri Odaklı", desc: "Bireysel ve kurumsal ihtiyaçlarınıza özel çözümler.", Icon: StarIcon },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMG.heroGold}
          alt="Altın külçeler"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />

        <div className="container-x relative py-24 md:py-36">
          <div className="max-w-2xl">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Sakarya / Adapazarı
            </span>
            <h1 className="text-4xl font-bold leading-[1.1] md:text-6xl">
              Güvenilir Döviz ve <span className="text-gold">Altın</span> Alım-Satım
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-200">
              {site.name} olarak rekabetçi kurlar, hızlı işlem ve müşteri
              memnuniyeti odaklı hizmet anlayışıyla bireysel ve kurumsal
              ihtiyaçlarınızın yanındayız.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={`tel:${site.phoneHref}`}
                className="inline-flex items-center gap-2 rounded-md bg-gold px-7 py-3.5 font-semibold text-ink transition-colors hover:bg-gold-light"
              >
                <PhoneIcon className="h-5 w-5" />
                Hemen Arayın
              </a>
              <Link
                href="/iletisim"
                className="rounded-md border border-white/30 px-7 py-3.5 font-semibold text-white transition-colors hover:border-gold hover:text-gold"
              >
                İletişime Geçin
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-gray-200">
              {["Güvenli işlem", "Uygun kurlar", "Hızlı hizmet"].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-gold" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HİZMETLER */}
      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <div className="gold-rule mx-auto" />
            <span className="mt-4 block text-sm font-semibold uppercase tracking-widest text-gold">
              Hizmetlerimiz
            </span>
            <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">
              Size Sunduğumuz Hizmetler
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-xl border border-gray-200 bg-white p-7 transition-colors hover:border-gold"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cream text-gold">
                  <s.Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALTIN — görsel + metin */}
      <section className="section bg-cream">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.goldPile} alt="Külçe altınlar" className="h-full w-full object-cover" />
          </div>
          <div>
            <div className="gold-rule" />
            <h2 className="mt-4 text-3xl font-bold text-ink md:text-4xl">
              Altın Alım - Satım
            </h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              Gram, çeyrek, yarım, tam ve ziynet altın çeşitlerinde güncel piyasa
              koşullarında güvenli alım-satım. Fiziki altın ihtiyaçlarınız için
              deneyimli kadromuzla yanınızdayız.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              {["Gram ve külçe altın", "Ziynet ve Cumhuriyet altını", "Şeffaf ve güvenli işlem"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold text-ink">
                    <CheckIcon className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* DÖVİZ — metin + görsel */}
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="gold-rule" />
            <h2 className="mt-4 text-3xl font-bold text-ink md:text-4xl">
              Döviz İşlemleri
            </h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              USD, EUR, GBP ve tüm başlıca para birimlerinde rekabetçi kurlarla
              hızlı ve güvenli döviz alım-satımı. Bireysel ve kurumsal döviz
              ihtiyaçlarınız için doğru adres.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              {["Tüm başlıca para birimleri", "Kurumsal ve toplu işlemler", "Rekabetçi ve şeffaf kurlar"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold text-ink">
                    <CheckIcon className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 overflow-hidden rounded-2xl shadow-xl lg:order-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.euro} alt="Döviz banknotları" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* NEDEN BİZ */}
      <section className="section bg-cream">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <div className="gold-rule mx-auto" />
            <span className="mt-4 block text-sm font-semibold uppercase tracking-widest text-gold">
              Neden Biz?
            </span>
            <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">
              Güven ve Profesyonellik
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl bg-white p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cream text-gold">
                  <f.Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-semibold text-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink">
        <div className="container-x flex flex-col items-center justify-between gap-6 py-16 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              İşlemleriniz için bize ulaşın
            </h2>
            <p className="mt-2 text-gray-300">
              Güncel kurlar ve özel fiyatlar için hemen arayın.
            </p>
          </div>
          <a
            href={`tel:${site.phoneHref}`}
            className="inline-flex items-center gap-3 rounded-md bg-gold px-8 py-4 text-lg font-semibold text-ink transition-colors hover:bg-gold-light"
          >
            <PhoneIcon className="h-6 w-6" />
            {site.phone}
          </a>
        </div>
      </section>
    </>
  );
}
