import React from 'react';
import Layout2 from '../components/Layout/Layout2';
import { useTranslation } from 'react-i18next';

const TermsOfUse: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Layout2>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-orbitron text-3xl md:text-4xl font-bold mb-8 text-white">
            {t('legal.termsOfUse.title')}
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-white/80">{t('legal.termsOfUse.lastUpdated')}: {new Date().toLocaleDateString()}</p>
            
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
              <a href={`mailto:${t('legal.termsOfUse.sections.contact.email')}`} className="text-whatsapp-green">
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