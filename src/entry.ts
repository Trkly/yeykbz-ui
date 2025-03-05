import "virtual:uno.css";
import type { App } from "vue";
import { Button } from "./Button";
import { Card } from "./Card";

// 编写一个插件，实现一个install方法
// export { YButton };
// export { YCard };
const Yeykbz = {
  install(app: App): void {
    app.component(Button?.name || 'YButton', Button);
    app.component(Card?.name || 'YCard', Card);
  },
};
export default Yeykbz