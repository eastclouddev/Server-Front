<template>
  <div>
    <v-select
      :items="filterOptions"
      v-model="selectedFilter"
      @change="emitChange"
      density="compact"
      variant="outlined"
      class="mr-6 custom-select"
      style="width: 15rem;">
      <template v-slot:selection="data">
        <span v-if="!selectedFilter" class="placeholder-text">{{ placeholderText }}</span>
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
      type: [String, Number, null],
      default: null,
    },
    placeholderText: {
      type: String,
      default: '選択してください', // デフォルトのプレースホルダーテキスト
    },
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
  methods: {
    emitChange(value) {
      this.$emit('filter-change', value);
    }
  }
};
</script>

<style scoped>
</style>