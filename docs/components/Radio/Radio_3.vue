<template>
  <YRadio v-model="groupValue" name="group1" label="A">选项A</YRadio>
  <YRadio v-model="groupValue" name="group1" label="B">选项B</YRadio>
</template>

<script setup>
import { ref } from "vue";
const groupValue = ref("A");
</script>
