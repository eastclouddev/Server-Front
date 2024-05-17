
<template>
    <v-table density="compact" class="mb-5 table_wrap" >
    <thead style="color: #FFFFFF; background-color: #292737;" >
      <tr>
        <th class="text-center pa-0" style="font-size:0.8rem; font-weight: bold;border: 2px solid #F5F5F5;border-radius: 5px;">請求対象月</th>
        <th class="text-center pa-0" style="font-weight: bold;border: 2px solid #F5F5F5;border-radius: 5px;">支払日</th>
        <th class="text-center pa-0" style="font-weight: bold;border: 2px solid #F5F5F5;border-radius: 5px;">金額</th>
        <th class="text-center pa-0" style="font-weight: bold;border: 2px solid #F5F5F5;border-radius: 5px;">ステータス</th>
        <th class="text-center pa-0" style="font-weight: bold;border: 2px solid #F5F5F5;border-radius: 5px;">請求書</th>

      </tr>
    </thead>
    <tbody>
<tr v-for="(item, index) in progress" :key="item.id"
  :style="{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#EAF4F9', height: '50px' }">
  <td style="border-left: 2px solid #F5F5F5; border-right: 2px solid #F5F5F5; width:100px;">{{ item.name }}</td>
  <td style="border-left: 2px solid #F5F5F5; border-right: 2px solid #F5F5F5; width:220px;">
    {{ item.course }}
  </td>
  <td class="text-center" style="border-left: 2px solid #F5F5F5; border-right: 2px solid #F5F5F5; width:80px;">{{ item.attend }}</td>
  <td style="border-left: 2px solid #F5F5F5; border-right: 2px solid #F5F5F5; height:50px;" class="d-flex align-center justify-center pl-3 pr-3">
    <div class="d-flex align-center justify-end">
      <v-icon class="status-icon pr-3" :color="status === '完了' ? '#10BED2' : '#FF0000'">{{ statusIcon }}</v-icon>
      <span class="status">{{ status }}</span>
    </div>
  </td>
  <td class="text-center" style="border-left: 2px solid #F5F5F5; border-right: 2px solid #F5F5F5; width:100px;">
    <NuxtLink to="{{ item.course_id }}" style="color:#242424;" >{{ item.startDate }}</NuxtLink>
  </td>
</tr>
    </tbody>
  </v-table>

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
          name: '2024-01-01~2024-02-01',
          course: '2024-3-01',
          attend: '¥10,200',
          progressPercentage:'未対応',
          startDate:'請求書リンク',
        },
        {
          name: '〇〇太郎',
          course_id:'',
          course: 'コースタイトル',
          attend: '12/25',
          progressPercentage:0,
          startDate:'2024/03/28',
        },
        {
          name: '〇〇太郎',
          course_id:'',
          course: 'コースタイトル',
          attend: '12/25',
          progressPercentage:30,
          startDate:'2024/03/28',
        },
        {
          name: '〇〇太郎',
          course_id:'',
          course: 'コースタイトル',
          attend: '12/25',
          progressPercentage:50,
          startDate:'2024/03/28',
          remainingTime:'5時間'
        },
        {
          name: '〇〇太郎',
          course_id:'',
          course: 'コースタイトル',
          attend: '12/25',
          progressPercentage:100,
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
  @media (max-width: 768px) {
  .table_wrap {
    display: none;
  }
  }
  @media (min-width: 769px) {
  .table_wrap{
    display: block;
  }
  }
</style>