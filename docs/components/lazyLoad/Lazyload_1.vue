<template>
  <div class="scroll-container">
    <div v-for="i in 20" :key="i" class="list-item">
      <img
        v-lazyLoad="`https://picsum.photos/200/200?random=${i}`"
        alt="示例图片"
        class="lazy-image"
      />
    </div>
  </div>
</template>

<style>
.scroll-container {
  height: 400px;
  overflow: auto;
  border: 1px solid #eee;
}
.list-item {
  height: 250px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lazy-image {
  transition: opacity 0.3s;
  width: 200px;
  height: 200px;
  background: #f5f5f5;
}
.lazy-image[src] {
  opacity: 1;
}
</style>
