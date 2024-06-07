<!-- コースタイトル、概要、画像 -->
<script setup lang="ts">
import { ref, computed, defineProps } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import Indicator from '~/features/course/courseList/components/courseIndicator.vue'
import IMG from '~/assets/no_img.png'

type Data = {
  course_id: number // コースのID
  title: string // コースのタイトル
  description: string // コースの説明
  created_user: number // コースを作成したユーザーのID
  thumbnail_url: string // コースのサムネイル画像のURL
  created_at: string // コースの作成日時 (ISO 8601形式)
}

type Option = {
  type: string
  len: number
}

// テストデータ用の型
type TestData = {
  title: string
  img: string
  description: string
  time: number
  num: number
  completed: number
}

const props = defineProps<{
  courses: Data[]
  items: TestData[]
  options: Option
}>()

// dev
const repeatedItems = computed(() => {
  let resultItem: TestData[] = []
  for (let i = 0; i < 3; i++) {
    resultItem = resultItem.concat(props.items)
  }
  return resultItem
})

const items = ref(repeatedItems.value)
// const items = ref(props.items)
const type = ref(props.options.type)
const max_len = ref(props.options.len)

const posts = reactive({
  len: items.value.map(item => item.num),
  completed: items.value.map(item => item.completed),
})

const isSP = useMediaQuery('(max-width: 768px)')
const readText = (text: string, max_len: number) => {
  let len = 0
  let count = 0
  for (const c of text) {
    const clen = c.match(/[ -~]/) ? 0.5 : 1
    len += clen
    if (len <= max_len) {
      if (clen == 0.5) count += 1
    }
  }
  if (count > 10) {
    if (len > max_len) {
      const cut = max_len - 12
      const regex = new RegExp(`.{1,${cut}}`, 'g')
      const tmp = text.match(regex)
      if (tmp) {
        text = tmp[0] + '…'
      }
    }
  } else {
    if (len > max_len) {
      const cut = max_len - 17
      const regex = new RegExp(`.{1,${cut}}`, 'g')
      const tmp = text.match(regex)
      if (tmp) {
        text = tmp[0] + '…'
      }
    }
  }

  return text
}
</script>

<template>
  <v-container class="frame">
    <v-row class="item" v-for="(item, ind) in items" :key="ind">
      <v-col class="left">
        <v-img class="img" :src="IMG" />
      </v-col>
      <v-col class="right">
        <v-row class="content" :class="{ history: type == 'History' }">
          <v-col class="icon">
            <v-img :src="item.img" />
          </v-col>
          <v-col class="text" v-if="type == 'List'">
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-text>
              <template v-if="isSP">
                {{ readText(item.description, max_len) }}
              </template>
              <template v-else>
                {{ item.description }}
              </template>
            </v-card-text>
            <div class="flex">
              <v-card-text>
                <v-icon>mdi-clock-outline</v-icon>
                終了想定時間 : {{ item.time }}時間
              </v-card-text>
              <v-card-text>
                <v-icon>mdi-book-open-blank-variant-outline</v-icon>
                全{{ item.num }}セッション
              </v-card-text>
            </div>
          </v-col>
          <v-col class="text" v-if="type == 'History'">
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-text v-if="isSP" class="sp">
              {{ item.description }}
            </v-card-text>
            <v-card-text v-else>
              {{ readText(item.description, max_len) }}
            </v-card-text>
            <v-card-text class="sec">
              <v-icon>mdi-book-open-blank-variant-outline</v-icon>
              {{ item.completed }} / {{ item.num }}
              <span>セッション</span>
            </v-card-text>
          </v-col>
        </v-row>
        <v-row class="indicator" v-if="type == 'History'">
          <v-col>
            <Indicator
              :length="posts.len[ind]"
              :completed="posts.completed[ind]"
            />
          </v-col>
        </v-row>
        <v-row class="btn" :class="{ history: type == 'History' }">
          <v-col>
            <v-btn v-if="type == 'List'">学習する</v-btn>
            <v-btn v-if="type == 'History'">学習を再開する</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.v-row {
  flex-wrap: nowrap;
  .v-row {
    margin: 0;
  }
}

