// TestimonialCard component matching the reference design
function TestimonialCard({ testimonial, index }: { testimonial: any, index: number }) {
  const isDark = testimonial.cardType === 'dark-overlay';
  
  return (
    <div className={`
      relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300
      ${isDark ? 'bg-gray-900 text-white' : 'bg-orange-50 text-gray-800'}
      h-[480px] transform hover:scale-105
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
        relative z-20 p-10 h-full flex flex-col
        ${testimonial.isStoryCard ? 'pt-20' : 'pt-10'}
      `}>
        {/* Header - Fixed at top */}
        <div className="space-y-4 flex-shrink-0">
          <h3 className={`
            ${isDark ? 'text-white' : 'text-gray-900'} 
            text-2xl font-bold leading-tight
          `}>
            {testimonial.title}
          </h3>
          <p className={`
            text-base font-medium
            ${isDark ? 'text-white/80' : 'text-gray-600'}
          `}>
            {testimonial.subtitle}
          </p>
        </div>

        {/* Quote - Scrollable content area */}
        <div className="flex-1 py-8 overflow-y-auto scrollbar-hide">
          <blockquote className={`
            leading-relaxed italic text-base
            ${isDark ? 'text-white' : 'text-gray-700'}
          `}>
            "{testimonial.quote}"
          </blockquote>
        </div>

        {/* Author Info - Fixed at bottom */}
        <div className="flex items-center gap-5 flex-shrink-0 mt-auto">
          <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white/20">
            <img 
              src={`https://ui-avatars.com/api/?name=${testimonial.author}&background=4F46E5&color=fff&size=56`}
              alt={testimonial.author}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className={`
              font-semibold text-base
              ${isDark ? 'text-white' : 'text-gray-900'}
            `}>
              {testimonial.role}, {testimonial.author}
            </div>
            <div className={`
              text-sm
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
    <div className="bg-gray-50 py-32">
      <div className="container mx-auto px-8 max-w-[1600px]">
        {/* Desktop Layout: 4-column grid with text section as first column */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 items-start">
          {/* First Column - Header Section (plain text, same width as cards) */}
          <div className="flex flex-col justify-between h-[480px]">
            <div className="space-y-8">
              <h2 className="text-3xl font-serif text-gray-900 leading-[1.1] font-normal">
                Why fast growing<br />
                restaurant brands<br />
                choose Snackpass
              </h2>
              <div className="space-y-6">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Future proof your business. Stay ahead of the competition without spending millions.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Offer next generation customer experiences like Starbucks and McDonalds. All customized to your brand.
                </p>
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors duration-200 shadow-lg mt-auto">
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

        {/* Mobile & Tablet Layout: Stacked */}
        <div className="lg:hidden space-y-16">
          {/* Header Section */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-[1.1] font-normal mb-8">
              Why fast growing<br />
              restaurant brands<br />
              choose Snackpass
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Future proof your business. Stay ahead of the competition without spending millions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Offer next generation customer experiences like Starbucks and McDonalds. All customized to your brand.
              </p>
            </div>
            <div className="mt-10">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 shadow-lg">
                Case Studies
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="space-y-8">
            {/* Tablet: 2-column grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id}>
                  <TestimonialCard testimonial={testimonial} index={index} />
                </div>
              ))}
            </div>

            {/* Mobile: Horizontal scroll */}
            <div className="md:hidden overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 pb-6" style={{ width: 'max-content' }}>
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