<script setup lang="ts">
import '~/components/atoms/Typography/TitleText/title-text.scss';
type Props = {
  text: string;
};
defineProps<Props>();
</script>
<template>
  <h1 id="title-text">{{ text }}</h1>
</template>
