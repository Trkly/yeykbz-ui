<template>
  <main :class="['deep-main', styles.main]">
    <slot></slot>
  </main>
</template>

<script lang="ts" setup>
import styles from "./Main.module.css";
defineOptions({ name: "YMain" });
</script>

<style></style>
