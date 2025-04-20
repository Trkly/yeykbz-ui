import { ref, resolveComponent, withCtx, createTextVNode, useSSRContext, unref, createVNode } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin";
const TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1SYWRpby1SYWRpb18z = '<template>\r\n  <YRadio v-model="groupValue" name="group1" label="A">选项A</YRadio>\r\n  <YRadio v-model="groupValue" name="group1" label="B">选项B</YRadio>\r\n</template>\r\n\r\n<script setup>\r\nimport { ref } from "vue";\r\nconst groupValue = ref("A");\r\n<\/script>\r\n';
const _sfc_main$3 = {
  __name: "Radio_3",
  __ssrInlineRender: true,
  setup(__props) {
    const groupValue = ref("A");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_YRadio = resolveComponent("YRadio");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_YRadio, {
        modelValue: groupValue.value,
        "onUpdate:modelValue": ($event) => groupValue.value = $event,
        name: "group1",
        label: "A"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`选项A`);
          } else {
            return [
              createTextVNode("选项A")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_YRadio, {
        modelValue: groupValue.value,
        "onUpdate:modelValue": ($event) => groupValue.value = $event,
        name: "group1",
        label: "B"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`选项B`);
          } else {
            return [
              createTextVNode("选项B")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Radio/Radio_3.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1SYWRpby1SYWRpb18y = '<template>\r\n  <YRadio v-model="value" label="1" disabled>禁用选项</YRadio>\r\n  <YRadio v-model="value" label="2">正常选项</YRadio>\r\n</template>\r\n\r\n<script setup>\r\nimport { ref } from "vue";\r\nconst value = ref("1");\r\n<\/script>\r\n';
const _sfc_main$2 = {
  __name: "Radio_2",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref("1");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_YRadio = resolveComponent("YRadio");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_YRadio, {
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        label: "1",
        disabled: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`禁用选项`);
          } else {
            return [
              createTextVNode("禁用选项")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_YRadio, {
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        label: "2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`正常选项`);
          } else {
            return [
              createTextVNode("正常选项")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Radio/Radio_2.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1SYWRpby1SYWRpb18x = '<template>\r\n  <YRadio v-model="value" label="1">选项1</YRadio>\r\n  <YRadio v-model="value" label="2">选项2</YRadio>\r\n</template>\r\n\r\n<script setup>\r\nimport { ref } from "vue";\r\nconst value = ref("1");\r\n<\/script>\r\n';
const _sfc_main$1 = {
  __name: "Radio_1",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref("1");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_YRadio = resolveComponent("YRadio");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_YRadio, {
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        label: "1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`选项1`);
          } else {
            return [
              createTextVNode("选项1")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_YRadio, {
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        label: "2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`选项2`);
          } else {
            return [
              createTextVNode("选项2")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Radio/Radio_1.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __pageData = JSON.parse('{"title":"YRadio","description":"","frontmatter":{},"headers":[],"relativePath":"components/Radio/index.md","filePath":"components/Radio/index.md"}');
const __default__ = { name: "components/Radio/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="yradio" tabindex="-1">YRadio <a class="header-anchor" href="#yradio" aria-label="Permalink to &quot;YRadio&quot;">​</a></h1><p>单选框组件，支持双向绑定、禁用状态和自定义样式。</p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1SYWRpby1SYWRpb18x)
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
                vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1SYWRpby1SYWRpb18x)
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
      _push(`<h2 id="禁用状态" tabindex="-1">禁用状态 <a class="header-anchor" href="#禁用状态" aria-label="Permalink to &quot;禁用状态&quot;">​</a></h2><p>使用 <code>disabled</code> 属性禁用单选框</p>`);
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
              vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1SYWRpby1SYWRpb18y)
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
                vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1SYWRpby1SYWRpb18y)
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
      _push(`<h2 id="组合使用" tabindex="-1">组合使用 <a class="header-anchor" href="#组合使用" aria-label="Permalink to &quot;组合使用&quot;">​</a></h2><p>单选框组需要配合相同的 <code>name</code> 属性实现互斥：</p>`);
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
              vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1SYWRpby1SYWRpb18z)
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
                vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1SYWRpby1SYWRpb18z)
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
      _push(`<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>绑定值</td><td>string/number/boolean</td><td>null</td></tr><tr><td>label</td><td>单选框的值</td><td>string/number/boolean</td><td>&quot;&quot;</td></tr><tr><td>name</td><td>原生name属性</td><td>string</td><td>&quot;&quot;</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>false</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义单选框标签内容</td></tr></tbody></table><h2 id="样式变量" tabindex="-1">样式变量 <a class="header-anchor" href="#样式变量" aria-label="Permalink to &quot;样式变量&quot;">​</a></h2><p>可以通过覆盖以下 CSS 变量自定义样式：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">:root</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">  --theme-primary-500</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">: </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">#409eff</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;  </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">/* 主色 */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">  --vk-primary-500</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">: </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">#409eff</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;     </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">/* 备用主色 */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">}</span></span></code></pre></div><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ol><li><code>label</code> 属性需要与 <code>modelValue</code> 类型一致</li><li>禁用状态下不会触发状态变更</li><li>组合使用时需要保持相同的 <code>name</code> 属性</li><li>自定义样式时建议通过覆盖 CSS 变量实现</li></ol><h2 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">interface</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> RadioProps</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">  /** 绑定值 */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">  modelValue</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> |</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> number</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> |</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> boolean</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> |</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> null</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">  /** 单选框值 */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">  label</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> |</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> number</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> |</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> boolean</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">  /** 原生name属性 */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">  name</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">  /** 禁用状态 */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">  disabled</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> boolean</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">}</span></span></code></pre></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Radio/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
