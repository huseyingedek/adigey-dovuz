import type { Metadata } from "next";
import Link from "next/link";
import { site, images } from "@/lib/site";
import { ShieldIcon, StarIcon, TrendIcon, UsersIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Adigey Döviz olarak Adapazarı Sakarya'da güvenilir döviz ve altın alım-satım hizmeti sunuyoruz. Misyonumuz ve değerlerimiz.",
};

const values = [
  { title: "Güvenilirlik", desc: "Şeffaf ve dürüst işlem anlayışı en temel ilkemizdir.", Icon: ShieldIcon },
  { title: "Müşteri Memnuniyeti", desc: "İlk önceliğimiz her zaman müşterilerimizin memnuniyetidir.", Icon: StarIcon },
  { title: "Uygun Kur", desc: "Piyasayı takip ederek daima rekabetçi fiyatlar sunarız.", Icon: TrendIcon },
  { title: "Deneyim", desc: "Sektör tecrübemizle güvenli ve profesyonel hizmet veririz.", Icon: UsersIcon },
];

export default function Hakkimizda() {
  return (
    <>
      {/* Sayfa başlığı — fotoğraf banner */}
      <section className="relative isolate overflow-hidden bg-ink py-24 text-center text-white md:py-32">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={images.goldCoins} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
        <div className="container-x relative">
          <div className="gold-rule mx-auto" />
          <span className="mt-4 block text-sm font-semibold uppercase tracking-widest text-gold">
            Kurumsal
          </span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Hakkımızda</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-200">
            {site.name} resmî web sitesine hoş geldiniz.
          </p>
        </div>
      </section>

      {/* Biz Kimiz */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">
              Biz Kimiz
            </span>
            <h2 className="mt-3 text-3xl font-bold text-ink">
              Sakarya&apos;nın Güvenilir Döviz Adresi
            </h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              {site.name}, Adapazarı Sakarya&apos;da bireysel ve kurumsal
              müşterilerine döviz ve altın alım-satım hizmeti sunmaktadır.
              Yılların deneyimini, iş tecrübesini ve profesyonel kadromuzu bir
              araya getirerek müşterilerimize en iyi ve kaliteli hizmeti vermeyi
              ilke edindik.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Her geçen gün bu ilkelerle büyümeyi istikrarla birleştirerek
              hizmetlerimize devam etmenin mutluluğunu siz değerli
              müşterilerimizle birlikte yaşıyoruz.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={images.goldStack} alt="Külçe altınlar" className="h-72 w-full object-cover md:h-96" />
            <div className="grid grid-cols-2 gap-6 bg-ink p-8 text-center text-white sm:grid-cols-4">
              <div>
                <div className="text-2xl font-bold text-gold">%100</div>
                <div className="mt-1 text-xs text-gray-300">Güvenli İşlem</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold">Hızlı</div>
                <div className="mt-1 text-xs text-gray-300">İşlem</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold">Uygun</div>
                <div className="mt-1 text-xs text-gray-300">Kurlar</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold">Güven</div>
                <div className="mt-1 text-xs text-gray-300">İlkemiz</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section className="section bg-cream">
        <div className="container-x grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border-l-4 border-gold bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-ink">Misyonumuz</h3>
            <p className="mt-4 leading-relaxed text-gray-600">
              Güçlü öz sermayemiz ve nitelikli iş gücümüzle döviz piyasalarında
              ihtiyaç duyduğunuz &quot;iyi fiyat - tam hizmet&quot; anlayışını
              sunmak. Gerçek müşteri odaklı yaklaşımımızla size özel çözümler
              üretmek.
            </p>
          </div>
          <div className="rounded-xl border-l-4 border-ink bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-ink">Vizyonumuz</h3>
            <p className="mt-4 leading-relaxed text-gray-600">
              Sakarya ve bölgede döviz ve altın işlemlerinde ilk akla gelen,
              güvenilir ve tercih edilen kurum olmak. Sektördeki tüm yenilikleri
              yakından takip ederek bugün ve gelecekte en iyi hizmeti sunmak.
            </p>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">
              Değerlerimiz
            </span>
            <h2 className="mt-3 text-3xl font-bold text-ink">
              Bizi Biz Yapan İlkeler
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-gray-100 bg-cream p-7 text-center transition-all hover:-translate-y-1 hover:border-gold/30 hover:bg-white hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <v.Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink">
        <div className="container-x flex flex-col items-center justify-between gap-6 py-14 text-center md:flex-row md:text-left">
          <h2 className="text-2xl font-bold text-white">
            Sorularınız mı var? Bize ulaşın.
          </h2>
          <Link
            href="/iletisim"
            className="rounded-md bg-gold px-8 py-3 font-semibold text-ink transition-colors hover:bg-gold-light"
          >
            İletişim
          </Link>
        </div>
      </section>
    </>
  );
}
