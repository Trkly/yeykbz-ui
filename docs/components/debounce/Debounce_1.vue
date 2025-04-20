<template>
  <button v-debounce="handleClick">快速点击我</button>
</template>

<script setup>
const handleClick = () => {
  console.log("防抖点击", new Date().toLocaleTimeString());
};
</script>
