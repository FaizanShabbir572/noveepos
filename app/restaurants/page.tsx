import type { Metadata } from "next";
import { brand, restaurantFeatures } from "@/lib/site";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import KitchenDisplay from "@/components/restaurant/KitchenDisplay";
import RestaurantHardware from "@/components/restaurant/RestaurantHardware";
import ProductTiles from "@/components/ProductTiles";
import Testimonials from "@/components/Testimonials";
import DemoSection from "@/components/DemoSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: `Restaurant NPOS Software | ${brand.name}`,
  description: `Restaurant NPOS with kitchen display, table ordering, split bills and custom menus from ${brand.name}.`,
};

export default function RestaurantsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="The NPOS system for restaurants"
          title="Streamline Your Business With Our Restaurant NPOS Software"
          text={`Busy service, changing menus and a kitchen that needs every order right first time — ${brand.name} keeps it all in sync, with a flexible menu, your own floor plan, live stock and instant front-to-kitchen communication.`}
          featuresHref="#restaurant-features"
          visual={<RestaurantHardware />}
        />
        <FeatureGrid id="restaurant-features" title="Everything You Need to Run Your Business Effectively" sub="Built for busy restaurants, from the first cover to the last" items={restaurantFeatures} />
        <KitchenDisplay />
        <ProductTiles
          title="What Makes Our Order Management System Special?"
          sub="Your own online ordering — without the commission"
          intro={`Many restaurants still rely on third-party delivery apps that take a big cut of every order. ${brand.name} gives you an affordable system with your own integrated ordering website, so online orders land straight on your till and in your kitchen.`}
        />
        <Testimonials />
        <DemoSection />
      </main>
      <Footer />
    </>
  );
}
