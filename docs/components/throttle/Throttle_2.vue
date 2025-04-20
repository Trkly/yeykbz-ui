<template>
  <div
    v-throttle="{
      handler: handleScroll,
      event: 'scroll',
      delay: 200,
    }"
    class="scroll-box"
  >
    <div class="scroll-content"></div>
  </div>
</template>

<script setup>
const handleScroll = () => {
  console.log("滚动事件触发");
};
</script>

<style>
.scroll-box {
  height: 200px;
  overflow: auto;
  border: 1px solid #eee;
}
.scroll-content {
  height: 1000px;
}
</style>
