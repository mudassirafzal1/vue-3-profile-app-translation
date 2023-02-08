<template>
  <div v-if="!imageUrl" class="uploader text-center">
    <div class="drop-zone-w zone-border">
      <div
        class="drop-zone-h q-pt-lg"
        @dragover.prevent
        @drop.prevent="dropFiles"
      >
        <p>{{ $t("message.dragDrop") }}</p>
      </div>
      <input
        id="browse"
        type="file"
        name="fileupload"
        style="display: none"
        @Change="Handlechange()"
      />
      <q-btn
        color="white"
        text-color="black"
        :label="$t('message.uploadPhoto')"
        @click="HandleBrowseClick()"
      />
    </div>
  </div>
  <div v-else>
    <div style="position: relative">
      <q-img
        :src="imageUrl"
        spinner-color="white"
        style="height: 200px; max-width: 300px"
      ></q-img>
      <q-icon name="close" style="position: absolute" @click="removeImage" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
const props = defineProps<{
  imageFile: any;
}>();
const emit = defineEmits<{
  (e: "update:imageFile", val: any): void;
}>();

const imageFile = computed({
  get() {
    return props.imageFile;
  },
  set(val: any) {
    emit("update:imageFile", val);
  },
});

const imageUrl = ref("");

const HandleBrowseClick = () => {
  const fileinput: any = document.getElementById("browse");
  fileinput.click();
};

const Handlechange = () => {
  const fileinput: any = document.getElementById("browse");
  const [file] = fileinput.files;
  if (file) {
    imageFile.value = file;
    imageUrl.value = URL.createObjectURL(file);
  }
};

const dropFiles = (event: any) => {
  if (event.dataTransfer) {
    event.preventDefault();
    const [file] = event.dataTransfer.files;
    if (file) {
      imageFile.value = file;
      imageUrl.value = URL.createObjectURL(file);
    }
  }
};

const removeImage = () => {
  imageUrl.value = "";
  imageFile.value = null;
};
</script>

<style lang="scss">
.uploader {
  .drop-zone-h {
    min-height: 160px;
  }
  .zone-border {
    border: 2px dotted;
    padding-bottom: 15px;
  }
}
</style>
