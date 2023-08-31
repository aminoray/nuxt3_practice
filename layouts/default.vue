<script setup lang="ts">
import '~/assets/scss/layouts/default-container.scss';
import DefaultHeader from '~/components/molecules/Header/DefaultHeader/DefaultHeader.vue';
import DefaultFooter from '~/components/molecules/Footer/DefaultFooter/DefaultFooter.vue';
</script>

<template>
  <div class="default-container">
    <DefaultHeader />
    <main class="main">
      <slot />
    </main>
    <DefaultFooter />
  </div>
</template>
