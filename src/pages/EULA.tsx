import React from 'react';
import Layout2 from '../components/Layout/Layout2';
import { useTranslation } from 'react-i18next';

const EULA: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Layout2>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-8 text-ink">
            {t('legal.eula.title')}
          </h1>
          
          <div className="max-w-none text-ink/80 space-y-5 [&_h2]:text-ink [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-8 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">
            <p className="text-ink/60">{t('legal.eula.lastUpdated')}: {new Date().toLocaleDateString()}</p>
            
            <h2>{t('legal.eula.sections.licenseGrant.title')}</h2>
            <p>{t('legal.eula.sections.licenseGrant.content')}</p>
            
            <h2>{t('legal.eula.sections.restrictions.title')}</h2>
            <p>{t('legal.eula.sections.restrictions.content')}</p>
            <ul>
              {[0, 1, 2, 3].map((index) => (
                <li key={index}>{t(`legal.eula.sections.restrictions.items.${index}`)}</li>
              ))}
            </ul>
            
            <h2>{t('legal.eula.sections.intellectualProperty.title')}</h2>
            <p>{t('legal.eula.sections.intellectualProperty.content')}</p>
            
            <h2>{t('legal.eula.sections.warranty.title')}</h2>
            <p>{t('legal.eula.sections.warranty.content')}</p>
            
            <h2>{t('legal.eula.sections.liability.title')}</h2>
            <p>{t('legal.eula.sections.liability.content')}</p>
            
            <h2>{t('legal.eula.sections.termination.title')}</h2>
            <p>{t('legal.eula.sections.termination.content')}</p>
            
            <h2>{t('legal.eula.sections.governing.title')}</h2>
            <p>{t('legal.eula.sections.governing.content')}</p>
            
            <h2>{t('legal.eula.sections.contact.title')}</h2>
            <p>
              {t('legal.eula.sections.contact.content')}
              <br />
              <a href={`mailto:${t('legal.eula.sections.contact.email')}`} className="text-accent underline">
                {t('legal.eula.sections.contact.email')}
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout2>
  );
};

export default EULA;
