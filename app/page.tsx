import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AllInOne from "@/components/AllInOne";
import Benefits from "@/components/Benefits";
import Partners from "@/components/Partners";
import Analytics from "@/components/Analytics";
import DemoSection from "@/components/DemoSection";
import Footer from "@/components/Footer";
import OfferPopup from "@/components/OfferPopup";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <AllInOne />
        <Benefits />
        <Partners />
        <Analytics />
        <DemoSection />
      </main>
      <Footer />
      <OfferPopup />
    </>
  );
}
