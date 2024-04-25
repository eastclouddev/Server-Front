<template>
  <v-container>
    <v-card flat>
      <v-card-title flat> {{ titleText }}</v-card-title>
      <v-card falt class="d-flex  flex-column">
        <v-icon :color="iconColor" :icon="icon" :size="iconSize"></v-icon>
        <Button width="25rem" height="6ex" style="font-size: 1.5em;" buttonText="ログイン画面へ"></Button>
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
    }
  },
  data() {
    return {
      iconColor: "#292737",
      iconSize: 100
    };
  }
};
</script>
