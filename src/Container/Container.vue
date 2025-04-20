<template>
  <section :class="['deep-container', styles.container]" :style="style">
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
import type { CSSProperties } from "vue";
import styles from "./Container.module.css";
defineOptions({ name: "YContainer" });
interface ContainerProps {
  direction?: "row" | "column";
}
const props = withDefaults(defineProps<ContainerProps>(), {
  direction: "row",
});

const style: CSSProperties = {
  "flex-direction": props.direction,
};
</script>

<style></style>
