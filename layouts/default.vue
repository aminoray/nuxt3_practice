<script setup lang="ts">
import '~/assets/scss/layouts/default-container.scss';
import { useRoute } from 'vue-router';
import DefaultHeader from '~/components/molecules/Header/DefaultHeader/DefaultHeader.vue';
import DefaultFooter from '~/components/molecules/Footer/DefaultFooter/DefaultFooter.vue';

const route = useRoute();
const isTopPage = computed(() => {
  return route.path === '/';
});
</script>

<template>
  <div class="default-container">
    <DefaultHeader />
    <main class="main" :class="{ index: isTopPage }">
      <slot />
    </main>
    <DefaultFooter />
  </div>
</template>
