<template>
  <table class="table_wrap" v-for="item in progress" :key="item.id">
  <tr class="d-flex flex-column">
    <th >名前</th>
    <td >{{ item.name }}</td>
  </tr>
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
          bg-color="#222222"
          buffer-color="#10BED2"
          buffer-opacity="1"
          buffer-value="80"
          color="#242424"
          height="12"
          :max="100"
          :value="parseInt(item.progressPercentage)"
          style="border-radius: 5px;">
        </v-progress-linear>
        <div class="picker">
          {{ item.progressPercentage }}
          <span style="font-size:0.7em;">%</span>
        </div>
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
      <td >
      <div class="d-flex align-center justify-center">
        <v-icon class="status-icon pr-3" :color="item.status === '完了' ? '#10BED2' : '#FF0000'">{{ statusIcon }}</v-icon>
        <span class="status">{{ status }}</span>
      </div>
    </td>
    </tr>
    <tr class="d-flex flex-column" style="width:100%;" >
      <th style="width: 100%;">残り時間</th>
      <td>{{ item.remainingTime }}</td>
    </tr>
  </div>
</table>
</template>

<script>
export default {
  data () {
    return {
      users:[],
      status: '',
      statusIcon: '',
      progress: [
        {
          name: '〇〇太郎',
          course_id:'',
          course: 'コースタイトル',
          attend: '12/25',
          progressPercentage:10,
          startDate:'2024/03/28',
          remainingTime:'5時間'
        },
        {
          name: '〇〇太郎',
          course_id:'',
          course: 'コースタイトル',
          attend: '12/25',
          progressPercentage:0,
          startDate:'2024/03/28',
          remainingTime:'5時間'
        },
        {
          name: '〇〇太郎',
          course_id:'',
          course: 'コースタイトル',
          attend: '12/25',
          progressPercentage:30,
          startDate:'2024/03/28',
          remainingTime:'5時間'
        },
      ],
    };
  },
  methods: {
    updateStatus(value) {
      if (value < 0) {
        this.status = '遅延状況';
        this.statusIcon = 'mdi-alert';
      } else if (value >= 0 && value < 50) {
        this.status = 'その調子！';
        this.statusIcon = 'mdi-fire';
      } else {
        this.status = '完了';
        this.statusIcon = 'mdi-check-circle';
      }
    }
  },
  mounted() {

    this.updateStatus(this.progressValue);
  }
};

</script>

<style lang="scss" scoped>
.picker {
  width: 22px;
  height: 22px;
  color: #FFFFFF;
  font-size: 0.6em;
  background-color: #FF5A36;
  border-radius: 50%;
  z-index: 1;
  text-align: center;
  line-height: 22px;
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