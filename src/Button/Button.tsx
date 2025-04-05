import { defineComponent } from "vue";
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
  setup(props, { slots }) {
    // 动态类名映射
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
          styles[props.size], // 直接使用 size 映射
          props.round ? styles.round : styles.square,
          getColorClass(),
          styles.hoverEffect,
        ]}
      >
        {props.icon && (
          <i class={`i-ic-baseline-${props.icon} ${styles.icon}`}></i>
        )}
        {slots.default?.()}
      </button>
    );
  },
});
