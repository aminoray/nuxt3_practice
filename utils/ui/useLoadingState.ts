import { reactive } from 'vue';
import { SwitchLoaderArgs } from '~/types/props-types';

export default function () {
  /**
   * ローディングState
   */
  const loaderState = reactive<SwitchLoaderArgs>({
    isLoading: false,
  });

  /**
   * ローディング画面の表示
   * @param isLoading
   * @param isTransparent
   */
  const switchState = ({
    isLoading,
    isTransparent = false,
  }: SwitchLoaderArgs) => {
    loaderState.isLoading = isLoading;
    loaderState.isTransparent = isTransparent;
  };

  return { loaderState, switchState };
}
