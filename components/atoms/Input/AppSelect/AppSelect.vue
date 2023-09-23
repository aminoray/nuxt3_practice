<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate';
import '~/components/atoms/Input/AppSelect/app-select.scss';

type Props = {
  inputName: string;
  setValue: string | number;
  label: string;
  placeholder?: string;
  size?: 'full' | 'half' | 'quarter' | 'third';
  required?: boolean;
  disabled?: boolean;
  publishSetting: 'public' | 'private' | null;
  rules: string | null;
  options: Array<{ value: string; label: string }>;
};
const props = withDefaults(defineProps<Props>(), {
  inputName: '',
  setValue: undefined,
  label: '',
  rules: null,
  placeholder: '',
  size: 'full',
  required: false,
  disabled: false,
  publishSetting: null,
  options: Array,
});
const emits = defineEmits(['update']);
const selectedValue = ref<string | number>(props.setValue);
watch(props, (newVal) => {
  selectedValue.value = newVal.setValue;
});

const selectFunc = (e: Event) => {
  if (!(e.target instanceof HTMLSelectElement)) {
    return;
  }
  selectedValue.value = e.target.value;
  emits('update', selectedValue.value);
};
</script>
<template>
  <div class="app-select" :class="[size]">
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
      :rules="rules ? rules : ''"
      class="field"
      as="div"
      validate-on-input
    >
      <select
        :id="inputName"
        v-model="selectedValue"
        :name="inputName"
        class="select"
        :disabled="disabled"
        :required="required"
        :class="{ '-error': !!errorMessage }"
        @change="handleChange"
        @input="selectFunc"
      >
        <option v-if="placeholder" :value="''" class="option placeholder">
          {{ placeholder }}
        </option>
        <option
          v-for="option in options"
          :key="option.value!"
          :value="option.value"
          class="option"
        >
          {{ option.label }}
        </option>
      </select>
    </Field>
    <ErrorMessage :name="inputName" class="error" as="span" />
  </div>
</template>
