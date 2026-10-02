import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Language, LanguageContextType } from '../i18n/types';
import { supportedLanguages, translations } from '../i18n/translations';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('cvirms_lang') as Language;
      if (saved && translations[saved]) return saved;
      return 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    try {
      localStorage.setItem('cvirms_lang', language);
    } catch {
      // ignore
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    if (translations[lang]) {
      setLanguageState(lang);
    }
  };

  const t = (key: string): string => {
    const langDict = translations[language] || translations.en;
    if (langDict[key]) {
      return langDict[key];
    }
    // fallback to English
    return translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languages: supportedLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
