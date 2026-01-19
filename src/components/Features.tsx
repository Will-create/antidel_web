import React from 'react';
import { features } from '../constants/appData';
import GlassCard from './UI/GlassCard';
import ScrollReveal from './UI/ScrollReveal';
import * as LucideIcons from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Features: React.FC = () => {
  const { t } = useTranslation();
  
  // Add the IconComponent function
  const IconComponent = (iconName: string) => {
    const Icon = LucideIcons[iconName as keyof typeof LucideIcons] as React.ComponentType<{
      size?: number;
      className?: string;
    }>;
    return Icon ? <Icon size={32} className="text-whatsapp-green" /> : null;
  };

  return (
    <section id="features" className="relative py-20 bg-deep-black">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-deep-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-deep-black to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            {t('features.title')}
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.id} delay={index * 100}>
              <GlassCard className="p-6 h-full hover:transform hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-3 rounded-full bg-gradient-to-br from-whatsapp-green/20 to-blue-glow/10">
                    {IconComponent(feature.icon)}
                  </div>
                  <div>
                    <h3 className="font-orbitron text-xl font-bold text-white mb-2">
                      {t(feature.title)}
                    </h3>
                    <p className="text-white/80">
                      {t(feature.description)}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;