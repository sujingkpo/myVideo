import axios from "axios";

const http = axios.create({
  baseURL: "http://192.168.2.211:3000"
});

/**
 *
 * @param {import("vue").VueConstructor} Vue
 */
export default function(Vue) {
  Vue.prototype.$http = http;
  Vue.$http = http;
}
