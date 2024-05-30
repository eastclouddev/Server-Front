<!-- コースタイトル、概要、画像 -->
<script setup lang="ts">
import { ref, computed, watch, defineProps } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import IMG from '~/assets/no_img.png'

type Post = {
  title: string
  img: string
  text: string
  time: number
  num: number
}

const props = defineProps<{
  items: Post[]
}>()

// dev
const repeatedItems = computed(() => {
  let result: Post[] = []
  for (let i = 0; i < 3; i++) {
    result = result.concat(props.items)
  }
  return result
})

const items = ref(repeatedItems.value)
// const items = ref(props.items)
const isSP = useMediaQuery('(max-width: 768px)')
const readText = (text: string) => {
  let len = 0
  let count = 0
  for (const c of text) {
    const clen = c.match(/[ -~]/) ? 0.5 : 1
    len += clen
    if (len <= 60) {
      if (clen == 0.5) count += 1
    }
  }
  if (count > 10) {
    if (len > 70) {
      const tmp = text.match(/.{58}/g)
      if (tmp) {
        text = tmp[0] + '…'
      }
    }
  } else {
    if (len > 70) {
      const tmp = text.match(/.{53}/g)
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
        <v-row class="content">
          <v-col class="icon">
            <v-img :src="item.img" />
          </v-col>
          <v-col class="text">
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-text>
              <template v-if="isSP">
                {{ readText(item.text) }}
              </template>
              <template v-else>
                {{ item.text }}
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
        </v-row>
        <v-row class="btn">
          <v-col>
            <v-btn>学習する</v-btn>
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
          .v-card-title {
            font-size: 18px;
            font-weight: 700;
            line-height: 24.52px;
            overflow: initial;
            white-space: initial;
            margin-bottom: 16px;
          }
          .v-card-text {
            font-size: 14px;
            font-weight: 400;
            line-height: 19.07px;
            margin-bottom: 16px;
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
        }
      }
      .btn {
        width: 100%;
        height: 48px;
        flex: none;
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
          }
        }
        .btn {
          height: 95px;
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
