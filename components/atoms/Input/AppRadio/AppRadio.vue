<script setup lang="ts">
import '~/components/atoms/Input/AppRadio/app-radio.scss';

type Props = {
  label: string | null;
  setValue: boolean;
  disabled?: boolean;
  required?: boolean;
  description: string | null;
};
const props = withDefaults(defineProps<Props>(), {
  label: null,
  setValue: false,
  disabled: false,
  required: false,
  description: null,
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
  <div class="app-radio">
    <div v-if="label" class="top">
      <label :for="inputName" class="label">
        {{ label }}
        <span v-if="required" class="required">*</span>
        <span v-if="publishSetting === 'public'">（公開）</span>
        <span v-else-if="publishSetting === 'private'">（非公開）</span>
      </label>
    </div>
    <fieldset class="field">
      <label class="radio-label">
        <input type="radio" name="radio" checked />
        <div class="detail">
          <p class="name">radio1</p>
          <p class="description">ダミーテキストです。ダミーテキストです。</p>
        </div>
      </label>
      <label class="radio-label">
        <input type="radio" name="radio" />
        <div class="detail">
          <p class="name">radio2</p>
          <p class="description">ダミーテキストです。ダミーテキストです。</p>
        </div>
      </label>
    </fieldset>
    <p v-if="description" class="text">{{ description }}</p>
  </div>
</template>
