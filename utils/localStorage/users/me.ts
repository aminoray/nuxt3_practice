import { UkraineApiUserMe } from '~/api';
import { StorageMe } from '~/types/props-types';

const meDataKey = 'me';

export const setStorageMe = (v: UkraineApiUserMe) => {
  const me: StorageMe = {
    id: v.id,
    role: v.role,
    email: v.email,
    name: v.name,
  };
  localStorage.setItem(meDataKey, JSON.stringify(me));
};
export const getStorageMe = (): StorageMe => {
  const me = localStorage.getItem(meDataKey);
  if (me) {
    return JSON.parse(me);
  }
  return {};
};

export const resetStorageMe = () => {
  localStorage.removeItem(meDataKey);
};
