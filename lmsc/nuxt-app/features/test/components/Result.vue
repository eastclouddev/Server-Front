<script setup lang="ts">
import CorrectMark from '~/assets/bulb_circle_inv.svg'
import IncorrectMark from '~/assets/exclamation_mark.svg'
const msg = 'お疲れ様でした！'
const text =
  '〇〇について××の場合、使用できないものを一つ選択してください。テキストが入ります。テキストが入ります。テキストが入ります。'
const headline = ['理解している点', '復習が必要な点']
const icons = [CorrectMark, IncorrectMark]
</script>

<template>
  <v-row class="result">
    <v-col>
      <v-card class="msg" variant="text">
        <v-card-text>{{ msg }}</v-card-text>
      </v-card>
      <v-card class="text" v-for="(head, ind) in headline" variant="text">
        <v-card-text>
          <v-img :src="icons[ind]" :class="{ incorrect: ind === 1 }" />
          {{ head }}
        </v-card-text>
        <v-list>
          <v-list-item v-for="i in 3">
            <v-list-item-icon>
              <v-icon>mdi-circle-small</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{ text }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
      <v-card-actions>
        <v-btn class="again">もう一度テストを受ける</v-btn>
        <v-btn class="next">次へ</v-btn>
      </v-card-actions>
    </v-col>
  </v-row>
</template>

<style lang="scss">
* {
  font-size: 16px;
  line-height: 21.79px;
  font-family: 'Noto Sans';
}

.result {
  width: 830px;
  flex-direction: column;
  align-items: center;
  .v-col {
    width: 691px;

    .msg {
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 37px;
      background-color: #fafafa;
      margin-bottom: 9px;
      .v-card-text {
        font-size: 16px;
        font-weight: 700;
      }
    }
    .text {
      margin-top: 45px;
      .v-card-text {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 8px;

        .v-img {
          max-width: 29px;
          height: 29px;

          &.incorrect {
            filter: invert(1);
          }
        }
      }
      .v-list {
        .v-list-item--density-default {
          min-height: 0;
        }
        .v-list-item {
          padding-inline: 0;
          .v-list-item__content {
            display: flex;
            align-items: start;
          }
          .v-list-item-title {
            font-size: 16px;
            line-height: 21.79px;
            white-space: initial;
          }
          v-list-item-icon {
            max-width: 22px;
            height: 22px;
            .v-icon {
              padding-bottom: 1.5px;
              max-width: 22px;
              height: 22px;
              font-size: 22px;
            }
          }
        }
      }
    }
    .v-card-actions {
      display: flex;
      align-items: center;
      justify-content: right;
      margin-top: 68px;
      .again {
        height: 45px;
        border: 1px solid #ff5a36;
        color: #ff5a36;
        padding: 4px 24px;
      }
      .next {
        height: 45px;
        color: #fff;
        background-color: #ff5a36;
        padding: 4px 24px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  * {
    font-size: 24px;
    line-height: 32.69px;
  }

  .v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line {
    padding-inline: 0;
  }

  .result {
    width: 703px;
    .v-col {
      width: 100%;
      .msg {
        height: 79px;
        padding-left: 43px;
        margin-bottom: 0;
        .v-card-text {
          font-size: 24px;
        }
      }
      .text {
        margin: 0 auto;
        margin-top: 61px;
        width: 592px;
        .v-card-text {
          font-size: 24px;
          width: 591px;
          .v-img {
            max-width: 45px;
            height: 45px;
          }
        }
        .v-list {
          .v-list-item {
            .v-list-item-title {
              font-size: 24px;
              line-height: 32.69px;
            }
            v-list-item-icon {
              max-width: 32.7px;
              height: 32.7px;
              .v-icon {
                max-width: 32.7px;
                height: 32.7px;
                font-size: 30px;
                padding-bottom: 5px;
              }
            }
          }
        }
      }
      .v-card-actions {
        flex-direction: column;
        justify-content: center;
        margin-top: 61px;
        gap: 25px;
        .v-btn ~ .v-btn:not(.v-btn-toggle .v-btn) {
          margin-inline-start: 0;
        }
        .v-btn {
          width: 100%;
          height: 95px;
          .v-btn__content {
            font-size: 35px;
            font-weight: 700;
            line-height: 47.67px;
          }

          &.again {
            border: 3px solid #ff5a36;
            color: #ff5a36;
            padding: 0;
          }
          &.next {
            color: #fff;
            background-color: #ff5a36;
            padding: 0;
          }
        }
      }
    }
  }
}
</style>
