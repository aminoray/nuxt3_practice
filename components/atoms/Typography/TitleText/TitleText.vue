<script setup lang="ts">
import '~/components/atoms/Typography/TitleText/title-text.scss';
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
  <h1 id="title-text" :class="[size, color]">{{ text }}</h1>
</template>
