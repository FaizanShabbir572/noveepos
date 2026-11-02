// Till ki main sale screen (SVG) — har terminal mockup mein yahi use hoti hai, size ke saath scale hoti hai
type Product = [string, string, string]; // naam line 1, line 2, price
type Line = [string, number, number]; // item, qty, each

const NAVY = "#0a2a66";

export const retailProducts: Product[] = [
  ["Whole Milk", "2 Litre", "1.65"], ["Free Range", "Eggs 12 Pack", "3.20"], ["Sourdough", "Loaf 800g", "2.90"], ["Mature", "Cheddar 400g", "4.15"],
  ["Basmati Rice", "5kg Bag", "9.49"], ["Orange Juice", "1 Litre", "2.10"], ["Spring Water", "6 x 500ml", "3.00"], ["Ground Coffee", "Medium 227g", "5.75"],
  ["Tea Bags", "240 Pack", "8.50"], ["Chocolate", "Biscuits 300g", "1.99"], ["Washing Up", "Liquid 900ml", "1.80"], ["Tomatoes", "Loose 1kg", "2.40"],
  ["Bananas", "Bunch of 5", "1.15"], ["Penne Pasta", "1kg", "1.60"], ["Olive Oil", "Extra Virgin 1L", "7.99"], ["Toilet Roll", "9 Pack", "5.25"],
  ["Cola Cans", "6 x 330ml", "4.20"], ["Crisps", "Multipack 6", "2.35"], ["Peanut Butter", "Crunchy 340g", "2.75"], ["Porridge Oats", "1kg", "1.85"],
];
export const retailLines: Line[] = [
  ["Ground Coffee Medium 227g", 1, 5.75], ["Sourdough Loaf 800g", 1, 2.9], ["Tea Bags 240 Pack", 1, 8.5],
  ["Free Range Eggs 12 Pack", 2, 3.2], ["Tomatoes Loose 1kg", 1, 2.4], ["Whole Milk 2 Litre", 1, 1.65], ["Olive Oil Extra Virgin 1L", 1, 7.99],
];

const tabs = ["Retail", "Orders", "Admin", "Low Stock(3)"];
const navLinks: [string, number][] = [["Back", 45], ["Home", 170], ["Orders", 310], ["Refund", 450], ["Misc Products", 590], ["Search", 800]];
const actions = ["Unhold", "Print", "Add product", "Discount", "Customer"];
const money = (n: number) => `£${n.toFixed(2)}`;

function TabIcon({ i, cx, cy, c }: { i: number; cx: number; cy: number; c: string }) {
  const s = { fill: "none", stroke: c, strokeWidth: 3.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <g>
      <circle cx={cx} cy={cy} r={24} {...s} />
      {i === 0 && <><rect x={cx - 10} y={cy - 6} width={20} height={16} rx={3} {...s} /><path d={`M${cx - 5} ${cy - 6}v-4a5 5 0 0 1 10 0v4`} {...s} /></>}
      {i === 1 && <><rect x={cx - 9} y={cy - 12} width={18} height={24} rx={3} {...s} /><path d={`M${cx - 4} ${cy - 4}h8M${cx - 4} ${cy + 3}h8`} {...s} /></>}
      {i === 2 && <><circle cx={cx} cy={cy - 5} r={6} {...s} /><path d={`M${cx - 11} ${cy + 13}a11 9 0 0 1 22 0`} {...s} /></>}
      {i === 3 && <path d={`M${cx - 11} ${cy + 11}V${cy + 2}M${cx} ${cy + 11}V${cy - 4}M${cx + 11} ${cy + 11}V${cy - 11}`} {...s} />}
    </g>
  );
}

