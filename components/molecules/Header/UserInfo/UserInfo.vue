<script setup lang="ts">
import '~/components/molecules/Header/UserInfo/user-info.scss';

const emits = defineEmits(['switch']);
</script>
<template>
  <div class="user-info">
    <div class="icon">
      <img
        class="photo"
        src="https://placehold.jp/150x150.png"
        alt="user-icon"
      />
    </div>
    <div class="detail">
      <p class="name">user-name</p>
    </div>
    <div class="menu" @click="emits('switch')">
      <img
        class="arrow"
        :src="assetImage('icons/arrow-down.svg')"
        alt="arrow"
      />
    </div>
  </div>
</template>
