import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: string;
  title: string;
  subtitle: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  since: string;
  image: string;
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: "keto-kingdom",
      title: "Keto Kingdom",
      subtitle: "Premium Keto Product Line",
      quote: "When it comes time to serve our keto community, it is very helpful to be able to turn our platform into a comprehensive resource... and have customers discover products for themselves while we dedicate our efforts to creating the highest quality keto solutions.",
      author: "Sarah Mitchell",
      role: "CEO",
      company: "Keto Kingdom",
      since: "Keto Partner Since 2023",
      image: "K"
    },
    {
      id: "pure-wellness",
      title: "Pure Wellness Express",
      subtitle: "50K+ Health Enthusiasts",
      quote: "With this keto platform we were finally able to bring all our wellness operations under one roof, eliminating the stress of managing multiple supplement sources. Our day-to-day health optimization has never been more efficient.",
      author: "Dr. Michael Chen",
      role: "Owner",
      company: "Pure Wellness Express",
      since: "Keto Partner Since 2022",
      image: "P"
    },
    {
      id: "macro-masters",
      title: "Macro Masters",
      subtitle: "1st Advanced Keto Tracking App",
      quote: "Everything is connected. Customers can track macros in-app, online, or via our platform and always maintain ketosis. This consistency keeps our users engaged and coming back for their keto journey.",
      author: "Lisa Rodriguez",
      role: "Founder",
      company: "Macro Masters",
      since: "Keto Partner Since 2021",
      image: "M"
    },
    {
      id: "ketogenic-solutions",
      title: "Ketogenic Solutions",
      subtitle: "10K+ Subscribers Through Platform",
      quote: "Implementing this keto system wasn't just a lifestyle upgrade; it was a health game-changer. With our keto platform, we've been able to help more people achieve ketosis and boost their everyday energy levels.",
      author: "James Wilson",
      role: "CEO",
      company: "Ketogenic Solutions",
      since: "Keto Partner Since 2020",
      image: "G"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Content */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Why fast growing keto brands choose our platform
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Future proof your wellness business. Stay ahead of the keto competition without spending millions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Offer next generation customer experiences like leading wellness brands. All customized to your keto brand.
                </p>
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              Case Studies
            </button>
          </div>

          {/* Right Content - Testimonial Cards */}
          <div className="lg:col-span-7 relative">
            <div className="flex overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                      {/* Header */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {testimonial.title}
                        </h3>
                        <p className="text-gray-600 font-medium">
                          {testimonial.subtitle}
                        </p>
                      </div>

                      {/* Quote */}
                      <blockquote className="text-lg text-gray-800 leading-relaxed mb-8 font-medium">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#58CC88] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-lg font-bold">
                            {testimonial.image}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            {testimonial.role}, {testimonial.author}
                          </div>
                          <div className="text-gray-600 text-sm mt-1">
                            {testimonial.since}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-gray-300 hover:border-gray-400 transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-gray-300 hover:border-gray-400 transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}