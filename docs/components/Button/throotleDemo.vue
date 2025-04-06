<template>
  <div class="space-y-4">
    <YButton @click="handleClick" :throttle="1000">1秒节流</YButton>
    <YButton @click="handleClick" :throttle="2000" color="red">2秒节流</YButton>
    <YButton @click="handleClick" :throttle="3000" color="green" plain
      >3秒节流</YButton
    >
  </div>
</template>

<script setup>
const handleClick = () => {
  console.log("有效点击:", new Date().toLocaleTimeString());
};
</script>
