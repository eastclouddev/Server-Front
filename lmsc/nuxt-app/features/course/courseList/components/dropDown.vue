<!-- ドロップダウンメニューのみ -->
<script setup lang="ts">
import { ref } from 'vue'

const post = defineProps<{
  items: string[]
  label: string
}>()

const items = ref(post.items) // 選択リスト
const item = ref(post.label) // 選択アイテム
const setItem = ref(item.value)
const isItemMenuOpened = ref(false)
const icon = ['mdi-chevron-down', 'mdi-chevron-up']

const updateItem = (val: string) => {
  item.value = val
  setItem.value = item.value
  isItemMenuOpened.value = false
}

const resetItem = () => {
  item.value = setItem.value
  isItemMenuOpened.value = false
}

const selectMode = () => {
  setItem.value = item.value
  item.value = post.label
  isItemMenuOpened.value = !isItemMenuOpened.value
}
</script>

<template>
  <v-container class="option">
    <v-menu @update:modelValue="value => value || resetItem()">
      <template v-slot:activator="{ props }">
        <v-btn
          v-if="isItemMenuOpened === false"
          :appendIcon="icon[0]"
          v-bind="props"
          @click="selectMode"
        >
          {{ item }}
        </v-btn>
        <v-btn v-else :appendIcon="icon[1]" v-bind="props" @click="selectMode">
          {{ item }}
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="updateItem(item)"
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-container>
</template>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans';
}

.v-list-item-title {
  font-size: 18px;
}

.option {
  width: 240px;
  height: 60px;
  .v-btn {
    width: 100%;
    height: 100%;
    border: 1px solid #292737;
    text-transform: none;
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    &.v-btn--variant-elevated {
      box-shadow: 2px 2px 10 0 rgba(0, 0, 0, 0.25);
    }
    &.v-btn--size-default {
      font-size: 18px;
      font-weight: 700;
      line-height: 28.8px;
    }
  }
}

@media screen and (max-width: 768px) {
  .option {
    width: 240px;
    height: 80px;
    .v-btn {
      &.v-btn--size-default {
        font-size: 28px;
        line-height: 44.8px;
      }
    }
  }
}
</style>
