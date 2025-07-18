'use client';

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source 
          src="https://player.vimeo.com/external/374714669.sd.mp4?s=e86206c94d4ca5c7d56c3b6e59fa66d8e9c5f5a3&profile_id=165" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      
      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto animate-fade-in">
        <p className="text-sm font-medium tracking-wider uppercase mb-4 opacity-90">
          America's #1 Keto Brand*
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Get your health<br />
          <span className="bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
            back on track
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 font-light">
          Feel your best with high-quality, low-carb supplements & snacks.
        </p>
        <Button 
          size="lg"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Shop Now
        </Button>
        <p className="text-sm mt-4 opacity-75">*By Amazon Sales</p>
      </div>
    </section>
  );
}