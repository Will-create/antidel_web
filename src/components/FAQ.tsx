import React, { useState } from 'react';
import { faqItems } from '../constants/appData';
import GlassCard from './UI/GlassCard';
import ScrollReveal from './UI/ScrollReveal';
import { Plus, Minus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-60 pointer-events-none"></div>
      <div className="absolute -top-24 right-8 h-40 w-40 rounded-3xl bg-accent/20 rotate-6 blur-[2px] pointer-events-none"></div>
      <div className="absolute top-8 left-12 h-36 w-36 rounded-full bg-accent/24 blur-[2px] pointer-events-none"></div>
      <div className="absolute -bottom-24 left-8 h-48 w-48 rounded-3xl bg-accent/18 -rotate-6 blur-[2px] pointer-events-none"></div>
      <div className="absolute -bottom-28 right-1/4 h-52 w-52 rounded-full bg-accent/18 blur-[2px] pointer-events-none"></div>
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-12 text-ink">
            {t('faq.title')}
          </h2>
        </ScrollReveal>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <ScrollReveal key={index} delay={index * 100} className="mb-4">
              <GlassCard className="overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 flex justify-between items-center"
                >
                  <h3 className="font-display text-lg text-ink">
                    {t( item.question)}
                  </h3>
                  {/* <p className="text-white/80">{t(item.answer)}</p> */}
                  <div className="ml-4 flex-shrink-0 rounded-full p-1.5 bg-accent/10 border border-accent/20 text-accent">
                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 pt-0 border-t border-line">
                    <p className="text-ink/70">{t(item.answer)}</p>
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

export default FAQ;
