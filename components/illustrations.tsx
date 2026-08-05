import type { SVGProps } from "react";

/* Tek, damgalı, parlak altın külçe */
export const GoldBar = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 260 190" xmlns="http://www.w3.org/2000/svg" {...p}>
    <defs>
      <linearGradient id="bar-front" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#fbeaa0" />
        <stop offset="0.35" stopColor="#e9c65c" />
        <stop offset="0.7" stopColor="#d3a832" />
        <stop offset="1" stopColor="#b98a1e" />
      </linearGradient>
      <linearGradient id="bar-top" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#fff3c4" />
        <stop offset="0.5" stopColor="#f0d074" />
        <stop offset="1" stopColor="#d8b043" />
      </linearGradient>
      <linearGradient id="bar-side" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#c99b28" />
        <stop offset="1" stopColor="#916913" />
      </linearGradient>
    </defs>
    {/* üst yüzey */}
    <polygon points="52,64 208,64 232,40 76,40" fill="url(#bar-top)" />
    {/* sağ yan yüzey */}
    <polygon points="208,64 232,40 232,132 208,158" fill="url(#bar-side)" />
    {/* ön yüz */}
    <polygon points="30,64 208,64 208,158 30,158" fill="url(#bar-front)" />
    {/* köşe kırılımları (izometrik his) */}
    <polygon points="30,64 52,64 52,158 30,158" fill="#ffffff" opacity="0.08" />
    {/* parlama çizgisi */}
    <polygon points="46,64 70,64 150,158 126,158" fill="#ffffff" opacity="0.18" />
    {/* damgalar */}
    <text x="119" y="92" textAnchor="middle" fontSize="17" fontWeight="800" fill="#7d5c11" letterSpacing="1">ADIGEY</text>
    <text x="119" y="112" textAnchor="middle" fontSize="10" fontWeight="700" fill="#8a6614" letterSpacing="1">FINE GOLD</text>
    <text x="119" y="132" textAnchor="middle" fontSize="13" fontWeight="800" fill="#7d5c11">999.9</text>
    <rect x="60" y="142" width="118" height="1.5" fill="#8a6614" opacity="0.5" />
  </svg>
);

/* Üç külçe yığını */
export const GoldBars = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 260 210" xmlns="http://www.w3.org/2000/svg" {...p}>
    <defs>
      <linearGradient id="gs-front" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#fbeaa0" />
        <stop offset="0.5" stopColor="#e3bd4e" />
        <stop offset="1" stopColor="#b98a1e" />
      </linearGradient>
      <linearGradient id="gs-top" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#fff3c4" />
        <stop offset="1" stopColor="#e0bd52" />
      </linearGradient>
      <linearGradient id="gs-side" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#c99b28" />
        <stop offset="1" stopColor="#8a6614" />
      </linearGradient>
    </defs>
    {/* alt iki külçe */}
    {[
      [18, 120],
      [120, 120],
    ].map(([x, y], i) => (
      <g key={i} transform={`translate(${x},${y})`}>
        <polygon points="18,34 96,34 108,20 30,20" fill="url(#gs-top)" />
        <polygon points="96,34 108,20 108,74 96,84" fill="url(#gs-side)" />
        <polygon points="6,34 96,34 96,84 6,84" fill="url(#gs-front)" />
        <polygon points="16,34 30,34 78,84 64,84" fill="#fff" opacity="0.15" />
      </g>
    ))}
    {/* üstteki külçe */}
    <g transform="translate(70,58)">
      <polygon points="18,34 96,34 108,20 30,20" fill="url(#gs-top)" />
      <polygon points="96,34 108,20 108,74 96,84" fill="url(#gs-side)" />
      <polygon points="6,34 96,34 96,84 6,84" fill="url(#gs-front)" />
      <polygon points="16,34 30,34 78,84 64,84" fill="#fff" opacity="0.18" />
      <text x="51" y="62" textAnchor="middle" fontSize="11" fontWeight="800" fill="#7d5c11" letterSpacing="1">999.9</text>
    </g>
  </svg>
);

