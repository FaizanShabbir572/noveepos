import { brand } from "@/lib/site";
import ModalButton from "./ClientBits";
import { Snowflake } from "lucide-react";
import HeroHardware from "./HeroHardware";

export default function AllInOne() {
  return (
    <section id="retail" className="bg-gray-50 py-20">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-brand/10" />
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#c6e6f8] via-[#a6cdf0] to-[#7fb0e2] p-6 shadow-xl sm:p-8">
              <span aria-hidden className="absolute left-[8%] top-[10%] h-6 w-6 rounded-full bg-white/40" />
              <span aria-hidden className="absolute right-[12%] top-[6%] h-8 w-8 rounded-full bg-white/40" />
              <span aria-hidden className="absolute bottom-[12%] left-[40%] h-4 w-4 rounded-full bg-white/40" />
              <Snowflake aria-hidden className="absolute right-[6%] top-[38%] h-16 w-16 text-white/25" strokeWidth={1} />
              <Snowflake aria-hidden className="absolute left-[4%] top-[30%] h-12 w-12 text-white/25" strokeWidth={1} />
              <HeroHardware />
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="section-title">Simple POS, all in one place</h2>
          <p className="section-sub">Seamless integration that makes life easier</p>
          <p className="mt-6 leading-relaxed text-gray-600">
            {brand.name} brings everything you need into one easy POS system so your business runs smoothly. Our experienced team designed it to be intuitive from day one, with modern tools that help improve cash flow and cut running costs.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            Stay a step ahead with an affordable package that combines a custom business website and order management in a single platform — no more jumping between separate logins. Talk to our team about a setup tailored to you.
          </p>
          <div className="mt-8"><ModalButton label="Get In Touch" kind="callback" /></div>
        </div>
      </div>
    </section>
  );
}
