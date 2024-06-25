<template>
  <div>
    <v-select
      :items="filterOptions"
      v-model="selectedFilter"
      @change="$emit('filter-change', selectedFilter)"
      density="compact"
      variant="outlined"
      class="mr-5 custom-select"
      style="width: 100%; min-width: 150px"
    >
      <template v-slot:selection="data">
        <span v-if="!selectedFilter" class="placeholder-text">{{
          placeholderText
        }}</span>
        <span v-else>{{ data.item.title }}</span>
      </template>
    </v-select>
  </div>
</template>

<script>
export default {
  props: {
    filterOptions: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
    placeholderText: {
      type: String,
      default: '選択してください', // デフォルトのプレースホルダーテキスト
    },
  },
  data() {
    return {
      selectedFilter: this.value,
    }
  },
  watch: {
    value(newVal) {
      this.selectedFilter = newVal
    },
    selectedFilter(newVal) {
      this.$emit('input', newVal)
    },
  },
}
</script>

<style scoped>
.v-field.v-field--appended {
  --v-field-padding-end: 6px;
  background-color: #ffffff !important;
}
.v-list-item:hover {
  background-color: #fff7ec !important;
}
</style>
