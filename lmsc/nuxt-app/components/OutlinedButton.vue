<template>
  <button
    class="button"
    :style="buttonStyle"
    @click="handleClick"
  >
    <v-icon v-if="icon" :style="{ marginRight: '8px' }">{{ icon }}</v-icon>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
  color: {
    type: String,
    default: "#FF5A36"
  },
  textColor: {
    type: String,
    default: "#FF5A36"
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  fontSize: {
    type: String,
    default: "20px"
  },
  fontWeight: {
    type: String,
    default: "bold"
  },
  icon: {
    type: String,
    default: null
  },
  onClick: {
    type: Function,
    default: null
  }
});

const buttonStyle = computed(() => ({
  backgroundColor: "transparent",
  color: props.textColor,
  border: `2px solid ${props.color}`,
  width: props.fullWidth ? "100%" : "auto",
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.5em 1em"
}));

const emit = defineEmits(['click']);
const handleClick = (event: Event) => {
  if (props.onClick) {
    props.onClick(event);
  }
  emit('click', event);
};
</script>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  background-color: transparent;

  &:hover {
    background-color: rgba(255, 90, 54, 0.1);
  }
}
</style>
