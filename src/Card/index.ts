import Card from "./Card";
import { App } from "vue";

// 导出Button组件
export { Card };

// 导出Vue插件
export default {
    install(app: App) {
        app.component(Card.name!, Card);
    },
};
