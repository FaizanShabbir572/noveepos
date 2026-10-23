import { brand } from "@/lib/site";
import { Mark } from "../HeroHardware";
import { KitchenOrders, Terminal } from "../restaurant/RestaurantHardware";

// Coffee shop banner: floor plan till + angled orders screen + printer + card machine, CSS se bane
const occupied = new Set([1, 2, 7, 8, 13, 14, 19, 25, 26, 33, 34, 39, 40]);
const floors = ["All", "Ground Floor", "1st Floor", "Terrace", "Window Bar"];
const orders = [
  { head: "bg-red-600", title: "Table 1 · #3168", items: ["2× Flat White", "1× Oat Latte (extra shot)", "2× Almond Croissant"] },
  { head: "bg-green-600", title: "Table 9 · #3170", items: ["1× Iced Caramel Latte", "1× Avocado Toast", "1× Banana Bread"] },
  { head: "bg-brand", title: "Counter · #3171", items: ["3× Cappuccino", "1× Hot Chocolate", "2× Blueberry Muffin"] },
];

function FloorPlan() {
  return (
    <div className="flex h-full flex-col p-[2%] text-[clamp(3px,0.62vw,7px)] leading-tight text-gray-600">
      <div className="mb-[1.5%] flex items-center justify-between">
        <Mark className="text-[clamp(4px,0.95vw,10px)] text-brand-dark" />
        <span className="flex gap-[1em]">{["Search Table", "Waiters", "Add Table"].map((t) => <span key={t}>{t}</span>)}</span>
      </div>
      <div className="mb-[1.5%] flex gap-[1.5%] border-b pb-[1.5%]">
        {floors.map((f, i) => <span key={f} className={`flex-1 rounded-[2px] py-[0.3em] text-center font-semibold ${i === 0 ? "bg-brand-dark text-white" : "bg-gray-100"}`}>{f}</span>)}
      </div>
      <div className="mb-[1.5%] flex justify-between rounded-[2px] border border-brand-dark/40 px-[2%] py-[0.5%] font-semibold text-brand-dark">
        <span>Free Tables: 29</span><span>Occupied Tables: 13</span><span>Today&apos;s Total: £1,486</span>
      </div>
      <div className="grid flex-1 grid-cols-6 gap-[1.5%]">
        {Array.from({ length: 42 }, (_, i) => i + 1).map((n) => (
          <div key={n} className={`grid place-items-center rounded-[2px] border font-semibold ${n === 4 ? "border-green-600 bg-green-600 text-white" : occupied.has(n) ? "border-red-500 text-red-600" : "border-green-600 text-green-700"}`}>{n}</div>
        ))}
      </div>
    </div>
  );
}

export function Printer() {
  return (
    <div className="relative h-full w-full rounded-xl bg-gradient-to-b from-gray-800 to-gray-950 shadow-2xl">
      <div className="absolute inset-x-[10%] top-0 h-[34%] rounded-t-xl bg-gradient-to-b from-gray-700 to-gray-900" />
      <div className="absolute left-[30%] top-[-12%] h-[28%] w-[42%] rounded-t-sm bg-white shadow" />
      <div className="absolute left-[24%] top-[14%] h-[5%] w-[54%] rounded-full bg-black" />
      <div className="absolute left-[12%] top-[8%] flex flex-col gap-[3px]">
        <span className="h-1 w-1 rounded-full bg-sky-400" /><span className="h-1 w-1 rounded-full bg-sky-400" />
      </div>
      <Mark className="absolute bottom-[12%] left-1/2 -translate-x-1/2 text-[clamp(4px,0.85vw,9px)] text-gray-400" />
    </div>
  );
}

function CardMachine() {
  return (
    <div className="h-full w-full rounded-xl bg-gradient-to-b from-gray-700 to-gray-950 p-[8%] shadow-2xl">
      <div className="h-[30%] rounded-sm bg-gray-100" />
      <div className="mt-[12%] grid grid-cols-3 gap-[8%]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={`aspect-[3/2] rounded-[2px] ${i === 9 ? "bg-red-500" : i === 10 ? "bg-yellow-400" : i === 11 ? "bg-green-500" : "bg-gray-500"}`} />
        ))}
      </div>
    </div>
  );
}

export default function CoffeeHardware() {
  return (
    <div role="img" aria-label={`${brand.name} coffee shop set: till with table plan, orders screen, receipt printer and card machine`} className="relative mx-auto aspect-[4/3] w-full max-w-2xl select-none">
      <div aria-hidden className="absolute inset-0">
        {/* Rear customer display */}
        <div className="absolute left-[12%] top-[2%] h-[40%] w-[60%] rounded-xl bg-gradient-to-b from-gray-700 via-gray-900 to-black shadow-xl [transform:perspective(1200px)_rotateY(-6deg)]" />
        {/* Main till with floor plan */}
        <div className="absolute left-[8%] top-[12%] w-[64%] [transform:perspective(1200px)_rotateY(-6deg)]"><Terminal><FloorPlan /></Terminal></div>
        {/* Orders screen, angled on the right */}
        <div className="absolute left-[60%] top-[18%] z-10 w-[38%] [transform:perspective(1000px)_rotateY(-30deg)]"><Terminal><KitchenOrders orders={orders} /></Terminal></div>
        {/* Receipt printer, front left */}
        <div className="absolute left-0 top-[60%] z-20 h-[28%] w-[20%] [transform:perspective(800px)_rotateY(18deg)]"><Printer /></div>
        {/* Card machine, front right */}
        <div className="absolute left-[84%] top-[58%] z-20 h-[30%] w-[12%] -rotate-12"><CardMachine /></div>
        {/* Floor shadow */}
        <div className="absolute bottom-[6%] left-[2%] h-[6%] w-[96%] rounded-[50%] bg-slate-900/25 blur-md" />
      </div>
    </div>
  );
}
