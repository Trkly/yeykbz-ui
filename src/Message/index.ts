import { DefineComponent } from "vue";
import { Message } from "./Message";
import { withInstall } from "../utils/withInstall";

// 使用 withInstall 函数来增强 Message 组件
export const YMessage = withInstall(Message as unknown as DefineComponent);

// 默认导出带install方法的组件
export default YMessage;
