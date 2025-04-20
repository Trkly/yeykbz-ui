<template>
  <YContainer direction="column">
    <YHeader>Header</YHeader>
    <YContainer>
      <YAside width="200px">Aside</YAside>
      <YMain>Main</YMain>
    </YContainer>
  </YContainer>
</template>

<script setup lang="ts"></script>

<style scoped>
.deep-header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c1ffc7;
}

.deep-aside {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #303133;
  background-color: rgb(216.8, 235.6, 255);
}

.deep-main {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fffbec;
  height: 150px;
}
</style>
