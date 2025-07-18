'use client';

export function ScrollingHighlights() {
  const highlights = [
    "America's #1 Keto Brand",
    "Clean Ingredients", 
    "No added sugar or seed oils"
  ];

  return (
    <section className="py-6 bg-slate-800 text-white overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll">
          {/* First set */}
          <div className="flex-shrink-0 flex items-center space-x-12 px-12 whitespace-nowrap min-w-full">
            {highlights.map((highlight, index) => (
              <div key={`first-${index}`} className="flex items-center space-x-12">
                <span className="text-sm font-medium">{highlight}</span>
                <span className="text-teal-400">•</span>
              </div>
            ))}
          </div>
          
          {/* Second set for seamless loop */}
          <div className="flex-shrink-0 flex items-center space-x-12 px-12 whitespace-nowrap min-w-full">
            {highlights.map((highlight, index) => (
              <div key={`second-${index}`} className="flex items-center space-x-12">
                <span className="text-sm font-medium">{highlight}</span>
                <span className="text-teal-400">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}