import { Language } from '~/types/props-types';

export default {
  lp: '/',
  // password reset
  forgotPassword: '/auth/password-reset',
  resetPasswordSendEmail: '/auth/password-reset/send-email',
  resetPassword: '/auth/password-reset/update',
  // signup
  signup: '/auth/signup',
  signupProfile: '/auth/signup/profile',
  signupRegistComplete: '/auth/signup/regist-complete',
  signupSendEmail: '/auth/signup/send-email',
  signupUserDetail: '/auth/signup/user-detail',
  // login
  login: '/auth/login',

  // UserVideo
  userVideo: (videoId: string) => `/video/${videoId}`,

  // UserProfile
  userProfile: (userId: string) => `/users/${userId}`,

  // page
  OneOnOneRandom: '/one-on-one/random',
  OneOnOneRandomDetail: (streamId: string) => `/one-on-one/random/${streamId}`,
  OneOnOnePrivate: '/one-on-one/private',
  OneOnOnePrivateDetail: (streamId: string) =>
    `/one-on-one/private/${streamId}`,
  subscriptions: '/purchase/subscriptions',
  oneOnOnePrivateList: '/one-on-one/private',
  friends: '/friends',
  footprints: '/footprints',

  home: '/home',
  cash: '/cash',
  inquiry: '/inquiry',
  user: '/user',

  // Footer
  termsOfService: (lang: Language) => `/pdf/terms_of_use/${lang}.pdf`,
  privacyPolicy: (lang: Language) => `/pdf/privacy_policy/${lang}.pdf`,

  // Error
  notFound: '/404',
};
