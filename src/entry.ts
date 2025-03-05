// src/entry.ts
import "virtual:uno.css";
import type { App } from "vue";
import { Button } from "./Button";
import { Card } from "./Card";

// 定义插件安装方法
const install = (app: App) => {
  app.component(Button?.name || 'YButton', Button);
  app.component(Card?.name || 'YCard', Card);
};

// 导出命名组件
// export { Button as YButton, Card as YCard };

// 导出默认插件对象
export default {
  install,
  YButton: Button,
  YCard: Card
};