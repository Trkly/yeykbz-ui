import{_ as f,D as o,b as g,o as i,w as l,m as t,H as s,a as r,c as k,h as b,a3 as m,a6 as C,a4 as c,p as n}from"./chunks/framework.DyjQ86ua.js";import{d as h,f as v}from"./chunks/index.GfJILXev.js";const y=`<template>\r
  <YCard>\r
    <template #image>\r
      <div class="bg-green-100 p-4 border-b">\r
        <div class="text-xl font-bold">项目进度</div>\r
      </div>\r
    </template>\r
    <div class="space-y-4">\r
      <div\r
        style="\r
          display: flex;\r
          justify-content: space-between;\r
          padding-left: 30px;\r
        "\r
      >\r
        <div class="font-bold" style="flex: 1">完成率</div>\r
        <div class="text-green-500" style="flex: 1">75%</div>\r
      </div>\r
      <div class="h-2 bg-gray-200 rounded-full">\r
        <div class="h-2 bg-green-500 rounded-full w-3/4"></div>\r
      </div>\r
      <div class="flex gap-2 mt-4">\r
        <YButton color="green"> 查看详情 </YButton>\r
        <YButton color="gray"> 暂停项目 </YButton>\r
      </div>\r
    </div>\r
    <template #footer>\r
      <div class="text-sm text-gray-500">下次同步时间：2小时后</div>\r
    </template>\r
  </YCard>\r
</template>\r
`,Y={},E={class:"space-y-4"},x={class:"flex gap-2 mt-4"};function D(p,e){const d=o("YButton"),a=o("YCard");return i(),g(a,null,{image:l(()=>e[0]||(e[0]=[t("div",{class:"bg-green-100 p-4 border-b"},[t("div",{class:"text-xl font-bold"},"项目进度")],-1)])),footer:l(()=>e[5]||(e[5]=[t("div",{class:"text-sm text-gray-500"},"下次同步时间：2小时后",-1)])),default:l(()=>[t("div",E,[e[3]||(e[3]=t("div",{style:{display:"flex","justify-content":"space-between","padding-left":"30px"}},[t("div",{class:"font-bold",style:{flex:"1"}},"完成率"),t("div",{class:"text-green-500",style:{flex:"1"}},"75%")],-1)),e[4]||(e[4]=t("div",{class:"h-2 bg-gray-200 rounded-full"},[t("div",{class:"h-2 bg-green-500 rounded-full w-3/4"})],-1)),t("div",x,[s(d,{color:"green"},{default:l(()=>e[1]||(e[1]=[r(" 查看详情 ")])),_:1}),s(d,{color:"gray"},{default:l(()=>e[2]||(e[2]=[r(" 暂停项目 ")])),_:1})])])]),_:1})}const B=f(Y,[["render",D]]),w=`<template>\r
  <div class="flex gap-4">\r
    <YCard shadow="always" class="w-1/3">\r
      <template #header>常驻阴影</template>\r
      <p>此卡片始终显示阴影效果</p>\r
    </YCard>\r
\r
    <YCard shadow="hover" class="w-1/3">\r
      <template #header>悬停阴影</template>\r
      <p>鼠标悬停时显示阴影</p>\r
    </YCard>\r
\r
    <YCard shadow="never" class="w-1/3">\r
      <template #header>无阴影模式</template>\r
      <p>始终不显示阴影</p>\r
    </YCard>\r
  </div>\r
</template>\r
`,A={},T={class:"flex gap-4"};function L(p,e){const d=o("YCard");return i(),k("div",T,[s(d,{shadow:"always",class:"w-1/3"},{header:l(()=>e[0]||(e[0]=[r("常驻阴影")])),default:l(()=>[e[1]||(e[1]=t("p",null,"此卡片始终显示阴影效果",-1))]),_:1}),s(d,{shadow:"hover",class:"w-1/3"},{header:l(()=>e[2]||(e[2]=[r("悬停阴影")])),default:l(()=>[e[3]||(e[3]=t("p",null,"鼠标悬停时显示阴影",-1))]),_:1}),s(d,{shadow:"never",class:"w-1/3"},{header:l(()=>e[4]||(e[4]=[r("无阴影模式")])),default:l(()=>[e[5]||(e[5]=t("p",null,"始终不显示阴影",-1))]),_:1})])}const U=f(A,[["render",L]]),W=`<template>\r
  <YCard\r
    :body-style="{\r
      backgroundColor: '#f0fdf4',\r
      color: '#14532d',\r
      padding: '2rem',\r
    }"\r
  >\r
    <template #header>环保提示</template>\r
    <div class="space-y-2">\r
      <p>♻️ 请做好垃圾分类</p>\r
      <p>🌳 节约用纸保护森林</p>\r
      <p>💧 合理使用水资源</p>\r
    </div>\r
  </YCard>\r
</template>\r
`,N={};function V(p,e){const d=o("YCard");return i(),g(d,{"body-style":{backgroundColor:"#f0fdf4",color:"#14532d",padding:"2rem"}},{header:l(()=>e[0]||(e[0]=[r("环保提示")])),default:l(()=>[e[1]||(e[1]=t("div",{class:"space-y-2"},[t("p",null,"♻️ 请做好垃圾分类"),t("p",null,"🌳 节约用纸保护森林"),t("p",null,"💧 合理使用水资源")],-1))]),_:1})}const q=f(N,[["render",V]]),_=`<template>\r
  <YCard shadow="hover">\r
    <template #image>\r
      <img\r
        src="https://picsum.photos/600/200"\r
        class="w-full h-48 object-cover"\r
        alt="示例图片"\r
      />\r
    </template>\r
    <template #header> 旅行日记 </template>\r
    <p class="text-gray-600 dark:text-gray-400">\r
      美丽的风景总是让人流连忘返，这张照片拍摄于阿尔卑斯山脉...\r
    </p>\r
  </YCard>\r
</template>\r
`,J={};function M(p,e){const d=o("YCard");return i(),g(d,{shadow:"hover"},{image:l(()=>e[0]||(e[0]=[t("img",{src:"https://picsum.photos/600/200",class:"w-full h-48 object-cover",alt:"示例图片"},null,-1)])),header:l(()=>e[1]||(e[1]=[r(" 旅行日记 ")])),default:l(()=>[e[2]||(e[2]=t("p",{class:"text-gray-600 dark:text-gray-400"}," 美丽的风景总是让人流连忘返，这张照片拍摄于阿尔卑斯山脉... ",-1))]),_:1})}const G=f(J,[["render",M]]),R=`<template>\r
  <YCard>\r
    <template #header>用户信息</template>\r
    <div class="flex flex-col gap-2">\r
      <p>姓名：张三</p>\r
      <p>年龄：28</p>\r
      <p>城市：北京</p>\r
    </div>\r
    <template #footer>最后更新：2023-07-20</template>\r
  </YCard>\r
</template>\r
`,X={};function Z(p,e){const d=o("YCard");return i(),g(d,null,{header:l(()=>e[0]||(e[0]=[r("用户信息")])),footer:l(()=>e[1]||(e[1]=[r("最后更新：2023-07-20")])),default:l(()=>[e[2]||(e[2]=t("div",{class:"flex flex-col gap-2"},[t("p",null,"姓名：张三"),t("p",null,"年龄：28"),t("p",null,"城市：北京")],-1))]),_:1})}const $=f(X,[["render",Z]]),F=JSON.parse('{"title":"Card 卡片组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/Card/index.md","filePath":"components/Card/index.md"}'),P={name:"components/Card/index.md"},O=Object.assign(P,{setup(p){const e=b(!0);return(d,a)=>{const u=o("ClientOnly");return i(),k("div",null,[a[5]||(a[5]=t("h1",{id:"card-卡片组件",tabindex:"-1"},[r("Card 卡片组件 "),t("a",{class:"header-anchor",href:"#card-卡片组件","aria-label":'Permalink to "Card 卡片组件"'},"​")],-1)),a[6]||(a[6]=t("p",null,"通用的内容容器组件，支持多种布局和交互效果。",-1)),a[7]||(a[7]=t("h2",{id:"基础卡片",tabindex:"-1"},[r("基础卡片 "),t("a",{class:"header-anchor",href:"#基础卡片","aria-label":'Permalink to "基础卡片"'},"​")],-1)),m(s(n(h),null,null,512),[[c,e.value]]),s(u,null,{default:l(()=>[s(n(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:a[0]||(a[0]=()=>{e.value=!1}),vueCode:n(R)},{vue:l(()=>[s($)]),_:1},8,["vueCode"])]),_:1}),a[8]||(a[8]=t("h2",{id:"带图片卡片",tabindex:"-1"},[r("带图片卡片 "),t("a",{class:"header-anchor",href:"#带图片卡片","aria-label":'Permalink to "带图片卡片"'},"​")],-1)),m(s(n(h),null,null,512),[[c,e.value]]),s(u,null,{default:l(()=>[s(n(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:a[1]||(a[1]=()=>{e.value=!1}),vueCode:n(_)},{vue:l(()=>[s(G)]),_:1},8,["vueCode"])]),_:1}),a[9]||(a[9]=t("h2",{id:"自定义样式卡片",tabindex:"-1"},[r("自定义样式卡片 "),t("a",{class:"header-anchor",href:"#自定义样式卡片","aria-label":'Permalink to "自定义样式卡片"'},"​")],-1)),m(s(n(h),null,null,512),[[c,e.value]]),s(u,null,{default:l(()=>[s(n(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:a[2]||(a[2]=()=>{e.value=!1}),vueCode:n(W)},{vue:l(()=>[s(q)]),_:1},8,["vueCode"])]),_:1}),a[10]||(a[10]=t("h2",{id:"交互式阴影卡片",tabindex:"-1"},[r("交互式阴影卡片 "),t("a",{class:"header-anchor",href:"#交互式阴影卡片","aria-label":'Permalink to "交互式阴影卡片"'},"​")],-1)),m(s(n(h),null,null,512),[[c,e.value]]),s(u,null,{default:l(()=>[s(n(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:a[3]||(a[3]=()=>{e.value=!1}),vueCode:n(w)},{vue:l(()=>[s(U)]),_:1},8,["vueCode"])]),_:1}),a[11]||(a[11]=t("h2",{id:"复杂布局卡片",tabindex:"-1"},[r("复杂布局卡片 "),t("a",{class:"header-anchor",href:"#复杂布局卡片","aria-label":'Permalink to "复杂布局卡片"'},"​")],-1)),m(s(n(h),null,null,512),[[c,e.value]]),s(u,null,{default:l(()=>[s(n(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:a[4]||(a[4]=()=>{e.value=!1}),vueCode:n(y)},{vue:l(()=>[s(B)]),_:1},8,["vueCode"])]),_:1}),a[12]||(a[12]=C(`<h2 id="组件特性说明" tabindex="-1">组件特性说明 <a class="header-anchor" href="#组件特性说明" aria-label="Permalink to &quot;组件特性说明&quot;">​</a></h2><ul><li>阴影模式：通过 <code>shadow</code> 属性控制阴影显示逻辑</li><li>灵活插槽：支持 <code>image</code>/<code>header</code>/<code>default</code>/<code>footer</code> 四个插槽</li><li>暗色模式：自动适配黑暗主题 (<code>dark</code>: 前缀样式)</li><li>响应式布局：默认使用 <code>flex</code> 布局</li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 基本结构示例 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">YCard</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> shadow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hover&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;template #image&gt;...&lt;/template&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;template #header&gt;...&lt;/template&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;!-- 默认内容 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;template #footer&gt;...&lt;/template&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">YCard</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,3))])}}});export{F as __pageData,O as default};
