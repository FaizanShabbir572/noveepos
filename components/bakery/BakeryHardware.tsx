import { brand } from "@/lib/site";
import { Mark } from "../HeroHardware";
import { KitchenOrders, Terminal } from "../restaurant/RestaurantHardware";

// Bakeries & Delis banner: bara samne wala till + angled orders screen, CSS se bane
const cats = ["Breads", "Pastries", "Cakes", "Sandwiches", "Deli Meats", "Cheese", "Salads", "Hot Drinks"];
const products = [["Sourdough Loaf", "3.80"], ["Butter Croissant", "1.90"], ["Pain au Choc", "2.10"], ["Cinnamon Roll", "2.60"], ["Ham & Cheese Baguette", "4.50"], ["Victoria Sponge Slice", "3.20"], ["Italian Salami 100g", "3.40"], ["Mature Cheddar 200g", "3.10"], ["Flat White", "3.00"]];
const basket = [["2× Butter Croissant", "3.80"], ["1× Sourdough Loaf", "3.80"], ["1× Ham & Cheese Baguette", "4.50"], ["1× Flat White", "3.00"]];
const orders = [
  { head: "bg-red-600", title: "Collection · #4102", items: ["1× Birthday Cake 8\"", "Message: Happy 30th Amy", "12× Cupcakes (vanilla)"] },
  { head: "bg-green-600", title: "Counter · #4105", items: ["3× Turkey Club", "2× Tuna Melt", "1× Greek Salad", "3× Latte"] },
  { head: "bg-brand", title: "Online · #4107", items: ["6× Sausage Roll", "2× Sourdough Loaf", "1× Deli Platter (large)"] },
];

function BakeryTill() {
  return (
    <div className="flex h-full flex-col p-[2%] text-[clamp(3px,0.62vw,7px)] leading-tight text-gray-600">
      <div className="mb-[1.5%] flex items-center justify-between border-b pb-[1.5%]">
        <Mark className="text-[clamp(4px,0.95vw,10px)] text-brand-dark" />
        <span className="flex gap-[0.6em]">{["Eat In", "Takeout", "Orders", "Refund"].map((t, i) => <span key={t} className={`rounded-[2px] border px-[0.4em] ${i === 0 ? "border-brand-dark bg-brand-dark text-white" : ""}`}>{t}</span>)}</span>
      </div>
      <div className="flex min-h-0 flex-1 gap-[2%]">
        <div className="flex w-[60%] flex-col gap-[2%]">
          <div className="grid grid-cols-4 gap-[2%]">
            {cats.map((c, i) => <div key={c} className={`rounded-[2px] border py-[3%] text-center font-semibold ${i === 1 ? "border-accent bg-accent text-white" : "border-gray-300"}`}>{c}</div>)}
          </div>
          <div className="grid flex-1 grid-cols-3 gap-[2%]">
            {products.map(([n, p]) => (
              <div key={n} className="flex flex-col justify-between rounded-[2px] border border-green-600/60 bg-green-50/50 p-[4%]">
                <span className="font-medium text-gray-700">{n}</span><span className="font-bold text-green-700">£{p}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="mb-[2%] rounded-[2px] bg-brand-dark px-[3%] py-[1.5%] font-semibold text-white">Order #4108 · Eat in</div>
          {basket.map(([n, p]) => (
            <div key={n} className="flex justify-between border-b border-dashed py-[1.8%]"><span>{n}</span><span className="font-semibold text-gray-800">{p}</span></div>
          ))}
          <div className="mt-auto grid grid-cols-2 gap-x-[4%] border-t pt-[2%]">
            <span>Discount <b className="float-right">0.00</b></span><span>VAT <b className="float-right">1.25</b></span>
            <span>Items <b className="float-right">5</b></span><span className="font-bold text-gray-800">Total <b className="float-right">15.10</b></span>
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

export default function BakeryHardware() {
  return (
    <div role="img" aria-label={`Two ${brand.name} bakery terminals showing the till and live orders`} className="relative mx-auto aspect-[4/3] w-full max-w-2xl select-none">
      <div aria-hidden className="absolute inset-0">
        {/* Rear customer display */}
        <div className="absolute left-[6%] top-[4%] h-[40%] w-[60%] rounded-xl bg-gradient-to-b from-gray-700 via-gray-900 to-black shadow-xl [transform:perspective(1200px)_rotateY(-6deg)]" />
        {/* Main till, almost facing the viewer */}
        <div className="absolute left-[2%] top-[14%] w-[66%] [transform:perspective(1200px)_rotateY(-6deg)]"><Terminal><BakeryTill /></Terminal></div>
        {/* Orders screen, angled in front on the right */}
        <div className="absolute left-[56%] top-[20%] z-10 w-[42%] [transform:perspective(1000px)_rotateY(-30deg)]"><Terminal><KitchenOrders orders={orders} /></Terminal></div>
        {/* Floor shadow */}
        <div className="absolute bottom-[8%] left-[6%] h-[6%] w-[90%] rounded-[50%] bg-slate-900/25 blur-md" />
      </div>
    </div>
  );
}
