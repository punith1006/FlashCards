import { HeroSection } from "@/components/hero-section";
import { ScrollingHighlights } from "@/components/scrolling-highlights";
import { FeaturesSection } from "@/components/features-section";
import { FeaturedProducts } from "@/components/featured-products";
import { LearnAboutKeto } from "@/components/learn-about-keto";
import { DigitalFutureSection } from "@/components/digital-future-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <HeroSection />
      <ScrollingHighlights />
      <FeaturesSection />
      <FeaturedProducts />
      <LearnAboutKeto />
      <DigitalFutureSection />
    </div>
  );
}
