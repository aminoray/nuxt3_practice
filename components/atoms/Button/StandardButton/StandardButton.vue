<script setup lang="ts">
import '~/components/atoms/Button/StandardButton/standard-button.scss';
import { ButtonAndTextColor, Width } from '~/types/props-types';

type Props = {
  type?: 'button' | 'submit';
  disabled?: boolean;
  width?: Width;
  color?: ButtonAndTextColor;
};
withDefaults(defineProps<Props>(), {
  type: 'button',
  disabled: false,
  width: 'hug',
  color: 'main-color',
});
const emits = defineEmits(['handler-click']);
</script>
<template>
  <button
    :type="type"
    class="standard-button"
    :disabled="disabled"
    :class="[{ '-disabled': disabled }, width, color]"
    @click="emits('handler-click')"
  >
    <slot />
  </button>
</template>
