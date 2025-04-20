import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext, mergeProps, ref, unref } from "vue";
import { ssrRenderComponent, ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin";
const TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzUEqual = '<template>\r\n  <YContainer>\r\n    <YAside width="200px">Aside</YAside>\r\n    <YContainer direction="column">\r\n      <YHeader>Header</YHeader>\r\n      <YMain>Main</YMain>\r\n      <YFooter>Footer</YFooter>\r\n    </YContainer>\r\n  </YContainer>\r\n</template>\r\n\r\n<script setup lang="ts"><\/script>\r\n\r\n<style scoped>\r\n.deep-header {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #c1ffc7;\r\n}\r\n\r\n.deep-aside {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  color: #303133;\r\n  background-color: rgb(216.8, 235.6, 255);\r\n}\r\n\r\n.deep-main {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #fffbec;\r\n  height: 150px;\r\n}\r\n\r\n.deep-footer {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #c1ffc7;\r\n}\r\n</style>\r\n';
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_YContainer = resolveComponent("YContainer");
  const _component_YAside = resolveComponent("YAside");
  const _component_YHeader = resolveComponent("YHeader");
  const _component_YMain = resolveComponent("YMain");
  const _component_YFooter = resolveComponent("YFooter");
  _push(ssrRenderComponent(_component_YContainer, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_YAside, { width: "200px" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Aside`);
            } else {
              return [
                createTextVNode("Aside")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_YContainer, { direction: "column" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_YHeader, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Header`);
                  } else {
                    return [
                      createTextVNode("Header")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_YMain, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Main`);
                  } else {
                    return [
                      createTextVNode("Main")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_YFooter, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Footer`);
                  } else {
                    return [
                      createTextVNode("Footer")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_YHeader, null, {
                  default: withCtx(() => [
                    createTextVNode("Header")
                  ]),
                  _: 1
                }),
                createVNode(_component_YMain, null, {
                  default: withCtx(() => [
                    createTextVNode("Main")
                  ]),
                  _: 1
                }),
                createVNode(_component_YFooter, null, {
                  default: withCtx(() => [
                    createTextVNode("Footer")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_YAside, { width: "200px" }, {
            default: withCtx(() => [
              createTextVNode("Aside")
            ]),
            _: 1
          }),
          createVNode(_component_YContainer, { direction: "column" }, {
            default: withCtx(() => [
              createVNode(_component_YHeader, null, {
                default: withCtx(() => [
                  createTextVNode("Header")
                ]),
                _: 1
              }),
              createVNode(_component_YMain, null, {
                default: withCtx(() => [
                  createTextVNode("Main")
                ]),
                _: 1
              }),
              createVNode(_component_YFooter, null, {
                default: withCtx(() => [
                  createTextVNode("Footer")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Container/Container_5.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzUEqual = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-2d6a7a31"]]);
const TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzQEqual = '<template>\r\n  <YContainer direction="column">\r\n    <YHeader>Header</YHeader>\r\n    <YContainer>\r\n      <YAside width="200px">Aside</YAside>\r\n      <YMain>Main</YMain>\r\n    </YContainer>\r\n  </YContainer>\r\n</template>\r\n\r\n<script setup lang="ts"><\/script>\r\n\r\n<style scoped>\r\n.deep-header {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #c1ffc7;\r\n}\r\n\r\n.deep-aside {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  color: #303133;\r\n  background-color: rgb(216.8, 235.6, 255);\r\n}\r\n\r\n.deep-main {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #fffbec;\r\n  height: 150px;\r\n}\r\n</style>\r\n';
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_YContainer = resolveComponent("YContainer");
  const _component_YHeader = resolveComponent("YHeader");
  const _component_YAside = resolveComponent("YAside");
  const _component_YMain = resolveComponent("YMain");
  _push(ssrRenderComponent(_component_YContainer, mergeProps({ direction: "column" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_YHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Header`);
            } else {
              return [
                createTextVNode("Header")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_YContainer, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_YAside, { width: "200px" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Aside`);
                  } else {
                    return [
                      createTextVNode("Aside")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_YMain, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Main`);
                  } else {
                    return [
                      createTextVNode("Main")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_YAside, { width: "200px" }, {
                  default: withCtx(() => [
                    createTextVNode("Aside")
                  ]),
                  _: 1
                }),
                createVNode(_component_YMain, null, {
                  default: withCtx(() => [
                    createTextVNode("Main")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_YHeader, null, {
            default: withCtx(() => [
              createTextVNode("Header")
            ]),
            _: 1
          }),
          createVNode(_component_YContainer, null, {
            default: withCtx(() => [
              createVNode(_component_YAside, { width: "200px" }, {
                default: withCtx(() => [
                  createTextVNode("Aside")
                ]),
                _: 1
              }),
              createVNode(_component_YMain, null, {
                default: withCtx(() => [
                  createTextVNode("Main")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Container/Container_4.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzQEqual = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-52c68f9f"]]);
const TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzMEqual = '<template>\r\n  <YContainer>\r\n    <YAside width="200px"> Aside </YAside>\r\n    <YMain>Main</YMain>\r\n    <YAside width="200px"> Aside </YAside>\r\n  </YContainer>\r\n</template>\r\n\r\n<script setup lang="ts"><\/script>\r\n\r\n<style scoped>\r\n.deep-aside {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #c1ffc7;\r\n}\r\n\r\n.deep-main {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #fffbec;\r\n  height: 150px;\r\n}\r\n</style>\r\n';
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_YContainer = resolveComponent("YContainer");
  const _component_YAside = resolveComponent("YAside");
  const _component_YMain = resolveComponent("YMain");
  _push(ssrRenderComponent(_component_YContainer, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_YAside, { width: "200px" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Aside `);
            } else {
              return [
                createTextVNode(" Aside ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_YMain, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Main`);
            } else {
              return [
                createTextVNode("Main")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_YAside, { width: "200px" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Aside `);
            } else {
              return [
                createTextVNode(" Aside ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_YAside, { width: "200px" }, {
            default: withCtx(() => [
              createTextVNode(" Aside ")
            ]),
            _: 1
          }),
          createVNode(_component_YMain, null, {
            default: withCtx(() => [
              createTextVNode("Main")
            ]),
            _: 1
          }),
          createVNode(_component_YAside, { width: "200px" }, {
            default: withCtx(() => [
              createTextVNode(" Aside ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Container/Container_3.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzMEqual = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-b71b3e1f"]]);
const TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzIEqual = '<template>\r\n  <YContainer direction="column">\r\n    <YHeader>Header</YHeader>\r\n    <YMain>Main</YMain>\r\n    <YFooter>Footer</YFooter>\r\n  </YContainer>\r\n</template>\r\n\r\n<style scoped>\r\n.deep-header {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #c1ffc7;\r\n}\r\n.deep-main {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #fffbec;\r\n  height: 150px;\r\n}\r\n\r\n.deep-footer {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #c1ffc7;\r\n}\r\n</style>\r\n';
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_YContainer = resolveComponent("YContainer");
  const _component_YHeader = resolveComponent("YHeader");
  const _component_YMain = resolveComponent("YMain");
  const _component_YFooter = resolveComponent("YFooter");
  _push(ssrRenderComponent(_component_YContainer, mergeProps({ direction: "column" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_YHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Header`);
            } else {
              return [
                createTextVNode("Header")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_YMain, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Main`);
            } else {
              return [
                createTextVNode("Main")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_YFooter, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Footer`);
            } else {
              return [
                createTextVNode("Footer")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_YHeader, null, {
            default: withCtx(() => [
              createTextVNode("Header")
            ]),
            _: 1
          }),
          createVNode(_component_YMain, null, {
            default: withCtx(() => [
              createTextVNode("Main")
            ]),
            _: 1
          }),
          createVNode(_component_YFooter, null, {
            default: withCtx(() => [
              createTextVNode("Footer")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Container/Container_2.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzIEqual = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-7f20a15b"]]);
const TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzEEqual = '<template>\r\n  <YContainer direction="column">\r\n    <YHeader>Header</YHeader>\r\n    <YMain>Main</YMain>\r\n  </YContainer>\r\n</template>\r\n\r\n<style scoped>\r\n.deep-header {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #c1ffc7;\r\n}\r\n.deep-main {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 180px;\r\n  background-color: #fffbec;\r\n}\r\n</style>\r\n';
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_YContainer = resolveComponent("YContainer");
  const _component_YHeader = resolveComponent("YHeader");
  const _component_YMain = resolveComponent("YMain");
  _push(ssrRenderComponent(_component_YContainer, mergeProps({ direction: "column" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_YHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Header`);
            } else {
              return [
                createTextVNode("Header")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_YMain, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Main`);
            } else {
              return [
                createTextVNode("Main")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_YHeader, null, {
            default: withCtx(() => [
              createTextVNode("Header")
            ]),
            _: 1
          }),
          createVNode(_component_YMain, null, {
            default: withCtx(() => [
              createTextVNode("Main")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Container/Container_1.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzEEqual = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-94588171"]]);
const __pageData = JSON.parse('{"title":"Container 布局容器组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/Container/index.md","filePath":"components/Container/index.md"}');
const __default__ = { name: "components/Container/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="container-布局容器组件" tabindex="-1">Container 布局容器组件 <a class="header-anchor" href="#container-布局容器组件" aria-label="Permalink to &quot;Container 布局容器组件&quot;">​</a></h1><p>用于布局的容器组件，方便快速搭建页面的基本结构：</p><p><code>&lt;el-container&gt;</code>：外层容器。 当子元素中包含 <code>&lt;el-header&gt;</code> 或 <code>&lt;el-footer&gt;</code> 时，全部子元素会垂直上下排列， 否则会水平左右排列。</p><p><code>&lt;el-header&gt;</code>：顶栏容器。</p><p><code>&lt;el-aside&gt;</code>：侧边栏容器。</p><p><code>&lt;el-main&gt;</code>：主要区域容器。</p><p><code>&lt;el-footer&gt;</code>：底栏容器。</p><h2 id="常见页面布局" tabindex="-1">常见页面布局 <a class="header-anchor" href="#常见页面布局" aria-label="Permalink to &quot;常见页面布局&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzEEqual)
            }, {
              vue: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzEEqual, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzEEqual)
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
                vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzEEqual)
              }, {
                vue: withCtx(() => [
                  createVNode(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzEEqual)
                ]),
                _: 1
              }, 8, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
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
              vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzIEqual)
            }, {
              vue: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzIEqual, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzIEqual)
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
                vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzIEqual)
              }, {
                vue: withCtx(() => [
                  createVNode(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzIEqual)
                ]),
                _: 1
              }, 8, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
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
              vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzMEqual)
            }, {
              vue: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzMEqual, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzMEqual)
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
                vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzMEqual)
              }, {
                vue: withCtx(() => [
                  createVNode(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzMEqual)
                ]),
                _: 1
              }, 8, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
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
              vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzQEqual)
            }, {
              vue: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzQEqual, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzQEqual)
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
                vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzQEqual)
              }, {
                vue: withCtx(() => [
                  createVNode(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzQEqual)
                ]),
                _: 1
              }, 8, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
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
              vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzUEqual)
            }, {
              vue: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzUEqual, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzUEqual)
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
                vueCode: unref(TempCodeVueTempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzUEqual)
              }, {
                vue: withCtx(() => [
                  createVNode(TempTUNvZGUteWV5a2J6LXVpLWRvY3MtY29tcG9uZW50cy1Db250YWluZXItQ29udGFpbmVyXzUEqual)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Container/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
