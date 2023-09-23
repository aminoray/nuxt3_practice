const notifyKey = 'privateStreamNotify';
const extensionNumKey = 'extensionNum-';

// ここから個別1on1の通知に関する処理
export const setStorageNotify = (v: string[]) => {
  localStorage.setItem(notifyKey, JSON.stringify(v));
};
export const getStorageNotify = () => {
  const notify = localStorage.getItem(notifyKey);
  if (notify) {
    return JSON.parse(notify) as string[];
  }
  return [];
};
export const resetStorageNotify = () => {
  localStorage.removeItem(notifyKey);
};

//　ここから配信の延長回数に関する処理
export const setStorageExtensionNum = (id: string, v: number) => {
  localStorage.setItem(extensionNumKey + id, JSON.stringify(v));
};
export const getStorageExtensionNum = (id: string) => {
  const extensionNum = localStorage.getItem(extensionNumKey + id);
  if (extensionNum) {
    return JSON.parse(extensionNum) as number;
  }
  return null;
};
export const resetStorageExtensionNum = (id: string) => {
  localStorage.removeItem(extensionNumKey + id);
};
