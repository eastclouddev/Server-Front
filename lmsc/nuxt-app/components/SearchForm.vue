<template>
   <v-sheet class="pl-5 pb-7 mb-9 mt-9 mx-auto"
  style="border-radius: 5px; border: solid 2px #FF5A36;" width="100%">
    <v-text-field
      :value="searchQuery"
      @input="updateSearch"
      variant="plain"
      class="custom-text-field"
      style="background-color:#FFFFFF; height:28px;">
      <template #append>
        <v-icon
          @click="triggerSearch"
          size="32"
          style="background-color:#FF5A36; color: #FFFFFF; padding: 6px; position: absolute; top: 8%; right:5%;"
          class="pa-7"  >
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
      required: true
    }
  },
  methods: {
    updateSearch(event) {
      this.$emit('update:searchQuery', event.target.value);
    },
    triggerSearch() {
      this.$emit('search');
    }
  }
}
</script>
