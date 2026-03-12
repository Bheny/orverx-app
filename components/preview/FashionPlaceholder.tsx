"use client";

/**
 * Generates visually distinct SVG fashion-image placeholders.
 * Each variant renders a different composition so the grid feels like real photography.
 */

interface Props {
  variant: number; // 0–7
  className?: string;
}

const palettes = [
  { bg: "#fdf2f4", fg: "#c8264f", mid: "#f4a8b8", line: "#9e5a75" },
  { bg: "#1a1a2e", fg: "#ec7592", mid: "#b57690", line: "#f4a8b8" },
  { bg: "#f5ecf0", fg: "#9e5a75", mid: "#dfc0cc", line: "#c8264f" },
  { bg: "#2d1b26", fg: "#f4a8b8", mid: "#c8264f", line: "#ec7592" },
  { bg: "#fffaf9", fg: "#c8264f", mid: "#ec7592", line: "#9e5a75" },
  { bg: "#16213e", fg: "#b57690", mid: "#dfc0cc", line: "#f4a8b8" },
  { bg: "#fce7eb", fg: "#8e1838", mid: "#ec7592", line: "#c8264f" },
  { bg: "#0f0f1a", fg: "#f4a8b8", mid: "#9e5a75", line: "#ec7592" },
];

export default function FashionPlaceholder({ variant, className = "" }: Props) {
  const p = palettes[variant % palettes.length];
  const v = variant % 8;

  return (
    <svg
      viewBox="0 0 400 500"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="400" height="500" fill={p.bg} />

      {v === 0 && (
        <>
          {/* Elegant dress silhouette */}
          <ellipse cx="200" cy="160" rx="60" ry="75" fill={p.mid} opacity="0.6" />
          <path d="M140 230 Q155 380 200 400 Q245 380 260 230 Z" fill={p.fg} opacity="0.85" />
          <path d="M155 235 Q168 360 200 378 Q232 360 245 235 Z" fill={p.mid} opacity="0.4" />
          <rect x="192" y="88" width="16" height="26" rx="8" fill={p.mid} opacity="0.7" />
          {/* Hanger */}
          <path d="M200 78 Q200 92 182 100 Q155 110 150 118" stroke={p.line} strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M200 78 Q200 92 218 100 Q245 110 250 118" stroke={p.line} strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="200" cy="74" r="6" stroke={p.line} strokeWidth="2.5" fill={p.bg} />
          {/* Floating geometric shapes */}
          <rect x="50" y="300" width="60" height="80" rx="4" fill={p.fg} opacity="0.15" transform="rotate(-8 80 340)" />
          <rect x="290" y="260" width="50" height="70" rx="4" fill={p.mid} opacity="0.2" transform="rotate(6 315 295)" />
          <circle cx="80" cy="150" r="20" fill={p.fg} opacity="0.1" />
          <circle cx="330" cy="380" r="30" fill={p.mid} opacity="0.12" />
          {/* Label tag */}
          <rect x="155" y="400" width="90" height="36" rx="4" fill={p.bg} stroke={p.line} strokeWidth="1.5" opacity="0.9" />
          <line x1="200" y1="400" x2="200" y2="393" stroke={p.line} strokeWidth="1.5" />
          <circle cx="200" cy="391" r="2.5" fill={p.line} />
        </>
      )}

      {v === 1 && (
        <>
          {/* Dark editorial — figure + fabric drape */}
          <rect x="0" y="0" width="400" height="500" fill={p.bg} />
          {/* Vertical light beam */}
          <rect x="160" y="0" width="80" height="500" fill="white" opacity="0.04" />
          {/* Figure silhouette */}
          <ellipse cx="200" cy="120" rx="38" ry="44" fill={p.mid} opacity="0.5" />
          <rect x="172" y="162" width="56" height="20" rx="6" fill={p.mid} opacity="0.4" />
          <path d="M160 182 L145 400 L175 400 L200 280 L225 400 L255 400 L240 182 Z" fill={p.fg} opacity="0.7" />
          {/* Fabric flow overlay */}
          <path d="M100 200 Q150 180 200 220 Q250 260 300 200 Q350 140 380 180 L400 220 L400 320 Q360 280 300 320 Q240 360 200 320 Q160 280 100 340 L60 300 Z" fill={p.mid} opacity="0.15" />
          {/* Scattered dots */}
          {[60, 90, 330, 360, 80, 340].map((x, i) => (
            <circle key={i} cx={x} cy={[80, 420, 90, 410, 250, 260][i]} r={[3, 4, 2.5, 3, 4, 2][i]} fill={p.fg} opacity="0.5" />
          ))}
          {/* Brand text placeholder */}
          <rect x="130" y="440" width="140" height="8" rx="4" fill={p.fg} opacity="0.3" />
          <rect x="160" y="455" width="80" height="6" rx="3" fill={p.mid} opacity="0.2" />
        </>
      )}

      {v === 2 && (
        <>
          {/* Flat lay / moodboard style */}
          <rect x="30" y="30" width="160" height="200" rx="8" fill={p.mid} opacity="0.35" transform="rotate(-5 110 130)" />
          <rect x="210" y="50" width="130" height="170" rx="8" fill={p.fg} opacity="0.2" transform="rotate(4 275 135)" />
          <rect x="60" y="260" width="120" height="160" rx="8" fill={p.fg} opacity="0.25" transform="rotate(3 120 340)" />
          <rect x="220" y="250" width="140" height="190" rx="8" fill={p.mid} opacity="0.3" transform="rotate(-4 290 345)" />
          {/* Scissors */}
          <g transform="translate(195 225) rotate(25)">
            <circle cx="0" cy="0" r="10" stroke={p.line} strokeWidth="2" fill={p.bg} />
            <circle cx="20" cy="0" r="10" stroke={p.line} strokeWidth="2" fill={p.bg} />
            <line x1="8" y1="-6" x2="44" y2="-32" stroke={p.line} strokeWidth="2" strokeLinecap="round" />
            <line x1="8" y1="6" x2="44" y2="32" stroke={p.line} strokeWidth="2" strokeLinecap="round" />
          </g>
          {/* Thread spool */}
          <ellipse cx="80" cy="430" rx="22" ry="14" fill={p.fg} opacity="0.4" />
          <ellipse cx="80" cy="418" rx="18" ry="10" fill={p.fg} opacity="0.6" />
          <ellipse cx="80" cy="442" rx="18" ry="10" fill={p.fg} opacity="0.6" />
          <ellipse cx="80" cy="430" rx="12" ry="7" fill={p.bg} opacity="0.6" />
          {/* Tape measure */}
          <path d="M260 400 Q300 390 340 410 Q360 420 350 440 Q330 460 290 450 Q250 440 260 420 Z" fill={p.mid} opacity="0.4" />
          <path d="M265 420 L335 420" stroke={p.fg} strokeWidth="1" strokeDasharray="4 3" />
        </>
      )}

      {v === 3 && (
        <>
          {/* Dark luxury editorial */}
          <rect x="0" y="0" width="400" height="500" fill={p.bg} />
          {/* Grid of light lines */}
          {[80, 160, 240, 320].map((x) => (
            <line key={x} x1={x} y1="0" x2={x} y2="500" stroke="white" strokeWidth="0.5" opacity="0.06" />
          ))}
          {[100, 200, 300, 400].map((y) => (
            <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="white" strokeWidth="0.5" opacity="0.06" />
          ))}
          {/* Central garment */}
          <path d="M170 100 Q200 85 230 100 L245 160 L230 165 L200 145 L170 165 L155 160 Z" fill={p.fg} opacity="0.8" />
          <path d="M155 160 L140 380 L175 390 L200 300 L225 390 L260 380 L245 160 Z" fill={p.mid} opacity="0.6" />
          {/* Dramatic light spot */}
          <ellipse cx="200" cy="250" rx="100" ry="130" fill="white" opacity="0.04" />
          {/* Scattered gems / buttons */}
          {[[120,200],[280,180],[100,350],[310,330],[190,450],[220,60]].map(([cx,cy],i)=>(
            <polygon key={i} points={`${cx},${cy-6} ${cx+5},${cy} ${cx},${cy+6} ${cx-5},${cy}`} fill={p.fg} opacity="0.5" />
          ))}
        </>
      )}

      {v === 4 && (
        <>
          {/* Clean white studio */}
          <rect x="0" y="0" width="400" height="500" fill={p.bg} />
          {/* Studio floor line */}
          <path d="M0 360 Q200 340 400 360 L400 500 L0 500 Z" fill="#f5ecf0" opacity="0.6" />
          {/* Dress form */}
          <ellipse cx="200" cy="190" rx="55" ry="68" fill={p.mid} opacity="0.5" />
          <ellipse cx="200" cy="190" rx="42" ry="52" fill={p.mid} opacity="0.4" />
          <rect x="195" y="122" width="10" height="28" rx="5" fill={p.mid} opacity="0.6" />
          {/* Stand */}
          <line x1="200" y1="256" x2="200" y2="350" stroke={p.line} strokeWidth="4" />
          <ellipse cx="200" cy="353" rx="40" ry="10" fill={p.line} opacity="0.3" />
          <ellipse cx="200" cy="350" rx="36" ry="8" fill={p.mid} opacity="0.5" />
          {/* Garment draping on form */}
          <path d="M148 160 Q165 130 200 125 Q235 130 252 160 L258 200 Q230 220 200 215 Q170 220 142 200 Z" fill={p.fg} opacity="0.7" />
          {/* Mood tags */}
          {["AUTUMN", "LOOKBOOK", "2024"].map((t, i) => (
            <g key={t} transform={`translate(${30 + i * 115}, 420)`}>
              <rect x="0" y="0" width="100" height="28" rx="14" fill={p.fg} opacity="0.12" />
              <text x="50" y="19" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill={p.fg} opacity="0.7" letterSpacing="2">{t}</text>
            </g>
          ))}
        </>
      )}

      {v === 5 && (
        <>
          {/* Dark editorial — layered abstract */}
          <rect x="0" y="0" width="400" height="500" fill={p.bg} />
          <path d="M0 150 Q100 100 200 150 Q300 200 400 150 L400 0 L0 0 Z" fill={p.mid} opacity="0.12" />
          <path d="M0 500 Q100 420 200 460 Q300 500 400 440 L400 500 Z" fill={p.fg} opacity="0.15" />
          {/* Large circular frame */}
          <circle cx="200" cy="240" r="140" stroke={p.mid} strokeWidth="1.5" fill="none" opacity="0.3" />
          <circle cx="200" cy="240" r="110" stroke={p.fg} strokeWidth="0.8" fill="none" opacity="0.2" />
          {/* Garment */}
          <path d="M170 160 Q200 140 230 160 L245 220 L230 225 L200 205 L170 225 L155 220 Z" fill={p.fg} opacity="0.75" />
          <path d="M155 220 Q148 330 155 380 L175 385 L200 310 L225 385 L245 380 Q252 330 245 220 Z" fill={p.mid} opacity="0.55" />
          {/* Decorative lines */}
          {[0, 30, 60, 90, 120, 150, 180].map((angle) => {
            const r1 = 145, r2 = 158;
            const rad = (angle * Math.PI) / 180;
            return <line key={angle} x1={200 + r1 * Math.cos(rad)} y1={240 + r1 * Math.sin(rad)} x2={200 + r2 * Math.cos(rad)} y2={240 + r2 * Math.sin(rad)} stroke={p.line} strokeWidth="1.5" opacity="0.4" />;
          })}
        </>
      )}

      {v === 6 && (
        <>
          {/* Soft pink — accessories focus */}
          <rect x="0" y="0" width="400" height="500" fill={p.bg} />
          {/* Large hat */}
          <ellipse cx="200" cy="200" rx="120" ry="30" fill={p.mid} opacity="0.6" />
          <path d="M120 200 Q130 140 200 130 Q270 140 280 200 Z" fill={p.fg} opacity="0.5" />
          <ellipse cx="200" cy="200" rx="120" ry="30" fill={p.mid} opacity="0.3" />
          {/* Ribbon */}
          <path d="M130 195 Q165 178 200 185 Q235 178 270 195" stroke={p.fg} strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.7" />
          {/* Bag */}
          <rect x="120" y="300" width="160" height="120" rx="10" fill={p.mid} opacity="0.5" />
          <rect x="130" y="310" width="140" height="100" rx="8" fill={p.mid} opacity="0.4" />
          <path d="M160 300 Q160 270 200 265 Q240 270 240 300" stroke={p.fg} strokeWidth="5" fill="none" strokeLinecap="round" />
          {/* Clasp */}
          <circle cx="200" cy="360" r="8" fill={p.fg} opacity="0.6" />
          <circle cx="200" cy="360" r="5" fill={p.bg} opacity="0.8" />
          {/* Scattered pearls */}
          {[[60,120],[80,350],[340,130],[320,370],[60,260],[340,250]].map(([cx,cy],i)=>(
            <circle key={i} cx={cx} cy={cy} r="5" fill={p.fg} opacity="0.35" />
          ))}
        </>
      )}

      {v === 7 && (
        <>
          {/* Dark — luxury editorial full look */}
          <rect x="0" y="0" width="400" height="500" fill={p.bg} />
          {/* Backlight gradient */}
          <ellipse cx="200" cy="180" rx="90" ry="110" fill={p.fg} opacity="0.06" />
          {/* Full silhouette */}
          <ellipse cx="200" cy="110" rx="36" ry="42" fill={p.mid} opacity="0.4" />
          <rect x="176" y="150" width="48" height="16" rx="8" fill={p.mid} opacity="0.3" />
          <path d="M165 165 Q158 240 148 340 Q160 360 175 358 L200 280 L225 358 Q240 360 252 340 Q242 240 235 165 Z" fill={p.fg} opacity="0.65" />
          {/* Coat lapels */}
          <path d="M165 165 L180 200 L200 190 L220 200 L235 165 Q218 155 200 152 Q182 155 165 165 Z" fill={p.mid} opacity="0.5" />
          {/* Long coat flare */}
          <path d="M148 340 Q130 400 110 450 L160 455 L200 380 L240 455 L290 450 Q270 400 252 340 Z" fill={p.mid} opacity="0.3" />
          {/* Floor reflection */}
          <ellipse cx="200" cy="455" rx="60" ry="8" fill={p.fg} opacity="0.12" />
          {/* Corner details */}
          <rect x="20" y="20" width="40" height="40" fill="none" stroke={p.fg} strokeWidth="1.5" opacity="0.25" />
          <rect x="340" y="20" width="40" height="40" fill="none" stroke={p.fg} strokeWidth="1.5" opacity="0.25" />
          <rect x="20" y="440" width="40" height="40" fill="none" stroke={p.fg} strokeWidth="1.5" opacity="0.25" />
          <rect x="340" y="440" width="40" height="40" fill="none" stroke={p.fg} strokeWidth="1.5" opacity="0.25" />
        </>
      )}
    </svg>
  );
}
