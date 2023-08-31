/**
 * '~/assets/images/'配下の画像を読み込む関数
 * @param {string}  imgPath - '~/assets/images/'配下の画像パス
 */
export const assetImage = (imgPath: string): string => {
  const assets = import.meta.glob("~/assets/images/**/*", {
    eager: true,
    import: "default",
  });
  // @ts-expect-error: wrong type info
  return assets["/assets/images/" + imgPath];
};