/* Madeni para yığını */
export const CoinStack = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 210 210" xmlns="http://www.w3.org/2000/svg" {...p}>
    <defs>
      <linearGradient id="coin-face" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#fbeaa0" />
        <stop offset="1" stopColor="#c9a02f" />
      </linearGradient>
      <linearGradient id="coin-face2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#f4dd8f" />
        <stop offset="1" stopColor="#c99b28" />
      </linearGradient>
      <linearGradient id="coin-edge" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#c39a2c" />
        <stop offset="1" stopColor="#8a6614" />
      </linearGradient>
    </defs>
    {[158, 134, 110].map((y, i) => (
      <g key={i}>
        <ellipse cx="105" cy={y + 13} rx="56" ry="17" fill="url(#coin-edge)" />
        <rect x="49" y={y} width="112" height="13" fill="url(#coin-edge)" />
        <ellipse cx="105" cy={y} rx="56" ry="17" fill="url(#coin-face2)" />
      </g>
    ))}
    {/* üstteki büyük para */}
    <ellipse cx="105" cy="78" rx="60" ry="19" fill="url(#coin-edge)" />
    <ellipse cx="105" cy="72" rx="60" ry="19" fill="url(#coin-face)" />
    <ellipse cx="105" cy="72" rx="46" ry="13" fill="none" stroke="#a9801c" strokeWidth="1.5" opacity="0.6" />
    <text x="105" y="78" textAnchor="middle" fontSize="18" fontWeight="800" fill="#7d5c11">₺</text>
  </svg>
);

/* Gümüş külçe */
export const SilverBar = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" {...p}>
    <defs>
      <linearGradient id="sv-front" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#f6f8fa" />
        <stop offset="0.5" stopColor="#d3d9df" />
        <stop offset="1" stopColor="#a9b1b8" />
      </linearGradient>
      <linearGradient id="sv-top" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="1" stopColor="#c7cdd3" />
      </linearGradient>
      <linearGradient id="sv-side" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#b3bbc1" />
        <stop offset="1" stopColor="#828a91" />
      </linearGradient>
    </defs>
    <polygon points="52,64 208,64 232,40 76,40" fill="url(#sv-top)" />
    <polygon points="208,64 232,40 232,132 208,158" fill="url(#sv-side)" />
    <polygon points="30,64 208,64 208,158 30,158" fill="url(#sv-front)" />
    <polygon points="46,64 70,64 150,158 126,158" fill="#ffffff" opacity="0.3" />
    <text x="119" y="100" textAnchor="middle" fontSize="15" fontWeight="800" fill="#6b737a" letterSpacing="1">ADIGEY</text>
    <text x="119" y="122" textAnchor="middle" fontSize="11" fontWeight="700" fill="#7c848b">999 SILVER</text>
  </svg>
);

/* Döviz madeni parası */
export const CurrencyCoin = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 210 210" xmlns="http://www.w3.org/2000/svg" {...p}>
    <defs>
      <radialGradient id="cc-face" cx="0.4" cy="0.35" r="0.8">
        <stop offset="0" stopColor="#fbeaa0" />
        <stop offset="1" stopColor="#c99b28" />
      </radialGradient>
    </defs>
    <circle cx="105" cy="112" r="70" fill="#8a6614" />
    <circle cx="105" cy="104" r="70" fill="url(#cc-face)" />
    <circle cx="105" cy="104" r="55" fill="none" stroke="#a9801c" strokeWidth="2.5" opacity="0.55" />
    <text x="105" y="120" textAnchor="middle" fontSize="50" fontWeight="800" fill="#7d5e12">$</text>
  </svg>
);

/* Hero için altın kompozisyon */
export const HeroArt = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 460 380" xmlns="http://www.w3.org/2000/svg" {...p}>
    <defs>
      <radialGradient id="ha-glow" cx="0.5" cy="0.45" r="0.55">
        <stop offset="0" stopColor="#bf9b30" stopOpacity="0.5" />
        <stop offset="1" stopColor="#bf9b30" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="230" cy="185" r="190" fill="url(#ha-glow)" />
    <g transform="translate(60,150)">
      <GoldBars width="260" height="210" />
    </g>
    <g transform="translate(230,60) scale(0.9)">
      <CoinStack width="210" height="210" />
    </g>
    {[
      [70, 70],
      [400, 100],
      [360, 300],
      [90, 330],
    ].map(([x, y], i) => (
      <g key={i} transform={`translate(${x},${y})`} opacity="0.85">
        <path d="M0,-11 L2.5,-2.5 L11,0 L2.5,2.5 L0,11 L-2.5,2.5 L-11,0 L-2.5,-2.5 Z" fill="#f7e39c" />
      </g>
    ))}
  </svg>
);
