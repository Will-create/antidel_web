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
    <section id="faq" className="py-20 bg-deep-black relative">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-12 text-white">
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
                  <h3 className="font-orbitron text-lg text-white">
                    {t( item.question)}
                  </h3>
                  {/* <p className="text-white/80">{t(item.answer)}</p> */}
                  <div className="ml-4 flex-shrink-0 rounded-full p-1.5 bg-whatsapp-green/20 text-whatsapp-green">
                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 pt-0 border-t border-white/10">
                    <p className="text-white/80">{t(item.answer)}</p>
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