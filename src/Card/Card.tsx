import { defineComponent } from "vue";
import type { PropType } from "vue";
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
    const shadowClass = {
      always: "shadow-md",
      hover: "shadow-none hover:hover:shadow-md",
      never: "shadow-none",
    }[props.shadow];

    const hasHeader = !!slots.header;
    const hasFooter = !!slots.footer;
    const hasImage = !!slots.image;

    return () => (
      <div
        class={[
          "rounded",
          "border",
          "border-gray-200",
          "bg-white",
          "dark:border-gray-700",
          "dark:bg-gray-800",
          shadowClass,
          "transition-shadow",
          "overflow-hidden", // 确保图片圆角不溢出
        ]}
      >
        {/* 图片插槽 (顶部) */}
        {hasImage && (
          <div class="border-b border-gray-200 dark:border-gray-700 felx-c">
            {slots.image?.()}
          </div>
        )}

        {/* Header */}
        {hasHeader && (
          <div class="border-b border-gray-200 dark:border-gray-700 p-4 flex-c">
            {slots.header?.()}
          </div>
        )}

        {/* 内容区 */}
        <div
          class={[
            "text-gray-700 dark:text-gray-300",
            hasHeader ? "" : "pt-4",
            hasFooter ? "" : "pb-4",
            "px-4",
            "flex-c",
          ]}
          style={props.bodyStyle}
        >
          {slots.default?.()}
        </div>

        {/* Footer */}
        {hasFooter && (
          <div class="border-t border-gray-200 dark:border-gray-700 p-4 flex-c">
            {slots.footer?.()}
          </div>
        )}
      </div>
    );
  },
});
