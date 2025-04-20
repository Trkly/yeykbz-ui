<template>
  <transition name="down" @after-leave="destroy">
    <div
      v-show="isVisable"
      :class="YClass"
      :style="cssStyle"
      role="alert"
      aria-live="polite"
    >
      <i :class="[`i-ic-baseline-${icon}`, styles.icon]" />
      <span class="text">{{ content }}</span>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from "vue";
import { getLastBottomOffset } from "./Message";
import styles from "./Message.module.css";

const comtype = ["primary", "success", "warning", "info", "error"];
type ComType = (typeof comtype)[number];
interface MessageProps {
  id?: any;
  type?: ComType;
  icon?: string;
  content?: string;
  duration?: number;
  plain?: boolean;
  offset?: number;
  destroy?: () => void;
}
defineOptions({ name: "YMessage" });

const isVisable = ref(false);

const props = withDefaults(defineProps<MessageProps>(), {
  type: "info",
  content: "",
  icon: "",
  duration: 0,
  offset: 25,
  plain: false,
  destroy: () => {},
});

const height = ref(0);

// 上一个实例的最下面的坐标数字，第一个是 0
const lastOffset = computed(() => getLastBottomOffset(props.id));

// 这个元素应该使用的 top
const topOffset = computed(() => props.offset + lastOffset.value);

// 这个元素为下一个元素预留的 offset，也就是它最低端 bottom 的 值
const bottomOffset = computed(() => height.value + topOffset.value);

const cssStyle = computed(() => ({
  top: topOffset.value + "px",
}));

// 根据传入的消息类型，计算对应的图标颜色
// const iconColor = computed(() => {
//   switch (props.type) {
//     case "success":
//       return "#4ade80";
//     case "warn":
//       return "orange";
//     case "error":
//       return "red";
//     default:
//       return "gray";
//   }
// });

const YClass = computed(() => {
  return [
    styles.message,
    props.type == "info" ? "" : styles[`message-${props.type}`],
    props.plain == false ? "" : styles[`message-${props.type}-plain`],
  ];
});

/**
 * 保证动画展示，需要在 mounted 之后进行展示
 */
onMounted(() => {
  // 使用requestAnimationFrame优化性能，确保DOM更新后再显示
  requestAnimationFrame(() => {
    isVisable.value = true;
  });

  // 只有当duration大于0时才设置定时器
  if (props.duration > 0) {
    const timer = setTimeout(() => {
      isVisable.value = false;
    }, props.duration);

    // 组件卸载时清除定时器，避免内存泄漏
    onUnmounted(() => clearTimeout(timer));
  }
});

defineExpose({
  bottomOffset,
});
</script>

<style></style>
