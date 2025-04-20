<template>
  <YContainer>
    <YAside width="200px"> Aside </YAside>
    <YMain>Main</YMain>
    <YAside width="200px"> Aside </YAside>
  </YContainer>
</template>

<script setup lang="ts"></script>

<style scoped>
.deep-aside {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c1ffc7;
}

.deep-main {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fffbec;
  height: 150px;
}
</style>
