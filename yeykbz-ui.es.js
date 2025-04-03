import { defineComponent, createVNode } from "vue";
const props = {
  // 新增
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
    slots
  }) {
    const size = {
      small: {
        x: "1",
        y: "1",
        text: "sm"
      },
      medium: {
        x: "2",
        y: "2",
        text: "base"
      },
      large: {
        x: "3",
        y: "2",
        text: "lg"
      }
    };
    return () => createVNode("button", {
      "class": `
          py-${size[props2.size].y}
          px-${size[props2.size].x}
          ${props2.round ? "rounded-full" : "rounded-lg"}
          bg-${props2.color}-${props2.plain ? "100" : "500"}
          hover:bg-${props2.color}-400
          border-${props2.color}-${props2.plain ? "500" : "500"}
          cursor-pointer
          border-solid
          text-${props2.plain ? props2.color + "-500" : "white-500"}
          text-${size[props2.size].text}
          hover:text-white
          transition duration-300 ease-in-out transform hover:scale-105
          mx-1
          `
    }, [props2.icon !== "" ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
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
    const shadowClass = {
      always: "shadow-md",
      hover: "shadow-none hover:hover:shadow-md",
      never: "shadow-none"
    }[props2.shadow];
    const hasHeader = !!slots.header;
    const hasFooter = !!slots.footer;
    const hasImage = !!slots.image;
    return () => {
      var _a, _b, _c, _d;
      return createVNode("div", {
        "class": [
          "rounded",
          "border",
          "border-gray-200",
          "bg-white",
          "dark:border-gray-700",
          "dark:bg-gray-800",
          shadowClass,
          "transition-shadow",
          "overflow-hidden"
          // 确保图片圆角不溢出
        ]
      }, [hasImage && createVNode("div", {
        "class": "border-b border-gray-200 dark:border-gray-700 felx-c"
      }, [(_a = slots.image) == null ? void 0 : _a.call(slots)]), hasHeader && createVNode("div", {
        "class": "border-b border-gray-200 dark:border-gray-700 p-4 flex-c"
      }, [(_b = slots.header) == null ? void 0 : _b.call(slots)]), createVNode("div", {
        "class": ["text-gray-700 dark:text-gray-300", hasHeader ? "" : "pt-4", hasFooter ? "" : "pb-4", "px-4", "flex-c"],
        "style": props2.bodyStyle
      }, [(_c = slots.default) == null ? void 0 : _c.call(slots)]), hasFooter && createVNode("div", {
        "class": "border-t border-gray-200 dark:border-gray-700 p-4 flex-c"
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
