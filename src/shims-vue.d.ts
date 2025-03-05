/// <reference types="vite/client" />
/// <reference types="@vue/runtime-dom" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
