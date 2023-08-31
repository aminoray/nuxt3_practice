// import dayjs from 'dayjs';

export const validImageTypes = [
  'image/jpg',
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/svg+xml',
];

export const setValidationRules = (rules: string): string[] => {
  const result = [];
  if (rules) {
    result.push(...(rules.split('|') || []));
  }
  return result;
};

/**
 * バリデーションメッセージを取得します
 * 単純なInput要素でのバリデーションが使用できない場合での使用を想定しています。
 * @param rules
 * @param value
 */
export const customEventValidate = (
  rules: string[],
  value: string | number
) => {
  // 必須
  if (rules.includes('required') && !value) {
    return {
      msg: 'validation.messages.required',
    };
  }
  // 生年月日
  if (rules.includes('birthday') && value) {
    const birthday = dayjs(value, 'YYYY-MM-DD');
    const parts = (value as string).split('-');
    const date = {
      year: String(parts[0]),
      month: String(parts[1]),
      day: String(parts[2]),
    };
    if (date.year === '' || date.month === '' || date.day === '') {
      return rules.includes('required')
        ? { msg: 'validation.messages.required' }
        : undefined;
    }
    const now = dayjs();
    const diff = now.diff(birthday, 'year');
    return diff >= 18 ? undefined : { msg: 'validation.messages.birthday' };
  }
  return undefined;
};
