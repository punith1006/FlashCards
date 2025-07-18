import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  const [currentSlide, setCurrentSlide] = useState(0);

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

  // Handle scroll to update current slide indicator
  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const scrollLeft = sliderRef.current.scrollLeft;
        const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        const scrollPercentage = maxScroll > 0 ? scrollLeft / maxScroll : 0;
        setCurrentSlide(scrollPercentage);
      }
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-[hsl(210,24%,16%)]">
            Featured products
          </h2>
          <Button 
            variant="link" 
            className="text-[hsl(13,100%,60%)] hover:text-[hsl(13,100%,50%)] font-semibold text-lg p-0"
          >
            Explore All →
          </Button>
        </div>

        {/* Product Slider Container */}
        <div className="relative">
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
                className="flex-shrink-0 w-80 h-96 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white rounded-2xl shadow-lg border-0"
                style={{ scrollSnapAlign: 'start' }}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-xl mb-4 flex-shrink-0"
                  />
                  <h4 className="text-xl font-semibold text-[hsl(210,24%,16%)] mb-2 flex-shrink-0">
                    {product.name}
                  </h4>
                  <div className="flex items-center gap-2 mb-4 flex-shrink-0">
                    {product.originalPrice && (
                      <p className="text-lg text-gray-500 line-through">
                        {product.originalPrice}
                      </p>
                    )}
                    <p className={`text-2xl font-bold ${
                      product.originalPrice 
                        ? 'text-[hsl(13,100%,60%)]' 
                        : 'text-[hsl(210,24%,16%)]'
                    }`}>
                      {product.price}
                    </p>
                  </div>
                  <Button 
                    className="w-full bg-[hsl(210,24%,16%)] text-white hover:bg-[hsl(210,24%,12%)] py-3 rounded-xl font-semibold transition-colors duration-300 mt-auto"
                  >
                    Shop Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Single Slider Progress Bar */}
          <div className="mt-6">
            <div className="relative w-full max-w-2xl h-0.5 bg-gray-300 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gray-600 rounded-full transition-all duration-150 ease-out"
                style={{ 
                  width: `${currentSlide * 100}%` 
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
