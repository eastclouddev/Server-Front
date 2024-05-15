<script lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue'

export default {
  components: {
    datepicker: VueDatePicker,
  },
  data() {
    const dateData = ref()
    const dateFormat = 'yyyy/MM/dd'

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

    return {
      categorys: ['メディア掲載', '機能アップデート', 'イベント情報'],
      DateOption: '公開日',
      CategoryOption: 'カテゴリ',
      pickCategoryFlag: 0,
      showDatepicker: false,
      dateData,
      dateFormat,
      ColoredDay,
    }
  },
  mounted() {
    this.pickCategoryFlag = 0
  },
  methods: {
    showCalender() {
      console.log(this.dateData)
      this.showDatepicker = true
    },
    closeDatePicker() {
      this.showDatepicker = false
      console.log('showDatepicker:', this.showDatepicker)
    },
    updateCategoryOption(e: any) {
      this.CategoryOption = e.target.value
    },
  },
  watch: {
    dateData(newVal) {
      if (newVal != undefined) {
        this.showDatepicker = false
      }
    },
    CategoryOption(newVal) {
      if (newVal == 'カテゴリ') {
        this.pickCategoryFlag = 1
      }
    },
  },
}
</script>

<template>
  <div class="framework">
    <div class="contents">
      <div class="dropDown">
        <div class="column">
          <div
            class="box default"
            v-if="dateData == undefined"
            @click="showCalender"
          >
            <p class="date">公開日</p>
          </div>
          <div class="box" v-else @click="showCalender">
            <p>{{ dateData }}</p>
          </div>
          <div class="calender">
            <datepicker
              v-if="showDatepicker === true"
              v-model="dateData"
              :format="dateFormat"
              :model-type="dateFormat"
              locale="ja"
              week-start="0"
              :enable-time-picker="false"
              auto-apply
              :day-class="ColoredDay"
            />
          </div>
        </div>
        <div class="categorys">
          <select class="category" @change="updateCategoryOption">
            <option selected disabled class="default">カテゴリ</option>
            <option
              v-for="(category, index) in categorys"
              :key="index"
              :value="category"
            >
              {{ category }}
            </option>
          </select>
        </div>
      </div>
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
.framework {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 1000px;
  margin-top: 30px;
  background-color: #f5f5f5;
  box-shadow: 3px 3px 10px 0 #d8d8d8;
  .contents {
    width: 760px;
    margin-top: 43px;
    .dropDown {
      width: 760px;
      display: flex;
      gap: 20px;
      .column {
        display: flex;
        flex-direction: column;
      }
      .box {
        width: 240px;
        height: 60px;
        background-color: #fff;
        border-radius: 5px;
        display: flex;
        align-items: center;
        padding-left: 24px;
        p {
          font-size: 18px;
          font-weight: 700;
          line-height: 28.8px;
        }
        select {
          width: 100%;
        }
      }
      .categorys {
        width: 240px;
        height: 60px;
        background-color: #fff;
        border-radius: 5px;
        position: relative;
        padding-left: 24px;

        .category {
          -webkit-appearance: none;
          appearance: none;
          &::-ms-expand {
            display: none;
          }
        }
      }
    }
  }
}
</style>
