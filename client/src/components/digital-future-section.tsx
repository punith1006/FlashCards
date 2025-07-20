import { ArrowRight, Play, ArrowLeft } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function DigitalFutureSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
      className="relative bg-white overflow-hidden"
      style={{
        transform: `translateY(${-scrollProgress * ((containerRef.current?.getBoundingClientRect().height || 500) * 0.9)}px)`,
        transition: 'transform 0.1s ease-out',
        zIndex: scrollProgress > 0 ? 10 : 1,
      }}
    >
        <div 
        ref={containerRef}
        className={`mx-auto rounded-t-[3rem] relative overflow-hidden transform-gpu transition-all duration-1000 ease-in-out ${
          isExpanded ? 'max-w-6xl bg-gray-50 shadow-2xl' : 'w-full bg-black shadow-lg'
        }`}
        style={{ 
          minHeight: '500px',
          willChange: 'width, max-width, background-color, box-shadow',
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
          <div className="relative z-10 max-w-4xl mx-auto text-center py-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight">
              READY TO STEP INTO YOUR
              <br />
              DIGITAL FUTURE?
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
          <div className="relative z-10 p-12">
            {/* Back Button */}
            <button
              onClick={handleBackClick}
              className="absolute top-6 left-6 inline-flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>

            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    EXPLORE INSIDE THE
                    <br />
                    KETO PLATFORM
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Explore insights, innovations, and stories shaping the
                    future of ketogenic living.
                  </p>
                </div>

                {/* Navigation Links */}
                <div className="space-y-4">
                  <div className="text-gray-900 font-semibold">Keto Insights</div>
                  <div className="text-gray-600">Nutrition Trends</div>
                  <div className="text-gray-600">Health & Innovation</div>
                </div>
              </div>

              {/* Right Content */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    The Science of Ketosis:
                    What It Means for Health
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Discover how ketogenic nutrition is
                    redefining health optimization — from metabolic
                    flexibility to sustained energy.
                  </p>
                  <div className="flex items-center justify-between">
                    <button className="text-[#58CC88] hover:text-[#4bb377] font-medium text-sm">
                      Learn More →
                    </button>
                    <div className="text-xs text-gray-400">
                      <div>Dr. Sarah Chen</div>
                      <div>08 July 2025</div>
                    </div>
                  </div>
                </div>

                {/* Featured Image Placeholder */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#58CC88] rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">K</span>
                    </div>
                    <p className="text-gray-600 text-sm">Keto Platform Demo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </section>
  );
}