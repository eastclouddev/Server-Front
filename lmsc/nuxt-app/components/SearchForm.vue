<template>
  <v-sheet
    class="pl-5 pb-7 mb-9 mx-auto"
    style="border-radius: 5px; border: solid 2px #ff5a36; height: 57px"
    width="100%"
  >
    <v-text-field
      :value="searchQuery"
      @input="updateSearch"
      variant="plain"
      class="custom-text-field"
      style="background-color: #ffffff; height: 25px"
    >
      <template #append>
        <v-icon
          @click="triggerSearch"
          size="40"
          style="
            background-color: #ff5a36;
            color: #ffffff;
            height: 25px;
            left: 4%;
            top: -21px;
            border-radius: 0 5px 5px 0;
          "
          class="pa-7"
        >
          mdi-magnify
        </v-icon>
      </template>
    </v-text-field>
  </v-sheet>
</template>

<script>
export default {
  props: {
    searchQuery: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateSearch(event) {
      this.$emit('update:searchQuery', event.target.value)
    },
    triggerSearch() {
      this.$emit('search')
    },
  },
}
</script>
<style lang="scss" scoped>
.v-icon {
  top: 7%;
}
.v-input__append {
  .v-icon {
    opacity: 1;
  }
}
@media screen and (max-width: 768px) {
  .v-icon {
    top: 38px;
  }
}
</style>
