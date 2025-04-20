<template>
  <header :class="['deep-header', styles.header]">
    <slot></slot>
  </header>
</template>

<script lang="ts" setup>
import styles from "./Header.module.css";
defineOptions({ name: "YHeader" });
</script>

<style></style>
