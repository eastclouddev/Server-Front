<!-- 右 -->
<script setup lang="ts">
import PlayBtn from '~/assets/playBtn.svg'

// 仮データ
const sections = [
  {
    title: 'セクション1',
    time: 15,
    curriculums: [
      {
        title: 'カリキュラム/タイトル',
        time: 150,
      },
      {
        title: 'カリキュラム/タイトル',
        time: 330,
      },
      {
        title: 'カリキュラム/タイトル',
        time: 120,
      },
      {
        title: 'カリキュラム/タイトル',
        time: 240,
      },
    ],
  },
  {
    title: 'セクション2',
    time: 11,
    curriculums: [
      {
        title: 'カリキュラム/タイトル',
        time: 150,
      },
      {
        title: 'カリキュラム/タイトル',
        time: 330,
      },
      {
        title: 'カリキュラム/タイトル',
        time: 120,
      },
      {
        title: 'カリキュラム/タイトル',
        time: 240,
      },
    ],
  },
  {
    title: 'セクション3',
    time: 13,
    curriculums: [
      {
        title: 'カリキュラム/タイトル',
        time: 150,
      },
      {
        title: 'カリキュラム/タイトル',
        time: 330,
      },
      {
        title: 'カリキュラム/タイトル',
        time: 120,
      },
      {
        title: 'カリキュラム/タイトル',
        time: 240,
      },
    ],
  },
  {
    title: 'セクション4',
    time: 21,
    curriculums: [
      {
        title: 'カリキュラム/タイトル',
        time: 150,
      },
      {
        title: 'カリキュラム/タイトル',
        time: 330,
      },
      {
        title: 'カリキュラム/タイトル',
        time: 120,
      },
      {
        title: 'カリキュラム/タイトル',
        time: 240,
      },
    ],
  },
  {
    title: 'セクション5',
    time: 24,
    curriculums: [
      {
        title: 'カリキュラム/タイトル',
        time: 150,
      },
      {
        title: 'カリキュラム/タイトル',
        time: 330,
      },
      {
        title: 'カリキュラム/タイトル',
        time: 120,
      },
      {
        title: 'カリキュラム/タイトル',
        time: 240,
      },
    ],
  },
  {
    title: 'セクション6',
    time: 8,
    curriculums: [
      {
        title: 'カリキュラム/タイトル',
        time: 150,
      },
      {
        title: 'カリキュラム/タイトル',
        time: 330,
      },
      {
        title: 'カリキュラム/タイトル',
        time: 120,
      },
      {
        title: 'カリキュラム/タイトル',
        time: 240,
      },
    ],
  },
  {
    title: 'セクション7',
    time: 21,
    curriculums: [
      {
        title: 'カリキュラム/タイトル',
        time: 150,
      },
      {
        title: 'カリキュラム/タイトル',
        time: 330,
      },
      {
        title: 'カリキュラム/タイトル',
        time: 120,
      },
      {
        title: 'カリキュラム/タイトル',
        time: 240,
      },
    ],
  },
  {
    title: 'セクション8',
    time: 24,
    curriculums: [
      {
        title: 'カリキュラム/タイトル',
        time: 150,
      },
      {
        title: 'カリキュラム/タイトル',
        time: 330,
      },
      {
        title: 'カリキュラム/タイトル',
        time: 120,
      },
      {
        title: 'カリキュラム/タイトル',
        time: 240,
      },
    ],
  },
  {
    title: 'セクション9',
    time: 8,
    curriculums: [
      {
        title: 'カリキュラム/タイトル',
        time: 150,
      },
      {
        title: 'カリキュラム/タイトル',
        time: 330,
      },
      {
        title: 'カリキュラム/タイトル',
        time: 120,
      },
      {
        title: 'カリキュラム/タイトル',
        time: 240,
      },
    ],
  },
]

