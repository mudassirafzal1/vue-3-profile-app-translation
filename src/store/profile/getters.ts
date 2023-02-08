import { defineStore } from "pinia";
import { computed } from "vue";
import { useState } from "./state";

export const useGetters = defineStore("Profile.getters", () => {
  const state = useState();

  const profileGetter = computed((): any => state.user);

  return {
    profileGetter,
  };
});
