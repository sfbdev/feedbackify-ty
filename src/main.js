import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "axios";
// import VueAxios from "vue-axios";
import { VueAxios } from "./config/axios.js";

Vue.use(VueAxios, axios);

import "@/config/component";

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
