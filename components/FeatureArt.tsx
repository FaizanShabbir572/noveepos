// Sector pages ke feature cards ke liye apni SVG illustrations (brand colors, koi copied image nahi)
const B = "#1747a6", D = "#0a2a66", L = "#e9eff9", A = "#2563eb", G = "#0b1733";

function Overview() {
  return (
    <>
      <rect x="30" y="14" width="140" height="92" rx="8" fill="#fff" stroke={L} strokeWidth="2" />
      <rect x="40" y="24" width="38" height="16" rx="3" fill={L} />
      <rect x="82" y="24" width="38" height="16" rx="3" fill={L} />
      <rect x="124" y="24" width="36" height="16" rx="3" fill="#dbe7fb" />
      <rect x="44" y="29" width="18" height="3" rx="1.5" fill={B} />
      <rect x="86" y="29" width="22" height="3" rx="1.5" fill={B} />
      <rect x="128" y="29" width="16" height="3" rx="1.5" fill={A} />
      {[30, 44, 36, 52, 46, 58].map((h, i) => (
        <rect key={i} x={46 + i * 18} y={98 - h} width="10" height={h} rx="2" fill={i === 5 ? A : B} opacity={i === 5 ? 1 : 0.35 + i * 0.1} />
      ))}
      <polyline points="51,70 69,58 87,64 105,48 123,52 141,40" fill="none" stroke={D} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="141" cy="40" r="3.5" fill={A} />
    </>
  );
}

function Cloud() {
  return (
    <>
      <path d="M70 52a18 18 0 0 1 34-10 14 14 0 0 1 26 8 12 12 0 0 1-2 24H74a12 12 0 0 1-4-22z" fill={L} stroke={B} strokeWidth="2.5" />
      <path d="M100 52v12m-5-5 5 5 5-5" stroke={B} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M60 78 46 90M100 76v14M140 78l14 12" stroke={B} strokeWidth="2" strokeDasharray="3 3" />
      <rect x="22" y="88" width="40" height="24" rx="3" fill={G} />
      <rect x="25" y="91" width="34" height="17" rx="1.5" fill="#fff" />
      <rect x="88" y="90" width="24" height="24" rx="3" fill={G} />
      <rect x="91" y="93" width="18" height="15" rx="1.5" fill="#fff" />
      <rect x="146" y="86" width="16" height="28" rx="3" fill={G} />
      <rect x="148" y="89" width="12" height="20" rx="1.5" fill="#fff" />
      <rect x="28" y="95" width="14" height="3" rx="1.5" fill={B} /><rect x="94" y="97" width="10" height="3" rx="1.5" fill={A} /><rect x="150" y="93" width="8" height="3" rx="1.5" fill={B} />
    </>
  );
}

function Offline() {
  return (
    <>
      <rect x="54" y="20" width="76" height="54" rx="5" fill={G} />
      <rect x="59" y="25" width="66" height="44" rx="2" fill="#fff" />
      {[0, 1, 2].map((r) => [0, 1, 2].map((c) => <rect key={`${r}${c}`} x={63 + c * 14} y={29 + r * 12} width="11" height="9" rx="1.5" fill={r === 0 && c === 1 ? B : L} />))}
      <rect x="107" y="29" width="14" height="30" rx="1.5" fill={L} />
      <rect x="107" y="62" width="14" height="4" rx="1" fill="#22c55e" />
      <rect x="86" y="74" width="12" height="10" fill="#374151" />
      <rect x="70" y="84" width="44" height="5" rx="2.5" fill="#374151" />
      <circle cx="150" cy="34" r="20" fill="#dbe7fb" />
      <path d="M138 32a18 18 0 0 1 24 0M142 37a12 12 0 0 1 16 0M147 42a5 5 0 0 1 6 0" stroke={A} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M137 21l26 26" stroke={A} strokeWidth="3" strokeLinecap="round" />
      <circle cx="44" cy="92" r="14" fill={L} />
      <path d="M37 92a7 7 0 0 1 12-5m2 5a7 7 0 0 1-12 5" stroke={B} strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <path d="M49 83v4h-4M39 101v-4h4" stroke={B} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

function Multi() {
  return (
    <>
      <rect x="18" y="28" width="62" height="44" rx="4" fill={G} />
      <rect x="22" y="32" width="54" height="36" rx="2" fill="#fff" />
      {[0, 1, 2, 3].map((i) => <rect key={i} x="27" y={37 + i * 7} width={i % 2 ? 30 : 42} height="3.5" rx="1.75" fill={i === 0 ? B : L} />)}
      <rect x="44" y="72" width="10" height="8" fill="#374151" /><rect x="34" y="80" width="30" height="4" rx="2" fill="#374151" />
      <path d="M88 50h28" stroke={A} strokeWidth="3" strokeLinecap="round" strokeDasharray="5 5" />
      <path d="m110 43 8 7-8 7" stroke={A} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="124" y="22" width="62" height="44" rx="4" fill={G} />
      <rect x="128" y="26" width="54" height="36" rx="2" fill="#fff" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="133" y={31 + i * 10} width="6" height="6" rx="1.5" fill={i < 2 ? "#22c55e" : L} />
          <rect x="143" y={32.5 + i * 10} width="32" height="3.5" rx="1.75" fill={L} />
        </g>
      ))}
      <path d="M126 104V84l29-14 29 14v20z" fill={L} stroke={B} strokeWidth="2" />
      <rect x="144" y="88" width="22" height="16" fill="#fff" stroke={B} strokeWidth="2" />
      <path d="M144 93h22M144 98h22" stroke={B} strokeWidth="1.5" />
    </>
  );
}

