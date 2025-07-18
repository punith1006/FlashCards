export function ScrollingHighlights() {
  const highlights = [
    "Clean Ingredients",
    "No added sugar or seed oils", 
    "America's #1 Keto Brand"
  ];

  return (
    <section className="py-3 bg-white text-black overflow-hidden border-y border-gray-200">
      <div className="relative">
        <div className="flex animate-scroll">
          {/* First set */}
          <div className="flex-shrink-0 flex items-center whitespace-nowrap">
            {highlights.map((highlight, index) => (
              <div key={`first-${index}`} className="flex items-center">
                <span className="text-sm font-medium px-12">{highlight}</span>
                <span className="text-gray-600 px-4">•</span>
              </div>
            ))}
          </div>
          
          {/* Second set for seamless loop */}
          <div className="flex-shrink-0 flex items-center whitespace-nowrap">
            {highlights.map((highlight, index) => (
              <div key={`second-${index}`} className="flex items-center">
                <span className="text-sm font-medium px-12">{highlight}</span>
                <span className="text-gray-600 px-4">•</span>
              </div>
            ))}
          </div>
          
          {/* Third set for better continuous loop */}
          <div className="flex-shrink-0 flex items-center whitespace-nowrap">
            {highlights.map((highlight, index) => (
              <div key={`third-${index}`} className="flex items-center">
                <span className="text-sm font-medium px-12">{highlight}</span>
                <span className="text-gray-600 px-4">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
