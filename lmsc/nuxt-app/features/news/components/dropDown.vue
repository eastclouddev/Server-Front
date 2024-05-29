<script setup lang="ts">
import { ref, watch, defineProps, onMounted } from 'vue'
import VueDatepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { format } from 'date-fns'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiChevronDown, mdiChevronUp } from '@mdi/js'

const props = defineProps({
  item: {
    type: Object,
    default: () => ({ date: undefined, category: '' }),
  },
})

const date = ref(new Date()) //日付データ
const setDate = ref(date.value)
const tmpDate = ref('公開日') // 表示する日付
const setTmpDate = ref(tmpDate.value)
const isDateMenuOpened = ref(false)

const categorys = ['メディア掲載', '機能アップデート', 'イベント情報']
const category = ref('カテゴリ')
const setCategory = ref(category.value)
const isCategoryMenuOpened = ref(false)

// 表示する日付のフォーマット指定
const formatDate = (date: Date): string => {
  return format(date, 'yyyy/MM/dd (E)')
}

// 土日を識別する <style>より、色を設定
const ColoredDay = (date: any) => {
  const weekDay = new Date(date).getDay()
  if (weekDay == 6) {
    return 'saturday'
  }
  if (weekDay == 0) {
    return 'sunday'
  }
  return ''
}

// Vue Datepicker に渡すオプション
const datepickerOptions = {
  inline: true, // 入力フィールドを削除し、カレンダーを親コンポーネントに配置する
  format: formatDate,
  locale: 'ja',
  monthChangeOnScroll: false, // マウスホイールで月を切り替えない
  hideOffsetDates: true, // カレンダーの前月／翌月の日付を非表示にする
  enableTimePicker: false, // タイムピッカーを無効化
  dayClass: ColoredDay,
}

const updateDate = (item: Date) => {
  date.value = new Date(item)
  tmpDate.value = formatDate(date.value)
  setTmpDate.value = tmpDate.value
  isDateMenuOpened.value = false
}

const updateCategory = (item: string) => {
  category.value = item
  setCategory.value = category.value
  isCategoryMenuOpened.value = false
}

const resetCategory = () => {
  category.value = setCategory.value
  isCategoryMenuOpened.value = false
}

const resetDate = () => {
  tmpDate.value = setTmpDate.value
  isDateMenuOpened.value = false
}

const selectMode = (mode: string) => {
  if (mode == 'category') {
    setCategory.value = category.value
    category.value = 'カテゴリ'
    isCategoryMenuOpened.value = true
  }
  if (mode == 'calender') {
    setTmpDate.value = tmpDate.value
    tmpDate.value = '公開日'
    isDateMenuOpened.value = true
  }
}

const readData = () => {
  if (props.item) {
    if (props.item.date) {
      updateDate(props.item.date)
    }
    if (props.item.category) {
      category.value = categorys[props.item.category]
      updateCategory(category.value)
    }
  }
}

watch(setDate, newVal => {
  if (newVal !== undefined) {
    updateDate(newVal)
  }
})

onMounted(readData)

const path = [mdiChevronDown, mdiChevronUp]
</script>

<template>
  <div class="dropDown">
    <div class="calender">
      <v-menu class="v-menu" @update:modelValue="value => value || resetDate()">
        <template v-slot:activator="{ props }">
          <v-btn class="v-btn" v-bind="props" @click="selectMode('calender')">
            {{ tmpDate }}
            <svg-icon
              v-if="tmpDate === '公開日' && isDateMenuOpened === false"
              type="mdi"
              :path="path[0]"
            />
            <svg-icon
              v-if="tmpDate === '公開日' && isDateMenuOpened === true"
              type="mdi"
              :path="path[1]"
            />
          </v-btn>
        </template>

        <VueDatepicker
          v-if="isDateMenuOpened === true"
          v-model="setDate"
          v-bind="datepickerOptions"
          week-start="0"
          auto-apply
          no-today
        />
      </v-menu>
    </div>

    <div class="category">
      <v-menu
        class="v-menu"
        @update:modelValue="value => value || resetCategory()"
      >
        <template v-slot:activator="{ props }">
          <v-btn class="v-btn" v-bind="props" @click="selectMode('category')">
            {{ category }}
            <svg-icon
              v-if="category === 'カテゴリ' && isCategoryMenuOpened === false"
              type="mdi"
              :path="path[0]"
            />
            <svg-icon
              v-if="category === 'カテゴリ' && isCategoryMenuOpened === true"
              type="mdi"
              :path="path[1]"
            />
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(category, index) in categorys"
            :key="index"
            @click="updateCategory(category)"
          >
            <v-list-item-title>{{ category }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<style>
.saturday {
  color: #00f;
}
.sunday {
  color: #f00;
}
</style>

<style scoped lang="scss">
.dropDown {
  width: 100%;
  display: flex;
  gap: 20px;
  .v-btn {
    width: 240px;
    height: 60px;
    display: flex;
    justify-content: left;
    border-radius: 5px;
    &.v-btn--variant-elevated {
      box-shadow: none;
      background-color: #fff;
      color: #242424;
    }
    &.v-btn--size-default {
      font-size: 18px;
      font-weight: 700;
      line-height: 28.8px;
      padding: 15.5px 0;
      padding-left: 24px;
    }
    .v-btn__content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
  .calender {
    svg {
      margin-left: 124px;
    }
  }
  .category {
    svg {
      margin-left: 106px;
    }
  }
}

@media screen and (max-width: 768px) {
  .dropDown {
    gap: 10px;
    .v-btn {
      width: 314px;
      &.v-btn--size-default {
        font-size: 24px;
        line-height: 38.4px;
        padding: 21px 0;
        padding-left: 24px;
      }
      .v-btn__content {
        justify-content: space-between;
        svg {
          width: 40px;
          height: 40px;
        }
      }
    }
    .calender {
      svg {
        margin-left: 162px;
      }
    }
    .category {
      svg {
        margin-left: 138px;
      }
    }
  }
}
</style>
