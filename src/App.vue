<template>
  <div id="app">
    <div id="container">
      <div class="header">
        <span class="maintitle">Electron-Vue-Ant v0.0.1</span>
        <ul class="controlbtn">
          <li @click="minwin">
            <i class="iconfont icon-zuixiaohua" id="minbtn"></i>
          </li>
          <li @click="maxwin">
            <i class="iconfont icon-zuidahua" id="maxbtn"></i>
          </li>
          <li @click="closewin">
            <i class="iconfont icon-closebtn" id="closebtn"></i>
          </li>
        </ul>
      </div>
      <Ohyeah>
        <div class="contenter">
          <div class="logo"><img alt="Vue logo" src="./assets/logo.png" /></div>

          <Mainpage
            @themechange="changeT"
            :sendData="themeMode"
            msg="Welcome to Your Electron+Vue+Ant-design-vue App."
          />
        </div>
      </Ohyeah>
      <div class="footer">
        <span class="copy">&copy; Yourweb.com</span
        ><span class="info">Some info for you.</span>
      </div>
    </div>
  </div>
</template>

<script>
//const { ipcRenderer } = require("electron");

import "ant-design-vue/dist/antd.css"; // or 'ant-design-vue/dist/antd.less'
const { ipcRenderer } = require("electron");
import Mainpage from "./page/mainpage.vue";

export default {
  name: "App",
  data() {
    return {
      themeMode: "normal",
    };
  },
  components: {
    Mainpage,
  },
  methods: {
    minwin() {
      console.log("minwin");
      ipcRenderer.send("minMainWin");
    },
    maxwin() {
      console.log("maxwin");
      ipcRenderer.send("maxMainWin");
    },
    closewin() {
      console.log("closewin");
      ipcRenderer.send("closeMainWin");
    },
    changeT(type) {
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
    },
  },
};
</script>

<style lang="less">
body {
  overflow: hidden;
}
ul,
li {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
#container img {
  width: 600px;
}
.logo {
  text-align: center;
}
#container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  -webkit-app-region: drag;
  background-color: #3a3a3a;
  height: 30px;
  display: flex;
  justify-content: space-between;
}
.header span {
  color: #ccc;
  line-height: 30px;
  padding: 0 10px;
}
.contenter {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
}
.footer {
  line-height: 30px;
  display: flex;
  padding: 0 13px;
  justify-content: space-between;
  font-size: 12px;
}
.controlbtn {
  color: #fff;
  float: right;
  line-height: 30px;
}
.controlbtn li {
  cursor: pointer;
  float: left;
  height: 30px;
  padding: 0px 14px;
  -webkit-app-region: no-drag;
}
.controlbtn li:hover {
  background: #444;
}
.controlbtn li:nth-child(3):hover {
  background: #c70404;
}

.mycard .ant-card-body {
  padding: 10px;
  padding-top: 0 !important;
}
.controlbtn .iconfont {
  font-size: 14px;
}
</style>
