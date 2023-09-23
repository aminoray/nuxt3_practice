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
        class="margin-bottom-20 title-gradation"
      />
      <DescriptionText
        text="フロントのフレームワークである、nuxt3を体系的に学習できるサイトとなっています。"
        size="medium"
        color="black"
        class="margin-bottom-20"
      />

      <div class="sections">
        <section class="section">
          <SubTitleText
            text="押さえておきたい用語"
            size="medium"
            color="sub-color"
            class="margin-bottom-10"
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
          </ul>
          <img
            class="people"
            src="~/assets/images/people/p_1.svg"
            alt="people"
          />
        </section>

        <section class="section">
          <SubTitleText
            text="みんなで情報を共有しよう！"
            size="medium"
            color="sub-color"
            class="margin-bottom-10"
          />
          <img
            class="people"
            src="~/assets/images/people/p_3.svg"
            alt="people"
          />
        </section>
      </div>

      <div class="sections">
        <section class="section">
          <SubTitleText
            text="みんなで情報を共有しよう！"
            size="medium"
            color="sub-color"
            class="margin-bottom-10"
          />
          <img
            class="people"
            src="~/assets/images/people/p_4.svg"
            alt="people"
          />
        </section>

        <section class="section">
          <SubTitleText
            text="みんなで情報を共有しよう！"
            size="medium"
            color="sub-color"
            class="margin-bottom-10"
          />
          <img
            class="people"
            src="~/assets/images/people/p_5.svg"
            alt="people"
          />
        </section>
      </div>
    </div>
  </div>
</template>
