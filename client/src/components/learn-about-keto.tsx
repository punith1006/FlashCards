import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface ProductGuide {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function LearnAboutKeto() {
  const [currentSlide, setCurrentSlide] = useState(2); // Start with Keto Nootropic (index 2)

  const productGuides: ProductGuide[] = [
    {
      title: "Exogenous Ketones",
      description: "Doctor-developed powder made from high-quality beta hydroxy-butyrate (BHB). Boost ketone levels. Get back into ketosis.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      link: "#"
    },
    {
      title: "Keto Bars",
      description: "Stay keto and healthy on the go with these clean and delicious bars, available in four flavors.",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      link: "#"
    },
    {
      title: "MCT Oil Powder",
      description: "Helps make ketones readily available for your body to use, making ketosis easier to achieve and maintain.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      link: "#"
    },
    {
      title: "Keto Nootropic",
      description: 'Also known as "brain boosters," "smart drugs", or "cognitive enhancers", nootropics are compounds that may enhance various mental functions.',
      image: "https://images.unsplash.com/photo-1594736797933-d0f25c5376d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      link: "#"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % productGuides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + productGuides.length) % productGuides.length);
  };

  return (
    <section className="py-20 px-4 bg-white overflow-hidden w-full">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Learn about keto.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Questions and Answers */}
          <div className="space-y-12">
            {/* Question 1 - What is keto? */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#58CC88] rounded-full flex items-center justify-center">
                    <span className="text-white text-lg font-bold">?</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  What is keto?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  What makes it different from other low-carb diets? How do I 
                  do it, and how do I know it's working? Learn everything you 
                  need to know about keto, its many benefits and the science 
                  behind them.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-[#58CC88] hover:text-[#4bb377] font-medium text-lg group border-b-2 border-[#58CC88] hover:border-[#4bb377] transition-colors"
                >
                  Learn all about Keto
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Question 2 - How do I start keto? */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#58CC88] rounded-full flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  How do I start keto?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Ready to get started but feel overwhelmed by this new 
                  lifestyle and all you have to learn about it? Follow this step-by-step 
                  program where we'll walk you through how to begin 
                  and get results.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-[#58CC88] hover:text-[#4bb377] font-medium text-lg group border-b-2 border-[#58CC88] hover:border-[#4bb377] transition-colors"
                >
                  Get into Keto
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Question 3 - Will I lose weight on keto? */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#58CC88] rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold leading-none">×</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Will I lose weight on keto?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  The Ketogenic Diet is quickly becoming known for its 
                  incredible weight loss benefits. Learn how you can use keto 
                  can help you meet your weightloss and health goals.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-[#58CC88] hover:text-[#4bb377] font-medium text-lg group border-b-2 border-[#58CC88] hover:border-[#4bb377] transition-colors"
                >
                  Weight Loss & Keto
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Product Guide Carousel */}
          <div className="bg-gray-100 rounded-xl p-8 relative">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-gray-600">{currentSlide + 1}</span>
                </div>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  HOW TO USE
                </span>
              </div>
              <a 
                href="#" 
                className="text-sm text-gray-500 hover:text-gray-700 font-medium"
              >
                All Product Guides →
              </a>
            </div>

            <div className="relative overflow-hidden">
              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {productGuides[currentSlide].title}
                </h4>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {productGuides[currentSlide].description}
                </p>
                
                {/* Product image */}
                <div className="flex justify-center mb-6">
                  <div className="w-48 h-48 bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl flex items-center justify-center p-4">
                    <img 
                      src={productGuides[currentSlide].image}
                      alt={productGuides[currentSlide].title}
                      className="w-32 h-32 object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Navigation arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {productGuides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-[#58CC88]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}