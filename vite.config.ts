/// <reference types="vitest" />
import { defineConfig } from "vite";
import Unocss from "unocss/vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
const rollupOptions = {
  external: ["vue", "virtual:uno.css"],
  output: {
    // exports: "named", //强制所有导出为命名模式
    globals: {
      vue: "Vue", //UMD 格式下 Vue 的全局变量名
    },
    assetFileNames: 'yeykbz-ui.[ext]', //指定css文件名
  },
};

// @ts-ignore
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      configFile: "./uno.config.ts", // 指定配置文件路径
      mode: "dist-chunk"
    }),
    vueJsx(),
  ],
  build: {
    // @ts-ignore
    rollupOptions,
    minify: "terser",
    sourcemap: true,
    // @ts-ignore
    brotliSize: true, // 生成压缩大小报告
    cssCodeSplit: false, // 禁用CSS代码分割，确保所有样式都合并到一个文件中
    lib: {
      entry: "./src/index.ts",
      name: "YeykbzUI",
      fileName: (format) => `yeykbz-ui.${format}.js`,
      // 导出模块格式
      formats: ["es", "umd", "iife", "cjs"],
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: "happy-dom",
    // 支持tsx组件，很关键
    // @ts-ignore
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
});