function Ecom() {
  return (
    <>
      <rect x="20" y="16" width="120" height="82" rx="6" fill="#fff" stroke={L} strokeWidth="2" />
      <rect x="20" y="16" width="120" height="14" rx="6" fill={L} />
      <circle cx="29" cy="23" r="2.5" fill={A} /><circle cx="37" cy="23" r="2.5" fill="#fbbf24" /><circle cx="45" cy="23" r="2.5" fill="#22c55e" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={28 + i * 36} y="38" width="30" height="26" rx="3" fill={L} />
          <rect x={28 + i * 36} y="68" width="22" height="3.5" rx="1.75" fill={G} opacity=".6" />
          <rect x={28 + i * 36} y="75" width="14" height="3.5" rx="1.75" fill={B} />
          <rect x={28 + i * 36} y="83" width="30" height="8" rx="4" fill={i === 1 ? A : B} />
        </g>
      ))}
      <circle cx="158" cy="78" r="26" fill={B} />
      <path d="M144 68h5l4 16h14l4-11h-20" stroke="#fff" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="155" cy="89" r="2.4" fill="#fff" /><circle cx="165" cy="89" r="2.4" fill="#fff" />
    </>
  );
}

function Display() {
  return (
    <>
      <rect x="36" y="12" width="128" height="78" rx="6" fill={G} />
      <rect x="41" y="17" width="118" height="68" rx="3" fill={`url(#dispgrad)`} />
      <defs>
        <linearGradient id="dispgrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={D} /><stop offset="1" stopColor={B} /></linearGradient>
      </defs>
      <text x="52" y="44" fill="#fff" fontSize="16" fontWeight="800" fontFamily="inherit">20% OFF</text>
      <text x="52" y="58" fill="#cfe2ff" fontSize="8" fontFamily="inherit">All fresh bakery today</text>
      <rect x="52" y="66" width="36" height="11" rx="5.5" fill={A} />
      <text x="58" y="74" fill="#fff" fontSize="6.5" fontWeight="700" fontFamily="inherit">SHOP NOW</text>
      <circle cx="132" cy="50" r="18" fill="#fff" opacity=".15" />
      <circle cx="132" cy="50" r="11" fill={A} />
      <text x="126" y="54" fill="#fff" fontSize="11" fontWeight="800" fontFamily="inherit">%</text>
      <rect x="92" y="90" width="16" height="14" fill="#374151" />
      <rect x="72" y="104" width="56" height="6" rx="3" fill="#374151" />
    </>
  );
}

function Touch() {
  return (
    <>
      <rect x="40" y="14" width="120" height="84" rx="8" fill={G} />
      <rect x="46" y="20" width="108" height="72" rx="3" fill="#fff" />
      {[0, 1, 2].map((r) => [0, 1, 2, 3].map((c) => (
        <rect key={`${r}${c}`} x={51 + c * 18} y={26 + r * 20} width="15" height="16" rx="2.5" fill={r === 1 && c === 2 ? B : [L, "#dbe7fb", "#dcfce7", L][c]} />
      )))}
      <rect x="125" y="26" width="24" height="56" rx="2" fill={L} />
      {[0, 1, 2].map((i) => <rect key={i} x="128" y={31 + i * 8} width="18" height="3" rx="1.5" fill={B} opacity={0.7 - i * 0.15} />)}
      <rect x="128" y="72" width="18" height="6" rx="2" fill="#22c55e" />
      <path d="M100 84c0-6 0-14 0-18a4 4 0 0 1 8 0v10l9 2a5 5 0 0 1 4 6l-2 12h-16l-6-8a4 4 0 0 1 3-6z" fill="#ffd9b8" stroke={D} strokeWidth="2" strokeLinejoin="round" />
      <circle cx="104" cy="60" r="9" fill="none" stroke={A} strokeWidth="2" opacity=".7" />
    </>
  );
}

