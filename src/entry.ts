import "virtual:uno.css";
import type { App } from "vue";
import { YButton } from "./Button";
import { YCard } from "./Card";

// 编写一个插件，实现一个install方法
export { YButton };
export { YCard };
export default {
  install(app: App): void {
    app.component(YButton.name!, YButton);
    app.component(YCard.name!, YCard);
  },
};
