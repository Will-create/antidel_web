import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

	const languages = [
	  { code: 'en', name: 'English' },
	  { code: 'es', name: 'Español' },
	  { code: 'fr', name: 'Français' },
	  { code: 'ru', name: 'Русский' },
	  { code: 'de', name: 'Deutsch' },
	  { code: 'sw', name: 'Kiswahili' },
	  { code: 'ch', name: '中文' }
	];
  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 text-ink/70 hover:text-ink transition-colors duration-300">
        <Globe size={20} />
        <span className="hidden md:inline">{languages.find(lang => lang.code === i18n.language)?.name}</span>
      </button>

      <div className="absolute right-0 mt-2 py-2 w-48 bg-card rounded-xl shadow-soft border border-line opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`w-full text-left px-4 py-2 hover:bg-ink/5 transition-colors duration-300 ${
              i18n.language === lang.code ? 'text-ink' : 'text-ink/70'
            }`}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
