<script setup lang="ts">
import { ref } from 'vue'
import PythonIcon from '~/assets/python_icon.svg'
import HWIcon from '~/assets/hw_account_icon.svg'
import Section from '~/features/test/components/CourseSection.vue'

const sampleInfo = `スキルレベル：初級
学習時間：30.5時間`

const sampleComment = `【本コースの概要】
本コースは、Webディレクターの経験がない人でもWebディレクターの仕事を一通り学び、実践することができるコースになっております。

案件を獲得する方法、顧客に響く提案の仕方、価格交渉時の注意点、スケジュールがズレたときの対象方法など、ディレクションを行っていく上で大切なポイントについて学ぶことができます。

【Web制作のこれから】
現在、Web制作は副業として人気が高い仕事の１つです。しかし、正しいディレクション方法が分からないと、失敗してしまうことが多いです。例えば、顧客の想像するホームページと違いトラブルが起きたり、顧客から原稿・画像が納品日の３日前に送られてきて徹夜でホームページを作成したり、デザイン修正が多すぎてコストがふくらんでしまったりと様々な失敗があります。

しかし、あらかじめ失敗する理由や対策方法を知っていれば、顧客とのトラブルやミスを減らすことができます。また、価格競争が激しいWeb業界の中で、どのようにすれば利益を残すことができるのかを学ぶことができます。もちろん、勉強する必要はありますが、難しくはありません。稼げるか稼げないかは、知っているか知らないかの差です。

最初は、副業で５万円を稼ぎ、売上が１００万円を超えてから独立するのもありですし、会社員を続けながら毎月２０〜３０万円の売上を上げることもありです。

また、Web制作はいつでもどこでも行うことができる仕事です。そのため、あなたのライフスタイルに合わせて仕事を行うことができます。例えば、Netflixで気になるドラマを夜に見つけてしまい夜通しで見てから寝て、昼頃から仕事をすることだってできるのです。まさに新時代の働き方です。

【過去の実績】
・大学のホームページ制作
・売上１４０億円企業のホームページ制作
・NPO法人のホームページ制作
・税理士事務所のホームページ制作
・商工会議所が参画する事業のホームページ制作　などなど

何を学びますか？
ディレクターの仕事の流れ
案件を獲得する方法
ヒアリング方法
顧客に響く提案する方法
効果的な分析方法
提案書の作成方法
見積もりのやり方

受講における必須条件または前提条件はありますか？
Web・ホームページに興味がある
このコースの対象受講者:
初めてディレクションを行う方
ディレクションの全体的な流れを知りたい方
ホームページの制作方法に興味がある方
ホームページのディレクション方法を知りたい方
顧客に響く提案方法を知りたい方`

const contents = ref({
  title: 'Python 3 入門 + 応用 &#9312;',
  info: sampleInfo,
  comment: sampleComment,
})

const hw_items = ref([
  {
    name: '山田 太郎',
    title: '文字列の配列について。',
    desc: `文字列の配列でカンマを付け忘れているため、文字列の配列でカンマを付け忘れているため、文字列の配列でカンマを付け忘れているため、
            文字列の配列でカンマを付け忘れているため、文字列の配列でカンマを付け忘れているため、文字列の配列でカンマを付け忘れているため、`,
    day_ago: 3,
    comment: [
      {
        name: '山田 太郎',
        text: `メンターの返信を表示。
                テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                テキストが入ります。テキストが入ります。
                テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                テキストが入ります。テキストが入ります。`,
        day_ago: 5,
      },
      {
        name: '山田 太郎',
        text: `テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                テキストが入ります。テキストが入ります。
                テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。`,
        day_ago: 3,
      },
    ],
  },
  {
    name: '山田 太郎',
    title: '組み込み関数について。',
    desc: `組み込み関数/組み込み型と同じ名前の変数を、組み込み関数/組み込み型と同じ名前の変数を、組み込み関数/組み込み型と同じ名前の変数を、`,
    day_ago: 3,
    comment: [
      {
        name: '山田 太郎',
        text: `メンターの返信を表示。
                テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                テキストが入ります。テキストが入ります。
                テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                テキストが入ります。テキストが入ります。`,
        day_ago: 5,
      },
      {
        name: '山田 太郎',
        text: `テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                テキストが入ります。テキストが入ります。
                テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。`,
        day_ago: 3,
      },
      {
        name: '山田 太郎',
        text: `テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                テキストが入ります。テキストが入ります。
                テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。`,
        day_ago: 3,
      },
    ],
  },
  {
    name: '山田 太郎',
    title: 'モジュール名について。',
    desc: `モジュール名と同名のクラスや関数でインポモジュール名と同名のクラスや関数でインポモジュール名と同名のクラスや関数でインポモジュール名と`,
    day_ago: 3,
    comment: [
      {
        name: '山田 太郎',
        text: `メンターの返信を表示。
                テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                テキストが入ります。テキストが入ります。
                テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                テキストが入ります。テキストが入ります。`,
        day_ago: 3,
      },
    ],
  },
])

