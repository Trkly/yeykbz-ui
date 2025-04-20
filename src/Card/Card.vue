<template>
  <div :class="[styles.cardBase, styles[`shadow${capitalizedShadow}`]]">
    <!-- 图片插槽 -->
    <div
      v-if="$slots.image"
      :class="[styles.borderSection, styles.flexCenter, 'border-b']"
    >
      <slot name="image" />
    </div>

    <!-- Header 插槽 -->
    <div
      v-if="$slots.header"
      :class="[styles.borderSection, 'border-b p-4', styles.flexCenter]"
    >
      <slot name="header" />
    </div>

    <!-- 内容区 -->
    <div
      :class="[
        styles.contentBase,
        !$slots.header && styles.contentNoHeader,
        !$slots.footer && styles.contentNoFooter,
      ]"
      :style="bodyStyle"
    >
      <slot />
    </div>

    <!-- Footer 插槽 -->
    <div
      v-if="$slots.footer"
      :class="[styles.borderSection, 'border-t p-4', styles.flexCenter]"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { PropType } from "vue";
import styles from "./Card.module.css";
defineOptions({
  name: "YCard",
});

const props = defineProps({
  shadow: {
    type: String as PropType<"always" | "hover" | "never">,
    default: "always",
  },
  bodyStyle: {
    type: Object,
    default: () => ({}),
  },
});

// 首字母大写处理
const capitalizedShadow = computed(() => {
  return props.shadow.charAt(0).toUpperCase() + props.shadow.slice(1);
});
</script>

<style module></style>
