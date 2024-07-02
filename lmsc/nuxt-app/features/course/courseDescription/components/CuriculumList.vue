<template>
  <div>
    <div class="d-flex">
      <img src="/assets/curriculum.svg" class="pr-5" />
      <v-card-title class="pt-2 pb-2 pl-0 sp_title" style="font-size: 1.6em; font-weight: bold" color="#242424">
        カリキュラム一覧
      </v-card-title>
    </div>
    <v-divider class="#CFCFCF" thickness="1"></v-divider>
    <v-card flat class="d-flex align-center pa-10 mb-6 mt-6" style="border-radius: 5px 5px 0 0; box-shadow: 4px 0px 6px -3px rgba(0, 0, 0, 0.2);">
      <v-row>
        <v-col v-for="(sec, num) in sections" :key="num" class="section">
          <v-card variant="text" @click="isSectionOpened(num)" :ripple="false">
            <v-card-title>{{ sec.title }}</v-card-title>
            <v-card-text>
              <v-icon>mdi-clock-outline</v-icon>
              {{ sec.duration }} 分
            </v-card-text>
            <v-icon v-if="isClose[num]">mdi-chevron-down</v-icon>
            <v-icon v-else>mdi-chevron-up</v-icon>
          </v-card>
          <template v-if="!isClose[num]">
            <v-card v-for="(cur, ind) in sec.curriculums" class="curriculum" variant="text" :key="ind">
              <v-card-text class="checkBox">
                <v-checkbox :key="ind" v-model="isChecked[ind]" disabled hide-details />
                {{ ind + 1 + '.' + cur.title }}
              </v-card-text>
              <v-card-text>
                <v-img :src="PlayBtn" />
                {{ formatTime(cur.duration) }}
              </v-card-text>
            </v-card>
          </template>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useGetCourse } from '~/features/course/api/getCourse.ts';
import PlayBtn from '~/assets/playBtn.svg';

const courseId = 1;  // 取得したいコースのIDを設定
const { data, error, status } = useGetCourse(courseId);

const sections = ref([]);
watch(data, (newData) => {
  if (newData) {
    sections.value = newData.sections.map(section => ({
      title: section.title,
      duration: section.duration,
      curriculums: section.curriculums.map(curriculum => ({
        title: curriculum.title,
        duration: curriculum.duration
      }))
    }));
  }
});

const isClose = ref([]);
watch(sections, (newSections) => {
  isClose.value = new Array(newSections.length).fill(true);
});

const isSectionOpened = (num) => {
  if (isClose.value[num] === true) {
    const allAreTrue = isClose.value.every((value) => value);
    if (!allAreTrue) {
      isClose.value = isClose.value.map(() => true);
    }
  }
  isClose.value[num] = !isClose.value[num];
};

const isChecked = ref(new Array(10).fill(false));
const CheckIt = (num) => {
  isChecked.value[num] = !isChecked.value[num];
};

const formatTime = (duration) => {
  const [hours, minutes, seconds] = duration.split(':').map(Number);
  const totalMinutes = hours * 60 + minutes + Math.round(seconds / 60);
  const formattedM = Math.floor(totalMinutes / 60).toString().padStart(2, '0');
  const formattedS = (totalMinutes % 60).toString().padStart(2, '0');
  return `${formattedM}:${formattedS}`;
};
</script>

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