import React, { useState } from 'react';
import { testimonials } from '../constants/appData';
import GlassCard from './UI/GlassCard';
import ScrollReveal from './UI/ScrollReveal';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-deep-black relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-whatsapp-green/5 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            {t('testimonials.title')}
          </h2>
        </ScrollReveal>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Mobile testimonials (slider) */}
            <div className="md:hidden">
              <GlassCard className="p-8 relative">
                <Quote className="text-whatsapp-green/30 absolute top-4 left-4" size={32} />
                
                <p className="text-white/90 text-lg italic mb-6 pt-4">
                  {t(testimonials[activeIndex].quote)}
                </p>
                <p className="font-orbitron font-bold text-white">
                  {t(testimonials[activeIndex].name)}
                </p>
                <p className="text-whatsapp-green/90 text-sm">
                  {t(testimonials[activeIndex].role)}
                </p>
              </GlassCard>
              
              <div className="flex justify-center mt-6 gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-dark-card hover:bg-whatsapp-green/20 transition-colors duration-300"
                >
                  <ChevronLeft size={20} className="text-white" />
                </button>
                
                <div className="flex gap-2 items-center">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2 h-2 rounded-full ${
                        index === activeIndex ? 'bg-whatsapp-green' : 'bg-whatsapp-green/30'
                      }`}
                    ></button>
                  ))}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-dark-card hover:bg-whatsapp-green/20 transition-colors duration-300"
                >
                  <ChevronRight size={20} className="text-white" />
                </button>
              </div>
            </div>
            
            {/* Desktop testimonials (grid) */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <ScrollReveal key={testimonial.id} delay={index * 150}>
                  <GlassCard className="p-6 h-full hover:transform hover:scale-105">
                    <Quote className="text-whatsapp-green/30 mb-2" size={24} />
                    
                    <p className="text-white/90 italic mb-6">
                      {t(testimonial.quote)}
                    </p>
                    <p className="font-orbitron font-bold text-white">
                      {t(testimonial.name)}
                    </p>
                    <p className="text-whatsapp-green/90 text-sm">
                      {t(testimonial.role)}
                    </p>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;