.v-col {
  flex-basis: auto;
  padding: 0;
}

.v-card-title,
.v-card-text {
  padding: 0;
}

.frame {
  width: 100%;
  background-color: #f5f5f5;
  box-shadow: 3px 3px 10 0 #d8d8d8;
  margin-top: 50px;
  padding: 40px;
  gap: 40px;
  display: flex;
  flex-direction: column;
  .item {
    width: 100%;
    padding: 40px 24px;
    gap: 24px;
    display: flex;
    background-color: #fff;
    border-radius: 5px;
    .left {
      width: 353.33px;
      height: 265px;
    }
    .right {
      width: auto;
      display: flex;
      flex-direction: column;
      * {
        letter-spacing: 0;
      }
      .content {
        display: flex;
        height: 217px;
        gap: 9px;
        &.history {
          height: 115px;
          .text {
            .v-card-title {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
        .icon {
          width: 39px;
          .v-img {
            width: 39px;
            height: 50px;
          }
        }
        .text {
          width: 446px;
          display: flex;
          flex-direction: column;
          padding-bottom: 40px;
          gap: 16px;
          .v-card-title {
            font-size: 18px;
            font-weight: 700;
            line-height: 24.52px;
            overflow: initial;
            white-space: initial;
          }
          .v-card-text {
            font-size: 14px;
            font-weight: 400;
            line-height: 19.07px;
          }
          .flex {
            display: flex;
            justify-content: start;
            gap: 16px;
            .v-card-text {
              display: flex;
              flex-grow: 0;
              align-items: center;
              font-weight: 700;
              gap: 4px;

              .v-icon {
                color: #ff5a36;
              }
            }
          }
          .sec {
            display: flex;
            align-items: center;
            font-weight: 700;
            gap: 4px;
            .v-icon {
              color: #ff5a36;
            }
          }
        }
      }
      .indicator {
        width: 100%;
        height: 88px;
      }
      .btn {
        width: 100%;
        height: 48px;
        flex-direction: column;
        .v-col {
          height: 48px;
          .v-btn {
            width: 100%;
            height: 100%;
            background-color: #ff5a36;
            color: #fff;
            font-size: 18px;
            font-weight: 700;
            line-height: 24.52px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .frame {
    margin-top: 65px;
    padding: 60px 30px;
    .item {
      flex-direction: column;
      gap: 40px;
      padding: 40px 50px 60px;
      .left {
        width: 100%;
        height: 100%;
      }
      .right {
        .content {
          height: 100%;
          gap: 20px;
          &.history {
            height: 127px;
            margin-bottom: 40px;
            .text {
              padding: 0;
              gap: 0;
              .v-card-text {
                padding: 0;
                margin: 0;
                &.sp {
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
              }
            }
          }
          .icon {
            width: 98px;
            .v-img {
              width: 98px;
              height: 127px;
            }
          }
          .text {
            width: 429px;
            .v-card-title {
              font-size: 32px;
              line-height: 43.58px;
            }
            .v-card-text {
              height: 99px;
              font-size: 24px;
              line-height: 32.69px;
              margin-bottom: 40px;
            }
            .flex {
              flex-direction: column;
              height: 82px;
              gap: 16px;
              .v-card-text {
                margin: 0;
              }
            }
            .sec {
              gap: 0;
              padding: 0;
              .v-icon {
                margin-right: 10px;
                width: 44px;
                height: 44px;
                &::before {
                  font-size: 44px;
                }
              }
              span {
                font-size: 20px;
                line-height: 27.24px;
              }
            }
          }
        }
        .indicator {
          height: 175px;
        }
        .btn {
          height: 95px;
          &.history {
            margin-top: 40px;
          }
          .v-col {
            height: 95px;
            .v-btn {
              font-size: 35px;
              line-height: 47.67px;
            }
          }
        }
      }
    }
  }
}
</style>
