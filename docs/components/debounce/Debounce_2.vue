<template>
  <input
    v-debounce="{
      handler: handleInput,
      event: 'input',
      delay: 500,
    }"
    placeholder="输入内容"
  />
</template>

<script setup>
const handleInput = (e) => {
  console.log("防抖输入:", e.target.value);
};
</script>
