import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden">
      {/* Content Container */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between min-h-[70vh] py-20">
          {/* Left Content */}
          <div className="flex-1 max-w-xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 text-sm font-medium border border-gray-200">
                AMERICA'S #1 KETO BRAND
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-[hsl(210,24%,16%)] mb-6 leading-tight">
              Get your health 
              <br />
              back on track
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Feel your best with high-quality, low-carb supplements & snacks.
            </p>
            
            <Button 
              size="lg" 
              className="bg-[hsl(210,24%,16%)] text-white hover:bg-[hsl(210,24%,12%)] px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Shop Now
            </Button>
          </div>

          {/* Right Content - Product Image */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Perfect Keto Products"
                className="w-full max-w-2xl h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
