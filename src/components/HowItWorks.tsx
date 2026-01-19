import React from 'react';
import { howItWorksSteps } from '../constants/appData';
import GlassCard from './UI/GlassCard';
import ScrollReveal from './UI/ScrollReveal';
import * as LucideIcons from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HowItWorks: React.FC = () => {
  const { t } = useTranslation();
  
  // Properly typed icon component
  const IconComponent = (iconName: string) => {
    const Icon = LucideIcons[iconName as keyof typeof LucideIcons] as React.ComponentType<{
      size?: number;
      className?: string;
    }>;
    return Icon ? <Icon size={32} className="text-whatsapp-green" /> : null;
  };

  return (
    <section id="how-it-works" className="py-20 bg-deep-black relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-glow/5 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            {t('howItWorks.title')}
          </h2>
        </ScrollReveal>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {howItWorksSteps.map((step, index) => (
              <ScrollReveal 
                key={step.id} 
                delay={index * 150}
              >
                <GlassCard 
                  className="p-6 relative hover:transform hover:scale-105 h-full"
                  glowColor={index % 2 === 0 ? 'green' : 'blue'}
                >
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-whatsapp-green to-blue-glow flex items-center justify-center font-orbitron font-bold text-deep-black">
                    {step.id}
                  </div>
                  
                  <div className="pt-4">
                    <div className="mb-4 p-3 inline-block rounded-full bg-gradient-to-br from-whatsapp-green/20 to-blue-glow/10">
                      {IconComponent(step.icon)}
                    </div>
                    
                    <h3 className="font-orbitron text-xl font-bold text-white mb-2">
                      {t(step.title)}
                    </h3>
                    <p className="text-white/80">
                      {t(step.description)}
                    </p>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;