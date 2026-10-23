import { brand } from "@/lib/site";
import { Mark } from "../HeroHardware";

// Restaurants banner: do angled all-in-one terminals (table plan + kitchen orders), CSS se bane
const busy = new Set([2, 7, 8, 14, 20, 26, 34]);
const tables = [1, 2, 3, 7, 8, 9, 13, 14, 15, 19, 20, 21, 25, 26, 29, 33, 34, 35];
const details = [["Table", "2"], ["Customer", "Hussain"], ["Order No", "11285"], ["Time at table", "1h 30m"], ["Amount", "£24.00"], ["Status", "Bill sent"], ["Waiter", "Mark"]];
type Order = { head: string; title: string; items: string[] };
const restaurantOrders: Order[] = [
  { head: "bg-green-600", title: "Table 9 · #25366", items: ["4× Grilled Burger", "2× Zinger Burger", "1× Veg Burger", "1× Iced Coffee"] },
  { head: "bg-red-600", title: "Takeaway · #25368", items: ["6× Chicken Burger", "3× Zinger Burger", "2× Chicken Pizza", "5× Cheese Pizza"] },
  { head: "bg-brand", title: "Table 4 · #25369", items: ["2× Pasta Alfredo", "1× Caesar Salad", "2× Lemonade"] },
];

export function Terminal({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full rounded-[1.2rem] bg-gradient-to-b from-gray-800 via-gray-900 to-black p-[2.5%] pb-0 shadow-2xl ring-1 ring-black/40">
        <div className="aspect-[16/10] overflow-hidden rounded-sm bg-white">{children}</div>
        <div className="grid h-[clamp(14px,2.6vw,30px)] place-items-center">
          <Mark className="text-[clamp(5px,1.1vw,12px)] text-gray-300" />
        </div>
      </div>
      <div className="h-[clamp(16px,3.5vw,40px)] w-[22%] bg-gradient-to-b from-gray-900 to-gray-700 [clip-path:polygon(18%_0,82%_0,100%_100%,0_100%)]" />
      <div className="h-[clamp(8px,1.6vw,18px)] w-[62%] rounded-t-md rounded-b-[50%] bg-gradient-to-b from-gray-800 to-black shadow-xl" />
    </div>
  );
}

function TablePlan() {
  return (
    <div className="flex h-full flex-col p-[2%] text-[clamp(3px,0.62vw,7px)] leading-tight text-gray-600">
      <div className="mb-[1.5%] flex items-center justify-between border-b pb-[1.5%]">
        <Mark className="text-[clamp(4px,0.95vw,10px)] text-brand-dark" />
        <span className="flex gap-[0.6em]">{["Split Order", "Table Info", "Split Payment", "Order Table"].map((t) => <span key={t} className="rounded-[2px] border px-[0.4em]">{t}</span>)}</span>
      </div>
      <div className="flex min-h-0 flex-1 gap-[2%]">
        <div className="grid w-[48%] grid-cols-3 gap-[2.5%]">
          {tables.map((n) => (
            <div key={n} className={`grid place-items-center rounded-[2px] border font-semibold ${n === 2 ? "border-red-600 bg-red-600 text-white" : busy.has(n) ? "border-red-500 text-red-600" : "border-green-600 text-green-700"}`}>{n}</div>
          ))}
        </div>
        <div className="flex flex-1 flex-col">
          <div className="mb-[2%] rounded-[2px] bg-brand-dark px-[3%] py-[1.5%] font-semibold text-white">Table 2</div>
          {details.map(([k, v]) => (
            <div key={k} className="flex justify-between border-b border-dashed py-[1.3%]"><span>{k}</span><span className="font-semibold text-gray-800">{v}</span></div>
          ))}
          <div className="mt-auto grid grid-cols-2 gap-x-[4%] border-t pt-[2%]">
            <span>Discount <b className="float-right">0.00</b></span><span>Tax <b className="float-right">3.00</b></span>
            <span>Items <b className="float-right">2</b></span><span className="font-bold text-gray-800">Total <b className="float-right">24.00</b></span>
          </div>
          <div className="mt-[3%] flex gap-[3%] font-semibold">
            <span className="flex-1 rounded-[2px] border border-red-500 text-center text-red-600">Print Bill</span>
            <span className="flex-1 rounded-[2px] border border-brand text-center text-brand">Add</span>
            <span className="flex-1 rounded-[2px] border border-green-600 text-center text-green-700">Charge</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function KitchenOrders({ orders = restaurantOrders }: { orders?: Order[] }) {
  return (
    <div className="flex h-full flex-col p-[2%] text-[clamp(3px,0.62vw,7px)] leading-tight text-gray-600">
      <div className="mb-[2%] flex gap-[4%] border-b pb-[1.5%] font-semibold">
        <span className="text-brand">In Progress (3)</span><span>Ready (1)</span><span>Completed (12)</span>
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-3 gap-[2.5%]">
        {orders.map((o) => (
          <div key={o.title} className="flex flex-col overflow-hidden rounded-[2px] border">
            <div className={`${o.head} px-[5%] py-[3%] font-semibold text-white`}>{o.title}</div>
            {o.items.map((i) => (
              <div key={i} className="flex items-center justify-between border-b border-dashed px-[5%] py-[3%]">
                <span>{i}</span><span className="rounded-[2px] border px-[0.3em] text-[0.85em] text-brand">Done</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function RestaurantHardware() {
  return (
    <div role="img" aria-label={`Two ${brand.name} restaurant terminals showing a table plan and kitchen orders`} className="relative mx-auto aspect-[4/3] w-full max-w-2xl select-none">
      <div aria-hidden className="absolute inset-0">
        {/* Rear customer display */}
        <div className="absolute left-[16%] top-[2%] h-[44%] w-[42%] rounded-xl bg-gradient-to-br from-gray-700 via-gray-900 to-black shadow-xl [transform:perspective(1200px)_rotateY(-24deg)_rotateZ(-3deg)]" />
        {/* Back terminal: kitchen orders */}
        <div className="absolute left-[46%] top-[8%] w-[52%] [transform:perspective(1200px)_rotateY(-26deg)]"><Terminal><KitchenOrders /></Terminal></div>
        {/* Front terminal: table plan */}
        <div className="absolute left-[2%] top-[16%] z-10 w-[58%] [transform:perspective(1200px)_rotateY(-20deg)]"><Terminal><TablePlan /></Terminal></div>
        {/* Floor shadow */}
        <div className="absolute bottom-[12%] left-[6%] h-[6%] w-[90%] rounded-[50%] bg-slate-900/25 blur-md" />
      </div>
    </div>
  );
}
