<script setup lang="ts">
defineOptions({
  name: "YDropDownMenuItem",
});

const props = defineProps<{
  disabled?: boolean;
}>();

const emit = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: "select"): void;
}>();

const handleSelect = () => {
  if (!props.disabled) {
    emit("select");
  }
};
</script>

<template>
  <button
    :disabled="disabled"
    class="dropdown-item"
    :class="{ disabled: disabled }"
    role="menuitem"
    @click="handleSelect"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.dropdown-item {
  display: block;
  width: 100%;
  padding: 8px 16px;
  text-align: left;
  background: none;
  border: none;
  font-size: 0.875rem;
  color: #374151;
  cursor: pointer;
  transition: background-color 0.2s;
}

.dropdown-item:hover:not(.disabled) {
  background-color: #f3f4f6;
}

.dropdown-item:focus {
  outline: 2px solid #3b82f6;
  outline-offset: -2px;
}

.dropdown-item.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* First and last items should have rounded corners */
.dropdown-item:first-child {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.dropdown-item:last-child {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
</style>
