<script setup lang="ts">
import '~/assets/scss/pages/lottie-container.scss';
import LottieCard from '~/components/organisms/Card/LottieCard/LottieCard.vue';
</script>
<template>
  <div class="lottie-container">
    <div class="top-content">
      <h1 class="big-title">Lottie</h1>
    </div>

    <div class="content">
      <LottieCard
        title="タイトル"
        image="background-images/bg-002.png"
        text="テキスト"
        date="・ Apr 17-22"
      />
    </div>
  </div>
</template>
