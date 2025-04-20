<script setup lang="ts">
const handleSelect = (value: string) => {
  console.log("Selected:", value);
};
</script>

<template>
  <div class="container">
    <div class="menu-group">
      <!-- Bottom (Default) -->
      <YDropDownMenu>
        <template #trigger>
          <span>Click me</span>
        </template>

        <YDropDownMenuItem @select="handleSelect('Item 1')">
          Item 1
        </YDropDownMenuItem>
        <YDropDownMenuItem @select="handleSelect('Item 2')">
          Item 2
        </YDropDownMenuItem>
        <YDropDownMenuItem disabled>Disabled Item</YDropDownMenuItem>
      </YDropDownMenu>
      <YDropDownMenu placement="top" class="ml-4">
        <template #trigger>
          <span>Top DropDown</span>
        </template>

        <YDropDownMenuItem @select="handleSelect('Top 1')">
          Top Item 1
        </YDropDownMenuItem>

        <YDropDownMenuItem @select="handleSelect('Top 2')">
          Top Item 2
        </YDropDownMenuItem>
      </YDropDownMenu>

      <!-- Bottom Right -->

      <YDropDownMenu placement="bottom-right" class="ml-4">
        <template #trigger> <span>Bottom Right</span> </template>
        <YDropDownMenuItem @select="handleSelect('BR 1')">
          Bottom Right 1
        </YDropDownMenuItem>

        <YDropDownMenuItem @select="handleSelect('BR 2')">
          Bottom Right 2
        </YDropDownMenuItem>
      </YDropDownMenu>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.divider {
  height: 1px;
  background: #eee;
  width: 100%;
}

.menu-group {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.ml-4 {
  margin-left: 1rem;
}
</style>
