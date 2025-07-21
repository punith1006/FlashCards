import { ArrowRight, Play, ArrowLeft } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useTypewriter } from "@/hooks/use-typewriter";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

// TestimonialCard component matching the reference design
function TestimonialCard({ testimonial, index, isSectionVisible }: { testimonial: any, index: number, isSectionVisible: boolean }) {
  const isDark = testimonial.cardType === 'dark-overlay';
  const { ref, isIntersecting } = useIntersectionObserver({ 
    threshold: 0.3,
    triggerOnce: true 
  });
  
  // Apply typewriter effect to the first card (index 0) and fourth card (index 3)
  const shouldUseTypewriter = index === 0 || index === 3;
  
  const { displayText: typewriterText } = useTypewriter({
    text: testimonial.quote,
    speed: 30,
    startDelay: index === 3 ? 1000 : 0, // Delay 4th card slightly for variety
    shouldStart: shouldUseTypewriter && isIntersecting && isSectionVisible,
    loop: shouldUseTypewriter, // Enable looping for typewriter cards
    pauseDuration: 3000 // Pause for 3 seconds between loops
  });
  
  return (
    <div 
      ref={ref}
      className={`
        relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500
        ${isDark ? 'bg-gray-900 text-white' : 'text-gray-800'}
        h-[580px] transform hover:scale-105
      `}
    style={!isDark ? {
      background: 'rgba(254, 241, 225, 0.35)',
      backdropFilter: 'blur(40px) saturate(150%)',
      WebkitBackdropFilter: 'blur(40px) saturate(150%)',
      border: '1px solid rgba(254, 241, 225, 0.4)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 16px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(254, 241, 225, 0.3)',
    } : {}}>
      {/* Background Image for dark cards */}
      {testimonial.hasBackgroundImage && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/60 to-black/80 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=600&fit=crop&crop=center')`
            }}
          ></div>
        </>
      )}
      
      {/* Ultra-transparent glass overlay for light cards */}
      {!isDark && (
        <div 
          className="absolute inset-0 pointer-events-none rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, rgba(254, 241, 225, 0.15) 0%, rgba(254, 241, 225, 0.05) 100%)',
            backdropFilter: 'blur(50px) saturate(180%)',
            WebkitBackdropFilter: 'blur(50px) saturate(180%)',
          }}
        />
      )}

      
      {/* Content container */}
      <div className={`
        relative z-20 p-8 h-full flex flex-col
        ${testimonial.isStoryCard ? 'pt-16' : 'pt-8'}
      `}>
        {isDark ? (
          <>
            {/* Dark cards layout (like first reference image) */}
            {/* Spacer to push quote to middle */}
            <div className="flex-1"></div>

            {/* Quote - Starting from middle, scrollable */}
            <div className="flex-1 mb-8 overflow-y-auto scrollbar-hide">
              <blockquote className="leading-relaxed text-lg font-normal text-white">
                "{shouldUseTypewriter ? typewriterText : testimonial.quote}"
                {shouldUseTypewriter && isIntersecting && typewriterText.length < testimonial.quote.length && (
                  <span className="animate-pulse">|</span>
                )}
              </blockquote>
            </div>

            {/* Bottom section - Fixed at bottom, slimmer */}
            <div className="flex-shrink-0">
              {/* Snackpass Stories badge - only for story cards */}
              {testimonial.isStoryCard && (
                <div className="mb-1">
                  <span className="text-xs font-medium text-white/90 tracking-wide">Snackpass Stories</span>
                </div>
              )}
              
              {/* Company name - Large title */}
              <h3 className="text-white text-3xl font-bold leading-none">
                {testimonial.title}
              </h3>

              {/* Author name only - simple text below company */}
              <div className="text-sm font-normal mt-1 text-white/80">
                {testimonial.author}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Light cards layout (like second reference image) */}
            {/* Header at top */}
            <div className="mb-6">
              <h3 className="text-gray-900 text-2xl font-bold leading-tight mb-2">
                {testimonial.title}
              </h3>
              <p className="text-gray-600 text-base font-medium">
                {testimonial.subtitle}
              </p>
            </div>

            {/* Quote in middle, scrollable */}
            <div className="flex-1 mb-8 overflow-y-auto scrollbar-hide">
              <blockquote className="leading-relaxed text-base text-gray-800">
                "{shouldUseTypewriter ? typewriterText : testimonial.quote}"
                {shouldUseTypewriter && isIntersecting && typewriterText.length < testimonial.quote.length && (
                  <span className="animate-pulse text-gray-400">|</span>
                )}
              </blockquote>
            </div>

            {/* Author info at bottom with avatar */}
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={`https://ui-avatars.com/api/?name=${testimonial.author}&background=4F46E5&color=fff&size=40`}
                  alt={testimonial.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium text-sm text-gray-900">
                  {testimonial.role}, {testimonial.author}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  {testimonial.since}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function DigitalFutureTestimonialsSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('keto-insights');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const testimonialsSliderRef = useRef<HTMLDivElement>(null);
  
  // Section-level intersection observer to track if user is in testimonials section
  const { ref: sectionIntersectionRef, isIntersecting: isSectionVisible } = useIntersectionObserver({ 
    threshold: 0.2,
    triggerOnce: false 
  });

  // Handle scroll to update navigation button states for testimonials
  useEffect(() => {
    const handleScroll = () => {
      if (testimonialsSliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = testimonialsSliderRef.current;
        setCanScrollLeft(scrollLeft > 5);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
      }
    };

    const slider = testimonialsSliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      setTimeout(handleScroll, 100);
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollTestimonialsLeft = () => {
    if (testimonialsSliderRef.current) {
      testimonialsSliderRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollTestimonialsRight = () => {
    if (testimonialsSliderRef.current) {
      testimonialsSliderRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };
  
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

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

  // Expanded testimonials data based on Snackpass website
  const testimonials = [
    {
      id: "xing-fu-tang",
      title: "Xing Fu Tang",
      subtitle: "Taiwan's No.1 Boba Brand",
      quote: "When it comes time to service a lot of tickets in short order, it is very helpful to be able to turn the POS into a kiosk… and have customers order for themselves and then dedicate that man power to making the actual drinks.",
      author: "Andrew Chuang",
      role: "CEO",
      company: "Xing Fu Tang",
      since: "Snackpass Partner Since 2023",
      cardType: "dark-overlay",
      hasBackgroundImage: true
    },
    {
      id: "ole-ole-burrito",
      title: "Ole Ole Burrito Express",
      subtitle: "30K Subscribers On Snackpass",
      quote: "With Snackpass we were finally able to bring all our operations under one roof, eliminating the stress of integrating and purchasing multiple solutions. Our day-to-day work has never been more efficient.",
      author: "Amin Fasil",
      role: "Owner",
      company: "Ole Ole Burrito Express",
      since: "Snackpass Partner Since 2020",
      cardType: "light-beige",
      hasBackgroundImage: false
    },
    {
      id: "riceful",
      title: "Riceful",
      subtitle: "1st Okinawa Onigiri Shop in the US",
      quote: "Everything is connected. Customers can order in-store, online, or via the app and always earn points. This consistency keeps our customers loyal and coming back.",
      author: "Kai Tang",
      role: "Owner",
      company: "Riceful",
      since: "Snackpass Partner Since 2020",
      cardType: "light-beige",
      hasBackgroundImage: false
    },
    {
      id: "empanada-factory",
      title: "Empanada Factory",
      subtitle: "3.4K Subscribers Through Snackpass",
      quote: "Implementing Snackpass wasn't just a tech upgrade; it was a revenue game-changer. With Snackpass on board, we've been able to bring more customers back through the door and boost everyday earnings.",
      author: "Marcelo Gutierrez",
      role: "CEO",
      company: "Empanada Factory",
      since: "Snackpass Partner Since 2021",
      cardType: "dark-overlay",
      hasBackgroundImage: true,
      isStoryCard: true
    }
  ];

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
          if (!sectionRef.current || !testimonialsRef.current) {
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
          
          // Get testimonials section height
          const testimonialsRect = testimonialsRef.current.getBoundingClientRect();
          const testimonialsHeight = testimonialsRect.height;
          
          // Find footer element to determine when to stop animation
          const footer = document.querySelector('footer');
          let stopAnimationPoint = learnAboutKetoTop + learnAboutKetoHeight + digitalFutureHeight;
          
          if (footer) {
            const footerRect = footer.getBoundingClientRect();
            const footerTop = footerRect.top + scrollY;
            const footerHeight = footerRect.height;
            
            // Calculate the current position of footer bottom relative to viewport
            const footerBottom = footerTop + footerHeight;
            const currentViewportBottom = scrollY + windowHeight;
            
            // Stop animation when we can scroll no further (footer bottom reaches viewport bottom)
            // Account for the transform that moves footer up
            const maxScrollPosition = footerBottom - windowHeight;
            
            // If we're at or past the max scroll position, stop animation
            if (scrollY >= maxScrollPosition) {
              setScrollProgress(1);
              ticking = false;
              return;
            }
          }
          
          // Start animation when we're near the end of the Learn About Keto section
          const triggerStart = learnAboutKetoTop + learnAboutKetoHeight - windowHeight;
          
          // Calculate animation progress based on how much we can scroll
          if (footer) {
            const footerRect = footer.getBoundingClientRect();
            const footerTop = footerRect.top + scrollY;
            const footerHeight = footerRect.height;
            const maxScrollPosition = footerTop + footerHeight - windowHeight;
            const animationRange = maxScrollPosition - triggerStart;
            
            if (scrollY >= triggerStart && animationRange > 0) {
              const scrollDistance = scrollY - triggerStart;
              const progress = Math.min(scrollDistance / animationRange, 1);
              setScrollProgress(progress);
            } else if (scrollY < triggerStart) {
              setScrollProgress(0);
            }
          } else {
            // Fallback if footer not found
            if (scrollY >= triggerStart) {
              const scrollDistance = scrollY - triggerStart;
              const progress = Math.min(scrollDistance / (digitalFutureHeight * 0.9), 1);
              setScrollProgress(progress);
            } else {
              setScrollProgress(0);
            }
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

  // Calculate transform values for both sections
  // Use a more controlled transform that ensures footer stays as last visible item
  const maxTransform = containerRef.current?.getBoundingClientRect().height || 500;
  const digitalFutureTransform = `translateY(${-scrollProgress * maxTransform}px)`;
  const testimonialsTransform = `translateY(${-scrollProgress * maxTransform}px)`;

  return (
    <>
      {/* Digital Future Section */}
      <section 
        ref={sectionRef}
        className="relative overflow-hidden"
        style={{
          background: isExpanded 
            ? 'linear-gradient(135deg, rgba(254, 241, 225, 0.3) 0%, rgba(254, 241, 225, 0.4) 50%, rgba(254, 241, 225, 0.2) 100%)'
            : 'white',
          backdropFilter: isExpanded ? 'blur(20px) saturate(150%)' : 'none',
          WebkitBackdropFilter: isExpanded ? 'blur(20px) saturate(150%)' : 'none',
          transform: digitalFutureTransform,
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
            </div>
          )}
        </div>
      </section>
      {/* Testimonials Section - Now synchronized with scroll */}
      <div 
        ref={(el) => {
          if (testimonialsRef.current !== el) {
            testimonialsRef.current = el;
          }
          if (sectionIntersectionRef.current !== el) {
            sectionIntersectionRef.current = el;
          }
        }}
        className="bg-gray-50 pb-0"
        style={{
          transform: testimonialsTransform,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="container mx-auto px-8 max-w-[1400px] pt-16">
          {/* Desktop Layout: Single row with header and cards */}
          <div className="hidden lg:flex lg:items-start lg:gap-8 relative">
            {/* Header Section - Fixed width column */}
            <div className="flex-shrink-0 w-80 flex flex-col justify-between h-[580px]">
              <div className="space-y-10">
                <h2 className="text-4xl font-serif text-black leading-[1.15] font-normal">
                  Why fast growing<br />
                  restaurant brands<br />
                  choose Snackpass
                </h2>
                <div className="space-y-6 font-medium">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Future proof your business. Stay ahead of the competition without spending millions.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Offer next generation customer experiences like Starbucks and McDonalds. All customized to your brand.
                  </p>
                </div>
              </div>
              <button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white px-8 py-4 rounded-xl font-semibold text-base transition-colors duration-200 w-fit">
                Case Studies
              </button>
            </div>

            {/* Horizontal Scrolling Cards - Takes remaining space */}
            <div className="flex-1 overflow-x-auto pb-6 scrollbar-hide" ref={testimonialsSliderRef}>
              <div className="flex gap-6 min-w-max">
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="w-80 flex-shrink-0">
                    <TestimonialCard testimonial={testimonial} index={index} isSectionVisible={isSectionVisible} />
                  </div>
                ))}
              </div>
            </div>

            {/* Left Navigation Button - At first card border - Only visible when can scroll left */}
            {canScrollLeft && (
              <button
                onClick={scrollTestimonialsLeft}
                className="absolute left-[calc(320px+32px-24px)] top-1/2 -translate-y-1/2 z-10 p-4 rounded-full transition-all duration-300 hover:scale-110 text-gray-700 hover:text-gray-900"
                style={{
                  background: 'rgba(254, 241, 225, 0.35)',
                  backdropFilter: 'blur(40px) saturate(150%)',
                  WebkitBackdropFilter: 'blur(40px) saturate(150%)',
                  border: '1px solid rgba(254, 241, 225, 0.4)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 16px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(254, 241, 225, 0.3)',
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Right Navigation Button - At right border of third card - Only visible when can scroll right */}
            {canScrollRight && (
              <button
                onClick={scrollTestimonialsRight}
                className="absolute left-[calc(320px+32px+960px+24px)] top-1/2 -translate-y-1/2 z-10 p-4 rounded-full transition-all duration-300 hover:scale-110 text-gray-700 hover:text-gray-900"
                style={{
                  background: 'rgba(254, 241, 225, 0.35)',
                  backdropFilter: 'blur(40px) saturate(150%)',
                  WebkitBackdropFilter: 'blur(40px) saturate(150%)',
                  border: '1px solid rgba(254, 241, 225, 0.4)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 16px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(254, 241, 225, 0.3)',
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>



          {/* Mobile Layout - Stack vertically with horizontal scrolling cards */}
          <div className="lg:hidden">
            {/* Header Section */}
            <div className="mb-12 px-4">
              <h2 className="text-3xl font-serif text-black leading-[1.15] font-normal mb-6">
                Why fast growing<br />
                restaurant brands<br />
                choose Snackpass
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-base text-gray-600 leading-relaxed">
                  Future proof your business. Stay ahead of the competition without spending millions.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Offer next generation customer experiences like Starbucks and McDonalds. All customized to your brand.
                </p>
              </div>
              <button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white px-8 py-4 rounded-xl font-semibold text-base transition-colors duration-200 w-fit">
                Case Studies
              </button>
            </div>

            {/* Horizontal Scrolling Cards */}
            <div className="overflow-x-auto pb-6 scrollbar-hide">
              <div className="flex gap-6 px-4 min-w-max">
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="w-80 flex-shrink-0">
                    <TestimonialCard testimonial={testimonial} index={index} isSectionVisible={isSectionVisible} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Section - Synchronized with testimonials animation */}
      <footer 
        className="bg-gray-100 py-16 border-t border-gray-200" 
        style={{ 
          position: 'relative', 
          zIndex: 1,
          transform: testimonialsTransform,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Blank footer content area */}
          <div className="h-24 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
            <p className="text-gray-500 text-sm">Footer Content Area</p>
          </div>
        </div>
      </footer>
    </>
  );
}