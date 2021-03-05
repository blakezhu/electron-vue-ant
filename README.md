<div align="center">
<br>
<img width="600" src="/src/assets/images/eva.png" alt="electron-vue-ant">
<br>
<br>
</div>

<p align="center" color="#6a737d">
electron + Vue + ant-design-vue 建立桌面electron项目的基础模板
</p>
<div align="center">

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/makes-people-smile.svg)](http://forthebadge.com)
</div>

### 项目介绍
目前开发中，请大家先不要使用，G站中其实已经有了若干类似项目，但都比较陈旧了（如：[eletron-vue-template](https://github.com/luohao8023/electron-vue-template)、[electron-vue](https://github.com/SimulatedGREG/electron-vue)），而且自己使用当中发现有些东西不是很符合自己的需要，于是产生了自己建立一个项目的想法，主要包含以下几个功能：  
* 使用最新核心模块，如[ electron ](https://github.com/electron/electron)的 `v11.3.0`，[ Vue ](https://github.com/vuejs/vue)的 `v2.6.12` ，[ant-design-vue ](https://github.com/vueComponent/ant-design-vue)的 `v1.7.4`
* 自动更新：不同于 [eletron-vue-template](https://github.com/luohao8023/electron-vue-template) 启动时优先启动update进程，本项目将自动更新放在了主进程中作为延迟启动的功能，可参考macOS或windows的系统更新提示策略。
* 完整配备跨平台打包应用程序所使用到的各类图标及图片资源，直接修改即可使用。
* 任务栏或状态栏等图标兼容macOS的theme切换策略（未来同样将支持win的策略）。
* theme功能，基于`antd-theme-generator`自定义了一个 `themechanger` 组件，使用全局的主题切换方法 `themeChange(type)` ，type值可以是 `"normal", "dark"` 两种，可自行扩展，需要注意的是仅支持色彩的切换。 
* 多语言功能（开发中...）
* 开发时内容热更新：推荐使用vscode开发，热更新内容仅包含vue和css文件的更新，js更新需要重新渲染项目。
* 集成 [`axios v0.21.1`](https://github.com/axios/axios) 调用接口，提供示例方法。
* 默认使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>F5</kbd> 打开控制台。

> 忍不住还是想吐槽一下npm，唉，算了，正在开发一个新项目就跟这个吐槽有关，容我卖个关子

### 安装方法
```
git clone https://github.com/blakezhu/electron-vue-ant.git
cd electron-vue-ant
npm install
```

### 开发命令
```
npm run dev
npm run build
```

* npm run dev 将打包Vue部分并启动electron加载内容  
* npm run build 将打包整个程序，打包工具使用electron builder。

### License
MIT