<script setup lang="ts">
import '~/assets/scss/pages/index-container.scss';
import TitleText from '~/components/atoms/Typography/TitleText/TitleText.vue';
import DescriptionText from '~/components/atoms/Typography/DescriptionText/DescriptionText.vue';
import SubTitleText from '~/components/atoms/Typography/SubTitleText/SubTitleText.vue';
import AppLink from '~/components/atoms/Link/AppLink/AppLink.vue';
</script>
<template>
  <div class="index-container">
    <div class="top-content">
      <img
        class="pattern"
        src="~/assets/images/background-images/pattern.png"
        alt=""
      />
      <h1 class="big-title">
        Hello!<br />Nuxt3 Practice.<br />Let's learn together.
      </h1>
    </div>

    <div class="content">
      <TitleText
        text="Nuxt3の学習サイトです。"
        class="m-b-20 title-gradation"
      />
      <DescriptionText
        text="フロントのフレームワークである、nuxt3を体系的に学習できるサイトとなっています。"
        size="medium"
        color="black"
        class="m-b-20"
      />

      <section class="section">
        <SubTitleText
          text="押さえておきたい用語"
          size="medium"
          color="sub-color"
          class="m-b-10"
        />
        <AppLink
          href="https://qiita.com/citrus_candy/items/74d602f672ccfc93490e"
          target="_blank"
        >
          <p class="link">Atomicデザインとは？？</p>
        </AppLink>
        <ul class="ul">
          <li class="li">atomicデザイン</li>
          <li class="li">デザインシステム</li>
          <li class="li">コンポーネント（components）</li>
          <li class="li">準備中...</li>
          <li class="li">準備中...</li>
          <li class="li">準備中...</li>
          <li class="li">準備中...</li>
          <li class="li">準備中...</li>
          <li class="li">準備中...</li>
          <li class="li">準備中...</li>
          <li class="li">準備中...</li>
        </ul>
      </section>
    </div>
  </div>
</template>
