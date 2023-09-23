<script setup lang="ts">
import '~/components/molecules/Header/CommonMenu/common-menu.scss';
import MenuButton from '~/components/atoms/Button/MenuButton/MenuButton.vue';

type Props = {
  isVisible: boolean;
};
defineProps<Props>();
const router = useRouter();

const redirect = (url: string) => {
  router.push(url);
};

const emits = defineEmits(['switch']);

const menuList = [
  {
    text: 'コンポーネント一覧',
    icon: 'icons/home.svg',
    color: 'black',
    url: '/components',
  },
  {
    text: '情報入力画面サンプル',
    icon: 'icons/home.svg',
    color: 'black',
    url: '/input',
  },
];
</script>
<template>
  <div class="common-menu" :class="{ active: isVisible }">
    <div class="layer" @click="emits('switch')">
      <ul class="menu">
        <MenuButton
          v-for="(menu, index) in menuList"
          :key="index"
          :text="menu.text"
          :icon="menu.icon"
          :color="menu.color"
          @click="redirect(menu.url)"
        />
      </ul>
    </div>
  </div>
</template>
