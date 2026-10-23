import { CreditCard, Nfc, ShieldCheck, Wifi } from "lucide-react";
import { brand } from "@/lib/site";

const points = [
  [ShieldCheck, "Secure, PCI-compliant card processing"],
  [Nfc, "Contactless, Apple Pay & Google Pay"],
  [Wifi, "Wireless terminal for pay-at-table"],
] as const;

export default function PaymentsBand() {
  return (
    <section className="py-20">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        {/* Card machine illustration */}
        <div role="img" aria-label={`${brand.name} integrated card terminal`} className="relative mx-auto grid aspect-square w-full max-w-sm place-items-center rounded-3xl bg-gradient-to-b from-[#c6e6f8] to-[#7fb0e2]">
          <div aria-hidden className="relative w-[46%] -rotate-6 rounded-[1.4rem] bg-gradient-to-b from-gray-700 to-gray-950 p-[5%] shadow-2xl">
            <div className="rounded-md bg-white p-[8%] text-center">
              <div className="text-[clamp(8px,1.2vw,12px)] text-gray-500">Amount due</div>
              <div className="text-[clamp(14px,2.4vw,24px)] font-extrabold text-ink">£15.10</div>
              <div className="mx-auto mt-1 flex w-fit items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-[clamp(7px,1vw,10px)] font-bold text-green-700"><Nfc className="h-3 w-3" /> Tap to pay</div>
            </div>
            <div className="mt-[10%] grid grid-cols-3 gap-[8%]">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className={`aspect-[3/2] rounded ${i === 9 ? "bg-red-500" : i === 10 ? "bg-yellow-400" : i === 11 ? "bg-green-500" : "bg-gray-500"}`} />
              ))}
            </div>
            <div className="mt-[8%] text-center text-[clamp(7px,1vw,10px)] font-semibold lowercase text-gray-300">
              {brand.name.slice(0, -3)}<span className="text-accent">{brand.name.slice(-3)}</span>
            </div>
          </div>
          <div aria-hidden className="absolute bottom-[14%] right-[12%] flex h-[22%] w-[34%] rotate-6 flex-col justify-between rounded-xl bg-gradient-to-br from-brand to-brand-dark p-[3%] shadow-xl">
            <span className="h-[22%] w-[24%] rounded bg-yellow-300" />
            <CreditCard className="ml-auto h-1/3 w-1/3 text-white/60" />
          </div>
        </div>

        <div>
          <h2 className="section-title">Secure, Integrated Payments</h2>
          <p className="section-sub">Take card payments straight from the till</p>
          <p className="mt-6 leading-relaxed text-gray-600">
            {brand.name} links your till directly to an integrated card terminal, so the amount is sent automatically — no re-keying, no mistakes and faster queues at the counter. It&apos;s part of our complete <a href="/restaurants" className="font-semibold text-brand hover:underline">hospitality NPOS</a> and <a href="/retail" className="font-semibold text-brand hover:underline">retail NPOS</a> solutions.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            Got a few tables? Add a wireless terminal and let customers pay where they sit.
          </p>
          <ul className="mt-6 space-y-3 text-sm font-medium text-ink">
            {points.map(([I, t]) => <li key={t} className="flex items-center gap-3"><I className="h-5 w-5 text-brand" /> {t}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
