import { brand, productPills } from "@/lib/site";

const bars = [40, 65, 50, 80, 60, 95, 75];
export default function Analytics() {
  return (
    <section id="hospitality" className="py-20">
      <div className="container-x">
        <div className="text-center">
          <h2 className="section-title">Monitor Your Business Analytics</h2>
          <p className="section-sub">Keep track of your sales</p>
        </div>
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="leading-relaxed text-gray-600">
              {brand.name} gives you a detailed view of your growth and performance in a single click. Built for both retail and hospitality, it runs in the cloud — so your sales reports are available even when you&apos;re away from the shop. Want to know your best sellers, transactions or stock levels? It&apos;s all there.
            </p>
            <h4 className="mt-6 text-xl font-bold text-ink">See your business stats any time, every day!</h4>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-100">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-semibold">Weekly Sales</span>
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">+18.4%</span>
            </div>
            <div className="flex h-48 items-end gap-3">
              {bars.map((h, i) => (
                <div key={i} className="flex h-full flex-1 flex-col items-center gap-2">
                  <div className="flex w-full flex-1 items-end"><div className="w-full rounded-t-md bg-gradient-to-t from-brand to-[#5b8def]" style={{ height: `${h}%` }} /></div>
                  <span className="text-xs text-gray-500">{"MTWTFSS"[i]}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[["£12.4k","Revenue"],["842","Orders"],["£14.7","Avg Basket"]].map(([v,l]) => (
                <div key={l} className="rounded-lg bg-gray-50 py-3"><div className="font-bold text-brand">{v}</div><div className="text-xs text-gray-500">{l}</div></div>
              ))}
            </div>
          </div>
        </div>
        <div id="hardware" className="mt-14 flex flex-wrap justify-center gap-3">
          {productPills.map((p) => (
            <a key={p} href="#" className="rounded-full border-2 border-brand px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-brand transition hover:bg-brand hover:text-white">{p}</a>
          ))}
        </div>
      </div>
    </section>
  );
}
