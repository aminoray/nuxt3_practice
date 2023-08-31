import { ref } from 'vue';

export default function () {
  const backendErrorValues = ref<string[]>([]);

  /** バックエンドエラーリセット */
  const resetBackendErrors = () => {
    backendErrorValues.value = [];
  };

  return { backendErrorValues, resetBackendErrors };
}
