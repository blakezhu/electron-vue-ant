const path = require("path");
const { generateTheme, getLessVars } = require("antd-theme-generator");
// ant-design-vue/dist/antd.less
const options = {
  antDir: path.join(__dirname, "./node_modules/ant-design-vue"), //对应具体位置
  stylesDir: path.join(__dirname, "./src/assets/theme"), //对应具体位置
  varFile: path.join(__dirname, "./src/assets/theme/var.less"), //对应具体位置
  mainLessFile: path.join(__dirname, "./src/assets/theme/index.less"), //对应具体位置
  themeVariables: [
    "@primary-color", //主色调
    "@secondary-color",
    "@text-color", //文字颜色
    "@heading-color",
    "@text-color-secondary",
    "@heading-color",
    "@layout-body-background",
    "@btn-primary-bg",
    "@layout-header-background",
    "@body-background",
    "@component-background",
    "@border-color-base",
    "@border-color-split",
    "@background-color-light",
    "@background-color-base",
    "@my-statusbg",
    "@error-color",
  ],
  indexFileName: "index.html",
  outputFilePath: path.join(__dirname, "./public/color.less"),
};
generateTheme(options)
  .then((less) => {
    console.log("Theme generated successfully");
  })
  .catch((error) => {
    console.log("Error", error);
  });
