<template>
  <v-container class="sp_content" style="margin:10% auto;">
    <v-card flat>
      <v-card-title flat class="sp_title">{{ titleText }}</v-card-title>
      <v-card flat class=" d-flex justify-center flex-column align-center">
        <v-icon class="mt-8 mb-8 sp_icon" :color="iconColor" :icon="icon" :size="iconSize"></v-icon>
        <Button color="#FF5A36" style="font-size: 1.5em;" buttonText="ログイン画面へ"></Button>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    titleText: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      iconColor: "#292737",
      iconSize: 100
    };
  }
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .sp {
  &_content {
    max-width: 540px;
    margin: 0 auto;
  }
  &_title {
    font-size: 1.8em !important;
    }
}
}
</style>