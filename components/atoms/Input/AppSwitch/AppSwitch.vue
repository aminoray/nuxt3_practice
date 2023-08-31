<script setup lang="ts">
import '~/components/atoms/Input/AppSwitch/app-switch.scss';

type Props = {
  setValue: boolean;
  disabled?: boolean;
  label: string | null;
  required?: boolean;
  publishSetting: 'public' | 'private' | null;
};
const props = withDefaults(defineProps<Props>(), {
  setValue: false,
  disabled: false,
  label: null,
  required: false,
  publishSetting: null,
});
const emits = defineEmits(['update']);
const inputValue = ref<boolean>(props.setValue);
watch(props, (newVal) => {
  inputValue.value = newVal.setValue;
});
const inputFunc = (e: Event) => {
  if (!(e.target instanceof HTMLInputElement)) {
    return;
  }
  inputValue.value = e.target.value;
  emits('update', inputValue.value);
};
</script>
<template>
  <div class="app-switch">
    <div v-if="label" class="top">
      <label :for="inputName" class="label">
        {{ label }}
        <span v-if="required" class="required">*</span>
        <span v-if="publishSetting === 'public'">（公開）</span>
        <span v-else-if="publishSetting === 'private'">（非公開）</span>
      </label>
    </div>
    <div class="field">
      <label class="switch">
        <input v-model="inputValue" class="input-hidden" type="checkbox" />
      </label>
      <p class="text">{{ inputValue ? 'ON' : 'OFF' }}</p>
    </div>
  </div>
</template>
