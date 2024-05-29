
<template>
  <v-container class="mx-aout">
    <v-card flat color="#FFF7EC" class="d-flex align-center pt-2 pb-2 pl-6" width="25rem"
    style="border-radius: 5px 5px 0 0; box-shadow: 4px 0px 6px -3px rgba(0, 0, 0, 0.2);">
    <img src="/assets/study.svg" alt="study" style="padding:0 10px 0 0;">
      <label style="font-size: 1.5em; font-weight: bold;">学習記録</label>
    </v-card>
    <v-card flat class="pt-2 pb-2 pl-6" color="#FFF7EC"
    style="border-radius: 0 5px 5px 5px; box-shadow: 4px 5px 6px -3px rgba(0, 0, 0, 0.2);">
      <v-sheet class="d-flex justify-space-between mx-auto mt-8 mb-8" width="60rem" color="#FFF7EC">
        <div style="background-color:#FFFFFF; font-weight: bold; width:14rem; padding:20px 30px 0 30px;">
          <span  style="display: flex; align-items: center;">
            <p style="margin-right: 10px;">総合学習時間</p><img src="/assets/clock.svg" alt="">
          </span>
          <span  style="display: flex; align-items: flex-end;">
            <p style="margin: 0; padding: 0; font-size: 6em;">{{ totalStudyHours }}</p>
            <p style="padding:0 10px 35px;">時間</p>
          </span>
        </div>
        <v-sheet  color="#FFF7EC" class="pa-4" width="27rem" style="display:flex; flex-direction: column; justify-content: space-between;">
          <div>
          <span  style="display: flex; align-items: flex-end; padding-bottom:10px;">
            <p style="color: #242424; width: 10rem;">前回学習日</p>
            <p style="font-weight: bold;">{{ lastLoginDate }}</p>
          </span>
          <span  style="display: flex; align-items: flex-end;">
            <p style="color: #242424; width: 10rem;">連続学習時間</p>
            <p style="font-weight: bold;">{{ consecutiveDays }}日間継続中！</p>
          </span>
        </div>
        <div>
<<<<<<< HEAD:lmsc/nuxt-app/features/auth/dashboard/components/StudyItem.vue
          <NuxtLink to="/" style="color:#242424;" >学習記録</NuxtLink>
=======
          <a href="" style="color:#222222;">学習記録詳細</a>
>>>>>>> origin/develop:lmsc/nuxt-app/components/StudyItem.vue
        </div>
        </v-sheet>
        <v-sheet color="#FFF7EC" class="d-flex" style="align-items: flex-end;">
          <Button type="submit" color="#FF5A36" style="font-size: 1em;" buttonText="報告する" width="13rem"></Button>
        </v-sheet>
      </v-sheet>
    </v-card>
  </v-container>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const lastLoginDate = ref('')
const consecutiveDays = ref(0)

// ログイン日を取得
const fetchLastLoginDate = () => {
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const today = new Date();
  const weekday = weekdays[today.getDay()];
  const formattedDate = today.toLocaleDateString('ja-JP', options);
  lastLoginDate.value = formattedDate + `(${weekday})`;
}

// 連続でログインした日数を取得
const fetchConsecutiveDays = () => {
  consecutiveDays.value = 7
}

// 総合学習時間を取得する関数
const totalStudyHours = ref(0)
const fetchTotalStudyHours = () => {
  totalStudyHours.value = 38
}

onMounted(() => {
  fetchLastLoginDate()
  fetchConsecutiveDays()
  fetchTotalStudyHours()
})
</script>