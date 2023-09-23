<script setup lang="ts">
import '~/components/atoms/Typography/DescriptionText/description-text.scss';
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
  <p id="description-text" :class="[size, color]">{{ text }}</p>
</template>
