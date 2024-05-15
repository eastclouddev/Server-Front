<script setup lang="ts">
import AddBtn from '~/features/news/components/AddBtns.vue'

import { ref } from 'vue'

const isOn = ref([true])

const togglePublic = (index: number) => {
  const currentState = isOn.value[index]
  isOn.value[index] = !currentState
}
</script>

<template>
  <div class="framework center">
    <AddBtn />
    <div class="newsList">
      <!-- 後で、DBと連携 -->
      <div class="row" v-for="i in 8" :key="i">
        <div
          class="public"
          :class="{ on: isOn[i], off: !isOn[i] }"
          @click="togglePublic(i)"
        >
          <div class="gray_frame">
            <div class="is_public">
              <p v-if="isOn[i]">公開</p>
              <div class="CheckMark"></div>
              <p v-if="!isOn[i]">非公開</p>
            </div>
          </div>
        </div>
        <div class="news">
          <div class="date">
            <p>2024.3.12</p>
          </div>
          <div class="topic">
            <div class="sp">
              <div class="genre">
                <p>機能アップデート</p>
              </div>
              <div class="latest_sp">
                <p>New!</p>
              </div>
            </div>
            <div class="title">
              <RouterLink to="/news/manager/detail" class="RouterLink">
                Pythonの新しい講座が追加されました！
              </RouterLink>
              <!-- <p>Pythonの新しい講座が追加されました！</p> -->
            </div>
            <div class="latest_pc" v-if="i == 1">
              <p>New!</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div
          class="public"
          :class="{ on: isOn[9], off: !isOn[9] }"
          @click="togglePublic(9)"
        >
          <div class="gray_frame">
            <div class="is_public">
              <p v-if="isOn[9]">公開</p>
              <div class="CheckMark"></div>
              <p v-if="!isOn[9]">非公開</p>
            </div>
          </div>
        </div>
        <div class="news">
          <div class="date">
            <p>2024.4.01</p>
          </div>
          <div class="topic">
            <div class="genre">
              <p>メディア掲載</p>
            </div>
            <div class="title">
              <p>サーバーメンテナンスのお知らせ！</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div
          class="public"
          :class="{ on: isOn[10], off: !isOn[10] }"
          @click="togglePublic(10)"
        >
          <div class="gray_frame">
            <div class="is_public">
              <p v-if="isOn[10]">公開</p>
              <div class="CheckMark"></div>
              <p v-if="!isOn[10]">非公開</p>
            </div>
          </div>
        </div>
        <div class="news">
          <div class="date">
            <p>2024.5.25</p>
          </div>
          <div class="topic">
            <div class="genre">
              <p>イベント情報</p>
            </div>
            <div class="title">
              <p>メンタースレッドが新しくなりました！</p>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<!-- DBと連携させる場合
      (動作テストしていないので、不具合の可能性あり)

  <div class="row" v-for="(item, index) in newsItems" :key="index">
    <div
      class="public"
      :class="{ on: isOn[index], off: !isOn[index] }"
      @click="togglePublic(index)"
    >
      <div class="gray_frame">
        <div class="is_public">
          <p v-if="isOn[index]">公開</p>
          <div class="CheckMark"></div>
          <p v-else>非公開</p>
        </div>
      </div>
    </div>
    <div class="news">
      <div class="date">
        <p>{{ item.date }}</p>
      </div>
      <div class="topic">
        <div class="genre">
          <p>{{ item.genre }}</p>
        </div>
        <div class="title">
          <RouterLink :to="item.link" class="RouterLink">
            {{ item.title }}
          </RouterLink>
        </div>
      </div>
    </div>
  </div>

-->

