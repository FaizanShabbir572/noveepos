import { Phone } from "lucide-react";
import { brand } from "@/lib/site";
import { Mark } from "../HeroHardware";
import { Terminal } from "../restaurant/RestaurantHardware";
import { Printer } from "../coffee/CoffeeHardware";

// Hardware page ke liye har device ki CSS/SVG drawing (koi copied image nahi)

const basket = [["Chicken Pizza", "1", "8.50"], ["Pepperoni Pizza", "1", "7.50"], ["Garlic Bread", "1", "4.00"], ["Coca-Cola 330ml", "2", "4.00"]];

function PaymentScreen() {
  return (
    <div className="flex h-full flex-col p-[1.5%] text-[clamp(4px,0.8vw,9px)] leading-tight text-gray-600">
      <div className="mb-[1%] flex items-center justify-between border-b pb-[1%]">
        <Mark className="text-[clamp(6px,1.3vw,14px)] text-brand-dark" />
        <span className="flex gap-[1em]">{["Takeaway", "Dine In", "User", "Change View"].map((t) => <span key={t}>{t}</span>)}</span>
      </div>
      <div className="flex min-h-0 flex-1 gap-[1.5%]">
        <div className="flex w-[14%] flex-col gap-[6%] pt-[1%]">
          {[["Point Spend", "0.00"], ["Items", "5"], ["Item Discount", "0.00"], ["Basket Discount", "0.00"], ["VAT", "4.00"]].map(([k, v]) => (
            <div key={k}><div className="font-semibold text-gray-800">{k}</div><div>{v}</div></div>
          ))}
        </div>
        <div className="flex w-[50%] flex-col gap-[2%]">
          <div className="grid grid-cols-3 font-semibold text-gray-800">
            <span>Tip<br /><b className="text-[1.3em]">1.00</b></span><span>Amount Due<br /><b className="text-[1.3em]">25.00</b></span><span>Change Due<br /><b className="text-[1.3em]">5.00</b></span>
          </div>
          <div className="flex items-center justify-between border-b pb-[1%]"><span className="font-semibold text-gray-800">Amount</span><b className="text-[1.8em] text-ink">£30.00</b></div>
          <div className="grid flex-1 grid-cols-4 gap-[2%]">
            {["1", "2", "3", "5", "4", "5", "6", "10", "7", "8", "9", "20", ".", "0", "⌫", "50"].map((k, i) => (
              <div key={i} className={`grid place-items-center rounded-[2px] text-[1.4em] font-semibold ${i % 4 === 3 ? "border border-gray-300 text-gray-800" : "bg-brand-dark text-white"}`}>{k}</div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-[2%] font-semibold">
            {["Tip", "Card", "Cash", "Split"].map((t) => <span key={t} className="rounded-[2px] border border-gray-300 py-[2%] text-center">{t}</span>)}
          </div>
        </div>
        <div className="flex flex-1 flex-col border-l pl-[2%] opacity-80">
          <div className="mb-[2%] grid grid-cols-[1fr_auto_auto] gap-x-[6%] font-semibold text-gray-800"><span>Item</span><span>Qty</span><span>Total</span></div>
          {basket.map(([n, q, p]) => (
            <div key={n} className="grid grid-cols-[1fr_auto_auto] gap-x-[6%] border-b border-dashed py-[2.5%]"><span>{n}</span><span>{q}</span><span>{p}</span></div>
          ))}
          <div className="mt-auto grid grid-cols-2 gap-x-[4%] border-t pt-[2%]">
            <span>Discount <b className="float-right">0.00</b></span><span>VAT <b className="float-right">4.00</b></span>
            <span>Items <b className="float-right">5</b></span><span className="font-bold text-gray-800">Total <b className="float-right">24.00</b></span>
          </div>
          <div className="mt-[3%] flex gap-[3%] font-semibold">
            <span className="flex-1 rounded-[2px] border border-red-500 text-center text-red-600">Print Bill</span>
            <span className="flex-1 rounded-[2px] border border-green-600 text-center text-green-700">Charge</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PosTerminal() {
  return (
    <div className="relative w-full">
      <div className="absolute left-[10%] top-[-6%] h-[30%] w-[80%] rounded-t-2xl bg-gradient-to-b from-gray-700 to-gray-900" />
      <div className="relative"><Terminal><PaymentScreen /></Terminal></div>
    </div>
  );
}

export function CashDrawer() {
  return (
    <div className="relative mx-auto w-[90%] pt-[20%]">
      {/* Open tray */}
      <div className="absolute inset-x-[6%] top-0 h-[42%] rounded-t-lg bg-gradient-to-b from-gray-600 to-gray-800 p-[3%] [transform:perspective(600px)_rotateX(38deg)]">
        <div className="grid h-full grid-cols-5 gap-[2%]">
          {["bg-purple-300", "bg-amber-200", "bg-emerald-300", "bg-sky-300", "bg-rose-300"].map((c) => <div key={c} className={`${c} rounded-sm opacity-90`} />)}
        </div>
      </div>
      <div className="relative h-[36%] rounded-md bg-gradient-to-b from-gray-800 to-gray-950 shadow-2xl" style={{ aspectRatio: "4 / 1.1" }}>
        <div className="absolute inset-x-0 top-0 h-[14%] rounded-t-md bg-gray-700" />
        <Mark className="absolute right-[5%] top-[26%] text-[clamp(8px,1.3vw,14px)] text-gray-200" />
        <div className="absolute left-1/2 top-[52%] grid h-[22%] w-[5%] -translate-x-1/2 place-items-center rounded-full border-2 border-gray-500 bg-gray-700">
          <span className="h-[40%] w-[14%] rounded bg-gray-400" />
        </div>
      </div>
    </div>
  );
}

export function ReceiptPrinter() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-[46%] pt-[12%]">
      <div className="absolute left-[30%] top-0 z-10 w-[42%] rounded-t-sm bg-white px-[4%] pt-[6%] shadow-md" style={{ height: "40%" }}>
        {[80, 60, 70, 50].map((w, i) => <div key={i} className="mb-[8%] h-[5%] rounded bg-gray-300" style={{ width: `${w}%` }} />)}
      </div>
      <div className="relative h-full"><Printer /></div>
    </div>
  );
}

export function Scanners() {
  return (
    <div className="relative mx-auto flex w-[80%] items-end justify-center gap-[10%]">
      {/* Omnidirectional scanner */}
      <div className="relative w-[38%]">
        <div className="aspect-square rounded-full bg-gradient-to-br from-gray-700 to-gray-950 p-[14%] shadow-xl">
          <div className="h-full w-full rounded-full bg-[radial-gradient(circle,#ff4d4d_0%,#a10f0f_45%,#2a0505_100%)]" />
        </div>
        <div className="mx-auto -mt-[6%] grid aspect-[5/3] w-[80%] place-items-center rounded-t-lg rounded-b-sm bg-gradient-to-b from-gray-800 to-gray-950 shadow-xl">
          <Mark className="text-[clamp(7px,1.1vw,12px)] text-gray-300" />
        </div>
      </div>
      {/* Wireless handheld scanner */}
      <svg viewBox="0 0 120 200" className="w-[34%] drop-shadow-xl" aria-hidden>
        <defs><linearGradient id="hand" x1="0" x2="1"><stop offset="0" stopColor="#374151" /><stop offset="1" stopColor="#0b0f19" /></linearGradient></defs>
        <path d="M20 20h80a10 10 0 0 1 10 10v40a10 10 0 0 1-10 10H78l-8 100a12 12 0 0 1-12 10H44a10 10 0 0 1-10-11l10-99H20a10 10 0 0 1-10-10V30a10 10 0 0 1 10-10z" fill="url(#hand)" />
        <rect x="18" y="28" width="16" height="44" rx="4" fill="#ef4444" opacity=".85" />
        <rect x="56" y="96" width="12" height="20" rx="4" fill="#ff7a00" />
        <path d="M0 42 14 50M0 50h14M0 58l14-8" stroke="#ef4444" strokeWidth="2" opacity=".7" />
        <text x="40" y="56" fill="#d1d5db" fontSize="9.5" fontWeight="700" fontFamily="inherit">{brand.name.slice(0, -3).toLowerCase()}<tspan fontWeight="800">{brand.name.slice(-3).toLowerCase()}</tspan></text>
      </svg>
    </div>
  );
}

export function PaymentTerminal() {
  return (
    <div className="relative mx-auto w-[36%] -rotate-6 rounded-[1.6rem] bg-gradient-to-b from-gray-700 to-gray-950 p-[5%] shadow-2xl">
      <div className="rounded-md bg-white p-[8%] text-center">
        <div className="text-[clamp(8px,1.1vw,12px)] text-gray-500">Amount due</div>
        <div className="text-[clamp(14px,2.2vw,26px)] font-extrabold text-ink">£24.00</div>
        <div className="mx-auto mt-1 w-fit rounded-full bg-green-100 px-2 py-0.5 text-[clamp(7px,0.9vw,10px)] font-bold text-green-700">Tap, insert or swipe</div>
      </div>
      <div className="mt-[10%] grid grid-cols-3 gap-[8%]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={`aspect-[3/2] rounded ${i === 9 ? "bg-red-500" : i === 10 ? "bg-yellow-400" : i === 11 ? "bg-green-500" : "bg-gray-500"}`} />
        ))}
      </div>
      <div className="mt-[8%] text-center"><Mark className="text-[clamp(7px,1vw,11px)] text-gray-300" /></div>
    </div>
  );
}

