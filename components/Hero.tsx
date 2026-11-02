import { ArrowRight, ShoppingBag } from "lucide-react";
import HeroHardware from "./HeroHardware";
import SnowBackdrop from "./SnowBackdrop";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#c6e6f8] via-[#a6cdf0] to-[#7fb0e2] text-ink">
      <SnowBackdrop />
      <div className="container-x relative grid items-center gap-10 py-16 lg:grid-cols-[2fr_3fr] lg:py-24">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight text-brand-dark sm:text-5xl lg:text-6xl">POS Specialists</h1>
          <p className="mt-5 max-w-xl text-lg text-slate-700 sm:text-xl">
            POS systems and order management built around your business — take control of every order with a solution made to fit.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#features" className="btn border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white">Learn More <ArrowRight className="h-4 w-4" /></a>
            <a href="#store" className="btn-accent">Buy Now <ShoppingBag className="h-4 w-4" /></a>
          </div>
        </div>
        <HeroHardware />
      </div>
      <svg className="block w-full text-white" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden><path fill="currentColor" d="M0 80h1440V20C1200 70 960 0 720 20S240 70 0 20z" /></svg>
    </section>
  );
}
