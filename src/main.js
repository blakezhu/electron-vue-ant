import Vue from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
Vue.use(Antd);
Vue.config.productionTip = false;

import { Ohyeah } from "vue-ohyeah-scroll";
Vue.use(Ohyeah);

import "./assets/font/iconfont.css";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
