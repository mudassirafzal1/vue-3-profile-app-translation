<template>
  <q-page-container>
    <q-page>
      <div class="content-container">
        <div class="q-px-md">
          <h5 class="q-mt-none text-bold">{{ $t("message.userProfile") }}</h5>
        </div>
        <div class="row">
          <div class="col-md-8 col-sm-7 col-12">
            <div>
              <Form v-model:user="user" />
            </div>
          </div>
          <div class="col-md-4 col-sm-5 col-12">
            <div class="q-px-md q-mb-lg">
              <Upload v-model:imageFile="imageFile" />
            </div>
          </div>
        </div>
        <div class="submit-wrapper q-px-md q-pb-md text-right">
          <q-btn
            unelevated
            class="btn-fixed-width"
            color="primary"
            :label="$t('message.save')"
            :disable="
              !user.firstName || !user.lastName || !user.email || !imageFile
            "
            @click="onSubmit"
          />
        </div>
      </div>
    </q-page>
  </q-page-container>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import Form from "../modules/ProfileManagement/component/Form.vue";
import Upload from "../modules/ProfileManagement/component/Upload.vue";
import { Profile } from "@/modules/ProfileManagement/helper/ProfileModel";
import { useProfileStore } from "../store/profile";

const user = reactive<Profile>({
  firstName: "",
  lastName: "",
  email: "",
});
const store = useProfileStore();
const imageFile = ref<any>(null);

const onSubmit = async () => {
  store.createProfile({ user: user, imageFile: imageFile.value });
};
</script>
<style lang="scss" scoped>
.q-card__section {
  padding-top: 0;
}
.content-container {
  width: 100%;
  max-width: 1130px;
  margin: 0 auto;
}
.btn-fixed-width {
  width: 200px;
}
</style>
