<script setup lang="ts">
// Inputに関連するコンポーネントのパス
import AppInput from '~/components/atoms/Input/AppInput/AppInput.vue';
import AppTextarea from '~/components/atoms/Input/AppTextarea/AppTextarea.vue';
import AppSelect from '~/components/atoms/Input/AppSelect/AppSelect.vue';
import AppSwitch from '~/components/atoms/Input/AppSwitch/AppSwitch.vue';
import AppRadio from '~/components/atoms/Input/AppRadio/AppRadio.vue';

// Typographyに関連するコンポーネントのパス
import TitleText from '~/components/atoms/Typography/TitleText/TitleText.vue';
import SubTitleText from '~/components/atoms/Typography/SubTitleText/SubTitleText.vue';
import DescriptionText from '~/components/atoms/Typography/DescriptionText/DescriptionText.vue';

// Buttonに関するコンポーネントのパス
import MenuButton from '~/components/atoms/Button/MenuButton/MenuButton.vue';
import StandardButton from '~/components/atoms/Button/StandardButton/StandardButton.vue';
import RectangleButton from '~/components/atoms/Button/RectangleButton/RectangleButton.vue';
import CreateButton from '~/components/atoms/Button/CreateButton/CreateButton.vue';

// Loaderに関するコンポーネントのパス
import useLoadingState from '~/utils/ui/useLoadingState';
import AppLoader from '~/components/organisms/UI/AppLoader/AppLoader.vue';

