import { DefineComponent } from "vue";
import DropDownMenuItem from "./DropDownMenuItem.vue";
import { withInstall } from "../utils/withInstall";

// 使用 withInstall 函数来增强 Button 组件
export const YDropDownMenuItem = withInstall(
  DropDownMenuItem as unknown as DefineComponent,
);
// 默认导出带install方法的组件
export default YDropDownMenuItem;
