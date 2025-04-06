<div align="center" style="padding: 20px; border-radius: 8px; border: 1px solid #303846; background-color: #f6f8fa; margin: 30px 0;">
  <h2 style="font-size: 28px; color: #2d333b; margin-bottom: 15px;">
    <a href="https://github.com/Trkly/yeykbz-ui" target="_blank" style="text-decoration: none; color: #0969da;">Yeykbz-UI</a>
  </h2>
  
  <p style="color: #4a5568; line-height: 1.6; max-width: 600px; margin: 0 auto;">
    基于 <strong>Vite</strong> 和 <strong>TypeScript</strong> 构建的现代化组件库<br>
    为开发提供开箱即用的高质量组件
  </p>

  <!-- 技术栈 & 质量徽章 -->
  <div style="margin: 20px 0;">
    <a href="https://vitejs.dev/" target="_blank">
      <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
    </a>
    <div style="margin-top: 12px;">
      <a href="https://codecov.io/github/Trkly/yeykbz-ui" target="_blank"> 
        <img src="https://codecov.io/github/Trkly/yeykbz-ui/branch/main/graph/badge.svg?token=40SFPW00MT" alt="Codecov"> 
      </a>
      <a href="https://github.com/Trkly/yeykbz-ui/actions/workflows/build.yml" target="_blank">
      <img src="https://github.com/Trkly/yeykbz-ui/actions/workflows/build.yml/badge.svg?branch=main" alt="Build Status">
      </a>
      <a href="https://github.com/Trkly/yeykbz-ui/actions/workflows/codecov.yml" target="_blank">
      <img src="https://github.com/Trkly/yeykbz-ui/actions/workflows/codecov.yml/badge.svg?branch=main" alt="Codecov">
      <a href="https://github.com/Trkly/yeykbz-ui/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/Trkly/yeykbz-ui" alt="License">
      <a href="https://www.npmjs.com/package/yeykbz-ui">
    <img src="https://img.shields.io/npm/v/yeykbz-ui?color=blue&logo=npm&logoColor=white" alt="npm version">
    </a>
    <a href="https://www.npmjs.com/package/yeykbz-ui">
    <img src="https://img.shields.io/npm/dm/yeykbz-ui?color=green&label=downloads" alt="npm downloads">
    </a>
    </a>
    </a>
    </div>
  </div>

  <!-- 安装命令 -->
  <div style="margin-top: 15px;">
    <code style="background: #e9ecef; padding: 8px 16px; border-radius: 4px; font-family: monospace;">
      pnpm add yeykbz-ui
    </code>
  </div>
</div>



### 🌠本地运行文档

如需本地运行文档，请拉取代码到本地。

```bash
# 拉取代码
git clone https://github.com/Trkly/yeykbz-ui.git
# 安装依赖
pnpm install
# 运行项目
pnpm docs:dev
```

<section>
        <h2>✨ 特性亮点</h2>
        <div class="features">
            <div class="feature-card">
                <h3>⚡️ 极速体验</h3>
                <p>基于 Vite 5 的闪电构建速度</p>
            </div>
            <div class="feature-card">
                <h3>🔧 类型安全</h3>
                <p>TypeScript 强类型支持</p>
            </div>
            <div class="feature-card">
                <h3>🎨 原子化样式</h3>
                <p>UnoCSS 即时样式引擎</p>
            </div>
        </div>
    </section>


## 🚀安装

```bash
pnpm i yeykbz-ui
```

## 📦全局注册

```typescript
// main.ts
import { createApp } from "vue";
import "./style.css";
import "yeykbz-ui/dist/yeykbz-ui.css"; //导入组件库样式
import {YeykbzUI} from "yeykbz-ui";
import App from "./App.vue";

createApp(App).use(YeykbzUI).mount("#app");
```
## 🛸按需引用
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

## 🌐浏览器支持

**本地开发**推荐使用`Chrome 最新版`浏览器，**不支持**`Chrome 80`以下版本。

**生产环境**支持现代浏览器，不支持 IE。
<table>
            <tr>
                <td><img src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png" alt="Chrome"></td>
                <td><img src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png" alt="Edge"></td>
                <td><img src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png" alt="Firefox"></td>
            </tr>
            <tr>
                <td>Latest ✔</td>
                <td>Latest ✔</td>
                <td>Latest ✔</td>
            </tr>
        </table>
