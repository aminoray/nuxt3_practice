<script setup lang="ts">
import '~/assets/scss/pages/auth-container.scss';
import { Form } from 'vee-validate';
import AuthCard from '~/components/organisms/Card/AuthCard/AuthCard.vue';
import AppInput from '~/components/atoms/Input/AppInput/AppInput.vue';
import AppTextarea from '~/components/atoms/Input/AppTextarea/AppTextarea.vue';
import AppSelect from '~/components/atoms/Input/AppSelect/AppSelect.vue';
import AppSwitch from '~/components/atoms/Input/AppSwitch/AppSwitch.vue';
import StandardButton from '~/components/atoms/Button/StandardButton/StandardButton.vue';
import prefecturesList from '~/assets/json/prefectures/ja.json';
import { UserPhoto } from '~/types/props-types';
import ImageFileUpload from '~/components/atoms/Input/ImageFileUpload/ImageFileUpload.vue';

const state = ref({
  name: '',
  email: '',
  birthday: '',
  userName: '',
  photo: '',
  residence: '',
  biography: '',
  isPublish: false,
});

/** ユーザーの画像情報 */
const userPhoto = ref<UserPhoto>({
  filename: undefined,
  base64: undefined,
  fileType: undefined,
  url: undefined,
  filePath: undefined,
});
const updateUserPhoto = (
  base64Str: string,
  filename: string,
  fileType: string
) => {
  userPhoto.value.base64 = base64Str;
  userPhoto.value.filename = filename;
  userPhoto.value.fileType = fileType;
};

const resetState = () => {
  state.value.name = '';
  state.value.email = '';
  state.value.birthday = '';
  state.value.userName = '';
  state.value.photo = '';
  state.value.residence = '';
  state.value.biography = '';
  state.value.isPublish = false;
  userPhoto.value.base64 = undefined;
  userPhoto.value.filename = undefined;
  userPhoto.value.fileType = undefined;
  userPhoto.value.url = undefined;
  userPhoto.value.filePath = undefined;
};
</script>
<template>
  <div class="auth-container">
    <AuthCard>
      <h1 class="title">プロフィール情報の入力</h1>
      <p class="description">
        新規登録にあたり、必要事項を正しく入力してください。<br />
        非公開と記載されているもは、他のユーザーには公開されません。<br />
        <span class="red">*</span>マークが付いている項目は必須です。
      </p>
      <Form v-slot="{ meta }" :initial-values="state" as="form" class="form">
        <div class="input-items">
          <AppInput
            input-name="name"
            label="氏名"
            type="text"
            :set-value="state.name!"
            rules="required"
            placeholder="山田 太郎"
            size="full"
            :required="true"
            class="margin-bottom-20"
            publish-setting="private"
            @update="(v) => (state.name = v)"
          />

          <AppInput
            input-name="email"
            label="メールアドレス"
            type="email"
            :set-value="state.email!"
            rules="required|email"
            placeholder="example@live.com"
            size="full"
            :required="true"
            class="margin-bottom-20"
            publish-setting="private"
            @update="(v) => (state.email = v)"
          />

          <AppInput
            input-name="birthday"
            label="生年月日"
            type="date"
            set-value=""
            rules="required"
            size="full"
            :required="true"
            publish-setting="private"
            class="margin-bottom-20"
            @update="(v) => (state.birthday = v)"
          />

          <AppInput
            input-name="userName"
            label="ユーザー名"
            type="text"
            :set-value="state.userName!"
            rules="required"
            placeholder="ユーザー名"
            size="full"
            :required="true"
            class="margin-bottom-20"
            publish-setting="public"
            @update="(v) => (state.userName = v)"
          />

          <ImageFileUpload
            label="プロフィール画像のアップロード"
            input-name="photo"
            :current-image="userPhoto.base64"
            :set-value="state.photo!"
            placeholder="プロフィール写真"
            publish-setting="public"
            rules="maxImageMBSize:5"
            :required="false"
            class="margin-bottom-20"
            @update="updateUserPhoto"
          />

          <AppSelect
            input-name="residence"
            label="居住エリア"
            :set-value="state.residence!"
            size="full"
            rules="required"
            :required="true"
            publish-setting="private"
            placeholder="未選択"
            :options="prefecturesList"
            class="margin-bottom-20"
            @update="(v) => (state.residence = v)"
          />

          <AppTextarea
            input-name="biography"
            label="自己紹介"
            :set-value="state.biography!"
            placeholder="自己紹介を入力してください。"
            size="full"
            :required="false"
            :rules="undefined"
            publish-setting="private"
            height="small"
            class="margin-bottom-20"
            @update="(v) => (state.biography = v)"
          />

          <AppSwitch
            input-name="isPublish"
            label="プロフィール公開設定(ON / OFF)"
            :set-value="state.isPublish!"
            :required="true"
            :publish-setting="null"
            class="margin-bottom-20"
            @update="(v) => (state.isPublish = v)"
          />
        </div>

        <StandardButton
          type="submit"
          :disabled="!meta.valid"
          width="fixed"
          color="main-color"
          class="margin-bottom-20"
        >
          完了
        </StandardButton>
      </Form>
    </AuthCard>
    <div class="state-check">
      <p class="title">正しく入力が受け取れているかチェック</p>
      <table class="table">
        <tr>
          <th class="item">項目</th>
          <th class="input">入力内容</th>
        </tr>
        <tr>
          <td class="item">氏名</td>
          <td class="input">{{ state.name ? state.name : '未記入' }}</td>
        </tr>
        <tr>
          <td class="item">メールアドレス</td>
          <td class="input">{{ state.email ? state.email : '未記入' }}</td>
        </tr>
        <tr>
          <td class="item">生年月日</td>
          <td class="input">
            {{ state.birthday ? state.birthday : '未記入' }}
          </td>
        </tr>
        <tr>
          <td class="item">ユーザー名</td>
          <td class="input">
            {{ state.userName ? state.userName : '未記入' }}
          </td>
        </tr>
        <tr>
          <td class="item">プロフィール画像</td>
          <td class="input">{{ state.photo ? state.photo : '未記入' }}</td>
        </tr>
        <tr>
          <td class="item">居住エリア</td>
          <td class="input">
            {{ state.residence ? state.residence : '未記入' }}
          </td>
        </tr>
        <tr>
          <td class="item">自己紹介</td>
          <td class="input">
            {{ state.biography ? state.biography : '未記入' }}
          </td>
        </tr>
        <tr>
          <td class="item">プロフィール公開設定</td>
          <td class="input">{{ state.isPublish ? '公開' : '非公開' }}</td>
        </tr>
      </table>

      <StandardButton
        type="button"
        width="fixed"
        color="sub-color"
        class="margin-bottom-20"
        @click="resetState()"
      >
        値リセット
      </StandardButton>
    </div>
  </div>
</template>
