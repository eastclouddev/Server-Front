<script setup lang="ts">
import { ref } from 'vue'

// 表示する問題番号
let queNum = ref(1)

// 問題テキスト
const ques = ref([
  {
    id: 1,
    text:
      '〇〇について××の場合、使用できないものを一つ選択してください。テキストが入ります。<br />' +
      '〇〇について××の場合、使用できないものを一つ選択してください。テキストが入ります。<br />' +
      '〇〇について××の場合、使用できないものを一つ選択してください。テキストが入ります。<br />',
  },
  {
    id: 2,
    text:
      '〇〇について××の場合、使用できないものを一つ選択してください。テキストが入ります。<br />' +
      '〇〇について××の場合、使用できないものを一つ選択してください。テキストが入ります。<br />' +
      '〇〇について××の場合、使用できないものを一つ選択してください。テキストが入ります。<br />' +
      'part.2<br />',
  },
  {
    id: 3,
    text:
      '〇〇について××の場合、使用できないものを一つ選択してください。テキストが入ります。<br />' +
      '〇〇について××の場合、使用できないものを一つ選択してください。テキストが入ります。<br />' +
      '〇〇について××の場合、使用できないものを一つ選択してください。テキストが入ります。<br />' +
      'part.3<br />',
  },
])

const hint = ref(
  'ヒント：テキストが入りますテキストが入りますテキストが入ります。'
)

// 表示する選択肢
const answers = ref([
  { id: 1, text: 'aaaaaaaaaaaa' },
  { id: 2, text: 'bbbbbbbbbbbb' },
  { id: 3, text: 'cccccccccccc' },
  { id: 4, text: 'dddddddddddd' },
])

// 選択した答えを入れる箱
const selectAns = ref(Array(ques.value.length).fill(null))

const NextQue = () => {
  queNum.value += 1
  console.log(queNum.value)
}

const BackQue = () => {
  queNum.value -= 1
  console.log(queNum.value)
}

const test = () => {
  console.log(selectAns)
}
</script>

<!-- 左上 -->
<template>
  <v-row class="test">
    <v-col>
      <v-card class="text" variant="text" v-for="(que, index) in ques">
        <v-card v-if="queNum === que.id">
          <v-card-title> 問題{{ que.id }} </v-card-title>
          <v-card-text class="que-sentence" v-html="que.text"></v-card-text>
          <v-card-text class="hint">
            <v-icon>mdi-lightbulb-on-20</v-icon>
            {{ hint }}
          </v-card-text>
          <v-radio-group
            class="choice"
            v-model="selectAns[que.id - 1]"
            hide-details
          >
            <v-radio
              v-for="(answer, index) in answers"
              class="answer"
              :key="index"
              :label="answer.text"
              :value="answer.id"
              color="#ff5a36"
            />
          </v-radio-group>
          <v-card-actions class="Btns">
            <v-btn class="skip">スキップ</v-btn>
            <v-btn class="checkAns">解答を見る</v-btn>
          </v-card-actions>
        </v-card>
      </v-card>
    </v-col>
  </v-row>
  <v-card-actions class="shiftBtn back">
    <v-btn v-if="queNum === 1" class="back beginning" :disabled="true">
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-btn v-else class="" @click="BackQue">
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
  </v-card-actions>
  <v-card-actions class="shiftBtn next">
    <v-btn v-if="queNum === ques.length" class="next end" :disabled="true">
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
    <v-btn v-else class="" @click="NextQue">
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </v-card-actions>
</template>

<style scoped lang="scss">
.test {
  width: 830px;
  padding: 0;
  font-size: 16px;
  position: relative;
  * {
    padding: 0;
    margin: 0;
    font-weight: 400;
    font-family: 'Noto Sans';
  }
  .v-col {
    padding: 0 69.5px;
    .text {
      width: 690px;
      .v-card-title {
        font-weight: 700;
        line-height: 21.79px;
        margin-bottom: 8px;
      }
      .v-card-text {
        line-height: 21.79px;
        &.que-sentence {
          margin-bottom: 31px;
        }
        &.hint {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 0 1px;
          margin-bottom: 54px;
          i {
            width: 20px;
            height: 20px;
            color: #ff5a36;
            font-size: 20px;
          }
        }
      }
      .choice {
        margin-bottom: 29px;
        z-index: 2;
        .v-input__control {
          .v-selection-control-group {
            .answer {
              --v-selection-control-size: 50px;
              display: flex;
              border: 0.5px solid #292737;
              border-radius: 5px;
              margin-bottom: 8px;
              &:nth-child(4) {
                margin-bottom: 0;
              }
            }
          }
        }
      }
      .Btns {
        justify-content: right;
        gap: 10px;
        min-height: 45px;
        button {
          margin: 0;
          height: 100%;
          font-size: 16px;
          line-height: 21.79px;
          &.skip {
            border: 1px solid #ff5a36;
            color: #ff5a36;
            border-radius: 5px;
            padding: 10.6px 23.42px;
          }
          &.checkAns {
            padding: 11.6px 19.7px;
            background-color: #ff5a36;
            color: #fff;
          }
        }
      }
    }
  }
}

.shiftBtn {
  position: absolute;
  max-width: 30px;
  width: 30px;
  top: 50%;
  justify-content: space-between;
  &.back {
    left: 0;
  }
  &.next {
    right: 0;
  }
  button {
    min-width: 30px;
    width: 30px;
    height: 30px;
    border: 2.5px solid #292737;
    .v-icon {
      min-width: none;
      font-size: 28px;
      ::before {
        font-weight: bold;
      }
    }
  }
}
</style>
