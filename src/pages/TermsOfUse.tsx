import React from 'react';
import Layout2 from '../components/Layout/Layout2';
import { useTranslation } from 'react-i18next';

const TermsOfUse: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Layout2>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-8 text-ink">
            {t('legal.termsOfUse.title')}
          </h1>
          
          <div className="max-w-none text-ink/80 space-y-5 [&_h2]:text-ink [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-8 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">
            <p className="text-ink/60">{t('legal.termsOfUse.lastUpdated')}: {new Date().toLocaleDateString()}</p>
            
            <h2>{t('legal.termsOfUse.sections.acceptance.title')}</h2>
            <p>{t('legal.termsOfUse.sections.acceptance.content')}</p>
            
            <h2>{t('legal.termsOfUse.sections.description.title')}</h2>
            <p>{t('legal.termsOfUse.sections.description.content')}</p>
            
            <h2>{t('legal.termsOfUse.sections.responsibilities.title')}</h2>
            <p>{t('legal.termsOfUse.sections.responsibilities.content')}</p>
            <ul>
              {[0, 1, 2, 3].map((index) => (
                <li key={index}>{t(`legal.termsOfUse.sections.responsibilities.items.${index}`)}</li>
              ))}
            </ul>
            
            <h2>{t('legal.termsOfUse.sections.intellectualProperty.title')}</h2>
            <p>{t('legal.termsOfUse.sections.intellectualProperty.content')}</p>
            
            <h2>{t('legal.termsOfUse.sections.liability.title')}</h2>
            <p>{t('legal.termsOfUse.sections.liability.content')}</p>
            <ul>
              {[0, 1, 2].map((index) => (
                <li key={index}>{t(`legal.termsOfUse.sections.liability.items.${index}`)}</li>
              ))}
            </ul>
            
            <h2>{t('legal.termsOfUse.sections.termination.title')}</h2>
            <p>{t('legal.termsOfUse.sections.termination.content')}</p>
            
            <h2>{t('legal.termsOfUse.sections.changes.title')}</h2>
            <p>{t('legal.termsOfUse.sections.changes.content')}</p>
            
            <h2>{t('legal.termsOfUse.sections.contact.title')}</h2>
            <p>
              {t('legal.termsOfUse.sections.contact.content')}
              <br />
              <a href={`mailto:${t('legal.termsOfUse.sections.contact.email')}`} className="text-accent underline">
                {t('legal.termsOfUse.sections.contact.email')}
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout2>
  );
};

export default TermsOfUse;
