import { defineStore } from "pinia";

export interface State {
  user: any;
  imageFile: any;
}

export const useState = defineStore({
  id: "UM.state",
  state: (): State => {
    return {
      user: {},
      imageFile: null,
    };
  },
});
