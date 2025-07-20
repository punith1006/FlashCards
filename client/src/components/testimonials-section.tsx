// TestimonialCard component for different card types
function TestimonialCard({ testimonial, index }: { testimonial: any, index: number }) {
  const getCardClasses = () => {
    if (testimonial.cardType === 'dark-overlay') {
      return 'relative bg-gray-900 text-white overflow-hidden';
    }
    return 'bg-orange-50 text-gray-800';
  };

  const getQuoteClasses = () => {
    if (testimonial.cardType === 'dark-overlay') {
      return 'text-white font-normal italic';
    }
    return 'text-gray-700 font-normal italic';
  };

  return (
    <div className={`rounded-2xl p-6 h-80 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 ${getCardClasses()}`}>
      {/* Background image overlay for dark cards */}
      {testimonial.hasBackgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900 opacity-90 rounded-2xl"></div>
      )}
      
      {/* Story badge for story cards */}
      {testimonial.isStoryCard && (
        <div className="absolute top-4 left-4 z-10">
          <span className="text-xs font-semibold text-white/80">Snackpass Stories</span>
        </div>
      )}
      
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-1">
            {testimonial.title}
          </h3>
          <p className={`text-sm font-medium ${testimonial.cardType === 'dark-overlay' ? 'text-white/80' : 'text-gray-600'}`}>
            {testimonial.subtitle}
          </p>
        </div>

        {/* Quote */}
        <blockquote className={`leading-relaxed mb-6 text-sm ${getQuoteClasses()}`}>
          "{testimonial.quote.slice(0, 140)}..."
        </blockquote>
      </div>

      {/* Author Info */}
      <div className="relative z-10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
          <img 
            src={`https://ui-avatars.com/api/?name=${testimonial.author}&background=58CC88&color=fff&size=40`}
            alt={testimonial.author}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className={`font-semibold text-sm ${testimonial.cardType === 'dark-overlay' ? 'text-white' : 'text-gray-900'}`}>
            {testimonial.role}, {testimonial.author}
          </div>
          <div className={`text-xs ${testimonial.cardType === 'dark-overlay' ? 'text-white/70' : 'text-gray-500'}`}>
            {testimonial.since}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  // Testimonials data
  const testimonials = [
    {
      id: "xing-fu-tang",
      title: "Xing Fu Tang",
      subtitle: "Taiwan's No.1 Boba Brand",
      quote: "When it comes time to service a lot of tickets in short order, it is very helpful to be able to turn the POS into a kiosk... and have customers order for themselves and then dedicate their power to making the actual drinks.",
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
      id: "presotea",
      title: "Presotea",
      subtitle: "Stories Collection",
      quote: "Snackpass technology has a great addition to our corporate and franchise locations. It's has helped streamline operations, but it's been the most valuable for our marketing and customer engagement efforts.",
      author: "Regional Manager",
      role: "Operations",
      company: "Presotea",
      since: "Snackpass Partner Since 2022",
      cardType: "dark-overlay",
      hasBackgroundImage: true,
      isStoryCard: true
    },
    {
      id: "bubble-tea-place",
      title: "Bubble Tea Co",
      subtitle: "Growing Chain Restaurant",
      quote: "Everything is connected. Customers can order in-app, online, or via kiosk and always be part of our loyalty program. This consistency keeps our customers coming back and helps us grow faster.",
      author: "Maria Rodriguez",
      role: "Founder",
      company: "Bubble Tea Co",
      since: "Snackpass Partner Since 2021",
      cardType: "light-beige",
      hasBackgroundImage: false
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Content */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-6">
                Why fast growing restaurant brands choose Snackpass
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Future proof your business. Stay ahead of the competition without spending millions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Offer next generation customer experiences like leading brands. All customized to your brand.
                </p>
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 shadow-lg">
              Case Studies
            </button>
          </div>

          {/* Right Content - Testimonial Cards Carousel */}
          <div className="lg:col-span-7">
            {/* Desktop: Grid Layout */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-4">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
              ))}
            </div>

            {/* Mobile: Horizontal Scroll */}
            <div className="lg:hidden overflow-x-auto">
              <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
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