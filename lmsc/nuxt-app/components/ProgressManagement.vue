
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
        <v-table density="compact" class="mb-5">
    <thead style="color: #FFFFFF; background-color: #292737;" >
      <tr>
        <th class="text-center" style="font-weight:bold;">名前</th>
        <th class="text-center" style="font-weight:bold;">コース</th>
        <th class="text-center" style="font-weight:bold;">受講数</th>
        <th class="text-center" style="font-weight:bold;">進捗状況</th>
        <th class="text-center" style="font-weight:bold;">開始日</th>
        <th class="text-center" style="font-weight:bold;">ステータス</th>
        <th class="text-center" style="font-weight:bold;">残り時間</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in progress" :key="item.name"
      :style="{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#EAF4F9', height: '50px' }">
        <td>{{ item.name }}</td>
        <td>{{ item.couse }}</td>
        <td>{{ item.attend }}</td>
        <td>{{ item.indicator }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.status }}</td>
        <td>{{ item.remaining }}</td>
      </tr>
    </tbody>
  </v-table>
    <div class="d-flex justify-end">
      <Button color="#FF5136" buttonText="進捗管理一覧へ"></Button>
    </div>
    </v-sheet>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      progress: [
        {
          name: 'ユーザーA',
          couse: 'コースタイトル',
          attend: '12/25',
          indicator:'インジケータの表示',
          date:'2024/03/28',
          status:'遅延',
          remaining:'5時間'
        },
        {
          name: '北海道',
          couse: 1,
          attend: 83456.20,
          indicator:'s',
          date:'a',
          status:'a',
          remaining:'a'
        },
        {
          name: '北海道',
          couse: 1,
          attend: 83456.20,
          indicator:'s',
          date:'a',
          status:'a',
          remaining:'a'
        },
        {
          name: '北海道',
          couse: 1,
          attend: 83456.20,
          indicator:'s',
          date:'a',
          status:'a',
          remaining:'a'
        },
        {
          name: '北海道',
          couse: 1,
          attend: 83456.20,
          indicator:'s',
          date:'a',
          status:'a',
          remaining:'a'
        },
      ],
    }
  },
}
</script>