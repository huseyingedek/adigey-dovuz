# Adigey Döviz — Kurumsal Web Sitesi

Adigey Döviz için Next.js 14 (App Router) + TypeScript + Tailwind CSS ile geliştirilmiş kurumsal tanıtım sitesi.

## Sayfalar

- **Ana Sayfa** (`/`) — Hero, hizmetler, neden biz, iletişim çağrısı
- **Hakkımızda** (`/hakkimizda`) — Biz kimiz, misyon/vizyon, değerler
- **İletişim** (`/iletisim`) — Adres, telefon, e-posta, çalışma saatleri, Google Harita

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini açın.

## Derleme (Production)

```bash
npm run build
npm run start
```

## Yapılandırma

Tüm şirket bilgileri (adres, telefon, e-posta vb.) tek yerden yönetilir:
`lib/site.ts`

## Teknolojiler

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

Tema: Kurumsal lacivert (`navy`) ve altın (`gold`) renk paleti.
