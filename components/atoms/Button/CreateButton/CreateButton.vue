<script setup lang="ts">
import '~/components/atoms/Button/CreateButton/create-button.scss';
import { ButtonAndTextColor } from '~/types/props-types';

type Props = {
  color?: ButtonAndTextColor;
};
withDefaults(defineProps<Props>(), {
  color: 'main-color',
});
const emits = defineEmits(['handler-click']);
</script>
<template>
  <button
    class="create-button"
    :class="[color]"
    @click="emits('handler-click')"
  >
    <img class="plus" :src="assetImage('icons/plus.svg')" alt="plus icon" />
    <p class="text">新規作成</p>
  </button>
</template>
