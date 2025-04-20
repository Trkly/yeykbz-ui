<template>
  <footer :class="['deep-footer', styles.footer]">
    <slot></slot>
  </footer>
</template>
<script setup lang="ts">
import styles from "./Footer.module.css";
defineOptions({ name: "YFooter" });
</script>
<style></style>
