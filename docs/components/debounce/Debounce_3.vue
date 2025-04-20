<template>
  <div class="wrapper">
    <button v-debounce="handleSubmit">提交按钮 (2秒防抖)</button>
    <input
      v-debounce="{
        handler: handleSearch,
        event: 'input',
        delay: 300,
      }"
      placeholder="搜索内容"
    />
  </div>
</template>

<script setup>
const handleSubmit = () => {
  console.log("表单提交");
};

const handleSearch = (e) => {
  console.log("搜索关键字:", e.target.value);
};
</script>
