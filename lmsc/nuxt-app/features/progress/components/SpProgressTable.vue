<template>
  <div>
  <table class="table_wrap" v-for="item in progress" :key="item.id">
  <div class="d-flex" style="width:100%;">
  <tr v-if="showNameColumn" class="d-flex flex-column" style="width:100%;">
    <th >名前</th>
    <td >{{ item.name }}</td>
  </tr>
  <tr v-if="showCompanyName" class="d-flex flex-column" style="width:100%;">
    <th >所属会社</th>
    <td >{{ item.company }}</td>
  </tr>
  </div>
  <div class="d-flex" style="width:100%;">
    <tr class="d-flex flex-column" style="width:100%;">
      <th >コース</th>
      <td>
        <NuxtLink to="{{ item.course_id }}" style="color:#242424;" >{{ item.course }}</NuxtLink>
      </td>
    </tr>
    <tr class="d-flex flex-column" style="width:100%;">
      <th style="width: 100%;">受講数</th>
      <td >{{ item.attend }}</td>
    </tr>
  </div>
  <tr class="d-flex flex-column" style="width:100%;">
  <th style="width: 100%;">進捗状況</th>
    <td>
      <div class="d-flex align-center indicator">
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
            style="border-radius: 5px; position:relative;">
          </v-progress-linear>
        <div class="picker">{{ item.progressPercentage }}%</div>
      </div>
    </td>
  </tr>
  <div class="d-flex" style="width:100%;">
    <tr class="d-flex flex-column" style="width:100%;">
      <th style="width: 100%;">開始日</th>
      <td >{{ item.startDate }}</td>
    </tr>
    <tr class="d-flex flex-column" style="width:100%;">
      <th style=" width: 100%;">ステータス</th>
      <td>
        <div class="d-flex align-center justify-center">
          <v-icon class="status-icon" :color="getStatus(item.progressPercentage).color">{{ getStatus(item.progressPercentage).icon }}</v-icon>
          <span class="status">{{ getStatus(item.progressPercentage).status }}</span>
        </div>
    </td>
    </tr>
    <tr class="d-flex flex-column" style="width:100%;" >
      <th style="width: 100%;">残り時間</th>
      <td>{{ item.remainingTime }}</td>
    </tr>
  </div>
</table>
</div>
</template>

<script>
export default {
  props: {
    showCompanyName: {
      type: Boolean,
      default: false
    },
    showNameColumn: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      users:[],
      status: '',
      statusIcon: '',
      progress: [
        {
          name: '〇〇太郎',
          company:'ABC社',
          course_id: '',
          course: 'コースタイトル',
          attend: '12/25',
          progressPercentage: 10,
          bufferValue: 50,
          startDate: '2024/03/28',
          remainingTime: '5時間'
        },
        {
          name: '〇〇太郎',
          company:'ABC社',
          course_id: '',
          course: 'コースタイトル',
          attend: '12/25',
          progressPercentage: 0,
          bufferValue: 20,
          startDate: '2024/03/28',
          remainingTime: '5時間'
        },
        {
          name: '〇〇太郎',
          company:'ABC社',
          course_id: '',
          course: 'コースタイトル',
          attend: '12/25',
          progressPercentage: 100,
          bufferValue: 20,
          startDate: '2024/03/28',
          remainingTime: '5時間'
        },
      ],
    };
  },
methods: {
    getStatus(progressPercentage) {
      if (progressPercentage < 20) {
        return { status: '遅延状況', icon: 'mdi-alert', color: '#FF0000' };
      } else if (progressPercentage >= 20 && progressPercentage < 100) {
        return { status: 'その調子！', icon: 'mdi-fire', color: '#FF0000' };
      } else {
        return { status: '完了', icon: 'mdi-check-circle', color: '#10BED2' };
      }
    }
}
}

</script>

<style lang="scss" scoped>
.picker {
  width: 35px;
  height: 35px;
  color: #FFFFFF;
  font-size: 0.7em;
  background-color: #FF5A36;
  border-radius: 50%;
  z-index: 1;
  text-align: center;
  line-height: 35px;
  margin-left: 7px;
}

.table_wrap {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 40px;
}

.table_wrap th,
.table_wrap td {
  border: 3px solid #F5F5F5;
  padding: 8px;
}
th {
  background-color: #FFFAF4;
  color: #292737;
  font-weight: bold;
}
td {
  line-height: 50px;
  text-align: center;
  background-color: #FFFFFF;
}
.indicator {
    max-width: 70%;
    margin: auto;
    height: 70px;
  }
  @media (max-width: 768px) {
  .table_wrap {
    display: block;
  }
  }
  @media (min-width: 769px) {
  .table_wrap{
    display: none;
  }
  }
</style>