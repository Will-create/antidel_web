import React from 'react';
import { ArrowDown } from 'lucide-react';
import Button from './UI/Button';
import AnimatedText from './UI/AnimatedText';
import { handleDownload, getDownloadButtonText } from '../utils/downloadHelpers';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-deep-black">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-glow/20 via-transparent to-whatsapp-green/20"></div>
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-whatsapp-green/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-glow/20 rounded-full blur-3xl animate-float"></div>
      
      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
          <span className="text-gradient bg-gradient-to-r from-whatsapp-green to-blue-glow">
            {t('hero.title')}
          </span>
        </h1>
        
        <p className="font-orbitron text-xl md:text-2xl text-white/90 mb-6">
          {t('hero.subtitle')}
        </p>
        
        <div className="h-12 mb-8">
          <AnimatedText 
            phrases={t('hero.phrases', { returnObjects: true }) as string[]}
            className="text-lg md:text-xl text-white/80"
            speed={2000}
          />
        </div>
        
        <div className="mt-8 flex flex-col items-center">
          <Button 
            onClick={handleDownload} 
            size="lg" 
            className="mb-6 px-8 py-4 animate-pulse-subtle"
          >
            {t(getDownloadButtonText())}
          </Button>
          
          <button 
            onClick={scrollToFeatures} 
            className="text-white/60 hover:text-white flex flex-col items-center transition-colors duration-300"
          >
            <span className="mb-2 text-sm">{t('hero.discoverFeatures')}</span>
            <ArrowDown className="animate-bounce" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;