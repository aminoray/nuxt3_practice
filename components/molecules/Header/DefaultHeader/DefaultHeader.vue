<script setup lang="ts">
import '~/components/molecules/Header/DefaultHeader/default-header.scss';
import UserInfo from '~/components/molecules/Header/UserInfo/UserInfo.vue';
import LandscapeLogo from '~/components/atoms/Logo/LandscapeLogo/LandscapeLogo.vue';
import CommonMenu from '~/components/molecules/Header/CommonMenu/CommonMenu.vue';
const router = useRouter();
const redirect = (url: string) => {
  router.push(url);
};

const isVisible = ref<boolean>(false);
</script>
<template>
  <header class="default-header">
    <LandscapeLogo class="logo" @click="redirect('/')" />
    <UserInfo @switch="isVisible = !isVisible" />
  </header>
  <CommonMenu :is-visible="isVisible" @switch="isVisible = !isVisible" />
</template>
