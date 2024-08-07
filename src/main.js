import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import router from "./router";

import "vuetify/styles";
import '@fortawesome/fontawesome-free/css/all.css'
import { createVuetify } from "vuetify";
import { aliases, fa } from "vuetify/iconsets/fa";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import FontAwesomeIcon from "./fontAwesomeIcons";

import App from "./App.vue";

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

const pinia = createPinia(),
  vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: "fa",
      aliases,
      sets: {
        fa,
      },
    },
  });

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(pinia).use(router).use(vuetify).mount("#app");
