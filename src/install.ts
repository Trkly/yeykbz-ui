import type { Plugin } from "vue";
import { YButton } from "./Button";
import { YCard } from "./Card";
import { YAside } from "./Aside";
import { YHeader } from "./Header";
import { YFooter } from "./Footer";
import { YMain } from "./Main";
import { YContainer } from "./Container";
import { YDropDownMenu } from "./DropDown";
import { YDropDownMenuItem } from "./DropDownMenuItem";
import { YTable } from "./Table";
import { YRadio } from "./Radio";
import debounceDirective from "./directives/debounce";
import throttleDirective from "./directives/throotle";
import lazyImageDirective from "./directives/lazyLoad";
// 所有组件列表
const components = [
  YButton,
  YCard,
  YAside,
  YHeader,
  YFooter,
  YMain,
  YContainer,
  YDropDownMenu,
  YDropDownMenuItem,
  YTable,
  YRadio,
] as Plugin[];

// 全局安装函数
export const install: Plugin["install"] = (app) => {
  components.forEach((component) => {
    app.use(component);
  });
  // 注册全局指令
  app.directive("debounce", debounceDirective);
  app.directive("throttle", throttleDirective);
  app.directive("lazyLoad", lazyImageDirective);
};
// 默认导出带install方法的插件对象
export const YeykbzUI = {
  install,
  version: "__VERSION__",
};

// export default YeykbzUI;
