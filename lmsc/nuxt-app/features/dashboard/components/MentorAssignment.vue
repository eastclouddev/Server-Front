
<template>
  <v-container class="mx-aout">
    <v-card flat color="#F5F5F5"  class="d-flex align-center pt-2 pb-2 pl-6" width="25rem"
    style="border-radius: 5px 5px 0 0; box-shadow: 4px 0px 6px -3px rgba(0, 0, 0, 0.2);">
    <img src="/assets/account.svg" alt="study" style="padding:0 10px 0 0;">
      <label style="font-size: 1.5em; font-weight: bold;">各メンター担当受講者数</label>
    </v-card>
    <v-card flat class="pt-2 pb-8 pl-6" color="#F5F5F5"
    style="border-radius: 0 5px 5px 5px; box-shadow: 4px 5px 6px -3px rgba(0, 0, 0, 0.2);">
    <v-sheet class="mx-auto mt-8 mb-8" width="90%" color="#F5F5F5">
    <v-table density="compact" class="mb-5" >
    <thead style="color: #FFFFFF; background-color: #292737;" >
      <tr >
        <th class="text-center pa-0" style="font-size:0.8rem; font-weight: bold;border: 2px solid #F5F5F5;border-radius: 5px;">名前</th>
        <th class="text-center pa-0" style="font-weight: bold;border: 2px solid #F5F5F5;border-radius: 5px;">人数</th>
      </tr>
    </thead>
    <tbody>
<tr v-for="(item, index) in progress" :key="item.id"
  :style="{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#EAF4F9', height: '50px' }">
  <td class="text-center" style="border-left: 2px solid #F5F5F5; border-right: 2px solid #F5F5F5; width:100px;">{{ item.name }}</td>

  <td class="text-center" style="border-left: 2px solid #F5F5F5; border-right: 2px solid #F5F5F5; width:80px;" >{{ item.object }}人</td>
</tr>
    </tbody>
  </v-table>
    <div class="d-flex justify-end">
    <NuxtLink to="/" style="display: flex; justify-content: flex-end; color:#242424;" >もっとみる</NuxtLink>
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
          name: '〇〇太郎',
          object: '2',
        },
        {
          name: '〇〇太郎',
          object: '3',
        },
        {
          name: '〇〇太郎',
          object: '4',
        },
      ],
    };
  },
};

</script>