function Kds() {
  const t = [["#ef4444", "T4"], [A, "T7"], ["#22c55e", "T2"]];
  return (
    <>
      <rect x="18" y="12" width="164" height="90" rx="7" fill={G} />
      <rect x="24" y="18" width="152" height="78" rx="3" fill="#111827" />
      {t.map(([c, n], i) => (
        <g key={n}>
          <rect x={30 + i * 49} y="24" width="43" height="66" rx="3" fill="#fff" />
          <rect x={30 + i * 49} y="24" width="43" height="12" rx="3" fill={c} />
          <text x={34 + i * 49} y="33" fill="#fff" fontSize="7" fontWeight="700" fontFamily="inherit">{n}</text>
          {[0, 1, 2, 3].map((k) => <rect key={k} x={34 + i * 49} y={42 + k * 9} width={k % 2 ? 24 : 34} height="4" rx="2" fill={k === 0 ? G : "#d1d5db"} />)}
        </g>
      ))}
      <rect x="92" y="102" width="16" height="8" fill="#374151" /><rect x="78" y="110" width="44" height="5" rx="2.5" fill="#374151" />
      <path d="M150 6a9 9 0 0 1 16 4 7 7 0 0 1-2 13h-14a7 7 0 0 1 0-14z" fill="#fff" stroke={D} strokeWidth="1.8" />
      <rect x="152" y="22" width="14" height="6" fill="#fff" stroke={D} strokeWidth="1.8" />
    </>
  );
}

function Menu() {
  return (
    <>
      <rect x="40" y="10" width="92" height="100" rx="6" fill="#fff" stroke={L} strokeWidth="2" />
      <rect x="40" y="10" width="92" height="20" rx="6" fill={D} />
      <text x="70" y="24" fill="#fff" fontSize="9" fontWeight="800" fontFamily="inherit" letterSpacing="1">MENU</text>
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x="50" y={38 + i * 14} width={i === 2 ? 40 : 50} height="4" rx="2" fill={i === 4 ? A : G} opacity={i === 4 ? 1 : 0.55} />
          <rect x="110" y={38 + i * 14} width="14" height="4" rx="2" fill={B} />
          <path d={`M50 ${45 + i * 14}h70`} stroke={L} strokeWidth="1" strokeDasharray="2 2" />
        </g>
      ))}
      <circle cx="150" cy="44" r="13" fill="#22c55e" />
      <path d="M150 37v14M143 44h14" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <circle cx="150" cy="80" r="13" fill="#ef4444" />
      <path d="M143 80h14" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <path d="M134 94c6-4 10-10 12-16" stroke={A} strokeWidth="2" fill="none" strokeDasharray="3 3" />
    </>
  );
}

function Split() {
  return (
    <>
      <path d="M78 10h44v80l-5.5-4-5.5 4-5.5-4-5.5 4-5.5-4-5.5 4-5.5-4-5.5 4z" fill="#fff" stroke={L} strokeWidth="2" />
      {[0, 1, 2, 3].map((i) => <rect key={i} x="86" y={20 + i * 10} width={i === 3 ? 28 : 22} height="4" rx="2" fill={i === 3 ? D : "#d1d5db"} />)}
      <path d="M100 66 70 90M100 66l30 24" stroke={A} strokeWidth="2.5" strokeDasharray="4 4" />
      <rect x="28" y="88" width="58" height="26" rx="4" fill="#22c55e" />
      <circle cx="57" cy="101" r="7" fill="none" stroke="#fff" strokeWidth="2" />
      <text x="54" y="104" fill="#fff" fontSize="8" fontWeight="800" fontFamily="inherit">£</text>
      <rect x="114" y="88" width="58" height="34" rx="5" fill={B} />
      <rect x="114" y="95" width="58" height="6" fill={D} />
      <rect x="120" y="106" width="12" height="9" rx="1.5" fill="#fbbf24" />
      <rect x="138" y="109" width="26" height="3" rx="1.5" fill="#fff" opacity=".7" />
    </>
  );
}

function Customers() {
  return (
    <>
      <rect x="22" y="16" width="156" height="88" rx="8" fill="#fff" stroke={L} strokeWidth="2" />
      <circle cx="54" cy="46" r="18" fill={L} />
      <circle cx="54" cy="41" r="7" fill={B} />
      <path d="M41 58a13 13 0 0 1 26 0" fill={B} />
      <rect x="34" y="72" width="40" height="5" rx="2.5" fill={G} opacity=".7" />
      <rect x="40" y="81" width="28" height="4" rx="2" fill="#d1d5db" />
      <rect x="40" y="90" width="28" height="8" rx="4" fill="#dbe7fb" />
      <path d="M48 94h12" stroke={A} strokeWidth="2" strokeLinecap="round" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <circle cx="94" cy={32 + i * 18} r="5" fill={i === 0 ? A : L} />
          <rect x="104" y={29 + i * 18} width="40" height="4" rx="2" fill={G} opacity=".55" />
          <rect x="104" y={36 + i * 18} width="24" height="3" rx="1.5" fill="#d1d5db" />
          <rect x="152" y={30 + i * 18} width="16" height="5" rx="2.5" fill={B} opacity=".8" />
        </g>
      ))}
    </>
  );
}

const arts: Record<string, () => JSX.Element> = { overview: Overview, cloud: Cloud, offline: Offline, multi: Multi, ecom: Ecom, display: Display, touch: Touch, kds: Kds, menu: Menu, split: Split, customers: Customers };

export default function FeatureArt({ name, className = "" }: { name: string; className?: string }) {
  const Art = arts[name] ?? Overview;
  return (
    <svg viewBox="0 0 200 120" className={className} aria-hidden>
      <Art />
    </svg>
  );
}
