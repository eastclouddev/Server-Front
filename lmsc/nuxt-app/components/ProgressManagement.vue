
<template>
  <v-container class="mx-aout">
    <v-card flat color="#FFF7EC"  class="d-flex align-center pt-2 pb-2 pl-6" width="20rem"
    style="border-radius: 5px 5px 0 0; box-shadow: 4px 0px 6px -3px rgba(0, 0, 0, 0.2);">
    <img src="/assets/progress.svg" alt="study" style="padding:0 10px 0 0;">
      <label style="font-size: 1.5em; font-weight: bold;">進捗管理</label>
    </v-card>
    <v-card flat class="pt-2 pb-8 pl-6" color="#FFF7EC"
    style="border-radius: 0 5px 5px 5px; box-shadow: 4px 5px 6px -3px rgba(0, 0, 0, 0.2);">
    <v-sheet class="mx-auto mt-8 mb-8" width="60rem" color="#FFF7EC">
    <v-table density="compact" class="mb-5" >
    <thead style="color: #FFFFFF; background-color: #292737;" >
      <tr >
        <th class="text-center" style="font-weight: bold;border: 2px solid #FFF7EC;border-radius: 5px;">名前</th>
        <th class="text-center" style="font-weight: bold;border: 2px solid #FFF7EC;border-radius: 5px;">コース</th>
        <th class="text-center" style="font-weight: bold;border: 2px solid #FFF7EC;border-radius: 5px;">受講数</th>
        <th class="text-center" style="font-weight: bold;border: 2px solid #FFF7EC;border-radius: 5px;">進捗状況</th>
        <th class="text-center" style="font-weight: bold;border: 2px solid #FFF7EC;border-radius: 5px;">開始日</th>
        <th class="text-center" style="font-weight: bold;border: 2px solid #FFF7EC;border-radius: 5px;">ステータス</th>
        <th class="text-center" style="font-weight: bold;border: 2px solid #FFF7EC;border-radius: 5px;">残り時間</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in progress" :key="item.id"
        :style="{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#EAF4F9', height: '50px' }">
        <td style="border-left: 2px solid #FFF7EC; border-right: 2px solid #FFF7EC;">{{ item.name }}</td>
        <td style="border-left: 2px solid #FFF7EC; border-right: 2px solid #FFF7EC;">{{ item.course }}</td>
        <td class="text-center" style="border-left: 2px solid #FFF7EC; border-right: 2px solid #FFF7EC;">{{ item.attend }}</td>
        <td style="border-left: 2px solid #FFF7EC; border-right: 2px solid #FFF7EC;">インジケーター</td>
        <td class="text-center" style="border-left: 2px solid #FFF7EC; border-right: 2px solid #FFF7EC;">{{ item.startDate }}</td>
        <td class="text-center" style="border-left: 2px solid #FFF7EC; border-right: 2px solid #FFF7EC;">{{ item.status }}</td>
        <td class="text-center" style="border-left: 2px solid #FFF7EC; border-right: 2px solid #FFF7EC;">{{ item.remainingTime }}</td>
      </tr>
    </tbody>
  </v-table>
    <div class="d-flex justify-end">
      <Button color="#FF5136" style="width:20rem;"  buttonText="進捗管理一覧へ"></Button>
    </div>
    </v-sheet>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      users:[],
      progress: [
        {
          name: 'a',
          course: 'コースタイトル',
          attend: '12/25',
          startDate:'2024/03/28',
          status:'遅延',
          remainingTime:'5時間'
        },
        {
          name: 'ユーザーA',
          course: 'コースタイトル',
          attend: '12/25',
          indicator:'インジケータの表示',
          startDate:'2024/03/28',
          status:'遅延',
          remainingTime:'5時間'
        },
        {
          name: 'ユーザーA',
          course: 'コースタイトル',
          attend: '12/25',
          indicator:'インジケータの表示',
          startDate:'2024/03/28',
          status:'遅延',
          remainingTime:'5時間'
        },
        {
          name: 'ユーザーA',
          course: 'コースタイトル',
          attend: '12/25',
          indicator:'インジケータの表示',
          startDate:'2024/03/28',
          status:'遅延',
          remainingTime:'5時間'
        },
        {
          name: 'ユーザーA',
          course: 'コースタイトル',
          attend: '12/25',
          indicator:'インジケータの表示',
          startDate:'2024/03/28',
          status:'遅延',
          remainingTime:'5時間'
        },
      ],
    };
  },
  // created() {
  //   this.fetchUsers();
  // },
}
</script>