import YButton from "./Button";
import type { App } from "vue";
// 导出Button组件
export { YButton };

// 导出Vue插件
export default {
  install(app: App) {
    app.component(YButton.name!, YButton);
  },
};
