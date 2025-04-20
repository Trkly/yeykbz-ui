import { DefineComponent } from "vue";
import Radio from "./Radio.vue";
import { withInstall } from "../utils/withInstall";

// 使用 withInstall 函数来增强 Button 组件
export const YRadio = withInstall(Radio as unknown as DefineComponent);

// 默认导出带install方法的组件
export default YRadio;
