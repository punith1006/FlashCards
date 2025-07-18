export function ScrollingHighlights() {
  const highlights = [
    "Clean Ingredients",
    "No added sugar or seed oils", 
    "America's #1 Keto Brand"
  ];

  return (
    <section className="py-6 bg-[hsl(210,24%,16%)] text-white overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll">
          {/* First set */}
          <div className="flex-shrink-0 flex items-center whitespace-nowrap">
            {highlights.map((highlight, index) => (
              <div key={`first-${index}`} className="flex items-center">
                <span className="text-sm font-medium px-8">{highlight}</span>
                <span className="text-[hsl(173,48%,53%)] px-4">•</span>
              </div>
            ))}
          </div>
          
          {/* Second set for seamless loop */}
          <div className="flex-shrink-0 flex items-center whitespace-nowrap">
            {highlights.map((highlight, index) => (
              <div key={`second-${index}`} className="flex items-center">
                <span className="text-sm font-medium px-8">{highlight}</span>
                <span className="text-[hsl(173,48%,53%)] px-4">•</span>
              </div>
            ))}
          </div>
          
          {/* Third set for better continuous loop */}
          <div className="flex-shrink-0 flex items-center whitespace-nowrap">
            {highlights.map((highlight, index) => (
              <div key={`third-${index}`} className="flex items-center">
                <span className="text-sm font-medium px-8">{highlight}</span>
                <span className="text-[hsl(173,48%,53%)] px-4">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
