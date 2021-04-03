import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios, { AxiosInstance } from "axios";

// Importing spectre.css framework
import "./../node_modules/spectre.css/dist/spectre.min.css";
import "./../node_modules/spectre.css/dist/spectre-exp.min.css";
import "./../node_modules/spectre.css/dist/spectre-icons.min.css";

// Making Axios accessible from everywhere
Vue.prototype.$axios = axios;

declare module "vue/types/vue" {
  interface Vue {
    $axios: AxiosInstance;
  }
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
