import { HeroSection } from "@/components/hero-section";
import { ScrollingHighlights } from "@/components/scrolling-highlights";
import { FeaturesSection } from "@/components/features-section";
import { FeaturedProducts } from "@/components/featured-products";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ScrollingHighlights />
      <FeaturesSection />
      <FeaturedProducts />
    </div>
  );
}
