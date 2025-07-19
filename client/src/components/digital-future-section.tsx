import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";

export function DigitalFutureSection() {
  const [isScaled, setIsScaled] = useState(false);

  const handleGetStartedClick = () => {
    setIsScaled(!isScaled);
  };

  return (
    <section className="relative py-32 px-4 bg-white overflow-hidden">
      <div 
        className={`mx-auto bg-black rounded-t-[3rem] transition-all duration-1000 ease-in-out relative overflow-hidden ${
          isScaled ? 'max-w-6xl' : 'w-full'
        }`}
        style={{ minHeight: '500px' }}
      >
        {/* Background Video */}
        <div className="absolute inset-0 rounded-t-[3rem] overflow-hidden py-16">
          <video
            className="w-full h-full object-cover opacity-40"
            autoPlay
            loop
            muted
            playsInline
          >
            {/* Using a generic tech/business video URL - user should replace with their promo video */}
            <source
              src="https://cdn.coverr.co/videos/coverr-computer-programming-in-a-dark-room-6021/1080p.mp4"
              type="video/mp4"
            />
            {/* Fallback background */}
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center py-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight">
            READY TO STEP INTO YOUR
            <br />
            DIGITAL FUTURE?
          </h2>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleGetStartedClick}
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 group transform hover:scale-105"
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
      </div>
    </section>
  );
}