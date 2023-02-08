import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";

import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";

//Global Coimponent Registration
import Input from "@/components/general/Input.vue";
import LocaleSwitcher from "@/components/general/LocaleSwitcher.vue";
import i18n from "./i18n";

createApp(App)
  .use(i18n)
  .use(router)
  .use(Quasar, quasarUserOptions)
  .use(createPinia().use(piniaPersist))
  .component("Input", Input)
  .component("LocaleSwitcher", LocaleSwitcher)
  .mount("#app");
