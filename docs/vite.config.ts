import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "unocss/vite";
// import DefineOptions from "unplugin-vue-define-options/vite";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    Unocss(),
    // 添加JSX插件
    vueJsx(),
    // DefineOptions(),
  ],
  // 关键配置：强制 CSS 代码分割
  build: {
    cssCodeSplit: true,
  },
});
