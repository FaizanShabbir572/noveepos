// CSS se bana POS terminal ka illustration (koi copied image nahi)
export default function PosMockup({ className = "" }: { className?: string }) {
  const items = [["Latte", "3.20"], ["Croissant", "2.50"], ["Orange Juice", "2.80"], ["Bagel", "3.10"]];
  return (
    <div className={`relative mx-auto w-full max-w-md ${className}`}>
      <div className="rounded-2xl border-[10px] border-gray-800 bg-gray-800 shadow-2xl">
        <div className="grid grid-cols-5 gap-2 rounded-md bg-gray-50 p-3">
          <div className="col-span-3 grid grid-cols-3 gap-2">
            {["bg-blue-500","bg-orange-400","bg-emerald-500","bg-pink-500","bg-indigo-500","bg-amber-400","bg-cyan-500","bg-rose-400","bg-lime-500"].map((c, i) => (
              <div key={i} className={`${c} aspect-square rounded-md opacity-90`} />
            ))}
          </div>
          <div className="col-span-2 flex flex-col rounded-md bg-white p-2 text-[10px] shadow-inner">
            <div className="mb-1 font-bold text-gray-700">Order #1024</div>
            {items.map(([n, p]) => (
              <div key={n} className="flex justify-between border-b border-dashed py-1 text-gray-600"><span>{n}</span><span>£{p}</span></div>
            ))}
            <div className="mt-auto flex justify-between pt-2 font-bold text-gray-800"><span>Total</span><span>£11.60</span></div>
            <div className="mt-2 rounded bg-green-500 py-1 text-center font-bold text-white">PAY</div>
          </div>
        </div>
      </div>
      <div className="mx-auto h-10 w-16 bg-gradient-to-b from-gray-700 to-gray-500" />
      <div className="mx-auto h-3 w-48 rounded-full bg-gray-700" />
    </div>
  );
}
