import { defineComponent, ref } from "vue";
import type { PropType } from "vue";
import styles from "./Button.module.css";

export type ISize = "small" | "medium" | "large";
export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

export const props = {
  // 新增节流配置
  throttle: {
    type: Number,
    default: 500, // 默认 500 毫秒
  },
  size: {
    type: String as PropType<ISize>,
    default: "medium",
  },
  color: {
    type: String as PropType<IColor>,
    default: "blue",
  },
  round: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: "",
  },
} as const;

export default defineComponent({
  name: "YButton",
  props,
  setup(props, { slots, emit }) {
    // 新增节流状态
    const lastClickTime = ref(0);
    const isThrottling = ref(false);

    // 节流点击处理器
    const handleThrottledClick = (event: MouseEvent) => {
      const now = Date.now();

      if (now - lastClickTime.value < props.throttle) {
        // 节流期内点击
        if (!isThrottling.value) {
          isThrottling.value = true;
          setTimeout(
            () => {
              isThrottling.value = false;
            },
            props.throttle - (now - lastClickTime.value)
          );
        }
        return;
      }

      // 有效点击
      lastClickTime.value = now;
      emit("click", event);
    };

    // 原有样式逻辑保持不变...
    const getColorClass = () => {
      const classKey = props.plain
        ? `plain-${props.color}`
        : `color-${props.color}`;
      // 这里使用 styles[classKey] 来获取对应的样式类名
      return styles[classKey] || ""; // 防止undefined导致样式异常
    };

    return () => (
      <button
        class={[
          styles.base,
          styles[props.size],
          props.round ? styles.round : styles.square,
          getColorClass(),
          styles.hoverEffect,
          isThrottling.value ? styles.disabled : "", // 新增禁用状态样式
        ]}
        disabled={isThrottling.value}
        onClick={handleThrottledClick}
      >
        {props.icon && (
          <i class={`i-ic-baseline-${props.icon} ${styles.icon}`}></i>
        )}
        {slots.default?.()}
      </button>
    );
  },
});
