import YCard from "./Card";
import type { App } from "vue";
// 导出Button组件
export { YCard };

// 导出Vue插件
export default {
  install(app: App) {
    app.component(YCard.name!, YCard);
  },
};
