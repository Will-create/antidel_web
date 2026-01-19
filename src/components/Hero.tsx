import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import Button from './UI/Button';
import AnimatedText from './UI/AnimatedText';
import { handleDownload, getDownloadButtonText } from '../utils/downloadHelpers';
import { useTranslation } from 'react-i18next';
import heroScreenshot from '../assets/hero-screenshot.jpg';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 bg-mesh pointer-events-none"></div>
      <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-accent/25 blur-3xl animate-float-slow pointer-events-none"></div>
      <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-float pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent shadow-soft">
              <Sparkles size={16} className="text-accent" />
              <span>{t('hero.title')}</span>
            </div>

            <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold text-ink leading-tight">
              <span className="text-gradient">{t('hero.title')}</span>
              <span className="block text-ink mt-2">{t('hero.subtitle')}</span>
            </h1>

            <div className="mt-6 h-10">
              <AnimatedText
                phrases={t('hero.phrases', { returnObjects: true }) as string[]}
                className="text-lg text-ink/70"
                speed={2000}
              />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button onClick={handleDownload} size="lg" className="px-8 py-4 animate-pulse-subtle">
                {t(getDownloadButtonText())}
              </Button>
              <Button onClick={scrollToFeatures} variant="secondary" size="lg" className="px-8 py-4">
                {t('hero.discoverFeatures')}
                <ArrowDown size={18} />
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-ink/60">
              <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-accent">{t('download.android')}</span>
              <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-accent">{t('download.ios')}</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -left-8 hidden md:block w-32 h-32 bg-accent/15 rounded-3xl rotate-6 shadow-soft"></div>
            <div className="absolute -bottom-10 -right-10 hidden md:block w-40 h-40 bg-accent/20 rounded-full shadow-soft"></div>

            <div className="relative mx-auto max-w-sm">
              <div className="rounded-[2.5rem] border border-ink/10 bg-card shadow-lift p-3">
                <div className="rounded-[2rem] bg-ink text-paper p-6 min-h-[440px] flex flex-col gap-4">
                  <div className="flex items-center text-xs uppercase tracking-widest text-paper/60">
                    <span>{t('hero.title')}</span>
                  </div>
                  <div className="rounded-2xl bg-paper/10 border border-paper/20 p-4 flex-1 flex flex-col gap-3">
                    <div className="h-40 rounded-xl bg-paper/10 border border-paper/20 overflow-hidden">
                      <img
                        src={heroScreenshot}
                        alt="Antidel app screenshot"
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="h-12 rounded-xl bg-paper/20 border border-paper/20"></div>
                    <div className="h-12 rounded-xl bg-paper/20 border border-paper/20"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs text-paper/70">
                    <div className="rounded-xl bg-paper/10 border border-paper/20 p-3">Instant alert</div>
                    <div className="rounded-xl bg-paper/10 border border-paper/20 p-3">Private storage</div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-6 bottom-16 hidden lg:block rounded-2xl bg-card border border-line shadow-soft px-4 py-3 text-sm text-ink/70">
                {t('hero.phrases.0')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
