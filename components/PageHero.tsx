import { CalendarCheck, PhoneCall, Sparkles } from "lucide-react";
import ModalButton from "./ClientBits";
import HeroHardware from "./HeroHardware";
import SnowBackdrop from "./SnowBackdrop";

// Sector pages (retail, restaurants...) ka snowy banner
export default function PageHero({ badge, title, text, featuresHref, visual = <HeroHardware /> }: {
  badge: string;
  title: string;
  text: string;
  featuresHref: string;
  visual?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#dce7f8] via-[#bccfee] to-[#93afdf] text-ink">
      <SnowBackdrop />
      <div className="container-x relative grid items-center gap-10 py-16 lg:grid-cols-[2fr_3fr] lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-dark shadow-sm">
            <Sparkles className="h-4 w-4 text-accent" /> {badge}
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-brand-dark sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-xl text-lg text-slate-700">{text}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ModalButton label="Book a Free Demo" kind="demo" />
            <a href={featuresHref} className="btn border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white">Explore Features</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium text-slate-700">
            <span className="flex items-center gap-2"><CalendarCheck className="h-5 w-5 text-brand" /> Set up in a day</span>
            <span className="flex items-center gap-2"><PhoneCall className="h-5 w-5 text-brand" /> UK lifetime support</span>
          </div>
        </div>
        {visual}
      </div>
      <svg className="block w-full text-white" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden><path fill="currentColor" d="M0 80h1440V20C1200 70 960 0 720 20S240 70 0 20z" /></svg>
    </section>
  );
}
