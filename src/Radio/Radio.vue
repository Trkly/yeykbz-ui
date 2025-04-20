<template>
  <label
    :class="[
      'radio',
      { 'is-checked': label == modelValue, 'is-disabled': disabled },
    ]"
  >
    <span class="radio_input">
      <span class="radio_inner"></span>
      <input
        ref="radio"
        v-model="modelValue"
        :disabled="disabled"
        class="radio_original"
        :name="name"
        :value="props.label"
        type="radio"
      />
    </span>
    <span class="radio_label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
interface RadioProps {
  label?: string | number | boolean;
  modelValue?: string | number | boolean | null;
  name?: string;
  disabled?: boolean;
}
defineOptions({ name: "YRadio" });

const radio = ref();
const emit = defineEmits(["update:modelValue"]);

const props = withDefaults(defineProps<RadioProps>(), {
  label: "",
  modelValue: null,
  name: "",
  disabled: false,
});

const modelValue = computed({
  get: () => {
    return props.modelValue;
  },
  set: (val) => {
    emit("update:modelValue", val);
    radio.value && (radio.value.checked == modelValue.value) == props.label;
  },
});
</script>

<style lang="scss" scoped>
.radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-left: 30px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  .radio_input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .radio_inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .radio_original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
}

.radio_label {
  font-size: 14px;
  padding-left: 10px;
}

/* 选中样式 */
.radio.is-checked {
  .radio_input {
    .radio_inner {
      border-color: var(--theme-primary-500, var(--vk-primary-500));
      background-color: var(--theme-primary-500, var(--vk-primary-500));
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .radio_label {
    color: var(--theme-primary-500, var(--vk-primary-500));
  }
}

/* 禁止状态 */
.radio.is-disabled {
  cursor: not-allowed;
  .radio_input {
    cursor: not-allowed;
    .radio_inner {
      border-color: #f5f5fa;
      background-color: #e4e7ed;
      &:after {
        background-color: #a8abb2;
        transform: translate(-50%, -50%) scale(1);
      }
    }
    & + .radio_label {
      color: #a8abb2;
    }
  }
}
</style>
