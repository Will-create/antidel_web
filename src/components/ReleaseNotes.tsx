import React from 'react';
import { releaseNotes } from '../constants/appData';
import GlassCard from './UI/GlassCard';
import ScrollReveal from './UI/ScrollReveal';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import {useTranslation} from 'react-i18next';
const ReleaseNotes: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="releases" className="py-20 bg-deep-black relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            {t('updates.title')}
          </h2>
        </ScrollReveal>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-whatsapp-green/80 via-blue-glow/50 to-transparent"></div>
          
          {/* Release notes items */}
          {releaseNotes.map((release, index) => (
            <ScrollReveal 
              key={release.version} 
              delay={index * 150}
              className="mb-12 last:mb-0"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0 md:text-right">
                  <h3 className="font-orbitron text-xl font-bold text-white">
                    v{release.version}
                  </h3>
                  <p className="text-whatsapp-green/90">
                  {t(release.date)}
                  </p>
                </div>
                
                <div className="hidden md:block">
                  <div className="w-5 h-5 rounded-full bg-whatsapp-green shadow-glow-green animate-pulse-slow"></div>
                </div>
                
                <div className="md:w-1/2 md:pl-8">
                  <GlassCard className="p-5 hover:shadow-glow-green-lg transition-all duration-500">
                    {release.features.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-orbitron font-medium text-white mb-2 flex items-center">
                          <CheckCircle2 size={16} className="text-whatsapp-green mr-2" />
                          New Features
                        </h4>
                        <ul className="list-disc list-inside text-white/80 pl-5 space-y-1">
                          {release.features.map((feature, i) => (
                            <li key={i}>{t(feature)}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {release.fixes.length > 0 && (
                      <div>
                        <h4 className="font-orbitron font-medium text-white mb-2 flex items-center">
                          <AlertCircle size={16} className="text-blue-glow mr-2" />
                          Fixes & Improvements
                        </h4>
                        <ul className="list-disc list-inside text-white/80 pl-5 space-y-1">
                          {release.fixes.map((fix, i) => (
                            <li key={i}>{t(fix)}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </GlassCard>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReleaseNotes;