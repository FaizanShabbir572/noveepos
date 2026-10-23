import type { Metadata } from "next";
import { brand, coffeeFeatures } from "@/lib/site";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import CoffeeHardware from "@/components/coffee/CoffeeHardware";
import PaymentsBand from "@/components/PaymentsBand";
import SectorAnalytics from "@/components/SectorAnalytics";
import ProductTiles from "@/components/ProductTiles";
import Testimonials from "@/components/Testimonials";
import DemoSection from "@/components/DemoSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: `Coffee Shop & Café NPOS Software | ${brand.name}`,
  description: `Café NPOS for coffee shops: quick orders, table plans, order-ahead, integrated payments and live sales reports from ${brand.name}.`,
};

const coffeeTop: [string, number][] = [["Flat White", 94], ["Oat Latte", 81], ["Cappuccino", 73], ["Almond Croissant", 52]];

export default function CoffeeShopPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="NPOS system for cafés"
          title="Improve Your Business With Our Café NPOS Software"
          text={`Most cafés are small, independent and run at full speed every morning. ${brand.name} handles orders, sales reports, offers and integrated payments in one easy point of sale — so you can focus on the coffee, not the admin.`}
          featuresHref="#coffee-features"
          visual={<CoffeeHardware />}
        />
        <FeatureGrid id="coffee-features" title="Everything You Need to Run Your Café" sub="From the first espresso to closing time" items={coffeeFeatures} />
        <PaymentsBand />
        <SectorAnalytics sub="Keep track of your sales trends" shop="The Corner Café" top={coffeeTop} />
        <ProductTiles title="Everything Your Café Needs" sub="Software and hardware that work together out of the box" />
        <Testimonials />
        <DemoSection />
      </main>
      <Footer />
    </>
  );
}
