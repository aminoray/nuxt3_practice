/**
 * loader store の引数に使用する型
 */
export type SwitchLoaderArgs = {
  isLoading: boolean;
  isTransparent?: boolean;
};

export type UserPhoto = {
  filename?: string;
  base64?: string;
  url?: string;
  filePath?: string;
  fileType?: string;
};

export type FormControlledValues = {
  [key: string]: string;
};

export type FormErrors = {
  [key: string]: string[];
};

/**
 * 通知バー
 */
export type NotificationState = {
  isShow: boolean;
  message?: string | null;
  type?: 'success' | 'error' | null;
};

export type CountryList = {
  alpha2: string;
  alpha3: string;
  companyen: string;
  companyjp: string;
  location: string;
  numeric: number;
  subdivision: string;
};

export type Language = 'ja' | 'en';

/**
 * ボタンやテキストの色の型
 */

export type ButtonAndTextColor =
  | 'main-color'
  | 'sub-color'
  | 'gray'
  | 'black'
  | 'white'
  | 'red';

/**
 * サイズに関する型
 */
export type Size = 'small' | 'medium' | 'large';

/**
 * 幅に関する型
 */
export type Width = 'fixed' | 'hug' | 'fill-container';

/**
 * チャットのタイムライン型
 */
export type timeLineObject = {
  type: 'message' | 'item' | 'leave' | 'join ';
  message: string;
  userId: string;
  userName: string;
  photo: string;
  date: string;
  item: object | undefined;
};
