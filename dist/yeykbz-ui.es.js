import { defineComponent, ref, computed, createElementBlock, openBlock, normalizeClass, unref, createCommentVNode, renderSlot, createElementVNode, normalizeStyle, watch, getCurrentScope, onScopeDispose, toValue, onMounted, onUnmounted, withDirectives, vShow } from "vue";
const base = "y__base___bAyJg";
const small = "y__small___9friG";
const medium = "y__medium___I3XHU";
const large = "y__large___2P9WJ";
const round = "y__round___Tg26Q";
const square = "y__square___cTlVe";
const hoverEffect = "y__hoverEffect___gA9rr";
const icon = "y__icon___MzuXh";
const disabled$1 = "y__disabled___-KtZ8";
const styles$8 = {
  base,
  small,
  medium,
  large,
  round,
  square,
  "color-black": "y__color-black___PSeUk",
  "plain-black": "y__plain-black___PVzRg",
  "color-gray": "y__color-gray___l9MOg",
  "plain-gray": "y__plain-gray___XoFOf",
  "color-red": "y__color-red___1mZ9N",
  "plain-red": "y__plain-red___-5EBl",
  "color-yellow": "y__color-yellow___9w-WI",
  "plain-yellow": "y__plain-yellow___pMe1u",
  "color-green": "y__color-green___DSFdi",
  "plain-green": "y__plain-green___gnnNf",
  "color-blue": "y__color-blue___picbf",
  "plain-blue": "y__plain-blue___lWAsn",
  "color-indigo": "y__color-indigo___lL-bB",
  "plain-indigo": "y__plain-indigo___OOwMy",
  "color-purple": "y__color-purple___5G5ZD",
  "plain-purple": "y__plain-purple___WXpDm",
  "color-pink": "y__color-pink___GHc42",
  "plain-pink": "y__plain-pink___IY4vm",
  hoverEffect,
  icon,
  disabled: disabled$1
};
const _hoisted_1$2 = ["disabled"];
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...{
    name: "YButton"
  },
  __name: "Button",
  props: {
    throttle: {
      type: Number,
      default: 500
    },
    size: {
      type: String,
      default: "medium"
    },
    color: {
      type: String,
      default: "blue"
    },
    round: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const lastClickTime = ref(0);
    const isThrottling = ref(false);
    const colorClass = computed(() => {
      const classKey = props.plain ? `plain-${props.color}` : `color-${props.color}`;
      return styles$8[classKey] || "";
    });
    const handleThrottledClick = (event) => {
      const now = Date.now();
      const timeSinceLastClick = now - lastClickTime.value;
      if (timeSinceLastClick < props.throttle) {
        if (!isThrottling.value) {
          isThrottling.value = true;
          setTimeout(() => {
            isThrottling.value = false;
          }, props.throttle - timeSinceLastClick);
        }
        return;
      }
      lastClickTime.value = now;
      emit("click", event);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass([
          "deep-button",
          unref(styles$8).base,
          unref(styles$8)[__props.size],
          __props.round ? unref(styles$8).round : unref(styles$8).square,
          colorClass.value,
          unref(styles$8).hoverEffect,
          isThrottling.value ? unref(styles$8).disabled : ""
        ]),
        disabled: isThrottling.value,
        onClick: handleThrottledClick
      }, [
        __props.icon ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: normalizeClass([`i-ic-baseline-${__props.icon}`, unref(styles$8).icon])
        }, null, 2)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1$2);
    };
  }
});
const withInstall = (comp) => {
  const c = comp;
  c.install = (app) => {
    if (!c.name || typeof c.name !== "string") {
      throw new Error("Component must have a valid name property");
    }
    app.component(c.name, c);
  };
  return c;
};
const YButton = withInstall(_sfc_main$8);
const cardBase = "y__cardBase___fwJUy";
const dark = "y__dark___uIxJ7";
const shadowAlways = "y__shadowAlways___XJdQQ";
const shadowHover = "y__shadowHover___I-Qe0";
const shadowNever = "y__shadowNever___mSIuf";
const borderSection = "y__borderSection___IrMWq";
const contentBase = "y__contentBase___tt6nA";
const contentNoHeader = "y__contentNoHeader___Wv-tR";
const contentNoFooter = "y__contentNoFooter___od9D9";
const flexCenter = "y__flexCenter___6RJzf";
const styles$7 = {
  cardBase,
  dark,
  shadowAlways,
  shadowHover,
  shadowNever,
  borderSection,
  contentBase,
  contentNoHeader,
  contentNoFooter,
  flexCenter
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...{
    name: "YCard"
  },
  __name: "Card",
  props: {
    shadow: {
      type: String,
      default: "always"
    },
    bodyStyle: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const capitalizedShadow = computed(() => {
      return props.shadow.charAt(0).toUpperCase() + props.shadow.slice(1);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(styles$7).cardBase, unref(styles$7)[`shadow${capitalizedShadow.value}`]])
      }, [
        _ctx.$slots.image ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(styles$7).borderSection, unref(styles$7).flexCenter, "border-b"])
        }, [
          renderSlot(_ctx.$slots, "image")
        ], 2)) : createCommentVNode("", true),
        _ctx.$slots.header ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([unref(styles$7).borderSection, "border-b p-4", unref(styles$7).flexCenter])
        }, [
          renderSlot(_ctx.$slots, "header")
        ], 2)) : createCommentVNode("", true),
        createElementVNode("div", {
          class: normalizeClass([
            unref(styles$7).contentBase,
            !_ctx.$slots.header && unref(styles$7).contentNoHeader,
            !_ctx.$slots.footer && unref(styles$7).contentNoFooter
          ]),
          style: normalizeStyle(__props.bodyStyle)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 6),
        _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass([unref(styles$7).borderSection, "border-t p-4", unref(styles$7).flexCenter])
        }, [
          renderSlot(_ctx.$slots, "footer")
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const YCard = withInstall(_sfc_main$7);
const aside = "y__aside___INsEk";
const styles$6 = {
  aside
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...{
    name: "YAside"
  },
  __name: "Aside",
  props: {
    width: { default: "300px" }
  },
  setup(__props) {
    const props = __props;
    const asideStyle = computed(() => ({
      width: props.width
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("aside", {
        class: normalizeClass(["deep-aside", unref(styles$6).aside]),
        style: normalizeStyle(asideStyle.value),
        role: "complementary",
        "aria-label": "侧边栏"
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
const YAside = withInstall(_sfc_main$6);
const header = "y__header___epQhq";
const styles$5 = {
  header
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...{ name: "YHeader" },
  __name: "Header",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("header", {
        class: normalizeClass(["deep-header", unref(styles$5).header])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const YHeader = withInstall(_sfc_main$5);
const styles$4 = {
  "vk-footer": "y__vk-footer___7zJVa"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...{ name: "YFooter" },
  __name: "Footer",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("footer", {
        class: normalizeClass(["deep-footer", unref(styles$4).footer])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const YFooter = withInstall(_sfc_main$4);
const main = "y__main___0PHCn";
const styles$3 = {
  main
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{ name: "YMain" },
  __name: "Main",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", {
        class: normalizeClass(["deep-main", unref(styles$3).main])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const YMain = withInstall(_sfc_main$3);
const container = "y__container___Fjb8H";
const styles$2 = {
  container
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{ name: "YContainer" },
  __name: "Container",
  props: {
    direction: { default: "row" }
  },
  setup(__props) {
    const props = __props;
    const style = {
      "flex-direction": props.direction
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: normalizeClass(["deep-container", unref(styles$2).container]),
        style
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const YContainer = withInstall(_sfc_main$2);
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
const isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
const isIOS = /* @__PURE__ */ getIsIOS();
function getIsIOS() {
  var _a, _b;
  return isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function watchImmediate(source, cb, options) {
  return watch(
    source,
    cb,
    {
      ...options,
      immediate: true
    }
  );
}
const defaultWindow = isClient ? window : void 0;
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
function useEventListener(...args) {
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options) => {
    el.addEventListener(event, listener, options);
    return () => el.removeEventListener(event, listener, options);
  };
  const firstParamTargets = computed(() => {
    const test = toArray(toValue(args[0])).filter((e) => e != null);
    return test.every((e) => typeof e !== "string") ? test : void 0;
  });
  const stopWatch = watchImmediate(
    () => {
      var _a, _b;
      return [
        (_b = (_a = firstParamTargets.value) == null ? void 0 : _a.map((e) => unrefElement(e))) != null ? _b : [defaultWindow].filter((e) => e != null),
        toArray(toValue(firstParamTargets.value ? args[1] : args[0])),
        toArray(unref(firstParamTargets.value ? args[2] : args[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        toValue(firstParamTargets.value ? args[3] : args[2])
      ];
    },
    ([raw_targets, raw_events, raw_listeners, raw_options]) => {
      cleanup();
      if (!(raw_targets == null ? void 0 : raw_targets.length) || !(raw_events == null ? void 0 : raw_events.length) || !(raw_listeners == null ? void 0 : raw_listeners.length))
        return;
      const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
      cleanups.push(
        ...raw_targets.flatMap(
          (el) => raw_events.flatMap(
            (event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone))
          )
        )
      );
    },
    { flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(cleanup);
  return stop;
}
let _iOSWorkaround = false;
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false, controls = false } = options;
  if (!window2) {
    return controls ? { stop: noop, cancel: noop, trigger: noop } : noop;
  }
  if (isIOS && !_iOSWorkaround) {
    _iOSWorkaround = true;
    const listenerOptions = { passive: true };
    Array.from(window2.document.body.children).forEach((el) => useEventListener(el, "click", noop, listenerOptions));
    useEventListener(window2.document.documentElement, "click", noop, listenerOptions);
  }
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return toValue(ignore).some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  function hasMultipleRoots(target2) {
    const vm = toValue(target2);
    return vm && vm.$.subTree.shapeFlag === 16;
  }
  function checkMultipleRoots(target2, event) {
    const vm = toValue(target2);
    const children = vm.$.subTree && vm.$.subTree.children;
    if (children == null || !Array.isArray(children))
      return false;
    return children.some((child) => child.el === event.target || event.composedPath().includes(child.el));
  }
  const listener = (event) => {
    const el = unrefElement(target);
    if (event.target == null)
      return;
    if (!(el instanceof Element) && hasMultipleRoots(target) && checkMultipleRoots(target, event))
      return;
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if ("detail" in event && event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  let isProcessingClick = false;
  const cleanup = [
    useEventListener(window2, "click", (event) => {
      if (!isProcessingClick) {
        isProcessingClick = true;
        setTimeout(() => {
          isProcessingClick = false;
        }, 0);
        listener(event);
      }
    }, { passive: true, capture }),
    useEventListener(window2, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
    }, { passive: true }),
    detectIframe && useEventListener(window2, "blur", (event) => {
      setTimeout(() => {
        var _a;
        const el = unrefElement(target);
        if (((_a = window2.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement))) {
          handler(event);
        }
      }, 0);
    }, { passive: true })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  if (controls) {
    return {
      stop,
      cancel: () => {
        shouldListen = false;
      },
      trigger: (event) => {
        shouldListen = true;
        listener(event);
        shouldListen = false;
      }
    };
  }
  return stop;
}
const bottom = "y__bottom___Kcmtw";
const top = "y__top___GEFAR";
const styles$1 = {
  "dropdown-container": "y__dropdown-container___---H4",
  "dropdown-trigger": "y__dropdown-trigger___zg5h8",
  "dropdown-content": "y__dropdown-content___M3tts",
  "is-open": "y__is-open___8-bFv",
  bottom,
  "bottom-right": "y__bottom-right___LUMHg",
  "bottom-left": "y__bottom-left___bMfq1",
  top,
  "top-right": "y__top-right___WXAP-",
  "top-left": "y__top-left___XI-hZ"
};
const _hoisted_1$1 = ["aria-expanded"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    name: "YDropDownMenu"
  },
  __name: "DropDownMenu",
  props: {
    placement: {}
  },
  emits: ["select"],
  setup(__props) {
    const props = __props;
    const dropdownRef = ref(null);
    const isOpen = ref(false);
    onClickOutside(dropdownRef, () => {
      isOpen.value = false;
    });
    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };
    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        isOpen.value = false;
      }
    };
    onMounted(() => {
      document.addEventListener("keydown", handleKeydown);
    });
    onUnmounted(() => {
      document.removeEventListener("keydown", handleKeydown);
    });
    const dropdownPositionClass = computed(() => {
      return props.placement || "bottom";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "dropdownRef",
        ref: dropdownRef,
        class: normalizeClass([
          "deep-drop-down",
          unref(styles$1)["dropdown-container"],
          { "is-open": isOpen.value }
        ])
      }, [
        createElementVNode("button", {
          class: normalizeClass([unref(styles$1)["dropdown-trigger"]]),
          "aria-haspopup": "true",
          "aria-expanded": isOpen.value,
          onClick: toggleDropdown
        }, [
          renderSlot(_ctx.$slots, "trigger")
        ], 10, _hoisted_1$1),
        withDirectives(createElementVNode("div", {
          class: normalizeClass([
            "deep-dropdown-content",
            unref(styles$1)["dropdown-content"],
            unref(styles$1)[dropdownPositionClass.value]
          ]),
          role: "menu",
          tabindex: "-1"
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2), [
          [vShow, isOpen.value]
        ])
      ], 2);
    };
  }
});
const YDropDownMenu = withInstall(
  _sfc_main$1
);
const disabled = "y__disabled___USo31";
const styles = {
  "dropdown-item": "y__dropdown-item___HVXk4",
  disabled
};
const _hoisted_1 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "DropDownMenuItem"
  },
  __name: "DropDownMenuItem",
  props: {
    disabled: { type: Boolean }
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const handleSelect = () => {
      if (!props.disabled) {
        emit("select");
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass([
          "deep-dropdown-menu-item",
          unref(styles)["dropdown - item"],
          { disabled: _ctx.disabled }
        ]),
        role: "menuitem",
        disabled: _ctx.disabled,
        onClick: handleSelect
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1);
    };
  }
});
const YDropDownMenuItem = withInstall(
  _sfc_main
);
const components = [
  YButton,
  YCard,
  YAside,
  YHeader,
  YFooter,
  YMain,
  YContainer,
  YDropDownMenu,
  YDropDownMenuItem
];
const install = (app) => {
  components.forEach((component) => {
    app.use(component);
  });
};
const YeykbzUI = {
  install,
  version: "__VERSION__"
};
export {
  YAside,
  YButton,
  YCard,
  YContainer,
  YDropDownMenu,
  YDropDownMenuItem,
  YFooter,
  YHeader,
  YMain,
  YeykbzUI
};
//# sourceMappingURL=yeykbz-ui.es.js.map
