import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
}

export function FeaturedProducts() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const products: Product[] = [
    {
      id: 1,
      name: "Grass-Fed Collagen Peptides",
      price: "$43.99",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 2,
      name: "Collagen Protein Bars",
      price: "$44.99",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 3,
      name: "Nola Bars",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 4,
      name: "Base Ketones",
      price: "$42.99",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 5,
      name: "MCT Oil Powder",
      price: "$40.99",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 6,
      name: "Daily Electrolytes",
      price: "$30.99",
      originalPrice: "$37.99",
      image: "https://images.unsplash.com/photo-1594736797933-d0f25c5376d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 7,
      name: "Keto Cookies",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 8,
      name: "Keto Nut Butter",
      price: "$16.99",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    }
  ];

  // Handle scroll to update navigation button states
  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        setCanScrollLeft(scrollLeft > 5); // Small threshold for precision
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
      }
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      // Initial check after a small delay to ensure proper rendering
      setTimeout(handleScroll, 100);
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Navigation functions
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative" style={{
      background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.95) 0%, rgba(241, 245, 249, 0.95) 100%)',
      backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(173, 216, 230, 0.2) 0%, transparent 50%)',
    }}>
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl font-bold text-[hsl(210,24%,16%)] tracking-tight">
            Featured products
          </h2>
          <Button 
            variant="outline" 
            className="font-medium px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(107, 114, 128, 0.3)',
              color: 'rgba(55, 65, 81, 0.9)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
            }}
          >
            Shop All Products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>

        {/* Product Slider Container */}
        <div className="relative">
          {/* Navigation Buttons - Outside the product lineup */}
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`absolute -left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
              canScrollLeft 
                ? 'opacity-100 cursor-pointer' 
                : 'opacity-30 cursor-not-allowed'
            }`}
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
            }}
            aria-label="Previous products"
          >
            <ChevronLeft className={`w-6 h-6 transition-colors duration-300 ${
              canScrollLeft ? 'text-slate-700' : 'text-slate-400'
            }`} />
          </button>
          
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`absolute -right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
              canScrollRight 
                ? 'opacity-100 cursor-pointer' 
                : 'opacity-30 cursor-not-allowed'
            }`}
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
            }}
            aria-label="Next products"
          >
            <ChevronRight className={`w-6 h-6 transition-colors duration-300 ${
              canScrollRight ? 'text-slate-700' : 'text-slate-400'
            }`} />
          </button>

          {/* Products Slider */}
          <div 
            ref={sliderRef}
            className="flex overflow-x-scroll gap-6 pb-4 scrollbar-hide"
            style={{ 
              scrollSnapType: 'x mandatory'
            }}
          >
            {products.map((product) => (
              <Card 
                key={product.id}
                className="flex-shrink-0 w-80 h-96 group relative overflow-hidden rounded-2xl border-0 transition-all duration-500 hover:-translate-y-2 glass-card glass-hover"
                style={{ 
                  scrollSnapAlign: 'start',
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37), 0 4px 16px rgba(31, 38, 135, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                }}
              >
                {/* Liquid Glass Base Layer */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)',
                    backdropFilter: 'blur(25px)',
                    WebkitBackdropFilter: 'blur(25px)',
                  }}
                />
                
                {/* Enhanced liquid glass hover effect */}
                <div 
                  className="absolute inset-0 transition-all duration-700 group-hover:opacity-100 opacity-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%)',
                    backdropFilter: 'blur(30px)',
                    WebkitBackdropFilter: 'blur(30px)',
                  }}
                />
                
                {/* Liquid glass border effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1))',
                    padding: '1px',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'xor',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                  }}
                />
                
                {/* iOS-style frosted glass overlay */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 70%, transparent 100%)',
                    backdropFilter: 'blur(15px) saturate(150%)',
                    WebkitBackdropFilter: 'blur(15px) saturate(150%)',
                  }}
                />
                
                <CardContent className="p-6 h-full flex flex-col relative z-10">
                  <div className="relative w-full h-48 mb-4 flex-shrink-0 rounded-xl overflow-hidden group/image">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Glass overlay on image */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                        backdropFilter: 'blur(2px)',
                        WebkitBackdropFilter: 'blur(2px)',
                      }}
                    />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 flex-shrink-0 transition-colors duration-300" 
                      style={{ 
                        color: 'rgba(16, 24, 40, 0.9)',
                        textShadow: '0 1px 2px rgba(255, 255, 255, 0.5)'
                      }}>
                    {product.name}
                  </h4>
                  <div className="flex items-center gap-2 mb-4 flex-shrink-0">
                    {product.originalPrice && (
                      <p className="text-lg line-through transition-colors duration-300"
                         style={{ 
                           color: 'rgba(107, 114, 128, 0.8)',
                           textShadow: '0 1px 1px rgba(255, 255, 255, 0.3)'
                         }}>
                        {product.originalPrice}
                      </p>
                    )}
                    <p className={`text-2xl font-bold transition-colors duration-300 ${
                      product.originalPrice 
                        ? 'text-[hsl(13,100%,60%)]' 
                        : ''
                    }`}
                    style={{ 
                      color: product.originalPrice 
                        ? 'hsl(13,100%,60%)' 
                        : 'rgba(16, 24, 40, 0.9)',
                      textShadow: '0 1px 2px rgba(255, 255, 255, 0.5)'
                    }}>
                      {product.price}
                    </p>
                  </div>
                  <Button 
                    className="w-full py-3 rounded-xl font-semibold mt-auto relative overflow-hidden group/button transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, rgba(16, 24, 40, 0.9) 0%, rgba(16, 24, 40, 0.8) 100%)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: 'rgba(255, 255, 255, 0.95)',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                      boxShadow: '0 4px 16px rgba(16, 24, 40, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {/* Button glass overlay */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                      }}
                    />
                    <span className="relative z-10">Shop Now</span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          

        </div>
      </div>
    </section>
  );
}
