const refererKey = 'referer';

export const setReferer = (path: string) => {
  localStorage.setItem(refererKey, path);
};

export const getReferer = (): string => {
  return localStorage.getItem(refererKey) || '/home';
};

export const resetReferer = () => {
  localStorage.removeItem(refererKey);
};
