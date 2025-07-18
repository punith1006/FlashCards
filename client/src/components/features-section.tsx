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
      className={`text-center group transition-all duration-600 ${
        isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
      }`}
    >
      <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-[hsl(210,24%,16%)] mb-4">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
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
    <section className="py-20 gradient-bg">
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
