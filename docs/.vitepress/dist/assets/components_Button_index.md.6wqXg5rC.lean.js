import{D as d,c as s,o as p,H as o,w as e,a as l,_ as f,m as i,F as b,h as g,a5 as y,a3 as m,a4 as B,p as u}from"./chunks/framework.DKvZ6nfx.js";import{d as Y,f as v}from"./chunks/index.X6-1k5Zo.js";const x=`<template>\r
  <div class="space-y-4">\r
    <YButton :throttle="1000" @click="handleClick">1秒节流</YButton>\r
    <YButton :throttle="2000" color="red" @click="handleClick">2秒节流</YButton>\r
    <YButton :throttle="3000" color="green" plain @click="handleClick"\r
      >3秒节流</YButton\r
    >\r
  </div>\r
</template>\r
\r
<script setup>\r
const handleClick = () => {\r
  console.log("有效点击:", new Date().toLocaleTimeString());\r
};\r
<\/script>\r
`,C={class:"space-y-4"},h={__name:"throotleDemo",setup(c){const t=()=>{console.log("有效点击:",new Date().toLocaleTimeString())};return(n,r)=>{const a=d("YButton");return p(),s("div",C,[o(a,{throttle:1e3,onClick:t},{default:e(()=>r[0]||(r[0]=[l("1秒节流")])),_:1}),o(a,{throttle:2e3,color:"red",onClick:t},{default:e(()=>r[1]||(r[1]=[l("2秒节流")])),_:1}),o(a,{throttle:3e3,color:"green",plain:"",onClick:t},{default:e(()=>r[2]||(r[2]=[l("3秒节流")])),_:1})])}}},k=`<template>\r
  <div class="flex flex-row">\r
    <YButton icon="edit" plain></YButton>\r
    <YButton icon="delete" plain></YButton>\r
    <YButton icon="share" plain></YButton>\r
    <YButton round plain icon="search">搜索</YButton>\r
  </div>\r
</template>\r
`,_={},D={class:"flex flex-row"};function w(c,t){const n=d("YButton");return p(),s("div",D,[o(n,{icon:"edit",plain:""}),o(n,{icon:"delete",plain:""}),o(n,{icon:"share",plain:""}),o(n,{round:"",plain:"",icon:"search"},{default:e(()=>t[0]||(t[0]=[l("搜索")])),_:1})])}const W=f(_,[["render",w]]),T=`<template>\r
  <div style="margin-bottom: 20px">\r
    <YButton color="blue">主要按钮</YButton>\r
    <YButton color="green">绿色按钮</YButton>\r
    <YButton color="gray">灰色按钮</YButton>\r
    <YButton color="yellow">黄色按钮</YButton>\r
    <YButton color="red">红色按钮</YButton>\r
  </div>\r
  <div style="margin-bottom: 20px">\r
    <YButton color="blue" plain>朴素按钮</YButton>\r
    <YButton color="green" plain>绿色按钮</YButton>\r
    <YButton color="gray" plain>灰色按钮</YButton>\r
    <YButton color="yellow" plain>黄色按钮</YButton>\r
    <YButton color="red" plain>红色按钮</YButton>\r
  </div>\r
  <div style="margin-bottom: 20px">\r
    <YButton size="small" plain>小按钮</YButton>\r
    <YButton size="medium" plain>中按钮</YButton>\r
    <YButton size="large" plain>大按钮</YButton>\r
  </div>\r
  <div style="margin-bottom: 20px">\r
    <YButton color="blue" round plain icon="search">搜索按钮</YButton>\r
    <YButton color="green" round plain icon="edit">编辑按钮</YButton>\r
    <YButton color="gray" round plain icon="check">成功按钮</YButton>\r
    <YButton color="yellow" round plain icon="message">提示按钮</YButton>\r
    <YButton color="red" round plain icon="delete">删除按钮</YButton>\r
  </div>\r
  <div style="margin-bottom: 20px">\r
    <YButton color="blue" round plain icon="search"></YButton>\r
    <YButton color="green" round plain icon="edit"></YButton>\r
    <YButton color="gray" round plain icon="check"></YButton>\r
    <YButton color="yellow" round plain icon="message"></YButton>\r
    <YButton color="red" round plain icon="delete"></YButton>\r
  </div>\r
</template>\r
`,A={},V={style:{"margin-bottom":"20px"}},N={style:{"margin-bottom":"20px"}},Z={style:{"margin-bottom":"20px"}},z={style:{"margin-bottom":"20px"}},G={style:{"margin-bottom":"20px"}};function L(c,t){const n=d("YButton");return p(),s(b,null,[i("div",V,[o(n,{color:"blue"},{default:e(()=>t[0]||(t[0]=[l("主要按钮")])),_:1}),o(n,{color:"green"},{default:e(()=>t[1]||(t[1]=[l("绿色按钮")])),_:1}),o(n,{color:"gray"},{default:e(()=>t[2]||(t[2]=[l("灰色按钮")])),_:1}),o(n,{color:"yellow"},{default:e(()=>t[3]||(t[3]=[l("黄色按钮")])),_:1}),o(n,{color:"red"},{default:e(()=>t[4]||(t[4]=[l("红色按钮")])),_:1})]),i("div",N,[o(n,{color:"blue",plain:""},{default:e(()=>t[5]||(t[5]=[l("朴素按钮")])),_:1}),o(n,{color:"green",plain:""},{default:e(()=>t[6]||(t[6]=[l("绿色按钮")])),_:1}),o(n,{color:"gray",plain:""},{default:e(()=>t[7]||(t[7]=[l("灰色按钮")])),_:1}),o(n,{color:"yellow",plain:""},{default:e(()=>t[8]||(t[8]=[l("黄色按钮")])),_:1}),o(n,{color:"red",plain:""},{default:e(()=>t[9]||(t[9]=[l("红色按钮")])),_:1})]),i("div",Z,[o(n,{size:"small",plain:""},{default:e(()=>t[10]||(t[10]=[l("小按钮")])),_:1}),o(n,{size:"medium",plain:""},{default:e(()=>t[11]||(t[11]=[l("中按钮")])),_:1}),o(n,{size:"large",plain:""},{default:e(()=>t[12]||(t[12]=[l("大按钮")])),_:1})]),i("div",z,[o(n,{color:"blue",round:"",plain:"",icon:"search"},{default:e(()=>t[13]||(t[13]=[l("搜索按钮")])),_:1}),o(n,{color:"green",round:"",plain:"",icon:"edit"},{default:e(()=>t[14]||(t[14]=[l("编辑按钮")])),_:1}),o(n,{color:"gray",round:"",plain:"",icon:"check"},{default:e(()=>t[15]||(t[15]=[l("成功按钮")])),_:1}),o(n,{color:"yellow",round:"",plain:"",icon:"message"},{default:e(()=>t[16]||(t[16]=[l("提示按钮")])),_:1}),o(n,{color:"red",round:"",plain:"",icon:"delete"},{default:e(()=>t[17]||(t[17]=[l("删除按钮")])),_:1})]),i("div",G,[o(n,{color:"blue",round:"",plain:"",icon:"search"}),o(n,{color:"green",round:"",plain:"",icon:"edit"}),o(n,{color:"gray",round:"",plain:"",icon:"check"}),o(n,{color:"yellow",round:"",plain:"",icon:"message"}),o(n,{color:"red",round:"",plain:"",icon:"delete"})])],64)}const R=f(A,[["render",L]]),E=JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/Button/index.md","filePath":"components/Button/index.md"}'),U={name:"components/Button/index.md"},q=Object.assign(U,{setup(c){const t=g(!0);return(n,r)=>{const a=d("ClientOnly");return p(),s("div",null,[r[3]||(r[3]=y('<h1 id="button-按钮" tabindex="-1">Button 按钮 <a class="header-anchor" href="#button-按钮" aria-label="Permalink to &quot;Button 按钮&quot;">​</a></h1><p>常用操作按钮</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>基础的函数用法</p><p>demo 使用<code>size</code>、<code>color</code>、<code>pain</code>、<code>round</code>属性来定义 Button 的样式。</p>',5)),m(o(u(Y),null,null,512),[[B,t.value]]),o(a,null,{default:e(()=>[o(u(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:r[0]||(r[0]=()=>{t.value=!1}),vueCode:u(T)},{vue:e(()=>[o(R)]),_:1},8,["vueCode"])]),_:1}),r[4]||(r[4]=i("h2",{id:"图标按钮",tabindex:"-1"},[l("图标按钮 "),i("a",{class:"header-anchor",href:"#图标按钮","aria-label":'Permalink to "图标按钮"'},"​")],-1)),r[5]||(r[5]=i("p",null,"带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。",-1)),r[6]||(r[6]=i("p",null,"demo 设置 icon 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 i 标签即可，可以使用自定义图标。",-1)),m(o(u(Y),null,null,512),[[B,t.value]]),o(a,null,{default:e(()=>[o(u(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:r[1]||(r[1]=()=>{t.value=!1}),vueCode:u(k)},{vue:e(()=>[o(W)]),_:1},8,["vueCode"])]),_:1}),r[7]||(r[7]=i("h2",{id:"节流按钮",tabindex:"-1"},[l("节流按钮 "),i("a",{class:"header-anchor",href:"#节流按钮","aria-label":'Permalink to "节流按钮"'},"​")],-1)),r[8]||(r[8]=i("p",null,[l("防止频繁点击的节流按钮 demo 使用 "),i("code",null,"throttle"),l(" 属性设置节流时间（毫秒），默认 500ms")],-1)),m(o(u(Y),null,null,512),[[B,t.value]]),o(a,null,{default:e(()=>[o(u(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:r[2]||(r[2]=()=>{t.value=!1}),vueCode:u(x)},{vue:e(()=>[o(h)]),_:1},8,["vueCode"])]),_:1})])}}});export{E as __pageData,q as default};
