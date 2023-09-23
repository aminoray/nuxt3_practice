import { UserPhoto } from '~/types/props-types';
import { UkraineApiUserCreateRequest } from '~/api';

const userPhotoKey = 'userPhoto';
const userProfileKey = 'userProfile';

/**
 * ユーザー登録用のデータ
 */
export const setStorageUserProfile = (v: UkraineApiUserCreateRequest) => {
  // セキュリティ的に良くないのでパスワードは保存しない
  v.password = undefined;
  localStorage.setItem(userProfileKey, JSON.stringify(v));
};

/**
 * ユーザー登録用データを取得する
 */
export const getStorageUserProfile = (): UkraineApiUserCreateRequest => {
  const userProfile = localStorage.getItem(userProfileKey);
  if (userProfile) {
    return JSON.parse(userProfile);
  }
  return {};
};

/**
 * ユーザーの画像情報を削除する
 */
export const resetStorageUserProfile = () => {
  localStorage.removeItem(userProfileKey);
};

/**
 * ユーザーの画像情報を保存する
 */
export const setStorageUserPhoto = (v: UserPhoto) => {
  localStorage.setItem(userPhotoKey, JSON.stringify(v));
};

/**
 * ユーザーの画像情報を取得する
 */
export const getStorageUserPhoto = (): UserPhoto => {
  const userPhoto = localStorage.getItem(userPhotoKey);
  if (userPhoto) {
    return JSON.parse(userPhoto);
  }
  return {};
};

/**
 * ユーザーの画像情報を削除する
 */
export const resetStorageUserPhoto = () => {
  localStorage.removeItem(userPhotoKey);
};
