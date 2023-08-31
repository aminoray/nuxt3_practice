<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate';
import '~/components/atoms/Input/AppTextarea/app-textarea.scss';

type Props = {
  inputName: string;
  setValue: string;
  label: string;
  placeholder?: string;
  rules: string | null;
  disabled?: boolean;
  required?: boolean;
  publishSetting: 'public' | 'private' | null;
  size?: 'full' | 'half' | 'quarter' | 'third';
  height?: 'large' | 'medium' | 'small';
};
const props = withDefaults(defineProps<Props>(), {
  inputName: '',
  setValue: '',
  label: '',
  placeholder: '',
  rules: '',
  disabled: false,
  required: false,
  publishSetting: null,
  size: 'full',
  height: 'medium',
});
const emits = defineEmits(['update']);
const inputValue = ref(props.setValue);
watch(props, (newVal) => {
  inputValue.value = newVal.setValue;
});
const inputFunc = (e: Event) => {
  if (!(e.target instanceof HTMLTextAreaElement)) {
    return;
  }
  inputValue.value = e.target.value;
  emits('update', inputValue.value);
};
</script>
<template>
  <div class="app-textarea" :class="[size]">
    <div class="top">
      <label :for="inputName" class="label">
        {{ label }}
        <span v-if="required" class="required">*</span>
        <span v-if="publishSetting === 'public'">（公開）</span>
        <span v-else-if="publishSetting === 'private'">（非公開）</span>
      </label>
    </div>
    <Field
      v-slot="{ handleChange, errorMessage }"
      :name="inputName"
      :rules="rules"
      class="field"
      as="div"
      validate-on-input
    >
      <textarea
        :id="inputName"
        v-model="inputValue"
        :name="inputName"
        class="textarea"
        :disabled="disabled"
        :placeholder="placeholder"
        :required="required"
        :class="[height, { '-error': !!errorMessage }]"
        @blur="handleChange"
        @input="inputFunc"
      >
      </textarea>
    </Field>
    <ErrorMessage :name="inputName" class="error" as="span" />
  </div>
</template>
