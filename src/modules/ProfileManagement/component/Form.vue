<template>
  <q-card-section>
    <q-form>
      <div>
        <Input
          v-model="user.firstName"
          type="text"
          :label="$t('message.firstName')"
          lazy-rules
          :rule="[(val:string) => val || 'This field is required']"
        />
        <Input
          v-model="user.lastName"
          type="text"
          :label="$t('message.lastName')"
          lazy-rules
          :rule="[(val:string) => val || 'This field is required']"
        />
        <Input
          v-model="user.email"
          type="text"
          :label="$t('message.email')"
          lazy-rules
          :rule="[(val:string) => val || 'This field is required']"
        />
      </div>
    </q-form>
  </q-card-section>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { Profile } from "../helper/ProfileModel";
const props = defineProps<{
  user: Profile;
}>();
const emit = defineEmits<{
  (e: "update:user", val: any): void;
}>();

const user = computed({
  get() {
    return props.user;
  },
  set(val: any) {
    emit("update:user", val);
  },
});
</script>
<style></style>
