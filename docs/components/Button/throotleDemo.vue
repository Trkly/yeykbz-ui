<template>
  <div class="space-y-4">
    <YButton :throttle="1000" @click="handleClick">1秒节流</YButton>
    <YButton :throttle="2000" color="red" @click="handleClick">2秒节流</YButton>
    <YButton :throttle="3000" color="green" plain @click="handleClick"
      >3秒节流</YButton
    >
  </div>
</template>

<script setup>
const handleClick = () => {
  console.log("有效点击:", new Date().toLocaleTimeString());
};
</script>
