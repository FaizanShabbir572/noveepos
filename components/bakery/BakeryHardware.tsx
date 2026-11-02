import { brand } from "@/lib/site";
import { KitchenOrders, Terminal } from "../restaurant/RestaurantHardware";
import SaleScreen from "../SaleScreen";

// Bakeries & Delis banner: bara samne wala till + angled orders screen, CSS se bane
const bakeryProducts: [string, string, string][] = [
  ["Sourdough", "Loaf 800g", "3.80"], ["Butter", "Croissant", "1.90"], ["Pain au", "Chocolat", "2.10"], ["Cinnamon", "Roll", "2.60"],
  ["Ham & Cheese", "Baguette", "4.50"], ["Victoria", "Sponge Slice", "3.20"], ["Italian Salami", "100g", "3.40"], ["Mature", "Cheddar 200g", "3.10"],
  ["Flat White", "Regular", "3.00"], ["Sausage", "Roll", "1.80"], ["Blueberry", "Muffin", "2.40"], ["Tuna Melt", "Toastie", "4.20"],
  ["Granary", "Loaf 800g", "3.20"], ["Carrot Cake", "Slice", "3.30"], ["Greek Salad", "Bowl", "5.50"], ["Latte", "Regular", "3.10"],
  ["Bagel", "Plain", "1.40"], ["Brownie", "Chocolate", "2.50"], ["Scone", "Fruit", "1.70"], ["Hot Chocolate", "Regular", "3.20"],
];
const bakeryLines: [string, number, number][] = [
  ["Butter Croissant", 2, 1.9], ["Sourdough Loaf 800g", 1, 3.8], ["Ham & Cheese Baguette", 1, 4.5], ["Flat White Regular", 1, 3.0], ["Carrot Cake Slice", 1, 3.3],
];
const orders = [
  { head: "bg-red-600", title: "Collection · #4102", items: ["1× Birthday Cake 8\"", "Message: Happy 30th Amy", "12× Cupcakes (vanilla)"] },
  { head: "bg-green-600", title: "Counter · #4105", items: ["3× Turkey Club", "2× Tuna Melt", "1× Greek Salad", "3× Latte"] },
  { head: "bg-brand", title: "Online · #4107", items: ["6× Sausage Roll", "2× Sourdough Loaf", "1× Deli Platter (large)"] },
];

export default function BakeryHardware() {
  return (
    <div role="img" aria-label={`Two ${brand.name} bakery terminals showing the till and live orders`} className="relative mx-auto aspect-[4/3] w-full max-w-2xl select-none">
      <div aria-hidden className="absolute inset-0">
        {/* Rear customer display */}
        <div className="absolute left-[6%] top-[4%] h-[40%] w-[60%] rounded-xl bg-gradient-to-b from-gray-700 via-gray-900 to-black shadow-xl [transform:perspective(1200px)_rotateY(-6deg)]" />
        {/* Main till, almost facing the viewer */}
        <div className="absolute left-[2%] top-[14%] w-[66%] [transform:perspective(1200px)_rotateY(-6deg)]"><Terminal><SaleScreen products={bakeryProducts} lines={bakeryLines} height={1000} /></Terminal></div>
        {/* Orders screen, angled in front on the right */}
        <div className="absolute left-[56%] top-[20%] z-10 w-[42%] [transform:perspective(1000px)_rotateY(-30deg)]"><Terminal><KitchenOrders orders={orders} /></Terminal></div>
        {/* Floor shadow */}
        <div className="absolute bottom-[8%] left-[6%] h-[6%] w-[90%] rounded-[50%] bg-slate-900/25 blur-md" />
      </div>
    </div>
  );
}