const { loaderState, switchState } = useLoadingState();
const openLoading = (flag: boolean) => {
  switchState({ isLoading: true, isTransparent: flag });
};
</script>
<template>
  <div class="components-chart-container">
    <AppLoader :set-loader-state="loaderState" />
    <TitleText text="コンポーネントのチャートシート" class="margin-10" />
    <StandardButton
      type="button"
      :disabled="false"
      width="hug"
      color="main-color"
      class="margin-10"
      @handler-click="openLoading(true)"
    >
      ローディングUI透明
    </StandardButton>

    <StandardButton
      type="button"
      :disabled="false"
      width="hug"
      color="main-color"
      class="margin-10"
      @handler-click="openLoading(false)"
    >
      ローディングUI背景白
    </StandardButton>

    <div class="sections">
      <section class="section">
        <SubTitleText
          class="margin-bottom-10"
          text="Input関連"
          size="large"
          color="sub-color"
        />
        <AppInput
          input-name="email"
          :set-value="''"
          label="ラベル"
          type="email"
          rules="required|email"
          placeholder="placeholder"
          size="half"
          :required="true"
          publish-setting="public"
          class="margin-bottom-20"
        />

        <AppTextarea
          :set-value="''"
          input-name="textarea"
          label="テキストエリア"
          placeholder="placeholder"
          size="half"
          :required="false"
          publish-setting="private"
          height="small"
          class="margin-bottom-20"
        />

        <AppSelect
          input-name="select"
          label="セレクトボックス"
          size="third"
          :required="true"
          publish-setting="private"
          placeholder="placeholder"
          class="margin-bottom-20"
        />

        <AppInput
          :set-value="''"
          input-name="calendar"
          label="カレンダー"
          type="date"
          rules="required|email"
          placeholder="placeholder"
          size="half"
          :required="true"
          publish-setting="public"
          class="margin-bottom-20"
        />

        <AppInput
          :set-value="''"
          input-name="time"
          label="時間選択"
          type="time"
          rules="required|email"
          placeholder="placeholder"
          size="quarter"
          :required="true"
          publish-setting="public"
          class="margin-bottom-20"
        />

        <AppSwitch
          input-name="switch"
          label="スイッチ"
          :required="true"
          publish-setting="public"
          class="margin-bottom-20"
        />

        <AppRadio
          input-name="radio"
          label="ラジオボタン"
          :required="true"
          publish-setting="public"
          class="margin-bottom-20"
        />
      </section>

      <section class="section">
        <SubTitleText
          class="margin-bottom-10"
          text="Button関連"
          size="large"
          color="sub-color"
        />

        <MenuButton
          text="メニューボタン"
          icon="icons/home.svg"
          color="main-color"
          class="margin-10"
        />

        <StandardButton
          type="button"
          :disabled="false"
          width="hug"
          color="main-color"
          class="margin-10"
        >
          標準ボタン Hug
        </StandardButton>

        <StandardButton
          type="button"
          :disabled="false"
          width="fixed"
          color="gray"
          class="margin-10"
        >
          Fixed
        </StandardButton>

        <StandardButton
          type="button"
          :disabled="false"
          width="fill-container"
          color="sub-color"
          class="margin-10"
        >
          fill-container
        </StandardButton>

        <RectangleButton
          type="button"
          :disabled="false"
          width="hug"
          color="sub-color"
          class="margin-10"
        >
          <img
            class="icon"
            :src="assetImage('icons/question.svg')"
            alt="icon"
            style="margin-right: 10px"
          />
          <p style="">長方形ボタン</p>
        </RectangleButton>

        <CreateButton color="main-color" class="margin-10" />
        <CreateButton color="sub-color" class="margin-10" />
      </section>

      <section class="section">
        <SubTitleText
          class="margin-bottom-10"
          text="Typography関連"
          size="large"
          color="sub-color"
        />

        <TitleText
          class="margin-bottom-10"
          text="TitleText: 各ページのタイトル用"
        />
        <SubTitleText
          class="margin-bottom-10"
          text="SubTitleText: サブタイトル"
          size="medium"
          color="black"
        />
        <DescriptionText
          class="margin-bottom-10"
          text="DescriptionText: テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。"
          size="medium"
          color="black"
        />
      </section>

      <section class="section">
        <SubTitleText text="Color関連" size="large" color="sub-color" />

        <div class="color main-color">$main-color</div>
        <div class="color sub-color">$sub-color</div>
        <div class="color black">$black</div>
        <div class="color text-gray">$text-gray</div>
        <div class="color light-gray">$light-gray</div>
        <div class="color main-color-10">$main-color-10</div>
        <div class="color sub-color-10">$sub-color-10</div>
        <div class="color black-10">$black-10</div>
        <div class="color blue">$blue</div>
        <div class="color red">$red</div>
        <div class="color green">$green</div>
        <div class="color yellow">$yellow</div>
        <div class="color orange">$orange</div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.components-chart-container {
  .margin-bottom-20 {
    margin-bottom: 20px;
  }

  .margin-bottom-10 {
    margin-bottom: 10px;
  }

  .margin-10 {
    margin: 10px;
  }
  .sections {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .section {
    padding: 20px;
    border: 1px solid $text-gray;
    border-radius: 15px;
    margin: 20px auto;
    width: 48%;
  }

  .color {
    width: 150px;
    height: auto;
    border-radius: 5px;
    margin: 10px;
    display: inline-block;
    text-align: center;
    font-size: 1.4rem;
    line-height: 250%;
    font-weight: bold;
    color: $white;

    &.main-color {
      background-color: $main-color;
    }

    &.sub-color {
      background-color: $sub-color;
    }

    &.black {
      background-color: $black;
    }

    &.text-gray {
      background-color: $text-gray;
    }

    &.light-gray {
      background-color: $light-gray;
      color: $black;
    }

    &.main-color-10 {
      background-color: $main-color-10;
      color: $black;
    }

    &.sub-color-10 {
      background-color: $sub-color-10;
      color: $black;
    }

    &.black-10 {
      background-color: $black-10;
      color: $black;
    }

    &.blue {
      background-color: $blue;
    }

    &.red {
      background-color: $red;
    }

    &.green {
      background-color: $green;
    }

    &.yellow {
      background-color: $yellow;
    }

    &.orange {
      background-color: $orange;
    }
  }
}
</style>
