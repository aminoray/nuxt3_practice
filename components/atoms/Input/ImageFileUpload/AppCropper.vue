<script setup lang="ts">
import '~/components/atoms/Input/ImageFileUpload/app-cropper.scss';
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';
type Props = {
  imageOrigin: {
    src: string;
    type: string;
  };
  aspect: {
    width: number;
    height: number;
  };
};
const props = withDefaults(defineProps<Props>(), {
  imageOrigin: undefined,
  aspect: undefined,
});
const emits = defineEmits(['doneCropImage', 'closeCropper']);

const refCropper = ref();

const doneCropped = () => {
  if (refCropper && refCropper.value) {
    const { canvas } = refCropper.value.getResult();
    if (canvas) {
      emits('doneCropImage', canvas.toDataURL(props.imageOrigin.type));
    }
  }
};

const close = () => {
  emits('closeCropper');
};
</script>
<template>
  <div class="cropper-mask">
    <div class="container">
      <div class="option">
        <a class="button" @click="close">{{ $t('common.cancel') }}</a>
        <a class="button" @click="doneCropped">{{ $t('common.applying') }}</a>
      </div>
      <cropper
        ref="refCropper"
        class="cropper"
        :src="props.imageOrigin.src"
        :stencil-props="{
          aspectRatio: props.aspect.width / props.aspect.height,
        }"
      ></cropper>
    </div>
  </div>
</template>
