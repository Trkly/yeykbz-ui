<template>
  <button v-throttle="handleClick">快速点击我</button>
</template>

<script setup>
const handleClick = () => {
  console.log("节流点击", new Date().toLocaleTimeString());
};
</script>
