import { defineComponent, resolveComponent, mergeProps, useSSRContext, ref, unref, withCtx, createVNode } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin";
const TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1UYWJsZS1UYWJsZV8z = '<template>\r\n  <YTable border :data="tableData" :columns="columns"></YTable>\r\n</template>\r\n\r\n<script setup lang="ts">\r\nconst tableData = [\r\n  {\r\n    key: "1",\r\n    name: "胡彦斌",\r\n    age: 32,\r\n    address: "西湖区湖底公园1号",\r\n  },\r\n  {\r\n    key: "2",\r\n    name: "胡彦祖",\r\n    age: 42,\r\n    address: "西湖区湖底公园1号",\r\n  },\r\n];\r\n\r\nconst columns = [\r\n  {\r\n    title: "姓名",\r\n    dataIndex: "name",\r\n    key: "name",\r\n  },\r\n  {\r\n    title: "年龄",\r\n    dataIndex: "age",\r\n    key: "age",\r\n  },\r\n  {\r\n    title: "住址",\r\n    dataIndex: "address",\r\n    key: "address",\r\n  },\r\n];\r\n<\/script>\r\n\r\n<style scoped></style>\r\n';
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Table_3",
  __ssrInlineRender: true,
  setup(__props) {
    const tableData = [
      {
        key: "1",
        name: "胡彦斌",
        age: 32,
        address: "西湖区湖底公园1号"
      },
      {
        key: "2",
        name: "胡彦祖",
        age: 42,
        address: "西湖区湖底公园1号"
      }
    ];
    const columns = [
      {
        title: "姓名",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "年龄",
        dataIndex: "age",
        key: "age"
      },
      {
        title: "住址",
        dataIndex: "address",
        key: "address"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_YTable = resolveComponent("YTable");
      _push(ssrRenderComponent(_component_YTable, mergeProps({
        border: "",
        data: tableData,
        columns
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Table/Table_3.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1UYWJsZS1UYWJsZV8y = '<template>\r\n  <YTable stripe :data="tableData" :columns="columns"></YTable>\r\n</template>\r\n\r\n<script setup lang="ts">\r\nconst tableData = [\r\n  {\r\n    key: "1",\r\n    name: "胡彦斌",\r\n    age: 32,\r\n    address: "西湖区湖底公园1号",\r\n  },\r\n  {\r\n    key: "2",\r\n    name: "胡彦祖",\r\n    age: 42,\r\n    address: "西湖区湖底公园1号",\r\n  },\r\n  {\r\n    key: "3",\r\n    name: "范冰冰",\r\n    age: 42,\r\n    address: "西湖区湖底公园1号",\r\n  },\r\n  {\r\n    key: "4",\r\n    name: "李冰冰",\r\n    age: 42,\r\n    address: "西湖区湖底公园1号",\r\n  },\r\n];\r\n\r\nconst columns = [\r\n  {\r\n    title: "姓名",\r\n    dataIndex: "name",\r\n    key: "name",\r\n  },\r\n  {\r\n    title: "年龄",\r\n    dataIndex: "age",\r\n    key: "age",\r\n  },\r\n  {\r\n    title: "住址",\r\n    dataIndex: "address",\r\n    key: "address",\r\n  },\r\n];\r\n<\/script>\r\n\r\n<style scoped></style>\r\n';
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Table_2",
  __ssrInlineRender: true,
  setup(__props) {
    const tableData = [
      {
        key: "1",
        name: "胡彦斌",
        age: 32,
        address: "西湖区湖底公园1号"
      },
      {
        key: "2",
        name: "胡彦祖",
        age: 42,
        address: "西湖区湖底公园1号"
      },
      {
        key: "3",
        name: "范冰冰",
        age: 42,
        address: "西湖区湖底公园1号"
      },
      {
        key: "4",
        name: "李冰冰",
        age: 42,
        address: "西湖区湖底公园1号"
      }
    ];
    const columns = [
      {
        title: "姓名",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "年龄",
        dataIndex: "age",
        key: "age"
      },
      {
        title: "住址",
        dataIndex: "address",
        key: "address"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_YTable = resolveComponent("YTable");
      _push(ssrRenderComponent(_component_YTable, mergeProps({
        stripe: "",
        data: tableData,
        columns
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Table/Table_2.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1UYWJsZS1UYWJsZV8x = '<template>\r\n  <YTable :data="tableData" :columns="columns" />\r\n</template>\r\n\r\n<script setup lang="ts">\r\nconst tableData = [\r\n  {\r\n    key: "1",\r\n    name: "胡彦斌",\r\n    age: 32,\r\n    address: "西湖区湖底公园1号",\r\n  },\r\n  {\r\n    key: "2",\r\n    name: "胡彦祖",\r\n    age: 42,\r\n    address: "西湖区湖底公园1号",\r\n  },\r\n];\r\n\r\nconst columns = [\r\n  {\r\n    title: "姓名",\r\n    dataIndex: "name",\r\n    key: "name",\r\n  },\r\n  {\r\n    title: "年龄",\r\n    dataIndex: "age",\r\n    key: "age",\r\n  },\r\n  {\r\n    title: "住址",\r\n    dataIndex: "address",\r\n    key: "address",\r\n  },\r\n];\r\n<\/script>\r\n\r\n<style scoped></style>\r\n';
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Table_1",
  __ssrInlineRender: true,
  setup(__props) {
    const tableData = [
      {
        key: "1",
        name: "胡彦斌",
        age: 32,
        address: "西湖区湖底公园1号"
      },
      {
        key: "2",
        name: "胡彦祖",
        age: 42,
        address: "西湖区湖底公园1号"
      }
    ];
    const columns = [
      {
        title: "姓名",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "年龄",
        dataIndex: "age",
        key: "age"
      },
      {
        title: "住址",
        dataIndex: "address",
        key: "address"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_YTable = resolveComponent("YTable");
      _push(ssrRenderComponent(_component_YTable, mergeProps({
        data: tableData,
        columns
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Table/Table_1.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __pageData = JSON.parse('{"title":"Table 表格","description":"","frontmatter":{},"headers":[],"relativePath":"components/Table/index.md","filePath":"components/Table/index.md"}');
const __default__ = { name: "components/Table/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="table-表格" tabindex="-1">Table 表格 <a class="header-anchor" href="#table-表格" aria-label="Permalink to &quot;Table 表格&quot;">​</a></h1><p>一个轻量级的数据表格组件，支持边框和斑马纹样式。</p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><p>通过 <code>data</code> 和 <code>columns</code> 属性配置表格数据：</p>`);
      _push(ssrRenderComponent(unref(VitepressDemoPlaceholder), {
        style: __placeholder_visible_key__.value ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VitepressDemoBox), {
              title: "",
              description: "",
              select: "vue",
              order: "vue,react,html",
              github: "",
              gitlab: "",
              theme: "",
              lightTheme: "",
              darkTheme: "",
              stackblitz: "%7B%22show%22%3Afalse%7D",
              codesandbox: "%7B%22show%22%3Afalse%7D",
              codeplayer: "%7B%22show%22%3Afalse%7D",
              files: "%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",
              scope: "",
              visible: true,
              onMount: () => {
                __placeholder_visible_key__.value = false;
              },
              vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1UYWJsZS1UYWJsZV8x)
            }, {
              vue: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VitepressDemoBox), {
                title: "",
                description: "",
                select: "vue",
                order: "vue,react,html",
                github: "",
                gitlab: "",
                theme: "",
                lightTheme: "",
                darkTheme: "",
                stackblitz: "%7B%22show%22%3Afalse%7D",
                codesandbox: "%7B%22show%22%3Afalse%7D",
                codeplayer: "%7B%22show%22%3Afalse%7D",
                files: "%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",
                scope: "",
                visible: true,
                onMount: () => {
                  __placeholder_visible_key__.value = false;
                },
                vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1UYWJsZS1UYWJsZV8x)
              }, {
                vue: withCtx(() => [
                  createVNode(_sfc_main$1)
                ]),
                _: 1
              }, 8, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="斑马纹表格" tabindex="-1">斑马纹表格 <a class="header-anchor" href="#斑马纹表格" aria-label="Permalink to &quot;斑马纹表格&quot;">​</a></h2><p>通过 <code>stripe</code> 属性添加斑马纹样式：</p>`);
      _push(ssrRenderComponent(unref(VitepressDemoPlaceholder), {
        style: __placeholder_visible_key__.value ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VitepressDemoBox), {
              title: "",
              description: "",
              select: "vue",
              order: "vue,react,html",
              github: "",
              gitlab: "",
              theme: "",
              lightTheme: "",
              darkTheme: "",
              stackblitz: "%7B%22show%22%3Afalse%7D",
              codesandbox: "%7B%22show%22%3Afalse%7D",
              codeplayer: "%7B%22show%22%3Afalse%7D",
              files: "%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",
              scope: "",
              visible: true,
              onMount: () => {
                __placeholder_visible_key__.value = false;
              },
              vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1UYWJsZS1UYWJsZV8y)
            }, {
              vue: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VitepressDemoBox), {
                title: "",
                description: "",
                select: "vue",
                order: "vue,react,html",
                github: "",
                gitlab: "",
                theme: "",
                lightTheme: "",
                darkTheme: "",
                stackblitz: "%7B%22show%22%3Afalse%7D",
                codesandbox: "%7B%22show%22%3Afalse%7D",
                codeplayer: "%7B%22show%22%3Afalse%7D",
                files: "%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",
                scope: "",
                visible: true,
                onMount: () => {
                  __placeholder_visible_key__.value = false;
                },
                vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1UYWJsZS1UYWJsZV8y)
              }, {
                vue: withCtx(() => [
                  createVNode(_sfc_main$2)
                ]),
                _: 1
              }, 8, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="带边框表格" tabindex="-1">带边框表格 <a class="header-anchor" href="#带边框表格" aria-label="Permalink to &quot;带边框表格&quot;">​</a></h2><p>通过 <code>border</code> 属性添加表格边框：</p>`);
      _push(ssrRenderComponent(unref(VitepressDemoPlaceholder), {
        style: __placeholder_visible_key__.value ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VitepressDemoBox), {
              title: "",
              description: "",
              select: "vue",
              order: "vue,react,html",
              github: "",
              gitlab: "",
              theme: "",
              lightTheme: "",
              darkTheme: "",
              stackblitz: "%7B%22show%22%3Afalse%7D",
              codesandbox: "%7B%22show%22%3Afalse%7D",
              codeplayer: "%7B%22show%22%3Afalse%7D",
              files: "%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",
              scope: "",
              visible: true,
              onMount: () => {
                __placeholder_visible_key__.value = false;
              },
              vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1UYWJsZS1UYWJsZV8z)
            }, {
              vue: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VitepressDemoBox), {
                title: "",
                description: "",
                select: "vue",
                order: "vue,react,html",
                github: "",
                gitlab: "",
                theme: "",
                lightTheme: "",
                darkTheme: "",
                stackblitz: "%7B%22show%22%3Afalse%7D",
                codesandbox: "%7B%22show%22%3Afalse%7D",
                codeplayer: "%7B%22show%22%3Afalse%7D",
                files: "%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",
                scope: "",
                visible: true,
                onMount: () => {
                  __placeholder_visible_key__.value = false;
                },
                vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1UYWJsZS1UYWJsZV8z)
              }, {
                vue: withCtx(() => [
                  createVNode(_sfc_main$3)
                ]),
                _: 1
              }, 8, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>表格数据</td><td><code>Array&lt;object&gt;</code></td><td><code>[]</code></td></tr><tr><td>columns</td><td>表格列配置</td><td><code>Array&lt;{title: string, dataIndex: string, key: string}&gt;</code></td><td><code>[]</code></td></tr><tr><td>border</td><td>是否显示边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>stripe</td><td>是否显示斑马纹</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h2 id="数据结构说明" tabindex="-1">数据结构说明 <a class="header-anchor" href="#数据结构说明" aria-label="Permalink to &quot;数据结构说明&quot;">​</a></h2><h3 id="data-数据格式" tabindex="-1">data 数据格式 <a class="header-anchor" href="#data-数据格式" aria-label="Permalink to &quot;data 数据格式&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">interface</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> TableData</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">  key</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;      </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">// 唯一标识</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  [</span><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">key</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">]</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> any</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> // 其他数据字段</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">}</span></span></code></pre></div><h3 id="columns-列配置" tabindex="-1">columns 列配置 <a class="header-anchor" href="#columns-列配置" aria-label="Permalink to &quot;columns 列配置&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">interface</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> TableColumn</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">  title</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;     </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">// 列标题</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">  dataIndex</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">; </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">// 对应 data 中的字段名</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">  key</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;       </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">// 唯一键值</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">}</span></span></code></pre></div><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ol><li>确保每个数据项的 <code>key</code> 值唯一</li><li><code>columns.dataIndex</code> 需要与 <code>data</code> 中的字段名匹配</li><li>组件不包含内置样式，需要自行添加表格样式（如间距、颜色等）</li></ol></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Table/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
