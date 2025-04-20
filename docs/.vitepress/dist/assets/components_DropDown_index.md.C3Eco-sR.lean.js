import{d as w,D as l,c as i,o as d,m as p,H as n,w as r,a,_,h as v,a3 as g,a4 as I,p as m}from"./chunks/framework.DKvZ6nfx.js";import{d as x,f as M}from"./chunks/index.X6-1k5Zo.js";const b=`<script setup lang="ts">\r
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
        <VerDropDownMenuItem disabled>Disabled Item</VerDropDownMenuItem>\r
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
`,h={class:"container"},Y={class:"menu-group"},C=w({__name:"DropDown",setup(u){const t=s=>{console.log("Selected:",s)};return(s,e)=>{const o=l("YDropDownMenuItem"),c=l("VerDropDownMenuItem"),D=l("YDropDownMenu");return d(),i("div",h,[p("div",Y,[n(D,null,{trigger:r(()=>e[2]||(e[2]=[p("span",null,"Click me",-1)])),default:r(()=>[n(o,{onSelect:e[0]||(e[0]=f=>t("Item 1"))},{default:r(()=>e[3]||(e[3]=[a(" Item 1 ")])),_:1}),n(o,{onSelect:e[1]||(e[1]=f=>t("Item 2"))},{default:r(()=>e[4]||(e[4]=[a(" Item 2 ")])),_:1}),n(c,{disabled:""},{default:r(()=>e[5]||(e[5]=[a("Disabled Item")])),_:1})]),_:1})])])}}}),V=_(C,[["__scopeId","data-v-ce99d788"]]),E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/DropDown/index.md","filePath":"components/DropDown/index.md"}'),y={name:"components/DropDown/index.md"},k=Object.assign(y,{setup(u){const t=v(!0);return(s,e)=>{const o=l("ClientOnly");return d(),i("div",null,[e[1]||(e[1]=p("p",null,"1",-1)),g(n(m(x),null,null,512),[[I,t.value]]),n(o,null,{default:r(()=>[n(m(M),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),vueCode:m(b)},{vue:r(()=>[n(V)]),_:1},8,["vueCode"])]),_:1})])}}});export{E as __pageData,k as default};
