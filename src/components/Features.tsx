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
    return Icon ? <Icon size={26} className="text-accent" /> : null;
  };

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-60 pointer-events-none"></div>
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" style={{ backgroundSize: '18px 18px' }}></div>
      <div className="absolute -top-24 left-6 h-48 w-48 rounded-3xl bg-accent/25 rotate-6 blur-[2px] pointer-events-none"></div>
      <div className="absolute top-6 right-8 h-36 w-36 rounded-full bg-accent/28 blur-[2px] pointer-events-none"></div>
      <div className="absolute -bottom-24 right-6 h-52 w-52 rounded-3xl bg-accent/20 -rotate-6 blur-[2px] pointer-events-none"></div>
      <div className="absolute -bottom-32 left-1/4 h-56 w-56 rounded-full bg-accent/20 blur-[2px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-ink">
              {t('features.title')}
            </h2>
            <p className="text-ink/70 max-w-xl">
              {t('footer.branding.description')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.id} delay={index * 100}>
              <GlassCard className="p-6 h-full hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-3 rounded-2xl bg-accent/10 border border-accent/20">
                    {IconComponent(feature.icon)}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink mb-2">
                      {t(feature.title)}
                    </h3>
                    <p className="text-ink/70">
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
