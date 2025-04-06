import { defineComponent, ref, createVNode } from "vue";
const base = "y__base___bAyJg";
const small = "y__small___9friG";
const medium = "y__medium___I3XHU";
const large = "y__large___2P9WJ";
const round = "y__round___Tg26Q";
const square = "y__square___cTlVe";
const hoverEffect = "y__hoverEffect___gA9rr";
const icon = "y__icon___MzuXh";
const disabled = "y__disabled___-KtZ8";
const styles$1 = {
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
  disabled
};
const props = {
  // 新增节流配置
  throttle: {
    type: Number,
    default: 500
    // 默认 500 毫秒
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
};
const Button = /* @__PURE__ */ defineComponent({
  name: "YButton",
  props,
  setup(props2, {
    slots,
    emit
  }) {
    const lastClickTime = ref(0);
    const isThrottling = ref(false);
    const handleThrottledClick = (event) => {
      const now = Date.now();
      if (now - lastClickTime.value < props2.throttle) {
        if (!isThrottling.value) {
          isThrottling.value = true;
          setTimeout(() => {
            isThrottling.value = false;
          }, props2.throttle - (now - lastClickTime.value));
        }
        return;
      }
      lastClickTime.value = now;
      emit("click", event);
    };
    const getColorClass = () => {
      const classKey = props2.plain ? `plain-${props2.color}` : `color-${props2.color}`;
      return styles$1[classKey] || "";
    };
    return () => {
      var _a;
      return createVNode("button", {
        "class": [
          styles$1.base,
          styles$1[props2.size],
          props2.round ? styles$1.round : styles$1.square,
          getColorClass(),
          styles$1.hoverEffect,
          isThrottling.value ? styles$1.disabled : ""
          // 新增禁用状态样式
        ],
        "disabled": isThrottling.value,
        "onClick": handleThrottledClick
      }, [props2.icon && createVNode("i", {
        "class": `i-ic-baseline-${props2.icon} ${styles$1.icon}`
      }, null), (_a = slots.default) == null ? void 0 : _a.call(slots)]);
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
const YButton = withInstall(Button);
const cardBase = "y__cardBase___fwJUy";
const shadowAlways = "y__shadowAlways___XJdQQ";
const shadowHover = "y__shadowHover___I-Qe0";
const shadowNever = "y__shadowNever___mSIuf";
const borderSection = "y__borderSection___IrMWq";
const contentBase = "y__contentBase___tt6nA";
const contentNoHeader = "y__contentNoHeader___Wv-tR";
const contentNoFooter = "y__contentNoFooter___od9D9";
const flexCenter = "y__flexCenter___6RJzf";
const styles = {
  cardBase,
  shadowAlways,
  shadowHover,
  shadowNever,
  borderSection,
  contentBase,
  contentNoHeader,
  contentNoFooter,
  flexCenter
};
const Card = /* @__PURE__ */ defineComponent({
  name: "YCard",
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
  setup(props2, {
    slots
  }) {
    const shadowClassMap = {
      always: styles.shadowAlways,
      hover: styles.shadowHover,
      never: styles.shadowNever
    };
    const hasHeader = !!slots.header;
    const hasFooter = !!slots.footer;
    const hasImage = !!slots.image;
    return () => {
      var _a, _b, _c, _d;
      return createVNode("div", {
        "class": [styles.cardBase, shadowClassMap[props2.shadow]]
      }, [hasImage && createVNode("div", {
        "class": [styles.borderSection, styles.flexCenter, "border-b"]
      }, [(_a = slots.image) == null ? void 0 : _a.call(slots)]), hasHeader && createVNode("div", {
        "class": [styles.borderSection, "border-b p-4", styles.flexCenter]
      }, [(_b = slots.header) == null ? void 0 : _b.call(slots)]), createVNode("div", {
        "class": [styles.contentBase, !hasHeader && styles.contentNoHeader, !hasFooter && styles.contentNoFooter],
        "style": props2.bodyStyle
      }, [(_c = slots.default) == null ? void 0 : _c.call(slots)]), hasFooter && createVNode("div", {
        "class": [styles.borderSection, "border-t p-4", styles.flexCenter]
      }, [(_d = slots.footer) == null ? void 0 : _d.call(slots)])]);
    };
  }
});
const YCard = withInstall(Card);
const components = [YButton, YCard];
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
  YButton,
  YCard,
  YeykbzUI
};
//# sourceMappingURL=yeykbz-ui.es.js.map
