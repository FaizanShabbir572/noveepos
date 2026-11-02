import { Boxes, LayoutDashboard, Package, Receipt, Settings, ShoppingBag, TrendingUp, Users } from "lucide-react";
import { brand } from "@/lib/site";
import { Mark } from "@/components/HeroHardware";

const nav = [[LayoutDashboard, "Home"], [Receipt, "Sales"], [Boxes, "Stock"], [Users, "Customers"], [Package, "Suppliers"], [Settings, "Settings"]] as const;
const kpis = [["Today's Sales", "£2,486", "+12%"], ["Transactions", "164", "+8%"], ["Avg Basket", "£15.16", "+3%"], ["Low Stock", "7 items", ""]];
type Top = (readonly [string, number])[];
const shopTop: Top = [["Semi-Skimmed Milk 2L", 86], ["White Bread 800g", 72], ["Free Range Eggs x6", 58], ["Orange Juice 1L", 41]];
const line = [22, 30, 26, 38, 34, 46, 42, 55, 50, 62, 58, 70];

// Back office ka home screen — CSS/SVG mockup
function Dashboard({ shop, top }: { shop: string; top: Top }) {
  const pts = line.map((v, i) => `${(i / (line.length - 1)) * 300},${80 - v}`).join(" ");
  return (
    <div role="img" aria-label={`${brand.name} back office home screen`} className="overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-gray-200">
      <div aria-hidden className="flex items-center gap-2 border-b bg-gray-50 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-amber-400" /><span className="h-3 w-3 rounded-full bg-green-400" />
        <span className="ml-3 hidden flex-1 rounded bg-white px-3 py-1 text-xs text-gray-400 ring-1 ring-gray-200 sm:block">backoffice.{brand.name.toLowerCase()}.app/home</span>
      </div>
      <div aria-hidden className="flex">
        <aside className="hidden w-44 shrink-0 bg-ink p-4 text-sm text-gray-400 md:block">
          <div className="mb-6 text-white"><Mark /></div>
          {nav.map(([I, l], i) => (
            <div key={l} className={`mb-1 flex items-center gap-2 rounded-md px-3 py-2 ${i === 0 ? "bg-brand text-white" : ""}`}><I className="h-4 w-4" />{l}</div>
          ))}
        </aside>
        <div className="min-w-0 flex-1 bg-gray-50 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div><div className="text-lg font-bold text-ink">Good morning, {shop}</div><div className="text-xs text-gray-500">High Street branch · 3 tills online</div></div>
            <span className="hidden rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700 sm:inline">Synced</span>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {kpis.map(([l, v, d]) => (
              <div key={l} className="rounded-lg bg-white p-3 shadow-sm">
                <div className="text-xs text-gray-500">{l}</div>
                <div className="mt-1 text-lg font-bold text-ink">{v}</div>
                {d ? <div className="text-xs font-semibold text-green-600">{d} vs last week</div> : <div className="text-xs font-semibold text-accent">Reorder soon</div>}
              </div>
            ))}
          </div>
          <div className="mt-4 grid gap-4 lg:grid-cols-5">
            <div className="rounded-lg bg-white p-4 shadow-sm lg:col-span-3">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold"><TrendingUp className="h-4 w-4 text-brand" /> Sales today (hourly)</div>
              <svg viewBox="0 0 300 84" className="h-36 w-full" preserveAspectRatio="none">
                <defs><linearGradient id="dash-area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#0b5ed7" stopOpacity=".3" /><stop offset="1" stopColor="#0b5ed7" stopOpacity="0" /></linearGradient></defs>
                {[20, 40, 60].map((y) => <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="#eef2f7" />)}
                <polygon points={`0,84 ${pts} 300,84`} fill="url(#dash-area)" />
                <polyline points={pts} fill="none" stroke="#0b5ed7" strokeWidth="2.5" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm lg:col-span-2">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold"><ShoppingBag className="h-4 w-4 text-accent" /> Best sellers</div>
              {top.map(([n, v]) => (
                <div key={n} className="mb-3">
                  <div className="flex justify-between text-xs text-gray-600"><span className="truncate">{n}</span><span className="font-semibold">{v}</span></div>
                  <div className="mt-1 h-1.5 rounded-full bg-gray-100"><div className="h-full rounded-full bg-brand" style={{ width: `${v}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SectorAnalytics({ sub = "Keep track of your sales", shop = "Corner Shop", top = shopTop }: { sub?: string; shop?: string; top?: Top }) {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container-x">
        <div className="text-center">
          <h2 className="section-title">Monitor Your Business Analytics</h2>
          <p className="section-sub">{sub}</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-8 text-gray-600 md:grid-cols-2">
          <p className="leading-relaxed">
            One click shows you how your business is really doing. Reports live in the cloud, so you can check them from anywhere — even when you&apos;re not behind the counter. Spot your best sellers, review every transaction and compare this week with last.
          </p>
          <p className="leading-relaxed">
            Stay on top of stock without the guesswork. {brand.name} tracks levels as you sell, warns you before shelves run empty, and lets you top up through purchase orders or quick manual adjustments.
          </p>
        </div>
        <h4 className="mt-14 text-center text-2xl font-bold text-ink">Access your business stats all day and every day!</h4>
        <div className="mx-auto mt-8 max-w-5xl"><Dashboard shop={shop} top={top} /></div>
      </div>
    </section>
  );
}
