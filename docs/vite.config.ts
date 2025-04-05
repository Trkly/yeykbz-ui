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
  css: {
    modules: {
      generateScopedName: "y__[local]___[hash:base64:5]", // 必须与 PostCSS 一致
      scopeBehaviour: "local", // 仅处理 .module.css 文件
      hashPrefix: "yeykbz", // 项目唯一前缀
    },
    postcss: "../postcss.config.mjs", // 指定 PostCSS 配置文件路径
  },
});
