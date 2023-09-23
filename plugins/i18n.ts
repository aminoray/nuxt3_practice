import { createI18n } from 'vue-i18n';
import { defineNuxtPlugin } from 'nuxt/app';
import { defineRule } from 'vee-validate';
import {
  max,
  max_value,
  min,
  min_value,
  regex,
  required,
  url,
  ext,
} from '@vee-validate/rules';
import dayjs from 'dayjs';
import ja from '~/locales/ja';
import { validImageTypes } from '~/utils/validate/variables';
import { getStorageI18n } from '~/utils/localStorage/i18n';

export default defineNuxtPlugin(({ vueApp }) => {
  const lang = getStorageI18n();
  let supportedLanguage = 'en';
  if (!lang) {
    const browserLanguage = window.navigator.language;
    supportedLanguage = ['ja'].includes(browserLanguage)
      ? browserLanguage
      : 'ja';
  }
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    warnHtmlMessage: false,
    locale: lang || supportedLanguage,
    fallbackLocale: 'ja',
    messages: {
      ja,
    },
  });

  // vee-validate
  defineRule('required', (value: unknown) => {
    return required(value) || i18n.global.t('validation.messages.required');
  });

  defineRule('email', (value: unknown) => {
    return (
      regex(value, { regex: /^[\w\-._+]+@[\w\-._]+\.[A-Za-z]+$/ }) ||
      i18n.global.t('validation.messages.invalidEmail')
    );
  });

  defineRule('maxLength', (value: unknown, maxLength: number[]) => {
    return (
      max(value, { length: maxLength[0] }) ||
      i18n.global.t('validation.messages.maxLength', { length: maxLength[0] })
    );
  });

  defineRule('minLength', (value: unknown, minLength: number[]) => {
    return (
      min(value, minLength) ||
      i18n.global.t('validation.messages.minLength', { length: minLength[0] })
    );
  });

  defineRule('number', (value: unknown) => {
    return (
      regex(value, { regex: /^[0-9]+$/ }) ||
      i18n.global.t('validation.messages.number')
    );
  });

  defineRule('maxValue', (value: unknown, maxValue: number[]) => {
    return (
      max_value(value, { max: maxValue[0] }) ||
      i18n.global.t('validation.messages.maxValue', { num: maxValue[0] })
    );
  });

  defineRule('minValue', (value: unknown, minValue: number[]) => {
    return (
      min_value(value, { min: minValue[0] }) ||
      i18n.global.t('validation.messages.minValue', { num: minValue[0] })
    );
  });

  defineRule('signup-confirm', (value: boolean) => {
    return value || i18n.global.t('validation.messages.signupConfirm');
  });

  defineRule('url', (value: unknown) => {
    return (
      url(value, ['https']) || i18n.global.t('validation.messages.invalid_url')
    );
  });

  defineRule('image', (file: File) => {
    if (!file) return true;
    return (
      validImageTypes.includes(file.type) ||
      i18n.global.t('validation.messages.image')
    );
  });

  defineRule('mov', (file: File, extensions: string[]) => {
    if (!file) return true;
    return (
      ext(file, extensions) ||
      i18n.global.t('validation.messages.mov', { ext: extensions.join(', ') })
    );
  });

  defineRule('maxImageMBSize', (file: File, maxValue: number[]) => {
    if (!file) return true;
    const maxSize = maxValue[0] * 1048576;
    return (
      file.size <= maxSize ||
      i18n.global.t('validation.messages.maxImageMBSize', { size: maxValue[0] })
    );
  });

  defineRule('birthday', (value: string) => {
    if (!value) return true;
    const birthday = dayjs(value, 'YYYY-MM-DD');
    if (!birthday.isValid())
      return i18n.global.t('validation.messages.birthday');
    const now = dayjs();
    const diff = now.diff(birthday, 'year');
    return diff >= 18 || i18n.global.t('validation.messages.birthday');
  });

  vueApp.use(i18n);
});
