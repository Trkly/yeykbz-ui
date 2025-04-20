<template>
  <button
    :class="[
      'deep-button',
      styles.base,
      styles[size],
      round ? styles.round : styles.square,
      colorClass,
      styles.hoverEffect,
      isThrottling ? styles.disabled : '',
    ]"
    :disabled="isThrottling"
    @click="handleThrottledClick"
  >
    <i v-if="icon" :class="[`i-ic-baseline-${icon}`, styles.icon]" />
    <slot />
  </button>
</template>

<script setup lang="ts">
defineOptions({
  name: "YButton",
});
import { ref, computed } from "vue";
import type { PropType } from "vue";
import styles from "./Button.module.css";

type ISize = "small" | "medium" | "large";
type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

const props = defineProps({
  throttle: {
    type: Number,
    default: 500,
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
});

const emit = defineEmits(["click"]);

const lastClickTime = ref(0);
const isThrottling = ref(false);

const colorClass = computed(() => {
  const classKey = props.plain
    ? `plain-${props.color}`
    : `color-${props.color}`;
  return styles[classKey] || "";
});

const handleThrottledClick = (event: MouseEvent) => {
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
</script>

<style module></style>
