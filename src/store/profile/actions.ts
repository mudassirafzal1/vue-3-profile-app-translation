import { defineStore } from "pinia";
import { useState } from "./state";
import { Notify } from "quasar";
export const useActions = defineStore("Profile.actions", () => {
  const state = useState();

  function createProfile(payload: any) {
    state.user = payload.user;
    state.imageFile = payload.imageFile;
    Notify.create({
      color: "#31ccec",
      message: "Profile created successfully!",
    });
  }

  // Note you are free to define as many internal functions as you want.
  // You only expose the functions that are returned.
  return {
    createProfile,
  };
});
