<script setup lang="ts">
import '~/components/atoms/Input/PrivacyConfirmCheckbox/privacy-confirm-checkbox.scss';
import { Field } from 'vee-validate';
type Props = {
  inputName: string;
  setValue: boolean;
  rules: string | null;
};
const props = withDefaults(defineProps<Props>(), {
  inputName: '',
  setValue: false,
  rules: '',
});
const inputValue = ref<boolean>(props.setValue);
watch(props, (newVal) => {
  inputValue.value = newVal.setValue;
});
const emits = defineEmits(['update']);
</script>
<template>
  <Field
    v-slot="{ handleChange }"
    :name="inputName"
    :rules="rules ? rules : ''"
    as="div"
    class="privacy-confirm-checkbox"
  >
    <label class="label" :for="inputName">
      <span class="icon">
        <span class="box" />
        <span class="check" :class="{ '-checked': inputValue }"></span>
      </span>
      <input
        :id="inputName"
        :value="inputValue"
        class="checkbox"
        type="checkbox"
        @blur="handleChange"
        @input="() => emits('update', !inputValue)"
      />
      <slot />
    </label>
  </Field>
</template>
