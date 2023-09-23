const i18nKey = 'i18n';

export const getStorageI18n = (): 'ja' | 'en' | 'uk' | null => {
  return localStorage.getItem(i18nKey) as 'ja' | 'en' | 'uk' | null;
};

export const setStorageI18n = (lang: 'ja' | 'en' | 'uk') => {
  localStorage.setItem(i18nKey, lang);
};

export const resetStorageI18n = () => {
  localStorage.removeItem(i18nKey);
};
