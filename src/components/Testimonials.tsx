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
    <section id="testimonials" className="py-24 bg-wash relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-60 pointer-events-none"></div>
      <div className="absolute -top-24 left-8 h-44 w-44 rounded-full bg-accent/22 blur-[2px] pointer-events-none"></div>
      <div className="absolute top-10 right-10 h-40 w-40 rounded-3xl bg-accent/20 rotate-6 blur-[2px] pointer-events-none"></div>
      <div className="absolute -bottom-24 right-14 h-52 w-52 rounded-full bg-accent/18 blur-[2px] pointer-events-none"></div>
      <div className="absolute -bottom-16 left-12 h-48 w-48 rounded-3xl bg-accent/20 -rotate-6 blur-[2px] pointer-events-none"></div>
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-12 text-ink">
            {t('testimonials.title')}
          </h2>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Mobile testimonials (slider) */}
            <div className="md:hidden">
              <GlassCard className="p-8 relative">
                <Quote className="text-accent/60 absolute top-4 left-4" size={32} />

                <p className="text-ink/90 text-lg italic mb-6 pt-4">
                  {t(testimonials[activeIndex].quote)}
                </p>
                <p className="font-display font-semibold text-ink">
                  {t(testimonials[activeIndex].name)}
                </p>
                <p className="text-ink/60 text-sm">
                  {t(testimonials[activeIndex].role)}
                </p>
              </GlassCard>

              <div className="flex justify-center mt-6 gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-card border border-line hover:bg-ink/5 transition-colors duration-300"
                >
                  <ChevronLeft size={20} className="text-ink" />
                </button>

                <div className="flex gap-2 items-center">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2 h-2 rounded-full ${
                        index === activeIndex ? 'bg-ink' : 'bg-ink/30'
                      }`}
                    ></button>
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-card border border-line hover:bg-ink/5 transition-colors duration-300"
                >
                  <ChevronRight size={20} className="text-ink" />
                </button>
              </div>
            </div>

            {/* Desktop testimonials (grid) */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <ScrollReveal key={testimonial.id} delay={index * 150}>
                  <GlassCard className="p-6 h-full hover:-translate-y-1">
                    <Quote className="text-accent/60 mb-2" size={24} />

                    <p className="text-ink/90 italic mb-6">
                      {t(testimonial.quote)}
                    </p>
                    <p className="font-display font-semibold text-ink">
                      {t(testimonial.name)}
                    </p>
                    <p className="text-ink/60 text-sm">
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
