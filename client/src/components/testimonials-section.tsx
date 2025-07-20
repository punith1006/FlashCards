// TestimonialCard component matching the reference design
function TestimonialCard({ testimonial, index }: { testimonial: any, index: number }) {
  const isDark = testimonial.cardType === 'dark-overlay';
  
  return (
    <div className={`
      relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300
      ${isDark ? 'bg-gray-900 text-white' : 'bg-orange-50 text-gray-800'}
      h-[400px]
    `}>
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
      
      {/* Story badge for the last card */}
      {testimonial.isStoryCard && (
        <div className="absolute top-6 left-6 z-20">
          <span className="text-xs font-medium text-white/90 tracking-wide">Snackpass Stories</span>
        </div>
      )}
      
      {/* Content container */}
      <div className={`
        relative z-20 p-8 h-full flex flex-col justify-between
        ${testimonial.isStoryCard ? 'pt-16' : 'pt-8'}
      `}>
        {/* Header */}
        <div className="space-y-3">
          <h3 className={`
            ${isDark ? 'text-white' : 'text-gray-900'} 
            text-xl font-bold leading-tight
          `}>
            {testimonial.title}
          </h3>
          <p className={`
            text-sm font-medium
            ${isDark ? 'text-white/80' : 'text-gray-600'}
          `}>
            {testimonial.subtitle}
          </p>
        </div>

        {/* Quote - positioned in middle */}
        <div className="flex-1 flex items-center py-6">
          <blockquote className={`
            leading-relaxed italic text-sm
            ${isDark ? 'text-white' : 'text-gray-700'}
          `}>
            "{testimonial.quote}"
          </blockquote>
        </div>

        {/* Author Info - at bottom */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <img 
              src={`https://ui-avatars.com/api/?name=${testimonial.author}&background=4F46E5&color=fff&size=48`}
              alt={testimonial.author}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className={`
              font-semibold text-sm
              ${isDark ? 'text-white' : 'text-gray-900'}
            `}>
              {testimonial.role}, {testimonial.author}
            </div>
            <div className={`
              text-xs
              ${isDark ? 'text-white/70' : 'text-gray-500'}
            `}>
              {testimonial.since}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  // Testimonials data matching reference image exactly
  const testimonials = [
    {
      id: "xing-fu-tang",
      title: "Xing Fu Tang",
      subtitle: "Taiwan's No.1 Boba Brand",
      quote: "When it comes time to really service a lot of tickets in short order, it is very helpful to be able to turn the POS into a kiosk",
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
      quote: "With Snackpass we were finally able to bring all our operations under one roof, eliminating the stress of integrating and purchasing multiple solutions. Our day-to-day work has been more efficient.",
      author: "Amin Fasil",
      role: "Owner",
      company: "Ole Ole Burrito Express",
      since: "Snackpass Partner Since 2020",
      cardType: "light-beige",
      hasBackgroundImage: false
    },
    {
      id: "presotea",
      title: "Presotea",
      subtitle: "Stories Collection",
      quote: "Snackpass technology has a great addition to our corporate and franchise locations. NO has it helped streamline operations, but it's been the",
      author: "Regional Manager",
      role: "Operations",
      company: "Presotea",
      since: "Snackpass Partner Since 2022",
      cardType: "dark-overlay",
      hasBackgroundImage: true,
      isStoryCard: true
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-8 max-w-[1400px]">
        <div className="flex gap-16 items-start">
          {/* Left Content - Exactly as in reference */}
          <div className="flex-shrink-0 w-[320px] space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif text-gray-900 leading-[1.2] font-normal">
                Why fast growing<br />
                restaurant brands<br />
                choose Snackpass
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Future proof your business. Stay ahead of the competition without spending millions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Offer next generation customer experiences like Starbucks and McDonalds. All customized to your brand.
                </p>
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              Case Studies
            </button>
          </div>

          {/* Right Content - Testimonial Cards Grid */}
          <div className="flex-1">
            {/* Desktop: 3-column grid matching reference */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-6 items-start">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <div key={testimonial.id}>
                  <TestimonialCard testimonial={testimonial} index={index} />
                </div>
              ))}
            </div>

            {/* Mobile: Horizontal scroll */}
            <div className="lg:hidden overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="w-80 flex-shrink-0">
                    <TestimonialCard testimonial={testimonial} index={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}