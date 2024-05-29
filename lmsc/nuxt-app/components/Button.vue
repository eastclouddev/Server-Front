<template>
  <v-btn class="custom_btn" :width="width" :height="height" style="font-weight: bold;" @click="$emit('click')">
    <v-icon v-if="icon && iconPosition === 'left'" class="mr-2">{{ icon }}</v-icon>
    {{ buttonText }}
    <v-icon v-if="icon && iconPosition === 'right'" class="ml-2">{{ icon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false
    },
    iconPosition: {
      type: String,
      default: 'right',
      validator: value => ['left', 'right'].includes(value)
    },
    width: {
      type: String,
      default: '25rem'
    },
    height: {
      type: String,
      default: '6ex'
    }
  }
};
</script>

<style lang="scss" scoped>
.custom_btn::before {
  background-color: #FF8573;
}
@media screen and (max-width: 768px) {
  .custom_btn {
      width: 35rem!important;
      height: 6ex;
    }
}
</style>