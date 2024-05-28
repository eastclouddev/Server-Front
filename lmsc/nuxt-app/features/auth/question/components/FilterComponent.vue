<template>
  <div class="d-flex">
    <v-select
      v-model="localSelectedCategory"
      :items="categories"
      label="カテゴリを選択"
      class="mr-4"
      @change="onCategoryChange"
    ></v-select>

  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    },

    selectedCategory: {
      type: String,
      default: null
    },

  },
  data() {
    return {
      localSelectedCategory: this.selectedCategory,

    }
  },
  watch: {
    localSelectedCategory(newCategory) {
      this.$emit('category-change', newCategory);
    },
    selectedCategory(newCategory) {
      this.localSelectedCategory = newCategory;
    },

  }
}
</script>

<style scoped>
.d-flex {
  display: flex;
}
</style>