<template>
  <v-table density="compact" class="mb-5 table_wrap">
    <thead style="color: #ffffff; background-color: #292737">
      <tr>
        <th
          v-if="showNameColumn"
          class="text-center pa-0"
          style="
            font-size: 0.8rem;
            font-weight: bold;
            border: 2px solid #f5f5f5;
            border-radius: 5px;
          "
        >
          名前
        </th>
        <th
          v-if="showCompanyName"
          class="text-center pa-0"
          style="
            font-weight: bold;
            border: 2px solid #f5f5f5;
            border-radius: 5px;
          "
        >
          所属会社
        </th>
        <th
          class="text-center pa-0"
          style="
            font-weight: bold;
            border: 2px solid #f5f5f5;
            border-radius: 5px;
          "
        >
          コース
        </th>
        <th
          class="text-center pa-0"
          style="
            font-weight: bold;
            border: 2px solid #f5f5f5;
            border-radius: 5px;
          "
        >
          受講数
        </th>
        <th
          class="text-center pa-0"
          style="
            font-weight: bold;
            border: 2px solid #f5f5f5;
            border-radius: 5px;
          "
        >
          進捗状況
        </th>
        <th
          class="text-center pa-0"
          style="
            font-weight: bold;
            border: 2px solid #f5f5f5;
            border-radius: 5px;
          "
        >
          開始日
        </th>
        <th
          class="text-center pa-0"
          style="
            font-weight: bold;
            border: 2px solid #f5f5f5;
            border-radius: 5px;
          "
        >
          ステータス
        </th>
        <th
          class="text-center pa-0"
          style="
            font-weight: bold;
            border: 2px solid #f5f5f5;
            border-radius: 5px;
          "
        >
          残り時間
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, index) in progress"
        :key="item.id"
        :style="{
          backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#FFF7EC',
          height: '50px',
        }"
      >
        <td
          v-if="showNameColumn"
          style="
            border-left: 2px solid #f5f5f5;
            border-right: 2px solid #f5f5f5;
            width: 100px;
          "
        >
          {{ item.name }}
        </td>
        <td
          v-if="showCompanyName"
          style="
            border-left: 2px solid #f5f5f5;
            border-right: 2px solid #f5f5f5;
            width: 100px;
          "
        >
          {{ item.company }}
        </td>
        <td
          style="
            border-left: 2px solid #f5f5f5;
            border-right: 2px solid #f5f5f5;
            width: 220px;
          "
        >
          <NuxtLink :to="item.course_id" style="color: #242424">{{
            item.course
          }}</NuxtLink>
        </td>
        <td
          class="text-center"
          style="
            border-left: 2px solid #f5f5f5;
            border-right: 2px solid #f5f5f5;
            width: 80px;
          "
        >
          {{ item.attend }}
        </td>
        <td
          style="
            border-left: 2px solid #f5f5f5;
            border-right: 2px solid #f5f5f5;
            height: 50px;
          "
          class="d-flex align-center justify-center pl-3 pr-3"
        >
          <v-progress-linear
            ref="progressBar"
            v-model="item.progressPercentage"
            :value="item.progressPercentage"
            :buffer-value="item.bufferValue"
            bg-color="#222222"
            buffer-color="#10BED2"
            buffer-opacity="1"
            color="#242424"
            height="18"
            max="100"
            style="border-radius: 5px; position: relative"
          >
          </v-progress-linear>
          <div class="picker">
            {{ item.progressPercentage }}<span style="font-size: 0.7em">%</span>
          </div>
        </td>
        <td
          class="text-center"
          style="
            border-left: 2px solid #f5f5f5;
            border-right: 2px solid #f5f5f5;
            width: 100px;
          "
        >
          {{ item.startDate }}
        </td>
        <td
          class="pa-0"
          style="
            border-left: 2px solid #f5f5f5;
            border-right: 2px solid #f5f5f5;
            width: 100px;
          "
        >
          <div class="d-flex align-center justify-center">
            <v-icon
              class="status-icon"
              :color="getStatus(item.progressPercentage).color"
              >{{ getStatus(item.progressPercentage).icon }}</v-icon
            >
            <span class="status">{{
              getStatus(item.progressPercentage).status
            }}</span>
          </div>
        </td>
        <td
          class="text-center"
          style="
            border-left: 2px solid #f5f5f5;
            border-right: 2px solid #f5f5f5;
            width: 80px;
          "
        >
          {{ item.remainingTime }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  props: {
    showNameColumn: {
      type: Boolean,
      default: true,
    },
    showCompanyName: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      progress: [
        {
          name: '〇〇太郎',
          company: 'ABC社',
          course_id: '',
          course: 'コースタイトル',
          attend: '12/25',
          progressPercentage: 10,
          bufferValue: 50,
          startDate: '2024/03/28',
          remainingTime: '5時間',
        },
        {
          name: '〇〇太郎',
          company: 'ABC社',
          course_id: '',
          course: 'コースタイトル',
          attend: '12/25',
          progressPercentage: 0,
          bufferValue: 20,
          startDate: '2024/03/28',
          remainingTime: '5時間',
        },
        {
          name: '〇〇太郎',
          company: 'ABC社',
          course_id: '',
          course: 'コースタイトル',
          attend: '12/25',
          progressPercentage: 30,
          bufferValue: 20,
          startDate: '2024/03/28',
          remainingTime: '5時間',
        },
        {
          name: '〇〇太郎',
          company: 'ABC社',
          course_id: '',
          course: 'コースタイトル',
          attend: '12/25',
          progressPercentage: 50,
          bufferValue: 20,
          startDate: '2024/03/28',
          remainingTime: '5時間',
        },
        {
          name: '〇〇太郎',
          company: 'ABC社',
          course_id: '',
          course: 'コースタイトル',
          attend: '12/25',
          progressPercentage: 100,
          bufferValue: 20,
          startDate: '2024/03/28',
          remainingTime: '5時間',
        },
      ],
    }
  },
  methods: {
    getStatus(progressPercentage) {
      if (progressPercentage < 20) {
        return { status: '遅延状況', icon: 'mdi-alert', color: '#FF0000' }
      } else if (progressPercentage >= 20 && progressPercentage < 100) {
        return { status: 'その調子！', icon: 'mdi-fire', color: '#FF0000' }
      } else {
        return { status: '完了', icon: 'mdi-check-circle', color: '#10BED2' }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.picker {
  width: 22px;
  height: 22px;
  color: #ffffff;
  font-size: 0.6em;
  background-color: #ff5a36;
  border-radius: 50%;
  z-index: 1;
  text-align: center;
  line-height: 22px;
  margin-left: 7px;
}
@media (max-width: 1279px) {
  .table_wrap {
    display: none;
  }
}
@media (min-width: 1280px) {
  .table_wrap {
    display: block;
  }
}
</style>
