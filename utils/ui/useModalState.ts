export default function () {
  /**
   * モーダルの状態
   */
  const isOpen = ref<boolean>(false);

  /**
   * モーダル状態の設定
   * @param {boolean} state
   */
  const setModalState = (state: boolean) => {
    isOpen.value = state;
    if (state) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  };

  return { isOpen, setModalState };
}
