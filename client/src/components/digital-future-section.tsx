import { ArrowRight, Play, ArrowLeft } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { TestimonialsSection } from "./testimonials-section";

export function DigitalFutureSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('keto-insights');
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);



  // Content data for different sections
  const sectionContent = {
    'keto-insights': {
      title: 'The Science of Ketosis: What It Means for Health',
      description: 'Discover how ketogenic nutrition is redefining health optimization — from metabolic flexibility to sustained energy.',
      author: 'Dr. Sarah Chen',
      date: '08 July 2025',
      image: 'K'
    },
    'nutrition-trends': {
      title: 'Latest Nutrition Trends: Beyond Traditional Dieting',
      description: 'Explore emerging nutritional approaches that are transforming how we think about food, metabolism, and long-term health.',
      author: 'Dr. Michael Torres',
      date: '12 July 2025',
      image: 'N'
    },
    'health-innovation': {
      title: 'Health Innovation: Technology Meets Wellness',
      description: 'See how cutting-edge technology is revolutionizing personal health monitoring and lifestyle optimization.',
      author: 'Dr. Lisa Wang',
      date: '15 July 2025',
      image: 'H'
    }
  };

  const handleGetStartedClick = () => {
    setIsExpanded(true);
  };

  const handleBackClick = () => {
    setIsExpanded(false);
  };

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!sectionRef.current) {
            ticking = false;
            return;
          }

          const windowHeight = window.innerHeight;
          const scrollY = window.scrollY;
          
          // Find the Learn About Keto section (previous sibling)
          const learnAboutKetoSection = sectionRef.current.previousElementSibling as HTMLElement;
          if (!learnAboutKetoSection) {
            ticking = false;
            return;
          }
          
          // Get static positions to avoid recalculation issues
          const learnAboutKetoRect = learnAboutKetoSection.getBoundingClientRect();
          const learnAboutKetoTop = learnAboutKetoRect.top + scrollY;
          const learnAboutKetoHeight = learnAboutKetoRect.height;
          
          // Get the Digital Future section height
          const digitalFutureRect = sectionRef.current.getBoundingClientRect();
          const digitalFutureHeight = digitalFutureRect.height;
          
          // Start animation when we're near the end of the Learn About Keto section
          const triggerStart = learnAboutKetoTop + learnAboutKetoHeight - windowHeight;
          
          // Calculate 90% proximity: when digital future bottom is 90% close to learn about keto bottom
          // This means 10% gap remaining from the learn about keto bottom
          const learnAboutKetoBottom = learnAboutKetoTop + learnAboutKetoHeight;
          const proximityGap = digitalFutureHeight * 0.1; // 10% gap = 90% proximity
          const maxAnimationDistance = digitalFutureHeight - proximityGap;
          
          if (scrollY >= triggerStart) {
            const scrollDistance = scrollY - triggerStart;
            // Cap the progress at the 90% proximity point
            const progress = Math.min(scrollDistance / maxAnimationDistance, 1);
            setScrollProgress(progress);
          } else {
            setScrollProgress(0);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: isExpanded 
          ? 'linear-gradient(135deg, rgba(254, 241, 225, 0.3) 0%, rgba(254, 241, 225, 0.4) 50%, rgba(254, 241, 225, 0.2) 100%)'
          : 'white',
        backdropFilter: isExpanded ? 'blur(20px) saturate(150%)' : 'none',
        WebkitBackdropFilter: isExpanded ? 'blur(20px) saturate(150%)' : 'none',
        transform: `translateY(${-scrollProgress * ((containerRef.current?.getBoundingClientRect().height || 500) * 0.9)}px)`,
        transition: 'transform 0.1s ease-out',
        zIndex: scrollProgress > 0 ? 10 : 1,
      }}
    >
        <div 
        ref={containerRef}
        className={`mx-auto rounded-t-[3rem] relative overflow-hidden transform-gpu transition-all duration-1000 ease-in-out ${
          isExpanded ? 'max-w-6xl shadow-2xl' : 'w-full bg-black shadow-lg'
        }`}
        style={{ 
          minHeight: '500px',
          willChange: 'width, max-width, background-color, box-shadow',
          ...(isExpanded && {
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
          })
        }}
      >
        {/* Video Background - Only show when not expanded */}
        {!isExpanded && (
          <div className="absolute inset-0 rounded-t-[3rem] overflow-hidden">
            <video
              className="w-full h-full object-cover opacity-40"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://cdn.coverr.co/videos/coverr-computer-programming-in-a-dark-room-6021/1080p.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-black/50" />
          </div>
        )}

        {/* Initial Content - Video Background State */}
        {!isExpanded && (
          <div className="relative z-10 max-w-4xl mx-auto text-center pt-16 pb-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight">
              READY TO STEP INTO YOUR
              <br />
              DIGITAL FUTURE?
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button 
                onClick={handleGetStartedClick}
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 group transform hover:scale-105 hover:shadow-xl active:scale-95"
              >
                Get started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-200 backdrop-blur-sm group">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                Watch a Demo
              </button>
            </div>
          </div>
        )}



        {/* Expanded Content - Platform Description State */}
        {isExpanded && (
          <div 
            className="relative z-10 px-12 pt-12 pb-0 rounded-t-[3rem]"
            style={{
              background: 'rgba(254, 241, 225, 0.02)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(254, 241, 225, 0.04)',
              boxShadow: '0 8px 32px rgba(254, 241, 225, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.04)',
            }}
          >
            {/* Back Button */}
            <button
              onClick={handleBackClick}
              className="absolute top-4 left-6 inline-flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>

            <div className="max-w-6xl mx-auto">
              {/* Top Section - Heading and Description */}
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {/* Main Heading - Left */}
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    EXPLORE INSIDE THE
                    <br />
                    KETO PLATFORM
                  </h2>
                </div>
                {/* Description - Top Right */}
                <div className="flex items-end">
                  <p className="text-gray-700 text-xl leading-relaxed font-medium">
                    Explore insights, innovations, and stories shaping the
                    future of ketogenic living.
                  </p>
                </div>
              </div>

              {/* Bottom Section - Navigation, Image, and Article */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Navigation Links - Bottom Left */}
                <div className="lg:col-span-2 space-y-4">
                  <button
                    onClick={() => setActiveSection('keto-insights')}
                    className={`text-left text-lg cursor-pointer hover:text-gray-900 transition-colors ${
                      activeSection === 'keto-insights' ? 'text-gray-900 font-bold' : 'text-gray-700'
                    }`}
                  >
                    Keto Insights
                  </button>
                  <button
                    onClick={() => setActiveSection('nutrition-trends')}
                    className={`text-left text-lg cursor-pointer hover:text-gray-900 transition-colors ${
                      activeSection === 'nutrition-trends' ? 'text-gray-900 font-bold' : 'text-gray-700'
                    }`}
                  >
                    Nutrition Trends
                  </button>
                  <button
                    onClick={() => setActiveSection('health-innovation')}
                    className={`text-left text-lg cursor-pointer hover:text-gray-900 transition-colors ${
                      activeSection === 'health-innovation' ? 'text-gray-900 font-bold' : 'text-gray-700'
                    }`}
                  >
                    Health & Innovation
                  </button>
                </div>

                {/* Featured Image - Center */}
                <div className="lg:col-span-6">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-64 lg:h-80 flex items-center justify-center overflow-hidden transition-all duration-300">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-[#58CC88] rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300">
                        <span className="text-white text-2xl font-bold">{sectionContent[activeSection as keyof typeof sectionContent].image}</span>
                      </div>
                      <p className="text-gray-600">Keto Platform Demo</p>
                    </div>
                  </div>
                </div>

                {/* Article Content - Right */}
                <div className="lg:col-span-4 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight transition-all duration-300">
                    {sectionContent[activeSection as keyof typeof sectionContent].title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed font-medium transition-all duration-300">
                    {sectionContent[activeSection as keyof typeof sectionContent].description}
                  </p>
                  <button className="text-[#58CC88] hover:text-[#4bb377] font-medium transition-colors duration-200">
                    Learn More →
                  </button>
                  <div className="pt-4">
                    <div className="text-base text-gray-900 font-semibold transition-all duration-300">
                      {sectionContent[activeSection as keyof typeof sectionContent].author}
                    </div>
                    <div className="text-base text-gray-500 transition-all duration-300">
                      {sectionContent[activeSection as keyof typeof sectionContent].date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-8"></div>
          </div>
        )}
        </div>
        
        {/* Testimonials Section - Always Visible */}
        <TestimonialsSection />
      </section>
  );
}