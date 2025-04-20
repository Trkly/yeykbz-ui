<template>
  <div class="wrapper">
    <button v-throttle="{ handler: submit, delay: 1500 }">
      提交按钮 (1.5秒节流)
    </button>
    <input
      v-throttle="{
        handler: handleInput,
        event: 'input',
        delay: 500,
      }"
      placeholder="节流输入"
    />
  </div>
</template>

<script setup>
const submit = () => {
  console.log("表单提交");
};

const handleInput = (e) => {
  console.log("输入内容:", e.target.value);
};
</script>
