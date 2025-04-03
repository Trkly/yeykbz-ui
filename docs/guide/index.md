# Yeykbz-UI是什么?

[Yeykbz-UI](https://github.com/Trkly/yeykbz-ui)是一个基于 [Vite](https://github.com/vitejs/vite)、 [TypeScript](https://www.typescriptlang.org/) 的定制化个人UI，目标是为开发提供开箱即用的高质量组件。



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
- 🚘 CI/CD with Github Actions


## 安装

```bash
pnpm i yeykbz-ui
```

## 全局注册

```typescript
// main.ts
import { createApp } from "vue";
import "./style.css";
import "yeykbz-ui/dist/yeykbz-ui.css"; //导入组件库样式
import {YeykbzUI} from "yeykbz-ui";
import App from "./App.vue";

createApp(App).use(YeykbzUI).mount("#app");
```
## 按需引用
```typescript
import { createApp } from "vue";
import "./style.css";
import "yeykbz-ui/dist/yeykbz-ui.css"; //导入组件库样式
// 在按需引用时，需要手动引入样式
import {YButton} from "yeykbz-ui";
import App from "./App.vue";

// 单独注册
createApp(App).use(YButton).mount("#app");
  
```

## 浏览器支持

**本地开发**推荐使用`Chrome 最新版`浏览器，**不支持**`Chrome 80`以下版本。

**生产环境**支持现代浏览器，不支持 IE。

