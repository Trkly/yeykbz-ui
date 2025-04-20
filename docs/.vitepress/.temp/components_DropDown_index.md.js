import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext, ref, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin";
const TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Ecm9wRG93bi1Ecm9wRG93bgEqualEqual = `<script setup lang="ts">\r
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
`;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DropDown",
  __ssrInlineRender: true,
  setup(__props) {
    const handleSelect = (value) => {
      console.log("Selected:", value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_YDropDownMenu = resolveComponent("YDropDownMenu");
      const _component_YDropDownMenuItem = resolveComponent("YDropDownMenuItem");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-1968468f><div class="menu-group" data-v-1968468f>`);
      _push(ssrRenderComponent(_component_YDropDownMenu, null, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-1968468f${_scopeId}>Click me</span>`);
          } else {
            return [
              createVNode("span", null, "Click me")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_YDropDownMenuItem, {
              onSelect: ($event) => handleSelect("Item 1")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Item 1 `);
                } else {
                  return [
                    createTextVNode(" Item 1 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_YDropDownMenuItem, {
              onSelect: ($event) => handleSelect("Item 2")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Item 2 `);
                } else {
                  return [
                    createTextVNode(" Item 2 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_YDropDownMenuItem, { disabled: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Disabled Item`);
                } else {
                  return [
                    createTextVNode("Disabled Item")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_YDropDownMenuItem, {
                onSelect: ($event) => handleSelect("Item 1")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Item 1 ")
                ]),
                _: 1
              }, 8, ["onSelect"]),
              createVNode(_component_YDropDownMenuItem, {
                onSelect: ($event) => handleSelect("Item 2")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Item 2 ")
                ]),
                _: 1
              }, 8, ["onSelect"]),
              createVNode(_component_YDropDownMenuItem, { disabled: "" }, {
                default: withCtx(() => [
                  createTextVNode("Disabled Item")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_YDropDownMenu, {
        placement: "top",
        class: "ml-4"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-1968468f${_scopeId}>Top DropDown</span>`);
          } else {
            return [
              createVNode("span", null, "Top DropDown")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_YDropDownMenuItem, {
              onSelect: ($event) => handleSelect("Top 1")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Top Item 1 `);
                } else {
                  return [
                    createTextVNode(" Top Item 1 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_YDropDownMenuItem, {
              onSelect: ($event) => handleSelect("Top 2")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Top Item 2 `);
                } else {
                  return [
                    createTextVNode(" Top Item 2 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_YDropDownMenuItem, {
                onSelect: ($event) => handleSelect("Top 1")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Top Item 1 ")
                ]),
                _: 1
              }, 8, ["onSelect"]),
              createVNode(_component_YDropDownMenuItem, {
                onSelect: ($event) => handleSelect("Top 2")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Top Item 2 ")
                ]),
                _: 1
              }, 8, ["onSelect"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_YDropDownMenu, {
        placement: "bottom-right",
        class: "ml-4"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-1968468f${_scopeId}>Bottom Right</span>`);
          } else {
            return [
              createVNode("span", null, "Bottom Right")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_YDropDownMenuItem, {
              onSelect: ($event) => handleSelect("BR 1")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Bottom Right 1 `);
                } else {
                  return [
                    createTextVNode(" Bottom Right 1 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_YDropDownMenuItem, {
              onSelect: ($event) => handleSelect("BR 2")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Bottom Right 2 `);
                } else {
                  return [
                    createTextVNode(" Bottom Right 2 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_YDropDownMenuItem, {
                onSelect: ($event) => handleSelect("BR 1")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Bottom Right 1 ")
                ]),
                _: 1
              }, 8, ["onSelect"]),
              createVNode(_component_YDropDownMenuItem, {
                onSelect: ($event) => handleSelect("BR 2")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Bottom Right 2 ")
                ]),
                _: 1
              }, 8, ["onSelect"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DropDown/DropDown.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Ecm9wRG93bi1Ecm9wRG93bgEqualEqual = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1968468f"]]);
const __pageData = JSON.parse('{"title":"DropDown 下拉菜单","description":"","frontmatter":{},"headers":[],"relativePath":"components/DropDown/index.md","filePath":"components/DropDown/index.md"}');
const __default__ = { name: "components/DropDown/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dropdown-下拉菜单" tabindex="-1">DropDown 下拉菜单 <a class="header-anchor" href="#dropdown-下拉菜单" aria-label="Permalink to &quot;DropDown 下拉菜单&quot;">​</a></h1><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Ecm9wRG93bi1Ecm9wRG93bgEqualEqual)
            }, {
              vue: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Ecm9wRG93bi1Ecm9wRG93bgEqualEqual, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Ecm9wRG93bi1Ecm9wRG93bgEqualEqual)
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
                vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Ecm9wRG93bi1Ecm9wRG93bgEqualEqual)
              }, {
                vue: withCtx(() => [
                  createVNode(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Ecm9wRG93bi1Ecm9wRG93bgEqualEqual)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DropDown/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
