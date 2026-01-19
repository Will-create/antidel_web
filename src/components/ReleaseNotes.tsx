import React from 'react';
import { releaseNotes } from '../constants/appData';
import GlassCard from './UI/GlassCard';
import ScrollReveal from './UI/ScrollReveal';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import {useTranslation} from 'react-i18next';
const ReleaseNotes: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="releases" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-60 pointer-events-none"></div>
      <div className="absolute -top-24 left-8 h-40 w-40 rounded-3xl bg-accent/22 rotate-6 blur-[2px] pointer-events-none"></div>
      <div className="absolute top-4 right-10 h-36 w-36 rounded-full bg-accent/26 blur-[2px] pointer-events-none"></div>
      <div className="absolute -bottom-24 right-12 h-48 w-48 rounded-3xl bg-accent/18 -rotate-6 blur-[2px] pointer-events-none"></div>
      <div className="absolute -bottom-32 left-1/5 h-52 w-52 rounded-full bg-accent/18 blur-[2px] pointer-events-none"></div>
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-12 text-ink">
            {t('updates.title')}
          </h2>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto grid gap-6">
          {releaseNotes.map((release, index) => (
            <ScrollReveal key={release.version} delay={index * 150}>
              <GlassCard className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-ink">
                      v{release.version}
                    </h3>
                    <p className="text-ink/60">{t(release.date)}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-ink/60">
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-accent">
                      <CheckCircle2 size={14} className="text-accent" />
                      {t('updates.newFeatures')}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-accent">
                      <AlertCircle size={14} className="text-accent" />
                      {t('updates.fixes')}
                    </span>
                  </div>
                </div>

                <div className="mt-5 grid md:grid-cols-2 gap-4 text-ink/70">
                  {release.features.length > 0 && (
                    <div>
                      <h4 className="font-display font-semibold text-ink mb-2">
                        {t('updates.newFeatures')}
                      </h4>
                      <ul className="list-disc list-inside space-y-1">
                        {release.features.map((feature, i) => (
                          <li key={i}>{t(feature)}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {release.fixes.length > 0 && (
                    <div>
                      <h4 className="font-display font-semibold text-ink mb-2">
                        {t('updates.fixes')}
                      </h4>
                      <ul className="list-disc list-inside space-y-1">
                        {release.fixes.map((fix, i) => (
                          <li key={i}>{t(fix)}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReleaseNotes;
