<script setup lang="ts">
import '~/components/organisms/Card/LottieCard/lottie-card.scss';

type Props = {
  title: string;
  image: string;
  text?: string;
  date?: string;
};
withDefaults(defineProps<Props>(), {
  title: '',
  image: '',
  text: '',
  date: '',
});
</script>
<template>
  <div class="lottie-card">
    <slot />
    <div class="image">
      <img v-if="image" :src="assetImage(image)" alt="" />
    </div>
    <div class="content">
      <p class="title">{{ title }}</p>
      <div v-if="text || date" class="info">
        <p v-if="text" class="text">{{ text }}</p>
        <p v-if="date" class="data">{{ date }}</p>
      </div>
    </div>
  </div>
</template>
