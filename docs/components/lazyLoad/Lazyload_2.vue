<template>
  <ClientOnly>
      <img
              v-lazyLoad="'https://picsum.photos/300/200'"
              class="custom-placeholder"
      />
  </ClientOnly>
</template>

<script setup>
// 在全局样式或组件样式中定义
// eslint-disable-next-line no-unused-vars
const customPlaceholder =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWVlZWVlIi8+Cjwvc3ZnPg==";
</script>

<style>
.custom-placeholder {
  width: 300px;
  height: 200px;
  background: #f0f0f0;
}
</style>