function ActionIcon({ i, cx, cy }: { i: number; cx: number; cy: number }) {
  const g = "#8a8f99";
  if (i === 0) return (
    <g fill={g}>
      {[-15, -5, 5].map((dx) => <rect key={dx} x={cx + dx} y={cy - 24} width={9} height={26} rx={4.5} />)}
      <rect x={cx + 15} y={cy - 16} width={9} height={20} rx={4.5} />
      <path d={`M${cx - 16} ${cy - 2}h40v8c0 12-8 20-20 20s-20-6-25-16l-6-12c-1-3 3-6 6-3l5 5z`} />
    </g>
  );
  if (i === 1) return (
    <g fill={g}>
      <rect x={cx - 13} y={cy - 24} width={26} height={12} rx={2} />
      <rect x={cx - 24} y={cy - 10} width={48} height={22} rx={4} />
      <rect x={cx - 13} y={cy + 4} width={26} height={18} rx={2} fill="#fff" stroke={g} strokeWidth={3} />
    </g>
  );
  if (i === 2) return <g><circle cx={cx} cy={cy} r={22} fill={g} /><path d={`M${cx} ${cy - 11}v22M${cx - 11} ${cy}h22`} stroke="#fff" strokeWidth={5} strokeLinecap="round" /></g>;
  if (i === 3) return (
    <g>
      <path fill={g} d={`M${cx} ${cy - 24}l6 6 8-2 2 8 7 4-3 8 3 8-7 4-2 8-8-2-6 6-6-6-8 2-2-8-7-4 3-8-3-8 7-4 2-8 8 2z`} />
      <text x={cx} y={cy + 7} textAnchor="middle" fontSize={20} fontWeight={800} fill="#fff">%</text>
    </g>
  );
  return <g><circle cx={cx} cy={cy} r={22} fill={g} /><circle cx={cx} cy={cy - 6} r={7} fill="#fff" /><path d={`M${cx - 12} ${cy + 15}a12 10 0 0 1 24 0z`} fill="#fff" /></g>;
}

