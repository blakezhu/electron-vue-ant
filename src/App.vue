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
          <img alt="Vue logo" src="./assets/logo.png" />
          <HelloWorld msg="Welcome to Your Electron+Vue+Ant-design-vue App." />
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
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
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
  },
};
</script>

<style>
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
#app {
  text-align: center;
}
#container img {
  width: 600px;
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
  overflow-y: auto;
}
.footer {
  height: 30px;
  line-height: 30px;
  background: #f0f0f0;
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
