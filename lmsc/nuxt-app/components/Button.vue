<template>
  <v-btn class="custom_btn" width="25rem" height="6ex" style="font-weight: bold;">
    {{ buttonText }}
    <v-icon right v-if="icon" class="ml-2">{{ icon }}</v-icon>
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
  }
};
</script>
<style lang="scss" scoped>
.custom_btn::before {
  background-color: #FF8573;
}
@media screen and (max-width: 768px) {
  Button {
      width: 35rem!important;
      height: 6ex;
    }
}
</style>
