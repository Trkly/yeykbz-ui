import { defineComponent } from "vue";
import type { PropType } from "vue";
import styles from "./Card.module.css"; // 导入 CSS Modules

export default defineComponent({
  name: "YCard",
  props: {
    shadow: {
      type: String as PropType<"always" | "hover" | "never">,
      default: "always",
    },
    bodyStyle: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { slots }) {
    // 动态阴影类映射
    const shadowClassMap = {
      always: styles.shadowAlways,
      hover: styles.shadowHover,
      never: styles.shadowNever,
    };

    // 插槽存在性判断
    const hasHeader = !!slots.header;
    const hasFooter = !!slots.footer;
    const hasImage = !!slots.image;
    return () => (
      <div class={[styles.cardBase, shadowClassMap[props.shadow]]}>
        {/* 图片插槽 */}
        {hasImage && (
          <div class={[styles.borderSection, styles.flexCenter, "border-b"]}>
            {slots.image?.()}
          </div>
        )}

        {/* Header */}
        {hasHeader && (
          <div
            class={[styles.borderSection, "border-b p-4", styles.flexCenter]}
          >
            {slots.header?.()}
          </div>
        )}

        {/* 内容区 */}
        <div
          class={[
            styles.contentBase,
            !hasHeader && styles.contentNoHeader,
            !hasFooter && styles.contentNoFooter,
          ]}
          style={props.bodyStyle}
        >
          {slots.default?.()}
        </div>

        {/* Footer */}
        {hasFooter && (
          <div
            class={[styles.borderSection, "border-t p-4", styles.flexCenter]}
          >
            {slots.footer?.()}
          </div>
        )}
      </div>
    );
  },
});
