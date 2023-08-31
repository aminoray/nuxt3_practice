<script setup lang="ts">
import '~/components/atoms/Button/MenuButton/menu-button.scss';
import { ButtonAndTextColor } from '~/types/props-types';

type Props = {
  icon: string;
  text: string;
  color?: ButtonAndTextColor;
};
const props = withDefaults(defineProps<Props>(), {
  icon: '',
  text: '',
  color: 'main-color',
});
</script>
<template>
  <li class="menu-button" :class="props.color">
    <img class="icon" :src="assetImage(props.icon)" :alt="props.text" />
    {{ props.text }}
  </li>
</template>
