import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext, ref, unref, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin";
const TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1CdXR0b24tdGhyb290bGVEZW1v = '<template>\r\n  <div class="space-y-4">\r\n    <YButton :throttle="1000" @click="handleClick">1秒节流</YButton>\r\n    <YButton :throttle="2000" color="red" @click="handleClick">2秒节流</YButton>\r\n    <YButton :throttle="3000" color="green" plain @click="handleClick"\r\n      >3秒节流</YButton\r\n    >\r\n  </div>\r\n</template>\r\n\r\n<script setup>\r\nconst handleClick = () => {\r\n  console.log("有效点击:", new Date().toLocaleTimeString());\r\n};\r\n<\/script>\r\n';
const _sfc_main$3 = {
  __name: "throotleDemo",
  __ssrInlineRender: true,
  setup(__props) {
    const handleClick = () => {
      console.log("有效点击:", (/* @__PURE__ */ new Date()).toLocaleTimeString());
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_YButton = resolveComponent("YButton");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_YButton, {
        throttle: 1e3,
        onClick: handleClick
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`1秒节流`);
          } else {
            return [
              createTextVNode("1秒节流")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_YButton, {
        throttle: 2e3,
        color: "red",
        onClick: handleClick
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`2秒节流`);
          } else {
            return [
              createTextVNode("2秒节流")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_YButton, {
        throttle: 3e3,
        color: "green",
        plain: "",
        onClick: handleClick
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`3秒节流`);
          } else {
            return [
              createTextVNode("3秒节流")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button/throotleDemo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1CdXR0b24taWNvbkRlbW8Equal = '<template>\r\n  <div class="flex flex-row">\r\n    <YButton icon="edit" plain></YButton>\r\n    <YButton icon="delete" plain></YButton>\r\n    <YButton icon="share" plain></YButton>\r\n    <YButton round plain icon="search">搜索</YButton>\r\n  </div>\r\n</template>\r\n';
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_YButton = resolveComponent("YButton");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_YButton, {
    icon: "edit",
    plain: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_YButton, {
    icon: "delete",
    plain: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_YButton, {
    icon: "share",
    plain: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_YButton, {
    round: "",
    plain: "",
    icon: "search"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`搜索`);
      } else {
        return [
          createTextVNode("搜索")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button/iconDemo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1CdXR0b24taWNvbkRlbW8Equal = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1CdXR0b24tYmFzaWNEZW1v = '<template>\r\n  <div style="margin-bottom: 20px">\r\n    <YButton color="blue">主要按钮</YButton>\r\n    <YButton color="green">绿色按钮</YButton>\r\n    <YButton color="gray">灰色按钮</YButton>\r\n    <YButton color="yellow">黄色按钮</YButton>\r\n    <YButton color="red">红色按钮</YButton>\r\n  </div>\r\n  <div style="margin-bottom: 20px">\r\n    <YButton color="blue" plain>朴素按钮</YButton>\r\n    <YButton color="green" plain>绿色按钮</YButton>\r\n    <YButton color="gray" plain>灰色按钮</YButton>\r\n    <YButton color="yellow" plain>黄色按钮</YButton>\r\n    <YButton color="red" plain>红色按钮</YButton>\r\n  </div>\r\n  <div style="margin-bottom: 20px">\r\n    <YButton size="small" plain>小按钮</YButton>\r\n    <YButton size="medium" plain>中按钮</YButton>\r\n    <YButton size="large" plain>大按钮</YButton>\r\n  </div>\r\n  <div style="margin-bottom: 20px">\r\n    <YButton color="blue" round plain icon="search">搜索按钮</YButton>\r\n    <YButton color="green" round plain icon="edit">编辑按钮</YButton>\r\n    <YButton color="gray" round plain icon="check">成功按钮</YButton>\r\n    <YButton color="yellow" round plain icon="message">提示按钮</YButton>\r\n    <YButton color="red" round plain icon="delete">删除按钮</YButton>\r\n  </div>\r\n  <div style="margin-bottom: 20px">\r\n    <YButton color="blue" round plain icon="search"></YButton>\r\n    <YButton color="green" round plain icon="edit"></YButton>\r\n    <YButton color="gray" round plain icon="check"></YButton>\r\n    <YButton color="yellow" round plain icon="message"></YButton>\r\n    <YButton color="red" round plain icon="delete"></YButton>\r\n  </div>\r\n</template>\r\n';
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_YButton = resolveComponent("YButton");
  _push(`<!--[--><div style="${ssrRenderStyle({ "margin-bottom": "20px" })}">`);
  _push(ssrRenderComponent(_component_YButton, { color: "blue" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`主要按钮`);
      } else {
        return [
          createTextVNode("主要按钮")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_YButton, { color: "green" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`绿色按钮`);
      } else {
        return [
          createTextVNode("绿色按钮")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_YButton, { color: "gray" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`灰色按钮`);
      } else {
        return [
          createTextVNode("灰色按钮")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_YButton, { color: "yellow" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`黄色按钮`);
      } else {
        return [
          createTextVNode("黄色按钮")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_YButton, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`红色按钮`);
      } else {
        return [
          createTextVNode("红色按钮")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div style="${ssrRenderStyle({ "margin-bottom": "20px" })}">`);
  _push(ssrRenderComponent(_component_YButton, {
    color: "blue",
    plain: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`朴素按钮`);
      } else {
        return [
          createTextVNode("朴素按钮")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_YButton, {
    color: "green",
    plain: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`绿色按钮`);
      } else {
        return [
          createTextVNode("绿色按钮")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_YButton, {
    color: "gray",
    plain: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`灰色按钮`);
      } else {
        return [
          createTextVNode("灰色按钮")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_YButton, {
    color: "yellow",
    plain: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`黄色按钮`);
      } else {
        return [
          createTextVNode("黄色按钮")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_YButton, {
    color: "red",
    plain: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`红色按钮`);
      } else {
        return [
          createTextVNode("红色按钮")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div style="${ssrRenderStyle({ "margin-bottom": "20px" })}">`);
  _push(ssrRenderComponent(_component_YButton, {
    size: "small",
    plain: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`小按钮`);
      } else {
        return [
          createTextVNode("小按钮")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_YButton, {
    size: "medium",
    plain: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`中按钮`);
      } else {
        return [
          createTextVNode("中按钮")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_YButton, {
    size: "large",
    plain: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`大按钮`);
      } else {
        return [
          createTextVNode("大按钮")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div style="${ssrRenderStyle({ "margin-bottom": "20px" })}">`);
  _push(ssrRenderComponent(_component_YButton, {
    color: "blue",
    round: "",
    plain: "",
    icon: "search"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`搜索按钮`);
      } else {
        return [
          createTextVNode("搜索按钮")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_YButton, {
    color: "green",
    round: "",
    plain: "",
    icon: "edit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`编辑按钮`);
      } else {
        return [
          createTextVNode("编辑按钮")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_YButton, {
    color: "gray",
    round: "",
    plain: "",
    icon: "check"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`成功按钮`);
      } else {
        return [
          createTextVNode("成功按钮")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_YButton, {
    color: "yellow",
    round: "",
    plain: "",
    icon: "message"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`提示按钮`);
      } else {
        return [
          createTextVNode("提示按钮")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_YButton, {
    color: "red",
    round: "",
    plain: "",
    icon: "delete"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`删除按钮`);
      } else {
        return [
          createTextVNode("删除按钮")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div style="${ssrRenderStyle({ "margin-bottom": "20px" })}">`);
  _push(ssrRenderComponent(_component_YButton, {
    color: "blue",
    round: "",
    plain: "",
    icon: "search"
  }, null, _parent));
  _push(ssrRenderComponent(_component_YButton, {
    color: "green",
    round: "",
    plain: "",
    icon: "edit"
  }, null, _parent));
  _push(ssrRenderComponent(_component_YButton, {
    color: "gray",
    round: "",
    plain: "",
    icon: "check"
  }, null, _parent));
  _push(ssrRenderComponent(_component_YButton, {
    color: "yellow",
    round: "",
    plain: "",
    icon: "message"
  }, null, _parent));
  _push(ssrRenderComponent(_component_YButton, {
    color: "red",
    round: "",
    plain: "",
    icon: "delete"
  }, null, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button/basicDemo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1CdXR0b24tYmFzaWNEZW1v = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const __pageData = JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/Button/index.md","filePath":"components/Button/index.md"}');
const __default__ = { name: "components/Button/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="button-按钮" tabindex="-1">Button 按钮 <a class="header-anchor" href="#button-按钮" aria-label="Permalink to &quot;Button 按钮&quot;">​</a></h1><p>常用操作按钮</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>基础的函数用法</p><p>demo 使用<code>size</code>、<code>color</code>、<code>pain</code>、<code>round</code>属性来定义 Button 的样式。</p>`);
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
              vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1CdXR0b24tYmFzaWNEZW1v)
            }, {
              vue: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1CdXR0b24tYmFzaWNEZW1v, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1CdXR0b24tYmFzaWNEZW1v)
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
                vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1CdXR0b24tYmFzaWNEZW1v)
              }, {
                vue: withCtx(() => [
                  createVNode(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1CdXR0b24tYmFzaWNEZW1v)
                ]),
                _: 1
              }, 8, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="图标按钮" tabindex="-1">图标按钮 <a class="header-anchor" href="#图标按钮" aria-label="Permalink to &quot;图标按钮&quot;">​</a></h2><p>带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。</p><p>demo 设置 icon 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 i 标签即可，可以使用自定义图标。</p>`);
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
              vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1CdXR0b24taWNvbkRlbW8Equal)
            }, {
              vue: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1CdXR0b24taWNvbkRlbW8Equal, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1CdXR0b24taWNvbkRlbW8Equal)
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
                vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1CdXR0b24taWNvbkRlbW8Equal)
              }, {
                vue: withCtx(() => [
                  createVNode(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1CdXR0b24taWNvbkRlbW8Equal)
                ]),
                _: 1
              }, 8, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="节流按钮" tabindex="-1">节流按钮 <a class="header-anchor" href="#节流按钮" aria-label="Permalink to &quot;节流按钮&quot;">​</a></h2><p>防止频繁点击的节流按钮 demo 使用 <code>throttle</code> 属性设置节流时间（毫秒），默认 500ms</p>`);
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
              vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1CdXR0b24tdGhyb290bGVEZW1v)
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
                vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1CdXR0b24tdGhyb290bGVEZW1v)
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
