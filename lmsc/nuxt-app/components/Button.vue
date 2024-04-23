<template>
  <v-btn class="custom_btn" color="#FF5A36" style="font-weight: bold;">
    {{ buttonText }}
  </v-btn>
</template>
<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.custom_btn::before {
  background-color: #FF8573;
}

</style>
