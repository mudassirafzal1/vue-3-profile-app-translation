<template>
  <div class="fit row wrap justify-end items-start content-start">
    <div class="col-md-3 col-sm-5 col-12 q-px-md">
      <q-select
        v-model="$i18n.locale"
        :options="locales"
        label="Select Language"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const locales = reactive<Array<string>>(["en", "ar"]);
</script>
