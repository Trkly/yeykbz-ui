<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { onClickOutside } from "@vueuse/core";

defineOptions({
  name: "YDropDownMenu",
});

const props = defineProps<{
  placement?:
    | "top"
    | "top-right"
    | "top-left"
    | "bottom"
    | "bottom-right"
    | "bottom-left";
}>();

defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: "select", value: any): void;
}>();

const dropdownRef = ref<HTMLElement | null>(null);
const isOpen = ref(false);

// Handle click outside
onClickOutside(dropdownRef, () => {
  isOpen.value = false;
});

// Toggle dropdown
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

// Handle keyboard navigation
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
});

// Calculate dropdown position class
const dropdownPositionClass = computed(() => {
  return props.placement || "bottom";
});
</script>

<template>
  <div
    ref="dropdownRef"
    class="dropdown-container"
    :class="{ 'is-open': isOpen }"
  >
    <!-- Trigger button -->
    <button
      class="dropdown-trigger"
      aria-haspopup="true"
      :aria-expanded="isOpen"
      @click="toggleDropdown"
    >
      <slot name="trigger"></slot>
    </button>

    <!-- Dropdown content -->
    <div
      v-show="isOpen"
      class="dropdown-content"
      :class="[dropdownPositionClass]"
      role="menu"
      tabindex="-1"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.dropdown-container {
  position: relative;
  display: inline-block;
}

.dropdown-trigger {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  font-size: 1rem;
  border-radius: 4px;
  background-color: #f3f4f6;
  transition: background-color 0.2s;
}

.dropdown-trigger:hover {
  background-color: #e5e7eb;
}

.dropdown-content {
  position: absolute;
  min-width: 200px;
  background-color: white;
  border-radius: 6px;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  z-index: 50;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.2s ease;
}

.is-open .dropdown-content {
  opacity: 1;
  transform: translateY(0);
}

/* Placement variants */
.bottom {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 0.5rem;
}

.bottom-right {
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
}

.bottom-left {
  top: 100%;
  left: 0;
  margin-top: 0.5rem;
}

.top {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 0.5rem;
}

.top-right {
  bottom: 100%;
  right: 0;
  margin-bottom: 0.5rem;
}

.top-left {
  bottom: 100%;
  left: 0;
  margin-bottom: 0.5rem;
}
</style>
