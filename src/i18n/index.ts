// src/i18n/index.ts
import en from './translations/en.json';
import ru from './translations/ru.json';

export type Language = 'en' | 'ru';
type TranslationKey = keyof typeof en;

const translations = { en, ru };

export function t(key: TranslationKey, lang: Language): string 
{
  return translations[lang]?.[key] || key;
}

export function getCurrentLanguage(url: URL): Language {
  const pathname = url.pathname;
  
  if (pathname.includes('/en/')) 
  {
    return 'en';
  }
  if (pathname.includes('/ru/')) 
  {
    return 'ru';
  }
  
  return 'ru';
}

export function getLocalizedUrl(path: string, currentLang: Language, base: string): string 
{
  const cleanPath = path === '/' ? '' : path.replace(/^\//, '');
  return `${base}${currentLang}/${cleanPath}`.replace(/\/\/+/g, '/').replace(/\/$/, '');
}