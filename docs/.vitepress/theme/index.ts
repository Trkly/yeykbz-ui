import "../../../dist/yeykbz-ui.css"; // 引入组件库的样式
import "./style/var.css";
import DefaultTheme from "vitepress/theme";
import { YeykbzUI } from "../../../src/index";
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.use(YeykbzUI);
    DefaultTheme.enhanceApp(ctx);
    // ctx.app.component("Demo", Demo);
    // ctx.app.component("DemoBlock", DemoBlock);
  },
};