const isClose = ref(new Array(sections.length).fill(true))
const isSectionOpened = (num: number) => {
  if (isClose.value[num] === true) {
    const allAreTrue = isClose.value.every(value => value)
    if (!allAreTrue) {
      isClose.value = isClose.value.map(() => true)
    }
  }

  isClose.value[num] = !isClose.value[num]
  console.log('ind: ' + num + ', isClose: ' + isClose.value[num])
}

const isChecked = ref(new Array(10).fill(false))
const CheckIt = (num: number) => {
  isChecked.value[num] = !isChecked.value[num]
}

const formatTime = (min: number) => {
  const m = Math.floor(min / 60)
  const s = min % 60

  const formattedM = m.toString().padStart(2, '0')
  const formattedS = s.toString().padStart(2, '0')

  return `${formattedM}:${formattedS}`
};

const route = useRoute();
const showTitle = ref(route.path !== '/course/description');

</script>

<template>
  <v-row>
    <v-col class="title" v-if="showTitle">
      <v-card-title>コースの内容</v-card-title>
    </v-col>
    <v-col v-for="(sec, num) in sections" class="section" :key="num">
      <v-card variant="text" @click="isSectionOpened(num)" :ripple="false">
        <v-card-title>{{ sec.title }}</v-card-title>
        <v-card-text>
          <v-icon>mdi-clock-outline</v-icon>
          {{ sec.time }} 分
        </v-card-text>
        <v-icon v-if="isClose[num]">mdi-chevron-down</v-icon>
        <v-icon v-else>mdi-chevron-up</v-icon>
      </v-card>
      <v-card
        v-if="isClose[num] === false"
        v-for="(cur, ind) in sections[num].curriculums"
        class="curriculum"
        variant="text"
      >
        <v-card-text class="checkBox">
          <v-checkbox
            :key="ind"
            v-model="isChecked[ind]"
            disabled
            hide-details
          />
          {{ ind + 1 + '.' + cur.title }}
        </v-card-text>

        <v-card-text>
          <v-img :src="PlayBtn" />
          {{ formatTime(cur.time) }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  --v-disabled-opacity: 1;
}

.v-input--disabled {
  color: #ff5a36;
}
.v-row {
  gap: 10px !important;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  .v-col {
    width: 100%;
  }
  .title {
    margin-bottom: 14px;
    .v-card-title {
      font-size: 18px;
      font-weight: 700;
    }
  }
  .section {
    .v-card {
      font-family: 'Noto Sans';
      background-color: #fff7ec;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 24px;
      &:hover {
        cursor: pointer;
      }
      .v-card-title {
        font-size: 16px;
        font-weight: 700;
        line-height: 25.6px;
        width: 70%;
      }
      .v-card-text {
        display: flex;
        align-items: center;
        width: auto;
        font-size: 14px;
        font-weight: 700;
        line-height: 22.4px;
        .v-icon {
          color: #ff5a36;
          font-size: 21px;
          margin-left: 0;
          margin-right: 4px;
        }
      }
      .v-icon {
        font-size: 16px;
        margin-left: 8px;
      }
    }
    .curriculum {
      width: 100%;
      background-color: #fff;
      margin: 0;
      padding: 8px 24px;
      display: flex;
      flex-direction: column;
      justify-content: left;
      margin-bottom: 5px;
      .v-input {
        width: 100%;
        font-size: 14px;
        font-weight: 400;
        line-height: 22.4px;
      }
      .v-card-text {
        display: flex;
        align-items: center;
        justify-content: left;
        width: 100%;
        padding: 0 30px;
        font-weight: 400;
        &.checkBox {
          padding: 0;
          gap: 8px;
          * {
            --v-input-control-height: 20px;
            --v-selection-control-size: 20px;
          }
        }
        .v-checkbox {
          width: 20px;
          height: 20px;
        }

        .v-img {
          max-width: 16px;
          height: 16px;
        }
      }
    }
  }
}
</style>
