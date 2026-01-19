import React from 'react';
import Layout2 from '../components/Layout/Layout2';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Layout2>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-orbitron text-3xl md:text-4xl font-bold mb-8 text-white">
            {t('legal.privacyPolicy.title')}
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-white/80">{t('legal.privacyPolicy.lastUpdated')}: {new Date().toLocaleDateString()}</p>
            
            <h2>{t('legal.privacyPolicy.sections.introduction.title')}</h2>
            <p>{t('legal.privacyPolicy.sections.introduction.content')}</p>
            
            <h2>{t('legal.privacyPolicy.sections.dataCollection.title')}</h2>
            <p>
              <strong>{t('legal.privacyPolicy.sections.dataCollection.personalData')}</strong>
            </p>
            <p>
              <strong>{t('legal.privacyPolicy.sections.dataCollection.usageData')}</strong>
            </p>
            
            <h2>{t('legal.privacyPolicy.sections.dataUsage.title')}</h2>
            <p>{t('legal.privacyPolicy.sections.dataUsage.content')}</p>
            <ul>
              {[0, 1, 2, 3].map((index) => (
                <li key={index}>{t(`legal.privacyPolicy.sections.dataUsage.purposes.${index}`)}</li>
              ))}
            </ul>
            
            <h2>{t('legal.privacyPolicy.sections.dataStorage.title')}</h2>
            <p>{t('legal.privacyPolicy.sections.dataStorage.content')}</p>
            
            <h2>{t('legal.privacyPolicy.sections.thirdParty.title')}</h2>
            <p>{t('legal.privacyPolicy.sections.thirdParty.content')}</p>
            
            <h2>{t('legal.privacyPolicy.sections.childrenPrivacy.title')}</h2>
            <p>{t('legal.privacyPolicy.sections.childrenPrivacy.content')}</p>
            
            <h2>{t('legal.privacyPolicy.sections.changes.title')}</h2>
            <p>{t('legal.privacyPolicy.sections.changes.content')}</p>
            
            <h2>{t('legal.privacyPolicy.sections.contact.title')}</h2>
            <p>
              {t('legal.privacyPolicy.sections.contact.content')}
              <br />
              <a href={`mailto:${t('legal.privacyPolicy.sections.contact.email')}`} className="text-whatsapp-green">
                {t('legal.privacyPolicy.sections.contact.email')}
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout2>
  );
};

export default PrivacyPolicy;