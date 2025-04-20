import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext, mergeProps, ref, unref } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin";
const TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfNQEqualEqual = '<template>\r\n  <YCard>\r\n    <template #image>\r\n      <div class="bg-green-100 p-4 border-b">\r\n        <div class="text-xl font-bold">项目进度</div>\r\n      </div>\r\n    </template>\r\n    <div class="space-y-4">\r\n      <div\r\n        style="\r\n          display: flex;\r\n          justify-content: space-between;\r\n          padding-left: 30px;\r\n        "\r\n      >\r\n        <div class="font-bold" style="flex: 1">完成率</div>\r\n        <div class="text-green-500" style="flex: 1">75%</div>\r\n      </div>\r\n      <div class="h-2 bg-gray-200 rounded-full">\r\n        <div class="h-2 bg-green-500 rounded-full w-3/4"></div>\r\n      </div>\r\n      <div class="flex gap-2 mt-4">\r\n        <YButton color="green"> 查看详情 </YButton>\r\n        <YButton color="gray"> 暂停项目 </YButton>\r\n      </div>\r\n    </div>\r\n    <template #footer>\r\n      <div class="text-sm text-gray-500">下次同步时间：2小时后</div>\r\n    </template>\r\n  </YCard>\r\n</template>\r\n';
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_YCard = resolveComponent("YCard");
  const _component_YButton = resolveComponent("YButton");
  _push(ssrRenderComponent(_component_YCard, _attrs, {
    image: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="bg-green-100 p-4 border-b"${_scopeId}><div class="text-xl font-bold"${_scopeId}>项目进度</div></div>`);
      } else {
        return [
          createVNode("div", { class: "bg-green-100 p-4 border-b" }, [
            createVNode("div", { class: "text-xl font-bold" }, "项目进度")
          ])
        ];
      }
    }),
    footer: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="text-sm text-gray-500"${_scopeId}>下次同步时间：2小时后</div>`);
      } else {
        return [
          createVNode("div", { class: "text-sm text-gray-500" }, "下次同步时间：2小时后")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="space-y-4"${_scopeId}><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "space-between", "padding-left": "30px" })}"${_scopeId}><div class="font-bold" style="${ssrRenderStyle({ "flex": "1" })}"${_scopeId}>完成率</div><div class="text-green-500" style="${ssrRenderStyle({ "flex": "1" })}"${_scopeId}>75%</div></div><div class="h-2 bg-gray-200 rounded-full"${_scopeId}><div class="h-2 bg-green-500 rounded-full w-3/4"${_scopeId}></div></div><div class="flex gap-2 mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_YButton, { color: "green" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` 查看详情 `);
            } else {
              return [
                createTextVNode(" 查看详情 ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_YButton, { color: "gray" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` 暂停项目 `);
            } else {
              return [
                createTextVNode(" 暂停项目 ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "space-y-4" }, [
            createVNode("div", { style: { "display": "flex", "justify-content": "space-between", "padding-left": "30px" } }, [
              createVNode("div", {
                class: "font-bold",
                style: { "flex": "1" }
              }, "完成率"),
              createVNode("div", {
                class: "text-green-500",
                style: { "flex": "1" }
              }, "75%")
            ]),
            createVNode("div", { class: "h-2 bg-gray-200 rounded-full" }, [
              createVNode("div", { class: "h-2 bg-green-500 rounded-full w-3/4" })
            ]),
            createVNode("div", { class: "flex gap-2 mt-4" }, [
              createVNode(_component_YButton, { color: "green" }, {
                default: withCtx(() => [
                  createTextVNode(" 查看详情 ")
                ]),
                _: 1
              }),
              createVNode(_component_YButton, { color: "gray" }, {
                default: withCtx(() => [
                  createTextVNode(" 暂停项目 ")
                ]),
                _: 1
              })
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/Card_5.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfNQEqualEqual = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfNAEqualEqual = '<template>\r\n  <div class="flex gap-4">\r\n    <YCard shadow="always" class="w-1/3">\r\n      <template #header>常驻阴影</template>\r\n      <p>此卡片始终显示阴影效果</p>\r\n    </YCard>\r\n\r\n    <YCard shadow="hover" class="w-1/3">\r\n      <template #header>悬停阴影</template>\r\n      <p>鼠标悬停时显示阴影</p>\r\n    </YCard>\r\n\r\n    <YCard shadow="never" class="w-1/3">\r\n      <template #header>无阴影模式</template>\r\n      <p>始终不显示阴影</p>\r\n    </YCard>\r\n  </div>\r\n</template>\r\n';
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_YCard = resolveComponent("YCard");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-4" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_YCard, {
    shadow: "always",
    class: "w-1/3"
  }, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`常驻阴影`);
      } else {
        return [
          createTextVNode("常驻阴影")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>此卡片始终显示阴影效果</p>`);
      } else {
        return [
          createVNode("p", null, "此卡片始终显示阴影效果")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_YCard, {
    shadow: "hover",
    class: "w-1/3"
  }, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`悬停阴影`);
      } else {
        return [
          createTextVNode("悬停阴影")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>鼠标悬停时显示阴影</p>`);
      } else {
        return [
          createVNode("p", null, "鼠标悬停时显示阴影")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_YCard, {
    shadow: "never",
    class: "w-1/3"
  }, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`无阴影模式`);
      } else {
        return [
          createTextVNode("无阴影模式")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>始终不显示阴影</p>`);
      } else {
        return [
          createVNode("p", null, "始终不显示阴影")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/Card_4.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfNAEqualEqual = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfMwEqualEqual = `<template>\r
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
`;
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_YCard = resolveComponent("YCard");
  _push(ssrRenderComponent(_component_YCard, mergeProps({ "body-style": {
    backgroundColor: "#f0fdf4",
    color: "#14532d",
    padding: "2rem"
  } }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`环保提示`);
      } else {
        return [
          createTextVNode("环保提示")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="space-y-2"${_scopeId}><p${_scopeId}>♻️ 请做好垃圾分类</p><p${_scopeId}>🌳 节约用纸保护森林</p><p${_scopeId}>💧 合理使用水资源</p></div>`);
      } else {
        return [
          createVNode("div", { class: "space-y-2" }, [
            createVNode("p", null, "♻️ 请做好垃圾分类"),
            createVNode("p", null, "🌳 节约用纸保护森林"),
            createVNode("p", null, "💧 合理使用水资源")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/Card_3.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfMwEqualEqual = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfMgEqualEqual = '<template>\r\n  <YCard shadow="hover">\r\n    <template #image>\r\n      <img\r\n        src="https://picsum.photos/600/200"\r\n        class="w-full h-48 object-cover"\r\n        alt="示例图片"\r\n      />\r\n    </template>\r\n    <template #header> 旅行日记 </template>\r\n    <p class="text-gray-600 dark:text-gray-400">\r\n      美丽的风景总是让人流连忘返，这张照片拍摄于阿尔卑斯山脉...\r\n    </p>\r\n  </YCard>\r\n</template>\r\n';
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_YCard = resolveComponent("YCard");
  _push(ssrRenderComponent(_component_YCard, mergeProps({ shadow: "hover" }, _attrs), {
    image: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img src="https://picsum.photos/600/200" class="w-full h-48 object-cover" alt="示例图片"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: "https://picsum.photos/600/200",
            class: "w-full h-48 object-cover",
            alt: "示例图片"
          })
        ];
      }
    }),
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` 旅行日记 `);
      } else {
        return [
          createTextVNode(" 旅行日记 ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="text-gray-600 dark:text-gray-400"${_scopeId}> 美丽的风景总是让人流连忘返，这张照片拍摄于阿尔卑斯山脉... </p>`);
      } else {
        return [
          createVNode("p", { class: "text-gray-600 dark:text-gray-400" }, " 美丽的风景总是让人流连忘返，这张照片拍摄于阿尔卑斯山脉... ")
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/Card_2.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfMgEqualEqual = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfMQEqualEqual = '<template>\r\n  <YCard>\r\n    <template #header>用户信息</template>\r\n    <div class="flex flex-col gap-2">\r\n      <p>姓名：张三</p>\r\n      <p>年龄：28</p>\r\n      <p>城市：北京</p>\r\n    </div>\r\n    <template #footer>最后更新：2023-07-20</template>\r\n  </YCard>\r\n</template>\r\n';
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_YCard = resolveComponent("YCard");
  _push(ssrRenderComponent(_component_YCard, _attrs, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`用户信息`);
      } else {
        return [
          createTextVNode("用户信息")
        ];
      }
    }),
    footer: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`最后更新：2023-07-20`);
      } else {
        return [
          createTextVNode("最后更新：2023-07-20")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-col gap-2"${_scopeId}><p${_scopeId}>姓名：张三</p><p${_scopeId}>年龄：28</p><p${_scopeId}>城市：北京</p></div>`);
      } else {
        return [
          createVNode("div", { class: "flex flex-col gap-2" }, [
            createVNode("p", null, "姓名：张三"),
            createVNode("p", null, "年龄：28"),
            createVNode("p", null, "城市：北京")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/Card_1.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfMQEqualEqual = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const __pageData = JSON.parse('{"title":"Card 卡片组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/Card/index.md","filePath":"components/Card/index.md"}');
const __default__ = { name: "components/Card/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="card-卡片组件" tabindex="-1">Card 卡片组件 <a class="header-anchor" href="#card-卡片组件" aria-label="Permalink to &quot;Card 卡片组件&quot;">​</a></h1><p>通用的内容容器组件，支持多种布局和交互效果。</p><h2 id="基础卡片" tabindex="-1">基础卡片 <a class="header-anchor" href="#基础卡片" aria-label="Permalink to &quot;基础卡片&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfMQEqualEqual)
            }, {
              vue: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfMQEqualEqual, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfMQEqualEqual)
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
                vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfMQEqualEqual)
              }, {
                vue: withCtx(() => [
                  createVNode(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfMQEqualEqual)
                ]),
                _: 1
              }, 8, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="带图片卡片" tabindex="-1">带图片卡片 <a class="header-anchor" href="#带图片卡片" aria-label="Permalink to &quot;带图片卡片&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfMgEqualEqual)
            }, {
              vue: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfMgEqualEqual, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfMgEqualEqual)
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
                vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfMgEqualEqual)
              }, {
                vue: withCtx(() => [
                  createVNode(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfMgEqualEqual)
                ]),
                _: 1
              }, 8, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="自定义样式卡片" tabindex="-1">自定义样式卡片 <a class="header-anchor" href="#自定义样式卡片" aria-label="Permalink to &quot;自定义样式卡片&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfMwEqualEqual)
            }, {
              vue: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfMwEqualEqual, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfMwEqualEqual)
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
                vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfMwEqualEqual)
              }, {
                vue: withCtx(() => [
                  createVNode(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfMwEqualEqual)
                ]),
                _: 1
              }, 8, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="交互式阴影卡片" tabindex="-1">交互式阴影卡片 <a class="header-anchor" href="#交互式阴影卡片" aria-label="Permalink to &quot;交互式阴影卡片&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfNAEqualEqual)
            }, {
              vue: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfNAEqualEqual, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfNAEqualEqual)
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
                vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfNAEqualEqual)
              }, {
                vue: withCtx(() => [
                  createVNode(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfNAEqualEqual)
                ]),
                _: 1
              }, 8, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="复杂布局卡片" tabindex="-1">复杂布局卡片 <a class="header-anchor" href="#复杂布局卡片" aria-label="Permalink to &quot;复杂布局卡片&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfNQEqualEqual)
            }, {
              vue: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfNQEqualEqual, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfNQEqualEqual)
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
                vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfNQEqualEqual)
              }, {
                vue: withCtx(() => [
                  createVNode(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1DYXJkLUNhcmRfNQEqualEqual)
                ]),
                _: 1
              }, 8, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="组件特性说明" tabindex="-1">组件特性说明 <a class="header-anchor" href="#组件特性说明" aria-label="Permalink to &quot;组件特性说明&quot;">​</a></h2><ul><li>阴影模式：通过 <code>shadow</code> 属性控制阴影显示逻辑</li><li>灵活插槽：支持 <code>image</code>/<code>header</code>/<code>default</code>/<code>footer</code> 四个插槽</li><li>暗色模式：自动适配黑暗主题 (<code>dark</code>: 前缀样式)</li><li>响应式布局：默认使用 <code>flex</code> 布局</li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">&lt;!-- 基本结构示例 --&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">YCard</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> shadow</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;hover&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  &lt;template #image&gt;...&lt;/template&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  &lt;template #header&gt;...&lt;/template&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  &lt;!-- 默认内容 --&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  &lt;template #footer&gt;...&lt;/template&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">YCard</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span></code></pre></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
