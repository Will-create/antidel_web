import React, { useState, useEffect } from 'react';
import { handleDownload } from '../../utils/downloadHelpers';
import { Menu, X } from 'lucide-react';
import Button from '../UI/Button';
import LanguageSelector from '../UI/LanguageSelector';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const navLinks = [
    { title: t('features.title'), href: '#features' },
    { title: t('howItWorks.title'), href: '#how-it-works' },
    { title: t('updates.title'), href: '#releases' },
    { title: t('faq.title'), href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-paper/85 backdrop-blur-lg shadow-soft border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="font-display font-bold text-2xl text-ink">
            <span className="text-gradient">Antidel</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-ink/70 hover:text-accent transition-colors duration-300 font-medium"
              >
                {link.title}
              </a>
            ))}
            
            <LanguageSelector />
            
            <Button onClick={handleDownload} size="sm">
              {t('download.button')}
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <LanguageSelector />
            <button
              onClick={toggleMobileMenu}
              className="text-ink p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-paper/95 backdrop-blur-lg transition-all duration-300 border-b border-line ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-ink/70 hover:text-accent transition-colors duration-300 py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
            
            <Button onClick={handleDownload} size="sm" className="w-full">
              {t('download.button')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