const commentNum = ref(0)

const commentCount = () => {
  let num = 0
  for (const item of hw_items.value) {
    num += item.comment.length
  }
  commentNum.value = num
  console.log(commentNum.value)
}
onMounted(() => {
  commentCount()
})

const formatText = (val: string) => {
  return val.replace(/\n/g, '<br />')
}

const isOverflow = ref(true)
const ViewMore = () => {
  isOverflow.value = false
}

const isMode = ref('概要')
const ModeChange = (num: number) => {
  if (num === 1) {
    isMode.value = '概要'
  } else if (num === 2) {
    isMode.value = '質問'
  } else if (num === 3) {
    isMode.value = '課題提出'
  } else if (num === 0) {
    isMode.value = 'コース内容'
  }
}
</script>

<template>
  <v-row class="detail">
    <v-col class="mode">
      <v-card-actions>
        <v-card
          class="sp"
          variant="text"
          @click="ModeChange(0)"
          :ripple="false"
        >
          <v-card-title :class="{ selected: isMode === 'コース内容' }">
            コース内容
          </v-card-title>
        </v-card>
        <v-card variant="text" @click="ModeChange(1)" :ripple="false">
          <v-card-title :class="{ selected: isMode === '概要' }">
            概要
          </v-card-title>
        </v-card>
        <v-card variant="text" @click="ModeChange(2)" :ripple="false">
          <v-card-title :class="{ selected: isMode === '質問' }">
            質問
          </v-card-title>
        </v-card>
        <v-card variant="text" @click="ModeChange(3)" :ripple="false">
          <v-card-title :class="{ selected: isMode === '課題提出' }">
            課題提出
          </v-card-title>
        </v-card>
      </v-card-actions>
    </v-col>
    <v-col class="contents">
      <v-row class="sp" v-if="isMode === 'コース内容'">
        <v-col>
          <Section />
        </v-col>
      </v-row>
      <v-row v-if="isMode === '概要'">
        <v-col class="title">
          <v-img :src="PythonIcon"></v-img>
          <v-card-title v-html="contents.title" />
        </v-col>
        <v-col class="info">
          <v-card-text>基本情報</v-card-text>
          <v-card-text v-html="formatText(contents.info)" />
        </v-col>
        <v-col class="comment">
          <v-card-text>解説</v-card-text>
          <v-card-text
            ref="commentText"
            v-html="formatText(contents.comment)"
            :class="{ overflow: isOverflow }"
          />
        </v-col>
        <v-col v-if="isOverflow === true" class="viewMore">
          <v-card-text @click="ViewMore">もっとみる</v-card-text>
        </v-col>
      </v-row>
      <v-row v-if="isMode === '質問'">
        <v-col class="title">
          <v-img :src="PythonIcon" />
          <v-card-title v-html="contents.title + '  質問'" />
        </v-col>
        <v-col class="info">
          <v-card-text>基本情報</v-card-text>
          <v-card-text v-html="formatText(contents.info)" />
        </v-col>
        <v-col class="comment">
          <v-card-text>解説</v-card-text>
          <v-card-text
            ref="commentText"
            v-html="formatText(contents.comment)"
            :class="{ overflow: isOverflow }"
          />
        </v-col>
        <v-col v-if="isOverflow === true" class="viewMore">
          <v-card-text @click="ViewMore">もっとみる</v-card-text>
        </v-col>
      </v-row>
      <v-row class="hw" v-if="isMode === '課題提出'">
        <v-col class="hw_info">
          <NuxtLink>質問一覧</NuxtLink>
          <v-icon>mdi-chevron-right</v-icon>
          <p>コードについて</p>
        </v-col>
        <v-col class="hw_header">
          <h2>このコースに関する課題提出 ({{ commentNum }})</h2>
          <v-btn>課題提出依頼</v-btn>
        </v-col>
        <v-col class="hw_item" v-for="item in hw_items">
          <v-row class="icon">
            <v-img :src="HWIcon"></v-img>
          </v-row>
          <v-row>
            <v-col class="hw_title"> {{ item.title }} </v-col>
            <v-col class="hw_desc">{{ item.desc }}</v-col>
            <v-col class="hw_explanation">
              <div>
                <p class="hw_name">{{ item.name }}</p>
                <p class="hw_day">{{ item.day_ago }}日前</p>
              </div>
              <div class="hw_comments">
                <p class="hw_comment">{{ item.comment.length }}</p>
                <v-icon>mdi-comment-text</v-icon>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.07px;
}

.v-card-title.selected {
  font-weight: 700;
}

.v-theme--light {
  --v-hover-opacity: 0;
}

