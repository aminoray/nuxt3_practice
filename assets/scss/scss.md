# CSS コーディング規約

- 共通の値は変数を使用するようにしてください
- 親と子のセレクタの関係を示すときは、常に `>` 記号を使用してください。
- 親セレクタのクラス名は、2 つ以上の単語をハイフンで繋いで作成してください。
- 子セレクタのクラス名は、1 つの単語でシンプルにしてください。
- スタイリングの対象となる要素は、クラスを使って指定してください。
- それぞれの SCSS ファイルでは、1 つだけ親セレクタを中心に記述してください。
- 親セレクタから見て、最大で子、孫、ひ孫までの 3 階層のセレクタを記述してください。

例:<br>
`styles/scss/_parent-selector.scss`

```scss
// ファイル名と同じにしてください
.parent-selector {
  // 親セレクタのスタイリング

  > .child {
    // 子セレクタのスタイリング
  }

  > .child > .grandchild {
    // 孫セレクタのスタイリング
  }

  > .child > .grandchild > .greatgrandchild {
    // ひ孫セレクタのスタイリング
  }
}
```

`components/atoms/sample.tsx`

```tsx
export default function Sample() {
  return (
    <>
      <div className="parent-selector">
        <div className="child">
          <div className="grandchild">
            <p className="greatgrandchild">hogehoge</p>
          </div>
        </div>
      </div>
    </>
  );
}
```