<style scoped lang="scss">
.center {
  align-items: center;
  justify-content: center;
  display: flex;
}
.framework {
  background-color: #f5f5f5;
  box-shadow:
    3px 3px 5px 0 #d8d8d8,
    3px 3px 10px 0 #d8d8d8;
  width: 1000px;
  height: 1038px;
  min-height: (870 + 30 * 2) px;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
}
.newsList {
  width: 858px;
  height: 870px;
  margin: auto;
  margin-top: 20px;
  .row {
    display: flex;
  }
}
.public {
  background-color: #fff;
  height: 60px !important;
  margin-right: 21px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  &.on {
    .CheckMark {
      background-color: #ff5a36;
    }
  }
  &.off {
    .CheckMark {
      background-color: #ebebeb;
    }
  }
  .gray_frame {
    background-color: #ebebeb;
    padding: 5px 6px;
    margin: 10px;
    border-radius: 5px;
    .is_public {
      background-color: #fff;
      display: flex;
      text-align: center;
      align-items: center;
      padding: 4px 0;
      border-radius: 4px;

      &:hover {
        cursor: pointer;
      }
      p {
        width: 42px;
        font-size: 14px;
        font-weight: 400;
        line-height: 22.4px;
        font-family: 'Noto Sans';
        margin: 0 16px;
      }
      .CheckMark {
        width: 28.16px;
        height: 29px;
        border-radius: 5px;
        margin: 0 4px;
      }
    }
  }
}
.news {
  background-color: #fff;
  width: 699px !important;
  height: 60px !important;
  position: relative;
  display: flex;
  align-items: center;
  font-family: 'Noto Sans';
  padding: 0 40px;
  margin: auto;
  margin-bottom: 30px;

  .date {
    font-weight: 400;
    font-size: 14px;
    width: 60px;
    height: 19px;
    margin: 40px 0;
  }

  .topic {
    display: flex;
    width: 519px;
    margin: 0 20px;
    .genre {
      width: 104px;
      height: 24px;
      border-radius: 5px 5px 5px 5px;
      font-size: 12px;
      font-weight: 700;
      color: #fff;
      background-color: #ff5a36;
      margin: 0 10px;
      padding: 4px;
      text-align: center;
    }
    .title {
      margin: 0 10px;
      font-size: 14px;
      font-weight: 700;
      line-height: 19.07px;
      .RouterLink {
        text-decoration: none;
        color: #242424;
        &:hover {
          text-decoration: underline;
        }
        &:visited {
          color: inherit;
        }
      }
      p {
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .latest_pc {
      font-size: 14px;
      font-weight: 700;
      line-height: 19.07px;
      color: #ff5a36;
      margin-left: auto;
    }
    .latest_sp {
      display: none;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1000px) {
  .framework {
    width: 100%;
  }
  @media screen and (max-width: 860px) {
    .news {
      margin-left: auto;
      .topic {
        width: 100%;
      }
    }
    .public {
      margin-right: auto;
    }
    .newsList {
      width: 100%;
      .row {
        justify-content: space-between;
        gap: 10px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .framework {
    width: 708px;
    height: 2252px;
    padding-top: 60px;

    .newsList {
      width: 629px;
      height: 1968px;
      margin-top: 39px;
    }

    .public {
      height: 168px !important;
      margin-right: 10.23px;
      .gray_frame {
        padding: 10px;
        .is_public {
          padding: 14px 0;

          p {
            width: 90px;
            font-size: 30px;
            line-height: 48px;
          }
          .CheckMark {
            width: 46.77px;
            height: 48.16px;
            margin: 0 14px;
          }
        }
      }
    }
    .news {
      width: 400px !important;
      height: auto !important;
      flex-direction: column;
      align-items: normal;
      padding: 35px;
      gap: 7px;
      .date {
        margin: 0;
      }
      .topic {
        flex-direction: column;
        margin: 0;
        width: 100%;
        gap: 7px;
        .genre {
          width: 157px !important;
          height: auto;
          font-size: 16px;
          line-height: 21.79px;
          margin: 0;
        }
        .title {
          font-size: 26px;
          line-height: 35.41px;
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          .RouterLink {
            &:hover {
              text-decoration-thickness: 2px;
            }
          }
          p {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        .latest_pc {
          display: none;
        }
        .sp {
          display: flex;
          .latest_sp {
            display: initial;
            font-size: 16px;
            font-weight: 700;
            line-height: 21.79px;
            color: #ff5a36;
            margin-left: 19px;
          }
        }
      }
    }
  }
}
</style>
