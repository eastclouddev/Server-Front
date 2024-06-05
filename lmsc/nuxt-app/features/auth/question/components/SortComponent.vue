<template>
  <v-select
    v-model="localSelectedOrder"
    :items="orderOptions"
    item-text="text"
    item-value="value"
    label="並び替え"
    class="mr-4"
    variant="outlined"
    @change="onOrderChange"
  ></v-select>
</template>

<script>
export default {
  props: {
    selectedOrder: {
      type: String,
      default: ''
    },
    orderOptions: {
      type: Array,
      default: () => [
        { text: '昇順', value: 'asc' },
        { text: '降順', value: 'desc' },
      ]
    }
  },
  data() {
    return {
      localSelectedOrder: this.selectedOrder
    };
  },
  watch: {
    localSelectedOrder(newOrder) {
      this.$emit('order-change', newOrder);
    },
    selectedOrder(newOrder) {
      this.localSelectedOrder = newOrder;
    }
  },
  methods: {
    onOrderChange(newOrder) {
      this.$emit('order-change', newOrder);
    }
  }
};
</script>
