import { DefineComponent } from "vue";
import Header from "./Header.vue";
import { withInstall } from "../utils/withInstall";

// 使用 withInstall 函数来增强 Header 组件
export const YHeader = withInstall(Header as unknown as DefineComponent);

// 默认导出带install方法的组件
export default YHeader;
