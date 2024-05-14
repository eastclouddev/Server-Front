<template>
  <v-container class="mx-auto">
    <v-card flat color="#F5F5F5" class="d-flex align-center pt-2 pb-2 pl-6" width="25rem"
    style="border-radius: 5px 5px 0 0; box-shadow: 4px 0px 6px -3px rgba(0, 0, 0, 0.2);">
      <img src="/assets/question.svg" alt="study" style="padding:0 10px 0 0;">
      <label style="font-size: 1.5em; font-weight: bold;">質問リスト</label>
    </v-card>
    <v-card flat class="pt-2 pb-8 pl-6" color="#F5F5F5"
    style="border-radius: 0 5px 5px 5px; box-shadow: 4px 5px 6px -3px rgba(0, 0, 0, 0.2);">
      <v-card flat class="mx-auto mt-8 mb-8" width="60rem" color="#F5F5F5">
        <v-sheet class="pa-7" v-for="(item, index) in items" :key="index">
          <div class="d-flex align-center" style="align-items: flex-start;">
            <p style="width:10rem;" class="mb-2">{{ item.category }}</p>
            <NuxtLink to="/" style="color:#242424;">{{ truncateText(item.message, 20) }}</NuxtLink>
            <div class="d-flex justify-end ml-auto">
              <span :class="getStatusClass(item.status1)">{{ getStatusText(item.status1) }}</span>
              <span :class="getStatusClass(item.status2)">{{ getStatusText(item.status2) }}</span>
            </div>
          </div>
          <v-divider class="#CFCFCF" thickness="1"></v-divider>
        </v-sheet>
        <div class="d-flex justify-end mt-5">
          <Button color="#FF5136" style="width:20rem;"  buttonText="質問一覧へ"></Button>
        </div>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          message: 'コードが正しく反映されないのですが、どこが間違えていますか？',
          category: 'Python',
          status1: '解決済',
        },
        {
          message: 'コードが正しく反映されないのですが、どこが間違えていますか？',
          category: 'PHP',
          status1: '未読', status2: '未解決' },
        {
          message: 'コードが正しく反映されないのですが、どこが間違えていますか？',
          category: 'Obj-c',
          status1: '未解決',
        },
      ]
    }
  },
  methods: {
    truncateText(text, maxLength) {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
      } else {
        return text;
      }
    },
    getStatusClass(status) {
      switch (status) {
        case '未読':
          return 'unread';
        case '解決済':
          return 'resolved';
        case '未解決':
          return 'unresolved';
      }
    },
    getStatusText(status) {
      return status;
    }
  }
}
</script>

<style scoped>
.unread {
  color: #FFFFFF;
  background-color: #FF5A36;
  font-weight: bold;
  padding: 1px 3px;
  width: 5rem;
  text-align: center;
  border-radius: 5px;
  margin-left: 10px;
}

.resolved {
  color: #292737;
  font-weight: bold;
  padding: 1px 3px;
  width: 5rem;
  text-align: center;
  border-radius: 5px;
  border: solid 1px #292737;
  margin-left: 10px;
}

.unresolved {
  color: #FFFFFF;
  background-color: #292737;
  font-weight: bold;
  padding: 1px 3px;
  width: 5rem;
  text-align: center;
  border-radius: 5px;
  margin-left: 10px;
}

</style>