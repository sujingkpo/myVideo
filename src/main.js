import "@/plugins/rem";
import Vue from "vue";

import router from "./router";

import App from "./App.vue";

Vue.config.productionTip = false;
import http from "@/plugins/http";

Vue.use(http);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
