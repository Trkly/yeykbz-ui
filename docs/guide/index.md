# Yeykbz-UI是什么?

Yeykbz-UI是一个基于 [Vite](https://github.com/vitejs/vite)、 [TypeScript](https://www.typescriptlang.org/) 的定制化个人UI，目标是为开发提供开箱即用的高质量组件。



### 本地运行文档

如需本地运行文档，请拉取代码到本地。

```bash
# 拉取代码
git clone https://github.com/Trkly/yeykbz-ui.git
# 安装依赖
pnpm install
# 运行项目
pnpm docs:dev
```

## 特性

- ⚡️ Vite 5, pnpm, ESBuild - born with fastness
- 🦾 TypeScript, of course
- 🗂 File based routing
- ⚙️ Unit Testing with Vitest
- 😃 Eslint + Prettier
- 🎨 UnoCSS - the instant on-demand atomic CSS engine
- 🚘 CI/CD with GithubActions


## 安装

```bash
pnpm i yeykbz-ui
```

## 快速开始

```typescript
// main.ts
import { createApp } from "vue";
import "./style.css";
import "yeykbz-ui/dist/yeykbz-ui.css"; //导入组件库样式
import Yeykbz from "yeykbz-ui"; // 导入组件库
import App from "./App.vue";

createApp(App).use(Yeykbz).mount("#app");
```


## vite 插件推荐

如果这些插件对你有帮助，可以给一个 star 支持下

- [vite-plugin-mock](https://github.com/vbenjs/vite-plugin-mock) - 用于本地及开发环境数据 `mock`
- [vite-plugin-html](https://github.com/vbenjs/vite-plugin-html) - 用于 `html` 模版转换，可以在`html`文件内进行书写模版语法
- [vite-plugin-style-import](https://github.com/vbenjs/vite-plugin-style-import) - 用于组件库样式按需引入
- [vite-plugin-imagemin](https://github.com/vbenjs/vite-plugin-imagemin) - 用于打包压缩图片资源
- [vite-plugin-theme](https://github.com/vbenjs/vite-plugin-theme) - 用于在线切换主题色/黑暗主题适配等主题相关配置
- [vite-plugin-compression](https://github.com/vbenjs/vite-plugin-compression) - 用于打包输出`.gz`|`.br`文件
- [vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons) - 快速生成 `svg sprite`

## 浏览器支持

**本地开发**推荐使用`Chrome 最新版`浏览器，**不支持**`Chrome 80`以下版本。

**生产环境**支持现代浏览器，不支持 IE。

