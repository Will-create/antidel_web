import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en';
import es from './locales/es';
import fr from './locales/fr';
import de from './locales/de';
import ch from './locales/ch';
import ru from './locales/ru';
import sw from './locales/sw';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en,
      es,
      fr,
      ru,
      de,
      sw,
      ch,
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;