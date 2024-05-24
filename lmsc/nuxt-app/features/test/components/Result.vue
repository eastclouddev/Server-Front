<script setup lang="ts">
import CorrectMark from '~/assets/bulb_circle_inv.svg'
import IncorrectMark from '~/assets/exclamation_mark.svg'
const msg = 'お疲れ様でした！'
const text =
  '〇〇について××の場合、使用できないものを一つ選択してください。テキストが入ります。'
const headline = ['理解している点', '復習が必要な点']
const icons = [CorrectMark, IncorrectMark]
;('〇〇について××の場合、使用できないものを一つ選択してください。テキストが入ります。')
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
          <v-list-item v-for="i in 3" :left="true" dense>
            <v-list-item-icon>
              <v-icon>mdi-circle-small</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{ text }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
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
        font-weight: 700;
      }
    }
    .text {
      margin-top: 45px;

      .v-card-text {
        display: flex;
        align-items: center;
        gap: 8px;
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
          .v-list-item__content {
            display: flex;
          }
          .v-list-item-title {
            line-height: 21.79px;
          }
        }
      }
    }
  }
}
</style>
