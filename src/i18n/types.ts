export type Language = 'en' | 'kn' | 'hi' | 'ta' | 'te' | 'ml' | 'mr';

export interface LanguageInfo {
  code: Language;
  name: string;
  nativeName: string;
}

export interface Translations {
  [key: string]: string | Translations;
}

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  languages: LanguageInfo[];
}
