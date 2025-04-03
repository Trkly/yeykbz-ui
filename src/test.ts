// @ts-ignore
import { createApp } from "vue/dist/vue.esm-browser";
import { YeykbzUI } from "./index";
createApp({
  template: `
   <div style="margin-bottom:20px;">
       <YButton size="small" plain>小按钮</YButton>
       <YButton size="medium" plain>中按钮</YButton>
       <YButton size="large" plain>大按钮</YButton>
   </div>
       `,
})
  .use(YeykbzUI)
  .mount("#app");
