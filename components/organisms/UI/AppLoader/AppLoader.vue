<script setup lang="ts">
import { SwitchLoaderArgs } from '~/types/props-types';
import '~/components/organisms/UI/AppLoader/loader-container.scss';
import '~/components/organisms/UI/AppLoader/sk-chase.scss';

type Props = {
  setLoaderState: SwitchLoaderArgs;
  isHeader?: boolean;
  isLayout?: boolean;
  noText?: boolean;
};

const props = defineProps<Props>();
const loaderRef = ref<HTMLDivElement | null>(null);
const loaderState = computed(() => {
  return props.setLoaderState;
});

watch(props, (newVal) => {
  if (newVal.isHeader) {
    const pageLoader = document.getElementById('page-loader');
    const layoutLoader = document.getElementById('layout-loader');
    if (pageLoader?.style) {
      pageLoader.style.left = '0';
    }
    if (layoutLoader?.style) {
      layoutLoader.style.left = '0';
    }
  }
});

useHead({
  title: '',
});
</script>

<template>
  <transition name="loader" mode="out-in">
    <div
      v-show="loaderState.isLoading"
      :id="isLayout ? 'layout-loader' : 'page-loader'"
      ref="loaderRef"
      class="loader-container"
      :class="{
        '-transparent': loaderState.isTransparent,
      }"
    >
      <div class="loader">
        <div class="sk-chase">
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
        </div>
        <p v-if="!noText" class="text">読み込み中</p>
      </div>
    </div>
  </transition>
</template>
