<template>
  <YRadio v-model="value" label="1" disabled>禁用选项</YRadio>
  <YRadio v-model="value" label="2">正常选项</YRadio>
</template>

<script setup>
import { ref } from "vue";
const value = ref("1");
</script>
