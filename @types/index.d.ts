import Vue from "vue";

declare module "vue" {
  interface VueConstructor {
    $http: import("axios").AxiosInstance;
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $http: import("axios").AxiosInstance;
  }
}
