import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getStaticPaths() {
  return [
    { params: { lang: 'ja' } },
    { params: { lang: 'en' } },
  ];
}

export function pathWithLang(lang: Lang, path: string = '') {
  if (lang === defaultLang) {
    return path === '' ? '/' : `/${path}`;
  }
  return path === '' ? `/${lang}` : `/${lang}/${path}`;
}