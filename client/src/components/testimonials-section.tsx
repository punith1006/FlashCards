// TestimonialCard component matching the reference design
function TestimonialCard({ testimonial, index }: { testimonial: any, index: number }) {
  const isDark = testimonial.cardType === 'dark-overlay';
  
  return (
    <div className={`
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
                "{testimonial.quote}"
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
                "{testimonial.quote}"
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

export function TestimonialsSection() {
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

  return (
    <div className="bg-gray-50 py-40 pt-[10px] pb-[10px]">
      <div className="container mx-auto px-8 max-w-[1400px]">
        {/* Desktop Layout: 4-column grid with text section as first column */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 items-start">
          {/* First Column - Header Section (plain text, same width as cards) */}
          <div className="flex flex-col justify-between h-[580px] pr-6">
            <div className="space-y-10">
              <h2 className="text-4xl font-serif text-black leading-[1.15] font-normal">
                Why fast growing<br />
                restaurant brands<br />
                choose Snackpass
              </h2>
              <div className="space-y-6">
                <p className="text-base text-gray-600 leading-relaxed">
                  Future proof your business. Stay ahead of the competition without spending millions.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Offer next generation customer experiences like Starbucks and McDonalds. All customized to your brand.
                </p>
              </div>
            </div>
            <button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white px-8 py-4 rounded-xl font-semibold text-base transition-colors duration-200 w-fit">
              Case Studies
            </button>
          </div>

          {/* Columns 2-4 - Testimonial Cards */}
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} index={index} />
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
}