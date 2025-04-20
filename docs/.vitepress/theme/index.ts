import "../../../dist/yeykbz-ui.css"; // 引入组件库的样式
import "./style/var.css";
import DefaultTheme from "vitepress/theme";
import { YeykbzUI } from "../../../src/index";
// 主题样式
// import "vitepress-theme-demoblock/dist/theme/styles/index.css";
// 插件的组件，主要是demo组件
// import Demo from "vitepress-theme-demoblock/dist/client/components/Demo.vue";
// import DemoBlock from "vitepress-theme-demoblock/dist/client/components/DemoBlock.vue";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.use(YeykbzUI);
    DefaultTheme.enhanceApp(ctx);
    // ctx.app.component("Demo", Demo);
    // ctx.app.component("DemoBlock", DemoBlock);
  },
};
