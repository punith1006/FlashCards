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

      {/* Scrolling Features Banner */}
      <div className="bg-white border-t border-gray-200 py-4 overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          <div className="flex items-center space-x-12 px-6">
            <span className="text-gray-600 font-medium">America's #1 Keto Brand</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600 font-medium">Clean Ingredients</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600 font-medium">No added sugar or seed oils</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600 font-medium">America's #1 Keto Brand</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600 font-medium">Clean Ingredients</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600 font-medium">No added sugar or seed oils</span>
          </div>
        </div>
      </div>

      {/* Three Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg className="w-8 h-8 text-[hsl(210,24%,16%)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[hsl(210,24%,16%)] mb-2">Support Weight Loss</h3>
              <p className="text-gray-600 text-sm">Turn Fat Into Fuel. Supplement your diet with our keto products will help you stay in ketosis.</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg className="w-8 h-8 text-[hsl(210,24%,16%)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2m-10 0V4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[hsl(210,24%,16%)] mb-2">Enjoy Tasty Food</h3>
              <p className="text-gray-600 text-sm">Keto and tasty? Yes! Our products are formulated to taste great and help you reach your goals.</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg className="w-8 h-8 text-[hsl(210,24%,16%)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[hsl(210,24%,16%)] mb-2">Feel Energized</h3>
              <p className="text-gray-600 text-sm">Power through your day with sustained energy and mental clarity through proper nutrition.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
