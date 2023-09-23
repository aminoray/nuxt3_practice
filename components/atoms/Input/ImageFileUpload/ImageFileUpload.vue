<script setup lang="ts">
import { ErrorMessage, Field, useField } from 'vee-validate';
import '~/components/atoms/Input/ImageFileUpload/image-file-upload.scss';
import Cropper from '~/components/atoms/Input/ImageFileUpload/AppCropper.vue';
import { validImageTypes } from '~/utils/validate/variables';

type Props = {
  inputName: string;
  setValue: string;
  currentImage?: string;
  label: string;
  placeholder: string;
  rules?: string;
  required: boolean;
  publishSetting?: string;
};
const props = withDefaults(defineProps<Props>(), {
  inputName: '',
  setValue: '',
  currentImage: undefined,
  label: '',
  placeholder: undefined,
  rules: '',
  required: false,
  publishSetting: '',
});
const emits = defineEmits(['update']);
const inputValue = ref(props.setValue);
watch(props, (newVal) => {
  inputValue.value = newVal.setValue;
});
const inputFunc = (base64Str: string) => {
  emits('update', base64Str, fileName.value, inputImage.value.type);
  cropperFlag.value = false;
};

const inputImage = ref({
  src: '',
  type: '',
});

const fileName = ref('');

const file = ref();

const uploadImage = (e: Event) => {
  if (!(e.target instanceof HTMLInputElement)) {
    return;
  }
  const { files } = e.target;
  if (files && files[0]) {
    if (!validImageTypes.includes(files[0].type)) {
      return;
    }
    if (inputImage.value.src) {
      URL.revokeObjectURL(inputImage.value.src);
    }
    inputImage.value.src = URL.createObjectURL(files[0]);
    inputImage.value.type = files[0].type;
    cropperFlag.value = true;
    fileName.value = files[0].name;
  }
};
const { resetField } = useField(props.inputName);
const resetImage = () => {
  inputImage.value.src = '';
  inputImage.value.type = '';
  fileName.value = '';
  resetField();
  emits('update', '', '', '');
};
const cropperFlag = ref(false);
</script>
<template>
  <div class="image-file-upload">
    <div class="top">
      <label :for="inputName" class="label">
        {{ label }}
        <span v-if="required" class="required">*</span>
        <span v-if="publishSetting === 'public'">（公開）</span>
        <span v-else-if="publishSetting === 'private'">（非公開）</span>
      </label>
    </div>
    <Field
      v-slot="{ errorMessage, handleChange }"
      :name="inputName"
      :rules="rules ? `${rules}|image` : 'image'"
      class="field"
      as="div"
      validate-on-input
    >
      <div class="content">
        <div v-if="inputValue" class="preview">
          <img class="photo" :src="inputValue" alt="preview photo" />
        </div>
        <label class="file">
          <template v-if="!currentImage">
            <img
              v-if="!inputValue"
              class="icon"
              src="~/assets/images/icons/camera.svg"
              alt="camera icon"
            />
          </template>
          <template v-else>
            <img class="current" :src="currentImage" alt="photo" />
            <div class="edit">
              <img
                class="icon"
                src="~/assets/images/icons/camera.svg"
                alt="camera icon"
              />
              <p class="text">変更</p>
            </div>
          </template>
          <input
            ref="file"
            type="file"
            name="file"
            class="input"
            :required="required"
            :class="{ '-error': !!errorMessage }"
            @blur="handleChange"
            @change="uploadImage($event)"
          />
        </label>

        <div class="options">
          <img
            v-if="currentImage"
            class="delete"
            alt="delete"
            src="~/assets/images/icons/delete.svg"
            @click="resetImage"
          />
        </div>
      </div>
    </Field>
    <Cropper
      v-if="cropperFlag"
      :image-origin="inputImage"
      :aspect="{ width: 1, height: 1 }"
      @done-crop-image="(v) => inputFunc(v)"
      @close-cropper="() => (cropperFlag = false)"
    />
    <ErrorMessage :name="inputName" class="error" as="span" />
  </div>
</template>
