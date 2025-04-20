import{d as y,D as h,b,o as p,h as D,c as v,m as a,a3 as c,H as t,a6 as f,a as n,a4 as u,p as r,w as d}from"./chunks/framework.DyjQ86ua.js";import{d as m,f as g}from"./chunks/index.GfJILXev.js";const E=`<template>\r
  <YTable border :data="tableData" :columns="columns"></YTable>\r
</template>\r
\r
<script setup lang="ts">\r
const tableData = [\r
  {\r
    key: "1",\r
    name: "胡彦斌",\r
    age: 32,\r
    address: "西湖区湖底公园1号",\r
  },\r
  {\r
    key: "2",\r
    name: "胡彦祖",\r
    age: 42,\r
    address: "西湖区湖底公园1号",\r
  },\r
];\r
\r
const columns = [\r
  {\r
    title: "姓名",\r
    dataIndex: "name",\r
    key: "name",\r
  },\r
  {\r
    title: "年龄",\r
    dataIndex: "age",\r
    key: "age",\r
  },\r
  {\r
    title: "住址",\r
    dataIndex: "address",\r
    key: "address",\r
  },\r
];\r
<\/script>\r
\r
<style scoped></style>\r
`,x=y({__name:"Table_3",setup(k){const s=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园1号"}],l=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}];return(e,i)=>{const o=h("YTable");return p(),b(o,{border:"",data:s,columns:l})}}}),A=`<template>\r
  <YTable stripe :data="tableData" :columns="columns"></YTable>\r
</template>\r
\r
<script setup lang="ts">\r
const tableData = [\r
  {\r
    key: "1",\r
    name: "胡彦斌",\r
    age: 32,\r
    address: "西湖区湖底公园1号",\r
  },\r
  {\r
    key: "2",\r
    name: "胡彦祖",\r
    age: 42,\r
    address: "西湖区湖底公园1号",\r
  },\r
  {\r
    key: "3",\r
    name: "范冰冰",\r
    age: 42,\r
    address: "西湖区湖底公园1号",\r
  },\r
  {\r
    key: "4",\r
    name: "李冰冰",\r
    age: 42,\r
    address: "西湖区湖底公园1号",\r
  },\r
];\r
\r
const columns = [\r
  {\r
    title: "姓名",\r
    dataIndex: "name",\r
    key: "name",\r
  },\r
  {\r
    title: "年龄",\r
    dataIndex: "age",\r
    key: "age",\r
  },\r
  {\r
    title: "住址",\r
    dataIndex: "address",\r
    key: "address",\r
  },\r
];\r
<\/script>\r
\r
<style scoped></style>\r
`,C=y({__name:"Table_2",setup(k){const s=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园1号"},{key:"3",name:"范冰冰",age:42,address:"西湖区湖底公园1号"},{key:"4",name:"李冰冰",age:42,address:"西湖区湖底公园1号"}],l=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}];return(e,i)=>{const o=h("YTable");return p(),b(o,{stripe:"",data:s,columns:l})}}}),B=`<template>\r
  <YTable :data="tableData" :columns="columns" />\r
</template>\r
\r
<script setup lang="ts">\r
const tableData = [\r
  {\r
    key: "1",\r
    name: "胡彦斌",\r
    age: 32,\r
    address: "西湖区湖底公园1号",\r
  },\r
  {\r
    key: "2",\r
    name: "胡彦祖",\r
    age: 42,\r
    address: "西湖区湖底公园1号",\r
  },\r
];\r
\r
const columns = [\r
  {\r
    title: "姓名",\r
    dataIndex: "name",\r
    key: "name",\r
  },\r
  {\r
    title: "年龄",\r
    dataIndex: "age",\r
    key: "age",\r
  },\r
  {\r
    title: "住址",\r
    dataIndex: "address",\r
    key: "address",\r
  },\r
];\r
<\/script>\r
\r
<style scoped></style>\r
`,T=y({__name:"Table_1",setup(k){const s=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园1号"}],l=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}];return(e,i)=>{const o=h("YTable");return p(),b(o,{data:s,columns:l})}}}),I=JSON.parse('{"title":"Table 表格","description":"","frontmatter":{},"headers":[],"relativePath":"components/Table/index.md","filePath":"components/Table/index.md"}'),_={name:"components/Table/index.md"},V=Object.assign(_,{setup(k){const s=D(!0);return(l,e)=>{const i=h("ClientOnly");return p(),v("div",null,[e[3]||(e[3]=a("h1",{id:"table-表格",tabindex:"-1"},[n("Table 表格 "),a("a",{class:"header-anchor",href:"#table-表格","aria-label":'Permalink to "Table 表格"'},"​")],-1)),e[4]||(e[4]=a("p",null,"一个轻量级的数据表格组件，支持边框和斑马纹样式。",-1)),e[5]||(e[5]=a("h2",{id:"基本用法",tabindex:"-1"},[n("基本用法 "),a("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),e[6]||(e[6]=a("p",null,[n("通过 "),a("code",null,"data"),n(" 和 "),a("code",null,"columns"),n(" 属性配置表格数据：")],-1)),c(t(r(m),null,null,512),[[u,s.value]]),t(i,null,{default:d(()=>[t(r(g),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{s.value=!1}),vueCode:r(B)},{vue:d(()=>[t(T)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=a("h2",{id:"斑马纹表格",tabindex:"-1"},[n("斑马纹表格 "),a("a",{class:"header-anchor",href:"#斑马纹表格","aria-label":'Permalink to "斑马纹表格"'},"​")],-1)),e[8]||(e[8]=a("p",null,[n("通过 "),a("code",null,"stripe"),n(" 属性添加斑马纹样式：")],-1)),c(t(r(m),null,null,512),[[u,s.value]]),t(i,null,{default:d(()=>[t(r(g),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{s.value=!1}),vueCode:r(A)},{vue:d(()=>[t(C)]),_:1},8,["vueCode"])]),_:1}),e[9]||(e[9]=a("h2",{id:"带边框表格",tabindex:"-1"},[n("带边框表格 "),a("a",{class:"header-anchor",href:"#带边框表格","aria-label":'Permalink to "带边框表格"'},"​")],-1)),e[10]||(e[10]=a("p",null,[n("通过 "),a("code",null,"border"),n(" 属性添加表格边框：")],-1)),c(t(r(m),null,null,512),[[u,s.value]]),t(i,null,{default:d(()=>[t(r(g),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{s.value=!1}),vueCode:r(E)},{vue:d(()=>[t(x)]),_:1},8,["vueCode"])]),_:1}),e[11]||(e[11]=f(`<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>表格数据</td><td><code>Array&lt;object&gt;</code></td><td><code>[]</code></td></tr><tr><td>columns</td><td>表格列配置</td><td><code>Array&lt;{title: string, dataIndex: string, key: string}&gt;</code></td><td><code>[]</code></td></tr><tr><td>border</td><td>是否显示边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>stripe</td><td>是否显示斑马纹</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h2 id="数据结构说明" tabindex="-1">数据结构说明 <a class="header-anchor" href="#数据结构说明" aria-label="Permalink to &quot;数据结构说明&quot;">​</a></h2><h3 id="data-数据格式" tabindex="-1">data 数据格式 <a class="header-anchor" href="#data-数据格式" aria-label="Permalink to &quot;data 数据格式&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TableData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 唯一标识</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 其他数据字段</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="columns-列配置" tabindex="-1">columns 列配置 <a class="header-anchor" href="#columns-列配置" aria-label="Permalink to &quot;columns 列配置&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TableColumn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 列标题</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  dataIndex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 对应 data 中的字段名</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;       </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 唯一键值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ol><li>确保每个数据项的 <code>key</code> 值唯一</li><li><code>columns.dataIndex</code> 需要与 <code>data</code> 中的字段名匹配</li><li>组件不包含内置样式，需要自行添加表格样式（如间距、颜色等）</li></ol>`,9))])}}});export{I as __pageData,V as default};