.detail {
  gap: 0 !important;
  width: 100%;
  display: flex;
  flex-direction: column;
  .v-col {
    .v-card {
      background-color: #f5f5f5;
    }
  }
  .mode {
    .v-card-actions {
      min-height: 0;
      gap: 16px;
      .v-card {
        width: 104.5px;
        height: 42px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px 5px 0 0;
        &:hover {
          background-color: #f5f5f5;
          cursor: pointer;
        }
        &.sp {
          display: none;
        }
        .v-card-title {
          &.selected {
            font-weight: 700;
          }
        }
      }
    }
  }
  .contents {
    width: 100%;
    background-color: #f5f5f5;
    border-radius: 0 5px 5px 5px;
    .v-row {
      display: flex;
      flex-direction: column;
      padding: 35px 25.8px 0;
      &.sp {
        display: none;
      }

      .title {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 0.5px dotted #242424;
        .v-img {
          width: 56.45px;
          height: 61px;
        }
        .v-card-title {
          width: 100%;
          margin-left: 40.2px;
          font-size: 25px;
          font-weight: 700;
          line-height: 34.05px;
        }
      }
      .info {
        display: flex;
        padding-top: 17px;
        padding-bottom: 20px;
        border-bottom: 0.5px dotted #242424;
        .v-card-text:nth-child(1) {
          width: 68px;
        }
        .v-card-text:nth-child(2) {
          width: 100%;
          line-height: 21.59px;
          padding-left: 28px;
        }
      }
      .comment {
        display: flex;
        padding-top: 18px;
        padding-bottom: 2em;
        .v-card-text:nth-child(1) {
          width: 68px;
        }
        .v-card-text:nth-child(2) {
          width: 100%;
          padding-left: 28px;
          &.overflow {
            height: calc(19.07px * 12);
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-all;
          }
        }
      }
      .viewMore {
        display: flex;
        justify-content: right;
        margin-bottom: 59px;
        .v-card-text {
          max-width: 80px;
          text-decoration: underline;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
  .hw {
    margin: 0 27px 40px;
    .hw_info {
      display: flex;
      align-items: center;
      color: #ff5a36;
      font-size: 16px;
      gap: 16px;
      margin-bottom: 24px;
      .v-icon {
        color: #242424;
        &::before {
          font-size: 16px;
        }
      }
      .hw_day {
        color: #242424;
      }
    }
    .hw_header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;
      h2 {
        font-size: 20px;
        font-weight: 700;
        line-height: 27.24px;
      }
      .v-btn {
        height: 45px;
        padding: 0 24px;
        color: #fff;
        background-color: #ff5a36;
        border-radius: 5px;
        font-size: 16px;
        font-weight: 700;
        line-height: 21.79px;
      }
    }
    .hw_item {
      display: flex;
      align-items: start;
      margin-bottom: 24px;
      border-bottom: 0.5px dotted #242424;
      * {
        margin: 0;
        padding: 0;
      }
      .icon {
        width: 50px;
        .v-img {
          width: 50px;
          .v-img__img--contain {
            height: 50px;
          }
        }
      }
      .hw_title {
        font-size: 16px;
        font-weight: 700;
        line-height: 21.79px;
        margin-bottom: 8px;
      }
      .hw_desc {
        width: 604px;
        font-size: 14px;
        font-weight: 400;
        line-height: 19.07px;
        text-wrap: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        min-height: 20px;
        margin-bottom: 16px;
      }
      .hw_explanation {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;
        .hw_name {
          font-size: 12px;
          color: #ff5a36;
        }
        .hw_day {
          font-size: 12px;
          color: #b5b5b5;
          margin-left: 8px;
        }
        .hw_comments {
          p {
            font-size: 16px;
            font-weight: 700;
            margin-right: 4px;
          }
          .v-icon {
            color: #ff5a36;
          }
        }
        div {
          display: flex;
          align-items: center;
          p {
            font-size: 12px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .detail {
    .mode {
      .v-card-actions {
        .v-card {
          width: auto;
          padding: 11.5px 22.15px;
          &.sp {
            display: initial;
          }
        }
      }
    }
    .contents {
      .v-row {
        &.sp {
          display: initial;
        }
      }
    }
    .hw {
      .hw_header {
        flex-direction: column;
        justify-content: left;
        align-items: start;
        h2 {
          font-size: 32px;
          line-height: 43.58px;
        }
        .v-btn {
          width: 100%;
          height: 95px;
          font-size: 35px;
          line-height: 47.67px;
          margin-top: 40px;
        }
      }
      .hw_item {
        .icon {
          width: 80px;
          margin-right: 24px;
          .v-img {
            width: 80px;
            .v-img__img--contain {
              height: 80px;
            }
          }
        }
        .hw_title {
          font-size: 28px;
          line-height: 38.14px;
        }
        .hw_desc {
          width: 500px;
          font-size: 24px;
          line-height: 32.69px;
          min-height: 34px;
        }
        .hw_explanation {
          .hw_name,
          .hw_day {
            font-size: 24px;
            line-height: 32.69px;
          }
          .hw_comments {
            p {
              font-size: 32px;
              line-height: 43.58px;
              margin-right: 20px;
            }
            .v-icon {
              &::before {
                font-size: 44px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
