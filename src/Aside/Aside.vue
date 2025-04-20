<template>
  <aside
    :class="['deep-aside', styles.aside]"
    :style="asideStyle"
    role="complementary"
    aria-label="侧边栏"
  >
    <slot />
  </aside>
</template>

<script setup lang="ts">
import { computed } from "vue";
import styles from "./Aside.module.css";
interface AsideProps {
  width?: string;
}
defineOptions({
  name: "YAside",
});

const props = withDefaults(defineProps<AsideProps>(), {
  width: "300px",
});

const asideStyle = computed(() => ({
  width: props.width,
}));
</script>

<style></style>
