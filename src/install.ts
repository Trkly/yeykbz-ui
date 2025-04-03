import type { Plugin } from "vue";
import { YButton } from "./Button";
import { YCard } from "./Card";

// 所有组件列表
const components = [YButton, YCard] as Plugin[];

// 全局安装函数
export const install: Plugin["install"] = (app) => {
  components.forEach((component) => {
    app.use(component);
  });
};
// 默认导出带install方法的插件对象
export const YeykbzUI = {
  install,
  version: "__VERSION__",
};

// export default YeykbzUI;
