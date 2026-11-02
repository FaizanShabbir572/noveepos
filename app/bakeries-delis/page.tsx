import type { Metadata } from "next";
import { brand, bakeryFeatures } from "@/lib/site";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import BakeryHardware from "@/components/bakery/BakeryHardware";
import PaymentsBand from "@/components/PaymentsBand";
import SectorAnalytics from "@/components/SectorAnalytics";
import ProductTiles from "@/components/ProductTiles";
import Testimonials from "@/components/Testimonials";
import DemoSection from "@/components/DemoSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: `Bakery & Deli POS Software | ${brand.name}`,
  description: `POS for bakeries and delis: fast counter service, online cake orders, integrated payments and live sales reports from ${brand.name}.`,
};

const bakeryTop: [string, number][] = [["Butter Croissant", 92], ["Sourdough Loaf", 78], ["Ham & Cheese Baguette", 61], ["Flat White", 54]];

export default function BakeriesDelisPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="NPOS system for bakeries and delis"
          title="Improve Your Business With Our Bakeries & Delis NPOS Software"
          text={`Most bakeries and delis are small, independent and busy from the first loaf. ${brand.name} pairs easy-to-use software with branded hardware — order management, sales reports, offers and promotions, and integrated payments, all in one place.`}
          featuresHref="#bakery-features"
          visual={<BakeryHardware />}
        />
        <FeatureGrid id="bakery-features" title="Everything You Need to Run Your Kitchen" sub="From the morning bake to the lunchtime rush" items={bakeryFeatures} />
        <PaymentsBand />
        <SectorAnalytics sub="Keep track of your sales trends" shop="High Street Bakery" top={bakeryTop} />
        <ProductTiles title="Everything Your Bakery Needs" sub="Software and hardware that work together out of the box" />
        <Testimonials />
        <DemoSection />
      </main>
      <Footer />
    </>
  );
}
