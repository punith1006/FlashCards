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
      className={`text-center transition-all duration-600 ${
        isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
      }`}
    >
      {/* Simple clean icon */}
      <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
        {icon}
      </div>
      
      {/* Title */}
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export function FeaturesSection() {
  const features = [
    {
      icon: <Scale className="w-14 h-14 text-gray-700" />,
      title: "Support Weight Loss",
      description: "Turn fat into fuel. Easy for beginners and effective for pros."
    },
    {
      icon: <Utensils className="w-14 h-14 text-gray-700" />,
      title: "Enjoy Tasty Food", 
      description: "You can still indulge. A keto diet is a delicious diet that fuels your body and mind."
    },
    {
      icon: <Zap className="w-14 h-14 text-gray-700" />,
      title: "Feel Energized",
      description: "Focus for longer, think more clearly, and power through your workouts."
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12">
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
