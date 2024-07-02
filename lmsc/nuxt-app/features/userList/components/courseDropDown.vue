<!-- ドロップダウンメニューのみ -->
<script setup lang="ts">
import { ref, defineProps, computed } from 'vue'

const post = defineProps<{
  items: string[]
  label: string
  modelValue: string
  role: string
}>()

const items = ref(post.items)
const item = ref<string[]>([])

const isItemMenuOpened = ref(false)
const icon = ['mdi-chevron-down', 'mdi-chevron-up']

const updateItem = (val: string) => {
  const index = item.value.indexOf(val)
  if (index > -1) {
    item.value.splice(index, 1) // アイテムが存在する場合は削除
  } else {
    item.value.push(val) // 存在しない場合は追加
  }
}

const displayLabel = computed(() => {
  return item.value.length > 0 ? item.value.join(', ') : post.label
})

const calculateButtonWidth = computed(() => {
  const baseWidth = 314
  const maxWidth = 548
  const perCharWidth = 8
  const textLength = displayLabel.value.length
  return Math.min(baseWidth + textLength * perCharWidth, maxWidth)
})
</script>

<template>
  <v-container class="option">
    <v-menu :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        <v-btn
          :style="{ width: calculateButtonWidth + 'px' }"
          :appendIcon="icon[isItemMenuOpened ? 1 : 0]"
          v-bind="props"
        >
          {{ displayLabel }}
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(listItem, index) in items" :key="index">
          <v-checkbox
            v-model="item"
            :label="listItem"
            :value="listItem"
            :input-value="item.includes(listItem)"
            hide-details
          />
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

.v-theme--light * {
  --v-medium-emphasis-opacity: 1;
}

.v-list-item-title {
  font-size: 18px;
}

.selected-item {
  background-color: #fff7ec;
}

.option {
  width: 240px;
  height: 60px;
  .v-btn {
    max-width: none;
    width: 100%;
    height: 100%;
    border: 1px solid #292737;
    text-transform: none;
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
  .v-list-item-title * {
    font-size: 28px;
  }

  .option {
    width: 314px;
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
