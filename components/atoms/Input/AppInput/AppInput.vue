<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate';
import '~/components/atoms/Input/AppInput/app-input.scss';

type Props = {
  type?:
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'tel'
    | 'url'
    | 'search'
    | 'date'
    | 'time';
  inputName: string;
  setValue: string | number;
  label: string;
  placeholder?: string;
  size?: 'full' | 'half' | 'quarter' | 'third';
  required?: boolean;
  disabled?: boolean;
  publishSetting: 'public' | 'private' | undefined;
  rules: string | null;
};
const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  inputName: '',
  setValue: '',
  label: '',
  rules: '',
  placeholder: '',
  size: 'full',
  required: false,
  disabled: false,
  publishSetting: undefined,
});
const emits = defineEmits(['update']);
const inputValue = ref<string | number>(props.setValue);
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
  <div class="app-input" :class="[size]">
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
      :rules="rules!"
      class="field"
      as="div"
      validate-on-input
    >
      <input
        :id="inputName"
        v-model="inputValue"
        :name="inputName"
        :type="type"
        class="input"
        :disabled="disabled"
        :placeholder="placeholder"
        :required="required"
        :class="{ '-error': !!errorMessage }"
        @blur="handleChange"
        @input="inputFunc"
      />
    </Field>
    <ErrorMessage :name="inputName" class="error" as="span" />
  </div>
</template>
