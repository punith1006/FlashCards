import { HeroSection } from "@/components/hero-section";
import { ScrollingHighlights } from "@/components/scrolling-highlights";
import { FeaturesSection } from "@/components/features-section";
import { FeaturedProducts } from "@/components/featured-products";
import { LearnAboutKeto } from "@/components/learn-about-keto";
import { DigitalFutureTestimonialsSection } from "@/components/digital-future-testimonials-section";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <HeroSection />
      <ScrollingHighlights />
      <FeaturesSection />
      <FeaturedProducts />
      <LearnAboutKeto />
      <DigitalFutureTestimonialsSection />
    </div>
  );
}
