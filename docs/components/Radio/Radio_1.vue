<template>
  <YRadio v-model="value" label="1">选项1</YRadio>
  <YRadio v-model="value" label="2">选项2</YRadio>
</template>

<script setup>
import { ref } from "vue";
const value = ref("1");
</script>
