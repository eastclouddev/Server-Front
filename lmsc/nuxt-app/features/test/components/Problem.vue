<script setup lang="ts">
import { ref } from 'vue'
import CorrectMark from '~/assets/bulb_circle.svg'
import IncorrectMark from '~/assets/exclamation_mark.svg'

const props = defineProps({
    text: Array
})
let arrayData: Array = props.text;

// 表示する問題番号
let queNum = ref(1)

// 問題テキスト
const ques = ref(new Array())
// 問題文の選択肢
const answers = ref(new Array())
// 正解
let correctNum = new Array()

for (let i = 0; i < arrayData.length; i++) {
    // 問題
    ques.value.push({
        id: i + 1,
        text: arrayData[i].question
    })
    // 選択肢
    let bufList = new Array();
    bufList.push({
        id: 1,
        text: arrayData[i].options["op1"]
    })
    bufList.push({
        id: 2,
        text: arrayData[i].options["op2"]
    })
    bufList.push({
        id: 3,
        text: arrayData[i].options["op3"]
    })
    bufList.push({
        id: 4,
        text: arrayData[i].options["op4"]
    })
    answers.value.push(bufList)
    // 正解
    correctNum.push(arrayData[i].correct_answer)
}

const hint = ref(
  'ヒント：テキストが入りますテキストが入りますテキストが入ります。'
)

// 選択した答えを入れる箱
const selectAns = ref(Array(ques.value.length).fill(null))

// 表示する選択肢
let answerData = ref(new Array)
answerData = answers.value[0]

const NextQue = () => {
  queNum.value += 1
  answerData = answers.value[queNum.value - 1]; // 選択肢の切替
}

const BackQue = () => {
  queNum.value -= 1
  answerData = answers.value[queNum.value - 1]; // 選択肢の切替
}

const test = () => {
  console.log(selectAns)
}

const ansFlag = ref(new Array(ques.value.length).fill(-1))
const Result = ref(new Array(ques.value.length).fill({ text: '', icon: '' }))
const Scoring = () => {
  for (let i = 0; i < ques.value.length; i++) {
    if (selectAns.value[ques.value[i].id - 1] === null) { // 未選択時は正誤判定・表示を行わない
        continue;
    }
    if (selectAns.value[ques.value[i].id - 1] === correctNum[i]) {
      ansFlag.value[i] = 1
    } else {
      ansFlag.value[i] = 0
    }
  }
  for (let i = 0; i < ansFlag.value.length; i++) {
    if (ansFlag.value[i] === 1) {
      Result.value[i] = { text: 'よくできました！', icon: CorrectMark }
    } else if (ansFlag.value[i] === 0) {
      Result.value[i] = {
        text: '不正解です。もう一度確かめてみましょう。',
        icon: IncorrectMark,
      }
    }
  }
  console.log(ansFlag)
  console.log(Result)
}
</script>

<!-- 左上 -->
<template>
  <v-row class="test">
    <v-col class="left">
      <v-card-actions class="shiftBtn back">
        <v-btn v-if="queNum === 1" class="back beginning" :disabled="true">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn v-else class="" @click="BackQue">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-card-actions>
    </v-col>
    <v-col class="center">
      <v-card class="text" variant="text" v-for="(que, index) in ques">
        <v-card
          v-if="queNum === que.id"
          class="result"
          :class="{
            correct: ansFlag[que.id - 1] === 1,
            incorrect: ansFlag[que.id - 1] === 0,
          }"
          variant="text"
          hide-details
        >
          <v-card-text>
            <v-img :src="Result[que.id - 1].icon" />
            {{ Result[que.id - 1].text }}
          </v-card-text>
        </v-card>
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
              v-for="(answer, index) in answerData"
              class="answer"
              :key="index"
              :label="answer.text"
              :value="answer.id"
              color="#ff5a36"
            />
          </v-radio-group>
          <v-card-actions class="shiftBtn sp">
            <v-btn v-if="queNum === 1" class="back beginning" :disabled="true">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn v-else class="" @click="BackQue">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn
              v-if="queNum === ques.length"
              class="next end"
              :disabled="true"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
            <v-btn v-else class="" @click="NextQue">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-card-actions>
          <v-card-actions class="Btns">
            <v-btn class="skip" @click="NextQue">スキップ</v-btn>
            <v-btn class="checkAns" @click="Scoring">解答を見る</v-btn>
          </v-card-actions>
        </v-card>
      </v-card>
    </v-col>
    <v-col class="right">
      <v-card-actions class="shiftBtn next">
        <v-btn v-if="queNum === ques.length" class="next end" :disabled="true">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn v-else class="" @click="NextQue">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.test {
  width: 830px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .left,
  .right {
    width: 65px;
    display: flex;
  }
  .right {
    justify-content: right;
  }
  * {
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Noto Sans';
  }
  .v-col {
    .text {
      width: 690px;
      .result {
        display: none;
        align-items: center;
        justify-content: left;
        height: 56px;
        color: #fff;
        margin-bottom: 60px;
        border-radius: 5px;
        &.correct {
          display: flex;
          background-color: #ff5a36;
        }
        &.incorrect {
          display: flex;
          background-color: #292737;
        }
        .v-card-text {
          display: flex;
          align-items: center;
          font-weight: 700;
          line-height: 21.79px;
          margin-left: 31px;
          gap: 18px;
          .v-img {
            max-width: 29px;
            width: 29px;
            height: 29px;
          }
        }
      }
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
  position: relative;
  max-width: 30px;
  width: 30px;
  top: 50%;
  &.sp {
    display: none;
  }
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
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    .v-icon {
      min-width: none;
      font-size: 27.5px;
      ::before {
        font-weight: bold;
      }
    }
  }
}

.v-theme--light {
  --v-medium-emphasis-opacity: 1;
}

@media screen and (max-width: 768px) {
  .test {
    width: 100%;
    font-size: 24px;
    .left,
    .right {
      display: none;
    }
    * {
      font-size: 24px;
    }
    .v-col {
      .text {
        width: 591px;
        margin: 0 auto;
        .v-card-title {
          line-height: 32.69px;
          margin-bottom: 13px;
        }
        .v-card-text {
          line-height: 32.69px;
          &.que-sentence {
            margin-bottom: 53px;
          }
          &.hint {
            gap: 8px;
            padding: 0;
            align-items: start;
            margin-bottom: 59px;
            i {
              width: 30px;
              height: 30px;
              font-size: 30px;
            }
          }
        }
        .choice {
          margin-bottom: 59.45px;
          .v-input__control {
            .v-selection-control-group {
              .answer {
                --v-selection-control-size: 80.4px;
                margin-bottom: 11px;
              }
            }
          }
        }
        .Btns {
          display: flex;
          flex-direction: column;
          gap: 25px;
          min-height: 215px;
          padding: 0 0.5px;
          button {
            font-size: 35px;
            line-height: 47.67px;
            * {
              font-weight: 700;
            }
            &.skip {
              border: 3px solid #ff5a36;
              padding: 20.5px 236.65px;
            }
            &.checkAns {
              padding: 23.5px 226.1px;
            }
          }
        }
      }
    }
  }
  .shiftBtn.sp {
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    width: 100%;
    top: 0;
    margin-bottom: 59px;
    button {
      min-width: 60px;
      width: 60px;
      height: 60px;
      border: 2.14px solid #292737;
      .v-icon {
        font-size: 50px;
      }
    }
  }
}
</style>
