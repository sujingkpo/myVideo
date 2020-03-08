import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

/**
 * @type Array<import("vue-router").RouteConfig>
 */
const routes = [
  {
    path: "/index",
    name: "index",
    alias: "/",
    component() {
      return import("@/views/list.vue");
    }
  },
  {
    path: "/video",
    name: "video",
    component() {
      return import("@/views/video.vue");
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
