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
    return Icon ? <Icon size={24} className="text-ink" /> : null;
  };

  return (
    <section id="how-it-works" className="py-24 bg-wash relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-60 pointer-events-none"></div>
      <div className="absolute inset-0 bg-stripes opacity-25 pointer-events-none"></div>
      <div className="absolute -top-24 right-8 h-44 w-44 rounded-full bg-accent/22 blur-[2px] pointer-events-none"></div>
      <div className="absolute top-10 left-6 h-40 w-40 rounded-3xl bg-accent/20 rotate-6 blur-[2px] pointer-events-none"></div>
      <div className="absolute -bottom-28 left-10 h-52 w-52 rounded-full bg-accent/18 blur-[2px] pointer-events-none"></div>
      <div className="absolute -bottom-16 right-14 h-48 w-48 rounded-3xl bg-accent/20 -rotate-6 blur-[2px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-ink">
              {t('howItWorks.title')}
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {howItWorksSteps.map((step, index) => (
            <ScrollReveal key={step.id} delay={index * 150}>
              <GlassCard className="p-6 relative h-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-accent text-white flex items-center justify-center font-display font-bold shadow-glow">
                      {step.id}
                    </div>
                    <div className="p-2 rounded-2xl bg-accent/10 border border-accent/20">
                      {IconComponent(step.icon)}
                    </div>
                  </div>
                  <div className="h-px flex-1 ml-4 bg-accent/20"></div>
                </div>

                <div className="pt-5">
                  <h3 className="font-display text-xl font-semibold text-ink mb-2">
                    {t(step.title)}
                  </h3>
                  <p className="text-ink/70">
                    {t(step.description)}
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
