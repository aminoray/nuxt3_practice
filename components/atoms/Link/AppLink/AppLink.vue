<script setup lang="ts">
import '~/components/atoms/Link/AppLink/app-link.scss';
type Props = {
  to?: string;
  href?: string;
  target?: string;
};
withDefaults(defineProps<Props>(), {
  to: undefined,
  href: undefined,
  target: '_self',
});
</script>
<template>
  <NuxtLink class="app-link" :to="to" :href="href" :target="target!">
    <slot />
  </NuxtLink>
</template>
