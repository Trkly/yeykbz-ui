import{D as d,a8 as y,b as u,o as p,w as e,a4 as k,m as i,_ as m,c as F,F as v,C,h as b,H as a,a7 as B,a as h,a5 as E,p as l}from"./chunks/framework.5tjO0_U8.js";import{d as g,f as c}from"./chunks/index.DdsibXGW.js";const D=`<template>\r
  <ClientOnly>\r
      <img\r
              v-lazyLoad="'https://picsum.photos/300/200'"\r
              class="custom-placeholder"\r
      />\r
  </ClientOnly>\r
</template>\r
\r
<script setup>\r
// 在全局样式或组件样式中定义\r
// eslint-disable-next-line no-unused-vars\r
const customPlaceholder =\r
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWVlZWVlIi8+Cjwvc3ZnPg==";\r
<\/script>\r
\r
<style>\r
.custom-placeholder {\r
  width: 300px;\r
  height: 200px;\r
  background: #f0f0f0;\r
}\r
</style>\r
`,A={class:"custom-placeholder"},f={__name:"Lazyload_2",setup(o){return(t,r)=>{const s=d("ClientOnly"),n=y("lazyLoad");return p(),u(s,null,{default:e(()=>[k(i("img",A,null,512),[[n,"https://picsum.photos/300/200"]])]),_:1})}}},x=`<template>\r
    <ClientOnly>\r
        <div class="scroll-container">\r
    <div v-for="i in 20" :key="i" class="list-item">\r
      <img\r
        v-lazyLoad="\`https://picsum.photos/200/200?random=\${i}\`"\r
        alt="示例图片"\r
        class="lazy-image"\r
      />\r
    </div>\r
  </div>\r
    </ClientOnly>\r
</template>\r
\r
<style>\r
.scroll-container {\r
  height: 400px;\r
  overflow: auto;\r
  border: 1px solid #eee;\r
}\r
.list-item {\r
  height: 250px;\r
  margin: 20px 0;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
}\r
.lazy-image {\r
  transition: opacity 0.3s;\r
  width: 200px;\r
  height: 200px;\r
  background: #f5f5f5;\r
}\r
.lazy-image[src] {\r
  opacity: 1;\r
}\r
</style>\r
`,_={},q={class:"scroll-container"},L={alt:"示例图片",class:"lazy-image"};function z(o,t){const r=d("ClientOnly"),s=y("lazyLoad");return p(),u(r,null,{default:e(()=>[i("div",q,[(p(),F(v,null,C(20,n=>i("div",{key:n,class:"list-item"},[k(i("img",L,null,512),[[s,`https://picsum.photos/200/200?random=${n}`]])])),64))])]),_:1})}const w=m(_,[["render",z]]),O=JSON.parse('{"title":"v-lazyLoad 图片懒加载指令","description":"","frontmatter":{},"headers":[],"relativePath":"components/lazyLoad/index.md","filePath":"components/lazyLoad/index.md"}'),P={name:"components/lazyLoad/index.md"},T=Object.assign(P,{setup(o){const t=b(!0);return(r,s)=>{const n=d("ClientOnly");return p(),F("div",null,[s[2]||(s[2]=i("h1",{id:"v-lazyload-图片懒加载指令",tabindex:"-1"},[h("v-lazyLoad 图片懒加载指令 "),i("a",{class:"header-anchor",href:"#v-lazyload-图片懒加载指令","aria-label":'Permalink to "v-lazyLoad 图片懒加载指令"'},"​")],-1)),s[3]||(s[3]=i("p",null,"用于实现图片的视口懒加载，优化页面加载性能。",-1)),s[4]||(s[4]=i("h2",{id:"基本用法",tabindex:"-1"},[h("基本用法 "),i("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),k(a(l(g),null,null,512),[[E,t.value]]),a(n,null,{default:e(()=>[a(l(c),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[0]||(s[0]=()=>{t.value=!1}),vueCode:l(x)},{vue:e(()=>[a(w)]),_:1},8,["vueCode"])]),_:1}),s[5]||(s[5]=i("h2",{id:"自定义配置",tabindex:"-1"},[h("自定义配置 "),i("a",{class:"header-anchor",href:"#自定义配置","aria-label":'Permalink to "自定义配置"'},"​")],-1)),s[6]||(s[6]=i("h3",{id:"自定义占位符",tabindex:"-1"},[h("自定义占位符 "),i("a",{class:"header-anchor",href:"#自定义占位符","aria-label":'Permalink to "自定义占位符"'},"​")],-1)),k(a(l(g),null,null,512),[[E,t.value]]),a(n,null,{default:e(()=>[a(l(c),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[1]||(s[1]=()=>{t.value=!1}),vueCode:l(D)},{vue:e(()=>[a(f)]),_:1},8,["vueCode"])]),_:1}),s[7]||(s[7]=B(`<h2 id="参数说明" tabindex="-1">参数说明 <a class="header-anchor" href="#参数说明" aria-label="Permalink to &quot;参数说明&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>必需</th></tr></thead><tbody><tr><td>value</td><td>图片实际加载地址</td><td>string</td><td>是</td></tr></tbody></table><h2 id="实现特性" tabindex="-1">实现特性 <a class="header-anchor" href="#实现特性" aria-label="Permalink to &quot;实现特性&quot;">​</a></h2><ol><li><p><strong>智能加载</strong></p><ul><li>使用 <code>IntersectionObserver</code> API 实现</li><li>自动处理滚动容器检测</li><li>支持任何包含滚动容器的布局</li></ul></li><li><p><strong>性能优化</strong></p><ul><li>默认使用 1x1 透明占位图</li><li>加载完成后自动解除观察</li><li>组件卸载自动清理资源</li></ul></li><li><p><strong>视觉过渡</strong></p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 推荐添加加载过渡效果 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  transition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: opacity </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">s</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ease</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  opacity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  opacity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li></ol><h2 id="最佳实践" tabindex="-1">最佳实践 <a class="header-anchor" href="#最佳实践" aria-label="Permalink to &quot;最佳实践&quot;">​</a></h2><h3 id="响应式图片处理" tabindex="-1">响应式图片处理 <a class="header-anchor" href="#响应式图片处理" aria-label="Permalink to &quot;响应式图片处理&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">picture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      v-lazyLoad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;\`/images/hero-1600.jpg\`&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      media</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;(min-width: 1200px)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">source</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      v-lazyLoad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;\`/images/hero-800.jpg\`&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      media</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;(min-width: 800px)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      v-lazyLoad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;\`/images/hero-400.jpg\`&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      alt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;响应式图片&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">picture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ol><li><p><strong>浏览器兼容性</strong></p><ul><li>需要 <a href="https://caniuse.com/intersectionobserver" target="_blank" rel="noreferrer">IntersectionObserver</a> 支持</li><li>对旧版浏览器需添加 polyfill：<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> intersection-observer</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// main.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;intersection-observer&#39;</span></span></code></pre></div></li></ul></li><li><p><strong>性能调优</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 可全局调整 IntersectionObserver 参数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> observer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IntersectionObserver</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(callback, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  rootMargin: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;0px 0px 200px 0px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 提前200px加载</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  threshold: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.01</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div></li><li><p><strong>SEO 优化</strong></p><ul><li>建议配合 <code>&lt;noscript&gt;</code> 使用：<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-lazyLoad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;imageUrl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">noscript</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;imageUrl&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> alt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;备用图片&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">noscript</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></li></ul></li></ol><h2 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LazyImageBinding</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DirectiveBinding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="扩展配置-修改源码" tabindex="-1">扩展配置（修改源码） <a class="header-anchor" href="#扩展配置-修改源码" aria-label="Permalink to &quot;扩展配置（修改源码）&quot;">​</a></h2><p>可通过修改指令源码实现以下扩展：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1. 自定义默认占位图</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DEFAULT_PLACEHOLDER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;你的默认占位图地址&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2. 添加加载失败处理</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">el.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onerror</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  el.src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/path/to/error-image.png&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3. 添加加载完成回调</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> loadHandler</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  el.classList.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;loaded&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">el.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;load&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, loadHandler)</span></span></code></pre></div>`,14))])}}});export{O as __pageData,T as default};
