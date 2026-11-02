import type { Metadata } from "next";
import { brand, retailFeatures } from "@/lib/site";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import SectorAnalytics from "@/components/SectorAnalytics";
import ProductTiles from "@/components/ProductTiles";
import Testimonials from "@/components/Testimonials";
import DemoSection from "@/components/DemoSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: `Retail POS Software | ${brand.name}`,
  description: `Retail POS for shops: fast checkouts, live stock, cloud reports and an online store in one system from ${brand.name}.`,
};

export default function RetailPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Winter Sale on Retail Bundles"
          title="Responsive & Cost-Effective Retail POS Software"
          text={`${brand.name} gives shop owners one system for the till, stock and reports — faster checkouts for your customers, lower running costs for you, and every product managed from a single place.`}
          featuresHref="#retail-features"
        />
        <FeatureGrid id="retail-features" title="User-Friendly Interface & Unique Features" sub="The perfect combination of tools for your retail business" items={retailFeatures} />
        <SectorAnalytics />
        <ProductTiles title="Everything Your Shop Needs" sub="Software and hardware that work together out of the box" />
        <Testimonials />
        <DemoSection />
      </main>
      <Footer />
    </>
  );
}
