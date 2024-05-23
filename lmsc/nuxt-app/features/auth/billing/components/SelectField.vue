<template>
  <div>
    <v-select
      :items="filterOptions"
      v-model="selectedFilter"
      @change="$emit('filter-change', selectedFilter)"
      :placeholder="placeholder"
      density="compact"
      variant="outlined"
      class="mr-6"
      style="width: 15rem;"
    ></v-select>
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
    placeholder: {
      type: String,
      default: '',
      required: true,
    }
  },
  data() {
    return {
      selectedFilter: this.value,
    };
  },
  watch: {
    value(newVal) {
      this.selectedFilter = newVal;
    },
    selectedFilter(newVal) {
      this.$emit('input', newVal);
    },
  },
};
</script>
<style>
.v-field.v-field--appended {
    --v-field-padding-end: 6px;
    background-color: #FFFFFF;
}
.v-list-item:hover {
  background-color: #FFF7EC !important; /* ホバー時の背景色をオレンジに変更 */
}
</style>