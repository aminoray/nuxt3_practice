module.exports = [
  {
    type: 'select',
    name: 'category',
    message: 'コンポーネントのカテゴリーを選択してください',
    choices: ['atoms', 'molecules', 'organisms'],
  },
  {
    type: 'input',
    name: 'dir',
    message: 'コンポーネントのディレクトリ名を入力してください',
  },
  {
    type: 'input',
    name: 'name',
    message: 'コンポーネント名を入力してください',
  },
  {
    type: 'toggle',
    name: 'scss',
    message: 'scssファイルを作成しますか？',
    enabled: 'Yes',
    disabled: 'No',
  },
  // {
  //   type: 'toggle',
  //   name: 'spec',
  //   message: 'テストファイルを作成しますか？',
  //   enabled: 'Yes',
  //   disabled: 'No',
  // },
  // {
  //   type: 'toggle',
  //   name: 'story',
  //   message: 'storyファイルを作成しますか？',
  //   enabled: 'Yes',
  //   disabled: 'No',
  // },
];
