<template>
  <button
    class="button"
    :style="buttonStyle"
    @click="handleClick"
    :disabled="disabled"
  >
    <v-icon v-if="icon" :style="{ marginRight: '8px' }">{{ icon }}</v-icon>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: '#FF5A36',
  },
  textColor: {
    type: String,
    default: '#FFFFFF',
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  fontSize: {
    type: String,
    default: '20px',
  },
  fontWeight: {
    type: String,
    default: 'bold',
  },
  icon: {
    type: String,
    default: null,
  },
  onClick: {
    type: Function,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const buttonStyle = computed(() => ({
  backgroundColor: props.disabled ? '#CCCCCC' : props.color,
  color: props.disabled ? '#666666' : props.textColor,
  border: props.color === '#FFFFFF' ? `2px solid ${props.textColor}` : 'none',
  width: props.fullWidth ? '100%' : 'auto',
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.5em 1em',
  cursor: props.disabled ? 'not-allowed' : 'pointer',
}))

const emit = defineEmits(['click'])
const handleClick = (event: Event) => {
  if (!props.disabled && props.onClick) {
    props.onClick(event)
  }
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<style lang="scss" scoped>
.button {
  text-align: center;
  box-shadow: 3px 3px 5px #d8d8d8;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background-color: #ff8573;
  }

  &:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }
}
</style>
