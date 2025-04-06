import{_ as i,c as a,o as t,ab as e}from"./chunks/framework.Czzsbazg.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/index.md","filePath":"guide/index.md"}'),n={name:"guide/index.md"};function p(h,s,l,k,r,o){return t(),a("div",null,s[0]||(s[0]=[e(`<div align="center" style="padding:20px;border-radius:8px;border:1px solid #303846;background-color:#f6f8fa;margin:30px 0;"><h2 style="font-size:28px;color:#2d333b;margin-bottom:15px;"><a href="https://github.com/Trkly/yeykbz-ui" target="_blank" style="text-decoration:none;color:#0969da;">Yeykbz-UI</a></h2><p style="color:#4a5568;line-height:1.6;max-width:600px;margin:0 auto;"> 基于 <strong>Vite</strong> 和 <strong>TypeScript</strong> 构建的现代化组件库<br> 为开发提供开箱即用的高质量组件 </p><div style="margin:20px 0;"><a href="https://vitejs.dev/" target="_blank"><img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&amp;logo=vite&amp;logoColor=white" alt="Vite"></a><a href="https://www.typescriptlang.org/" target="_blank"><img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&amp;logo=typescript&amp;logoColor=white" alt="TypeScript"></a><div style="margin-top:12px;"><a href="https://codecov.io/github/Trkly/yeykbz-ui" target="_blank"><img src="https://codecov.io/github/Trkly/yeykbz-ui/branch/main/graph/badge.svg?token=40SFPW00MT" alt="Codecov"></a><a href="https://github.com/Trkly/yeykbz-ui/actions/workflows/build.yml" target="_blank"><img src="https://github.com/Trkly/yeykbz-ui/actions/workflows/build.yml/badge.svg?branch=main" alt="Build Status"></a><a href="https://github.com/Trkly/yeykbz-ui/actions/workflows/codecov.yml" target="_blank"><img src="https://github.com/Trkly/yeykbz-ui/actions/workflows/codecov.yml/badge.svg?branch=main" alt="Codecov"><a href="https://github.com/Trkly/yeykbz-ui/blob/main/LICENSE"><img src="https://img.shields.io/github/license/Trkly/yeykbz-ui" alt="License"><a href="https://www.npmjs.com/package/yeykbz-ui"><img src="https://img.shields.io/npm/v/yeykbz-ui?color=blue&amp;logo=npm&amp;logoColor=white" alt="npm version"></a><a href="https://www.npmjs.com/package/yeykbz-ui"><img src="https://img.shields.io/npm/dm/yeykbz-ui?color=green&amp;label=downloads" alt="npm downloads"></a></a></a></div></div><div style="margin-top:15px;"><code style="background:#e9ecef;padding:8px 16px;border-radius:4px;font-family:monospace;"> pnpm add yeykbz-ui </code></div></div><h3 id="🌠本地运行文档" tabindex="-1">🌠本地运行文档 <a class="header-anchor" href="#🌠本地运行文档" aria-label="Permalink to &quot;🌠本地运行文档&quot;">​</a></h3><p>如需本地运行文档，请拉取代码到本地。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 拉取代码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/Trkly/yeykbz-ui.git</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 运行项目</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev</span></span></code></pre></div><section><h2>✨ 特性亮点</h2><div class="features"><div class="feature-card"><h3>⚡️ 极速体验</h3><p>基于 Vite 5 的闪电构建速度</p></div><div class="feature-card"><h3>🔧 类型安全</h3><p>TypeScript 强类型支持</p></div><div class="feature-card"><h3>🎨 原子化样式</h3><p>UnoCSS 即时样式引擎</p></div></div></section><h2 id="🚀安装" tabindex="-1">🚀安装 <a class="header-anchor" href="#🚀安装" aria-label="Permalink to &quot;🚀安装&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yeykbz-ui</span></span></code></pre></div><h2 id="📦全局注册" tabindex="-1">📦全局注册 <a class="header-anchor" href="#📦全局注册" aria-label="Permalink to &quot;📦全局注册&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// main.ts</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createApp } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./style.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;yeykbz-ui/dist/yeykbz-ui.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//导入组件库样式</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {YeykbzUI} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;yeykbz-ui&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> App </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./App.vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(App).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(YeykbzUI).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#app&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="🛸按需引用" tabindex="-1">🛸按需引用 <a class="header-anchor" href="#🛸按需引用" aria-label="Permalink to &quot;🛸按需引用&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createApp } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./style.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;yeykbz-ui/dist/yeykbz-ui.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//导入组件库样式</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在按需引用时，需要手动引入样式</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {YButton} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;yeykbz-ui&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> App </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./App.vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 单独注册</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(App).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(YButton).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#app&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="🌐浏览器支持" tabindex="-1">🌐浏览器支持 <a class="header-anchor" href="#🌐浏览器支持" aria-label="Permalink to &quot;🌐浏览器支持&quot;">​</a></h2><p><strong>本地开发</strong>推荐使用<code>Chrome 最新版</code>浏览器，<strong>不支持</strong><code>Chrome 80</code>以下版本。</p><p><strong>生产环境</strong>支持现代浏览器，不支持 IE。</p><table><tr><td><img src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png" alt="Chrome"></td><td><img src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png" alt="Edge"></td><td><img src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png" alt="Firefox"></td></tr><tr><td>Latest ✔</td><td>Latest ✔</td><td>Latest ✔</td></tr></table>`,15)]))}const c=i(n,[["render",p]]);export{g as __pageData,c as default};
