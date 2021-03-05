import Vue from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
Vue.use(Antd);

import "ant-design-vue/dist/antd.less";
Vue.config.productionTip = false;

import { Ohyeah } from "vue-ohyeah-scroll";
Vue.use(Ohyeah);

import svgLoader from "./components/svgLoader";
Vue.component("svg-icon", svgLoader);

import "./assets/font/iconfont.css";

new Vue({
  render: (h) => h(App),
}).$mount("#app");

Vue.prototype.themeChange = function(type) {
  var options;
  var normaltheme = {};
  var darktheme = {
    "@primary-color": "@blue-6",
    "@body-background": "#111",
    "@text-color": "#ccc",
    "@text-color-secondary": "#999",
    "@heading-color": "#ccc",
    "@my-statusbg": "#222",
    "@component-background": "#181818",
    "@border-color-base": "hsv(0, 0, 35%)",
    "@border-color-split": "hsv(0, 0, 25%)",
    "@background-color-light": "hsv(0, 0, 15%)",
    "@background-color-base": "hsv(0, 0, 12%)",
    "@error-color": "@red-8",
    "@btn-primary-bg": "@blue-8",
  };
  if (type == "normal") {
    options = normaltheme;
  } else {
    options = darktheme;
  }
  console.log(window.less.modifyVars());
  window.less
    .modifyVars(options)
    .then(() => {
      console.log("成功");
    })
    .catch((error) => {
      alert("失败");
      console.log(error);
    });
};
