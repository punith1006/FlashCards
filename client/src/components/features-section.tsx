import { Scale, Utensils, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

function Feature({ icon, title, description, delay = 0 }: FeatureProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={ref}
      className={`text-center group transition-all duration-600 relative ${
        isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
      }`}
    >
      {/* Liquid Glass Container */}
      <div 
        className="relative p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full flex flex-col justify-between"
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37), 0 4px 16px rgba(31, 38, 135, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
          minHeight: '320px',
        }}
      >
        {/* Liquid Glass Base Layer */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)',
            backdropFilter: 'blur(25px)',
            WebkitBackdropFilter: 'blur(25px)',
          }}
        />
        
        {/* Enhanced liquid glass hover effect */}
        <div 
          className="absolute inset-0 transition-all duration-700 group-hover:opacity-100 opacity-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
          }}
        />
        
        {/* Liquid glass border effect */}
        <div 
          className="absolute inset-0 rounded-3xl opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1))',
            padding: '1px',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'xor',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
          }}
        />
        
        {/* iOS-style frosted glass overlay */}
        <div 
          className="absolute inset-0 rounded-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 70%, transparent 100%)',
            backdropFilter: 'blur(15px) saturate(150%)',
            WebkitBackdropFilter: 'blur(15px) saturate(150%)',
          }}
        />

        {/* Content - relative positioning to appear above glass layers */}
        <div className="relative z-10 flex flex-col h-full">
          <div 
            className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
            }}
          >
            {icon}
          </div>
          <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 text-center" 
              style={{ 
                color: 'rgba(16, 24, 40, 0.9)',
                textShadow: '0 1px 2px rgba(255, 255, 255, 0.5)'
              }}>
            {title}
          </h3>
          <p className="leading-relaxed transition-colors duration-300 text-center flex-grow flex items-center justify-center"
             style={{ 
               color: 'rgba(107, 114, 128, 0.8)',
               textShadow: '0 1px 1px rgba(255, 255, 255, 0.3)'
             }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const features = [
    {
      icon: <Scale className="w-8 h-8 text-[hsl(13,100%,60%)]" />,
      title: "Support Weight Loss",
      description: "Turn fat into fuel. Easy for beginners and effective for pros."
    },
    {
      icon: <Utensils className="w-8 h-8 text-[hsl(173,48%,53%)]" />,
      title: "Enjoy Tasty Food", 
      description: "You can still indulge. A keto diet is a delicious diet that fuels your body and mind."
    },
    {
      icon: <Zap className="w-8 h-8 text-[hsl(13,100%,60%)]" />,
      title: "Feel Energized",
      description: "Focus for longer, think more clearly, and power through your workouts."
    }
  ];

  return (
    <section className="py-20 relative" style={{
      background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.95) 0%, rgba(241, 245, 249, 0.95) 100%)',
      backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(173, 216, 230, 0.2) 0%, transparent 50%)',
    }}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 items-stretch">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
