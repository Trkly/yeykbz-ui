import { DefineComponent } from "vue";
import Aside from "./Aside.vue";
import { withInstall } from "../utils/withInstall";

// 使用 withInstall 函数来增强 Aside 组件
export const YAside = withInstall(Aside as unknown as DefineComponent);

// 默认导出带install方法的组件
export default YAside;
