import{d as g,D as d,c as u,o as D,m as s,H as t,w as n,a as l,_ as f,h as c,a4 as v,a5 as I,p as i}from"./chunks/framework.5tjO0_U8.js";import{d as Y,f as M}from"./chunks/index.DdsibXGW.js";const b=`<script setup lang="ts">\r
const handleSelect = (value: string) => {\r
  console.log("Selected:", value);\r
};\r
<\/script>\r
\r
<template>\r
  <div class="container">\r
    <div class="menu-group">\r
      <!-- Bottom (Default) -->\r
      <YDropDownMenu>\r
        <template #trigger>\r
          <span>Click me</span>\r
        </template>\r
\r
        <YDropDownMenuItem @select="handleSelect('Item 1')">\r
          Item 1\r
        </YDropDownMenuItem>\r
        <YDropDownMenuItem @select="handleSelect('Item 2')">\r
          Item 2\r
        </YDropDownMenuItem>\r
        <YDropDownMenuItem disabled>Disabled Item</YDropDownMenuItem>\r
      </YDropDownMenu>\r
      <YDropDownMenu placement="top" class="ml-4">\r
        <template #trigger>\r
          <span>Top DropDown</span>\r
        </template>\r
\r
        <YDropDownMenuItem @select="handleSelect('Top 1')">\r
          Top Item 1\r
        </YDropDownMenuItem>\r
\r
        <YDropDownMenuItem @select="handleSelect('Top 2')">\r
          Top Item 2\r
        </YDropDownMenuItem>\r
      </YDropDownMenu>\r
\r
      <!-- Bottom Right -->\r
\r
      <YDropDownMenu placement="bottom-right" class="ml-4">\r
        <template #trigger> <span>Bottom Right</span> </template>\r
        <YDropDownMenuItem @select="handleSelect('BR 1')">\r
          Bottom Right 1\r
        </YDropDownMenuItem>\r
\r
        <YDropDownMenuItem @select="handleSelect('BR 2')">\r
          Bottom Right 2\r
        </YDropDownMenuItem>\r
      </YDropDownMenu>\r
    </div>\r
  </div>\r
</template>\r
\r
<style scoped>\r
.container {\r
  padding: 2rem;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 2rem;\r
}\r
\r
.header {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 0.5rem;\r
}\r
\r
.divider {\r
  height: 1px;\r
  background: #eee;\r
  width: 100%;\r
}\r
\r
.menu-group {\r
  display: flex;\r
  align-items: center;\r
  gap: 1.5rem;\r
  flex-wrap: wrap;\r
}\r
\r
h2 {\r
  margin: 0;\r
  font-size: 1.5rem;\r
  font-weight: 600;\r
}\r
\r
.ml-4 {\r
  margin-left: 1rem;\r
}\r
</style>\r
`,B={class:"container"},x={class:"menu-group"},S=g({__name:"DropDown",setup(w){const r=a=>{console.log("Selected:",a)};return(a,e)=>{const o=d("YDropDownMenuItem"),m=d("YDropDownMenu");return D(),u("div",B,[s("div",x,[t(m,null,{trigger:n(()=>e[6]||(e[6]=[s("span",null,"Click me",-1)])),default:n(()=>[t(o,{onSelect:e[0]||(e[0]=p=>r("Item 1"))},{default:n(()=>e[7]||(e[7]=[l(" Item 1 ")])),_:1}),t(o,{onSelect:e[1]||(e[1]=p=>r("Item 2"))},{default:n(()=>e[8]||(e[8]=[l(" Item 2 ")])),_:1}),t(o,{disabled:""},{default:n(()=>e[9]||(e[9]=[l("Disabled Item")])),_:1})]),_:1}),t(m,{placement:"top",class:"ml-4"},{trigger:n(()=>e[10]||(e[10]=[s("span",null,"Top DropDown",-1)])),default:n(()=>[t(o,{onSelect:e[2]||(e[2]=p=>r("Top 1"))},{default:n(()=>e[11]||(e[11]=[l(" Top Item 1 ")])),_:1}),t(o,{onSelect:e[3]||(e[3]=p=>r("Top 2"))},{default:n(()=>e[12]||(e[12]=[l(" Top Item 2 ")])),_:1})]),_:1}),t(m,{placement:"bottom-right",class:"ml-4"},{trigger:n(()=>e[13]||(e[13]=[s("span",null,"Bottom Right",-1)])),default:n(()=>[t(o,{onSelect:e[4]||(e[4]=p=>r("BR 1"))},{default:n(()=>e[14]||(e[14]=[l(" Bottom Right 1 ")])),_:1}),t(o,{onSelect:e[5]||(e[5]=p=>r("BR 2"))},{default:n(()=>e[15]||(e[15]=[l(" Bottom Right 2 ")])),_:1})]),_:1})])])}}}),T=f(S,[["__scopeId","data-v-1968468f"]]),C=JSON.parse('{"title":"DropDown 下拉菜单","description":"","frontmatter":{},"headers":[],"relativePath":"components/DropDown/index.md","filePath":"components/DropDown/index.md"}'),R={name:"components/DropDown/index.md"},y=Object.assign(R,{setup(w){const r=c(!0);return(a,e)=>{const o=d("ClientOnly");return D(),u("div",null,[e[1]||(e[1]=s("h1",{id:"dropdown-下拉菜单",tabindex:"-1"},[l("DropDown 下拉菜单 "),s("a",{class:"header-anchor",href:"#dropdown-下拉菜单","aria-label":'Permalink to "DropDown 下拉菜单"'},"​")],-1)),e[2]||(e[2]=s("h2",{id:"示例",tabindex:"-1"},[l("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例"'},"​")],-1)),v(t(i(Y),null,null,512),[[I,r.value]]),t(o,null,{default:n(()=>[t(i(M),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{r.value=!1}),vueCode:i(b)},{vue:n(()=>[t(T)]),_:1},8,["vueCode"])]),_:1})])}}});export{C as __pageData,y as default};
