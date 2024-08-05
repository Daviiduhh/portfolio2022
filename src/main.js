import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import router from "./router";

import FontAwesomeIcon from "./fontAwesomeIcons";

import App from "./App.vue";

const pinia = createPinia(),
  app = createApp(App);

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app
  .component("fa", FontAwesomeIcon)
  .use(pinia)
  .use(router)
  .mount("#app");
