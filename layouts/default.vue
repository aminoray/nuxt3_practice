<script setup lang="ts">
import '~/assets/scss/layouts/default-container.scss';
import DefaultHeader from '~/components/molecules/Header/DefaultHeader/DefaultHeader.vue';

</script>

<template>
  <div class="default-container">
    <DefaultHeader />
    <main class="main">
      <slot />
    </main>
  </div>
</template>
