import React from 'react';
import { Github as GitHub, Twitter, MessageSquare } from 'lucide-react';
import Button from '../UI/Button';
import { handleDownload } from '../../utils/downloadHelpers';
import { APP_VERSION, LAST_UPDATED } from '../../constants/appData';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  const footerLinks = [
    {
      title: t('footer.about'),
      links: [
        { label: t('footer.links.company'), href: '/about' },
        { label: t('footer.links.team'), href: '/team' },
        { label: t('footer.links.pressKit'), href: '/press' },
      ],
    },
    {
      title: t('footer.features'),
      links: [
        { label: t('footer.links.messageRecovery'), href: '/#features' },
        { label: t('footer.links.mediaPreview'), href: '/#features' },
        { label: t('footer.links.notifications'), href: '/#features' },
      ],
    },
    {
      title: t('footer.legal'),
      links: [
        { label: t('footer.links.privacyPolicy'), href: '/privacy' },
        { label: t('footer.links.termsOfUse'), href: '/terms' },
        { label: t('footer.links.eula'), href: '/eula' },
      ],
    },
  ];
  
  const socialLinks = [
    { icon: <Twitter size={20} />, href: 'https://twitter.com/antidel', label: t('footer.social.twitter') },
    { icon: <GitHub size={20} />, href: 'https://github.com/antidel', label: t('footer.social.github') },
    { icon: <MessageSquare size={20} />, href: 'https://wa.me/your_number', label: t('footer.social.whatsapp') },
  ];

  return (
    <footer className="bg-deep-black relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-glow/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Branding Section */}
          <div>
            <h2 className="font-orbitron font-bold text-2xl text-white mb-4">
              <span className="text-gradient bg-gradient-to-r from-whatsapp-green to-blue-glow">Antidel</span>
            </h2>
            <p className="text-white/70 mb-6">
              {t('footer.branding.description')}
            </p>
            <Button onClick={handleDownload} size="sm">
              {t('footer.downloadNow')}
            </Button>
          </div>
          
          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-orbitron font-bold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-white/70 hover:text-whatsapp-green transition-colors duration-300 cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm order-2 md:order-1 mt-4 md:mt-0">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          
          <div className="flex space-x-6 order-1 md:order-2">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white/60 hover:text-whatsapp-green transition-colors duration-300 cursor-pointer"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-white/50 text-sm font-mono">
            {t('footer.version', { version: APP_VERSION, date: LAST_UPDATED })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;