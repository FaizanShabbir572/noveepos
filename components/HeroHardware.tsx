import { brand } from "@/lib/site";
import { LogoMark } from "./Logo";

// Banner ke liye CSS se bana poora hardware set (terminal, cash drawer, printer, scanner, card machine)
export function Mark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-[0.35em] whitespace-nowrap font-semibold lowercase ${className}`}>
      <LogoMark className="h-[1.4em] w-[1.4em] shrink-0" />
      <span>{brand.name.slice(0, -3)}<span className="font-extrabold">{brand.name.slice(-3)}</span></span>
    </span>
  );
}

const shopTiles = ["Fruits", "Vegetables", "Milk", "Bakery", "Cosmetics", "Snacks", "Soft Drinks", "Meat", "Tea & Coffee", "Kids", "Toys", "Home Care"];
const shopLines: [string, string][] = [["Strawberry Biscuits", "3.50"], ["Large Pizza", "11.50"], ["Orange Juice", "2.80"]];

// Screen par dikhne wale tiles/order lines page ke hisaab se badle ja sakte hain
export default function HeroHardware({ tiles = shopTiles, lines = shopLines, total = "£17.80" }: { tiles?: string[]; lines?: [string, string][]; total?: string }) {
  return (
    <div role="img" aria-label={`${brand.name} POS hardware bundle`} className="relative mx-auto aspect-[4/3] w-full max-w-2xl select-none">
      <div aria-hidden className="absolute inset-0">
        {/* Rear customer display */}
        <div className="absolute left-[37%] top-0 h-[30%] w-[44%] rounded-t-xl bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg" />

        {/* Main screen */}
        <div className="absolute left-[31%] top-[6%] z-10 flex h-[50%] w-[56%] flex-col rounded-xl bg-gradient-to-b from-gray-800 to-gray-950 p-[1.5%] shadow-2xl">
          <div className="flex flex-1 gap-[2%] overflow-hidden rounded-sm bg-white p-[1.5%] text-[clamp(3px,0.75vw,7px)] leading-tight text-gray-600">
            <div className="flex w-[62%] flex-col gap-[3%]">
              <div className="flex items-center justify-between border-b pb-[2%]">
                <Mark className="text-[clamp(4px,1vw,9px)] text-brand-dark" />
                <span>Home · Orders · Refund</span>
              </div>
              <div className="grid flex-1 grid-cols-4 gap-[3%]">
                {tiles.map((t, i) => (
                  <div key={t} className={`grid place-items-center rounded-[2px] border text-center font-medium ${i === 1 ? "border-brand-dark bg-brand-dark text-white" : "border-gray-300"}`}>{t}</div>
                ))}
              </div>
            </div>
            <div className="flex flex-1 flex-col border-l pl-[3%]">
              <div className="mb-[4%] flex justify-between font-bold text-gray-700"><span>Item</span><span>Total</span></div>
              {lines.map(([n, p]) => (
                <div key={n} className="flex justify-between border-b border-dashed py-[3%]"><span>{n}</span><span>{p}</span></div>
              ))}
              <div className="mt-auto h-[8%] rounded-[2px] bg-brand-dark" />
              <div className="flex justify-between py-[3%] font-bold text-gray-800"><span>Total</span><span>{total}</span></div>
              <div className="flex gap-[4%]">
                <div className="flex-1 rounded-[2px] border border-red-500 text-center text-red-500">Cancel</div>
                <div className="flex-1 rounded-[2px] border border-green-600 text-center text-green-600">Order</div>
              </div>
            </div>
          </div>
          <div className="grid h-[12%] place-items-center">
            <Mark className="text-[clamp(5px,1.1vw,11px)] text-gray-300" />
          </div>
        </div>

        {/* Stand */}
        <div className="absolute left-[54%] top-[55%] h-[9%] w-[10%] bg-gradient-to-b from-gray-900 to-gray-700" />
        <div className="absolute left-[46%] top-[62%] h-[4%] w-[26%] rounded-[50%] bg-gray-800 shadow-md" />

        {/* Cash drawer */}
        <div className="absolute left-[26%] top-[65%] z-10 h-[22%] w-[56%] rounded-md bg-gradient-to-b from-gray-800 to-gray-950 shadow-2xl">
          <div className="absolute inset-x-0 top-0 h-[16%] rounded-t-md bg-gray-700" />
          <Mark className="absolute left-[24%] top-[24%] text-[clamp(5px,1.2vw,12px)] text-gray-200" />
          <div className="absolute left-1/2 top-[55%] h-[18%] w-[5%] -translate-x-1/2 rounded-full border-2 border-gray-500 bg-gray-700" />
        </div>

        {/* Receipt printer */}
        <div className="absolute left-[74%] top-[57%] z-20 h-[30%] w-[22%] rounded-lg bg-gradient-to-b from-gray-800 to-gray-950 shadow-2xl">
          <div className="absolute left-[18%] top-[-10%] h-[20%] w-[52%] rounded-t-sm bg-white shadow" />
          <div className="absolute inset-x-[10%] top-[10%] h-[8%] rounded-sm bg-gray-700" />
          <Mark className="absolute bottom-[12%] left-1/2 -translate-x-1/2 text-[clamp(4px,0.9vw,9px)] text-gray-400" />
        </div>

        {/* Barcode scanner */}
        <div className="absolute left-[17%] top-[61%] z-30 h-[33%] w-[15%]">
          <div className="absolute inset-x-0 top-0 aspect-square rounded-full bg-gradient-to-br from-gray-700 to-gray-950 p-[14%] shadow-xl">
            <div className="h-full w-full rounded-full bg-[radial-gradient(circle,#ff4d4d_0%,#a10f0f_45%,#2a0505_100%)]" />
          </div>
          <div className="absolute bottom-0 left-[10%] grid h-[45%] w-[80%] place-items-center rounded-t-lg rounded-b-sm bg-gradient-to-b from-gray-800 to-gray-950 shadow-xl">
            <Mark className="text-[clamp(4px,0.85vw,9px)] text-gray-300" />
          </div>
        </div>

        {/* Card machine */}
        <div className="absolute left-[5%] top-[58%] z-20 h-[34%] w-[14%] -rotate-12 rounded-xl bg-gradient-to-b from-gray-700 to-gray-950 p-[1.5%] shadow-xl">
          <div className="mx-auto mt-[12%] h-[30%] w-[72%] rounded-sm bg-gray-100" />
          <div className="mx-auto mt-[10%] grid w-[72%] grid-cols-3 gap-[8%]">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className={`aspect-[3/2] rounded-[2px] ${i === 9 ? "bg-red-500" : i === 10 ? "bg-yellow-400" : i === 11 ? "bg-green-500" : "bg-gray-500"}`} />
            ))}
          </div>
        </div>

        {/* Floor shadow */}
        <div className="absolute bottom-[2%] left-[6%] h-[6%] w-[90%] rounded-[50%] bg-slate-900/20 blur-md" />
      </div>
    </div>
  );
}