export function CallerId() {
  return (
    <div className="relative mx-auto w-[60%]">
      <div className="rounded-2xl bg-gradient-to-b from-gray-700 to-gray-950 p-[5%] shadow-2xl [transform:perspective(700px)_rotateX(20deg)]">
        <div className="rounded-md bg-[#cfe8d4] p-[5%] font-mono text-[clamp(8px,1.3vw,15px)] text-gray-800 shadow-inner">
          <div className="flex justify-between text-[0.75em]"><span>INCOMING</span><span>12:41</span></div>
          <div className="mt-1 flex items-center gap-2 font-bold"><Phone className="h-[1.1em] w-[1.1em]" /> 07700 900123</div>
          <div className="text-[0.75em]">Returning customer · 6 orders</div>
        </div>
        <div className="mt-[5%] flex items-center justify-between">
          <div className="flex gap-[6px]">{["bg-gray-500", "bg-gray-500", "bg-gray-500"].map((c, i) => <span key={i} className={`h-2.5 w-6 rounded ${c}`} />)}</div>
          <Mark className="text-[clamp(7px,1vw,11px)] text-gray-300" />
        </div>
      </div>
    </div>
  );
}

export function KeyboardMouse() {
  return (
    <div className="relative mx-auto flex w-[92%] items-end gap-[4%] [transform:perspective(900px)_rotateX(35deg)]">
      <div className="flex-1 rounded-xl bg-gradient-to-b from-gray-700 to-gray-950 p-[2.5%] shadow-2xl">
        {[14, 14, 13, 12].map((n, r) => (
          <div key={r} className="mb-[1.2%] flex gap-[1.2%]">
            {Array.from({ length: n }).map((_, k) => <span key={k} className="aspect-square flex-1 rounded-[3px] bg-gray-800 shadow-[inset_0_-2px_0_rgba(0,0,0,.5)]" />)}
          </div>
        ))}
        <div className="flex gap-[1.2%]">
          <span className="aspect-[2/1] flex-[2] rounded-[3px] bg-gray-800" />
          <span className="flex-[7] rounded-[3px] bg-gray-800" />
          <span className="aspect-[2/1] flex-[2] rounded-[3px] bg-gray-800" />
        </div>
      </div>
      <div className="relative aspect-[3/5] w-[13%] rounded-[50%_50%_45%_45%/40%_40%_60%_60%] bg-gradient-to-b from-gray-700 to-gray-950 shadow-2xl">
        <span className="absolute left-1/2 top-0 h-[38%] w-px bg-gray-500" />
        <span className="absolute left-1/2 top-[12%] h-[12%] w-[10%] -translate-x-1/2 rounded-full bg-accent" />
      </div>
    </div>
  );
}
