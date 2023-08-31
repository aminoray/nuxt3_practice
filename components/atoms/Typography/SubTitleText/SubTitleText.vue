<script setup lang="ts">
import '~/components/atoms/Typography/SubTitleText/sub-title-text.scss';
import { ButtonAndTextColor, Size } from '~/types/props-types';

type Props = {
  text: string;
  size?: Size;
  color?: ButtonAndTextColor;
};
withDefaults(defineProps<Props>(), {
  text: '',
  size: 'medium',
  color: 'black',
});
</script>
<template>
  <h2 id="sub-title-text" :class="[size, color]">{{ text }}</h2>
</template>
