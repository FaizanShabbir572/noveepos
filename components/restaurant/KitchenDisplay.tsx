import { ChefHat, Clock, Utensils } from "lucide-react";
import { brand } from "@/lib/site";

const tickets = [
  { table: "Table 4", time: "12:41", mins: 14, state: "Late", color: "bg-red-500", items: ["2× Ribeye Steak (MR)", "1× Grilled Salmon", "3× Chips", "Allergy: no nuts"] },
  { table: "Table 7", time: "12:47", mins: 8, state: "Cooking", color: "bg-accent", items: ["1× Margherita Pizza", "2× Caesar Salad", "1× Garlic Bread"] },
  { table: "Takeaway #52", time: "12:50", mins: 5, state: "Cooking", color: "bg-accent", items: ["2× Chicken Burger", "2× Sweet Potato Fries"] },
  { table: "Table 2", time: "12:36", mins: 0, state: "Ready", color: "bg-green-500", items: ["1× Lasagne", "1× Mushroom Risotto"] },
];

export default function KitchenDisplay() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[2fr_3fr]">
        <div>
          <h2 className="section-title">Kitchen Display System</h2>
          <p className="section-sub">From table to kitchen in an instant</p>
          <p className="mt-6 leading-relaxed text-gray-600">
            Paper tickets get lost, smudged and misread. The {brand.name} kitchen display sends every order straight from the till to a screen on the pass, so chefs see exactly what to cook, in what order, with notes and allergies highlighted.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            Each ticket shows how long it&apos;s been waiting, so nothing sits too long — and when a dish is bumped as ready, front-of-house knows instantly it&apos;s time to serve.
          </p>
          <ul className="mt-6 space-y-3 text-sm font-medium text-ink">
            <li className="flex items-center gap-3"><Clock className="h-5 w-5 text-brand" /> Live timers on every ticket</li>
            <li className="flex items-center gap-3"><Utensils className="h-5 w-5 text-brand" /> Courses, notes and allergies at a glance</li>
            <li className="flex items-center gap-3"><ChefHat className="h-5 w-5 text-brand" /> One tap to mark orders ready</li>
          </ul>
        </div>

        {/* KDS screen mockup */}
        <div role="img" aria-label={`${brand.name} kitchen display showing live order tickets`} className="rounded-2xl bg-gray-900 p-3 shadow-2xl">
          <div aria-hidden className="rounded-lg bg-gray-800 p-3">
            <div className="mb-3 flex items-center justify-between text-xs text-gray-400">
              <span className="font-semibold lowercase text-white">{brand.name.slice(0, -3)}<span className="text-accent">{brand.name.slice(-3)}</span> <span className="normal-case text-gray-400">· Kitchen</span></span>
              <span>4 open orders · 12:55</span>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {tickets.map((t) => (
                <div key={t.table} className="flex flex-col overflow-hidden rounded-md bg-white text-xs">
                  <div className={`${t.color} flex items-center justify-between px-2.5 py-2 font-bold text-white`}>
                    <span>{t.table}</span><span>{t.mins ? `${t.mins}m` : "✓"}</span>
                  </div>
                  <div className="flex-1 space-y-1.5 p-2.5 text-gray-700">
                    {t.items.map((i) => <div key={i} className={i.startsWith("Allergy") ? "font-semibold text-red-600" : ""}>{i}</div>)}
                  </div>
                  <div className="flex items-center justify-between border-t px-2.5 py-1.5 text-[10px] text-gray-400">
                    <span>{t.time}</span><span className="font-semibold uppercase text-gray-600">{t.state}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