export default function SaleScreen({ products = retailProducts, lines = retailLines, height = 900 }: { products?: Product[]; lines?: Line[]; height?: number }) {
  const H = height;
  const total = lines.reduce((s, [, q, e]) => s + q * e, 0);
  const items = lines.reduce((s, [, q]) => s + q, 0);
  const rows = Math.ceil((H - 195) / 166);
  const panelTop = H - 244;
  const summary: [string, string, string, string][] = [
    ["DISCOUNT", money(0), "TAX", money(total / 6)],
    ["OTHER CHARGES", money(0), "SUB TOTAL", money(total)],
    ["ITEMS", String(items), "TOTAL", money(total)],
  ];
  return (
    <svg viewBox={`0 0 1600 ${H}`} className="block h-full w-full" fontFamily="inherit" aria-hidden>
      <rect width={1600} height={H} fill="#fff" />

      {/* Logo */}
      <g transform="translate(30 26) scale(1.25)">
        <rect width={48} height={48} rx={10} fill={NAVY} />
        <path fill="#fff" fillRule="evenodd" d="M13 13h12.5c5 0 8 3 8 7.2 0 3.4-1.9 5.8-4.9 6.7L34 35h-7.8l-4.7-7.6H20V35h-7zm7 5.6v3.6h4.8c1.2 0 1.9-.7 1.9-1.8s-.7-1.8-1.9-1.8z" />
        <path fill="#fff" d="M34 8h7v7z" />
      </g>
      <text x={102} y={68} fontSize={34} fontWeight={700} fill={NAVY} letterSpacing={-0.5}>tradewith<tspan fontWeight={800}>ray</tspan></text>

      {/* Tabs */}
      {tabs.map((t, i) => {
        const x = 350 + i * 105, on = i === 0, c = on ? "#fff" : NAVY;
        return (
          <g key={t}>
            {on && <rect x={x} y={6} width={100} height={100} rx={10} fill={NAVY} />}
            <TabIcon i={i} cx={x + 50} cy={44} c={c} />
            <text x={x + 50} y={94} textAnchor="middle" fontSize={16} fontWeight={700} fill={c}>{t}</text>
          </g>
        );
      })}
      <path d="M840 38h40M840 53h40M840 68h40" stroke={NAVY} strokeWidth={5} strokeLinecap="round" />

      {/* Nav */}
      {navLinks.map(([t, x]) => <text key={t} x={x} y={155} fontSize={22} fontWeight={700} fill={NAVY}>{t}</text>)}
      <path d="M20 176H900" stroke={NAVY} strokeWidth={2} />
      <rect x={905} y={186} width={6} height={44} rx={3} fill={NAVY} />

      {/* Products */}
      {Array.from({ length: rows * 4 }, (_, k) => {
        const [a, b, p] = products[k % products.length];
        const x = 30 + (k % 4) * 216, y = 195 + Math.floor(k / 4) * 166;
        return (
          <g key={k}>
            <rect x={x} y={y} width={200} height={150} rx={14} fill="#fff" stroke={NAVY} strokeWidth={3} />
            <text x={x + 100} y={y + 48} textAnchor="middle" fontSize={20} fontWeight={600} fill={NAVY}>{a}</text>
            <text x={x + 100} y={y + 76} textAnchor="middle" fontSize={20} fontWeight={600} fill={NAVY}>{b}</text>
            <text x={x + 100} y={y + 110} textAnchor="middle" fontSize={20} fontWeight={600} fill="#374151">£{p}</text>
            <circle cx={x + 178} cy={y + 128} r={10} fill="#dbeafe" stroke="#3b9cf5" strokeWidth={3} />
          </g>
        );
      })}

      {/* Actions */}
      {actions.map((t, i) => {
        const x = 932 + i * 133;
        return (
          <g key={t}>
            <rect x={x} y={6} width={124} height={108} rx={10} fill="#fff" stroke={NAVY} strokeWidth={3} />
            <ActionIcon i={i} cx={x + 62} cy={48} />
            <text x={x + 62} y={98} textAnchor="middle" fontSize={i === 2 ? 16 : 19} fontWeight={700} fill={NAVY}>{t}</text>
          </g>
        );
      })}

      {/* Basket */}
      <g fontSize={22} fontWeight={700} fill="#111827">
        <text x={945} y={165}>Item</text>
        <text x={1290} y={165} textAnchor="middle">Qty</text>
        <text x={1400} y={165} textAnchor="middle">Each</text>
        <text x={1575} y={165} textAnchor="end">Total</text>
      </g>
      {lines.slice(0, Math.floor((panelTop - 195) / 56)).map(([n, q, e], i) => {
        const y = 182 + i * 56;
        return (
          <g key={n} fontSize={21} fontWeight={600} fill="#111827">
            <rect x={935} y={y} width={652} height={48} rx={8} fill="#f0f1f3" />
            <text x={948} y={y + 32}>{n}</text>
            <text x={1290} y={y + 32} textAnchor="middle">{q}</text>
            <text x={1400} y={y + 32} textAnchor="middle">{money(e)}</text>
            <text x={1575} y={y + 32} textAnchor="end">{money(q * e)}</text>
          </g>
        );
      })}

      {/* Summary */}
      <rect x={935} y={panelTop} width={652} height={172} rx={10} fill="#fff" stroke="#cfd4dc" strokeWidth={2} />
      <path d={`M935 ${panelTop + 34}v-24a10 10 0 0 1 10-10h632a10 10 0 0 1 10 10v24z`} fill={NAVY} />
      <path d={`M1552 ${panelTop + 13}l9 9 9-9`} fill="none" stroke="#fff" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d={`M1261 ${panelTop + 34}v138`} stroke="#cfd4dc" strokeWidth={2} />
      {summary.map(([l1, v1, l2, v2], i) => {
        const y = panelTop + 34 + i * 46, last = i === 2;
        return (
          <g key={l1} fontWeight={700} fill="#111827">
            {i > 0 && <path d={`M935 ${y}h652`} stroke="#cfd4dc" strokeWidth={2} />}
            <text x={946} y={y + 30} fontSize={17}>{l1}</text>
            <text x={1250} y={y + 30} fontSize={17} textAnchor="end">{v1}</text>
            <text x={1273} y={y + 30} fontSize={17}>{l2}</text>
            <text x={1576} y={y + (last ? 33 : 30)} fontSize={last ? 28 : 17} fontWeight={last ? 800 : 700} textAnchor="end">{v2}</text>
          </g>
        );
      })}

      {/* Buttons */}
      <g fontSize={24} fontWeight={700} textAnchor="middle">
        <rect x={935} y={H - 62} width={150} height={56} rx={6} fill="#fff" stroke="#dc2626" strokeWidth={3} />
        <text x={1010} y={H - 25} fill="#dc2626">CANCEL</text>
        <rect x={1095} y={H - 62} width={225} height={56} rx={6} fill="#fff" stroke={NAVY} strokeWidth={3} />
        <text x={1207} y={H - 25} fill={NAVY}>HOLD</text>
        <rect x={1330} y={H - 62} width={257} height={56} rx={6} fill="#fff" stroke="#16a34a" strokeWidth={3} />
        <text x={1458} y={H - 25} fill="#16a34a">PAY</text>
      </g>
    </svg>
  );
}
