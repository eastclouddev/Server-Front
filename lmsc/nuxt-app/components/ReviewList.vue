<template>
  <v-sheet flat class="mx-auto mb-8 pa-10" width="60rem">
    <div class="d-flex align-center">
      <img src="/assets/review.svg" class="pr-3" alt="">
      <h3>課題提出</h3>
    </div>
    <v-sheet>
      <v-list>
        <v-list-item v-for="(message, index) in recentMessages" :key="index">
          <v-list-item-content class="d-flex align-center justify-space-between pa-5">
            <div class="d-flex align-center justify-space-between">
              <p style="width:9rem;">{{ message.category }}</p>
              <a href="" style="color:#222222;">{{ limitText(message.title) }}</a>
            </div>
            <div>
              <span v-for="(status, statusIndex) in message.statuses" :key="statusIndex" :class="statusClass(status)" class="mr-2">
                {{ statusText(status) }}
              </span>
            </div>
          </v-list-item-content>
          <v-divider class="#CFCFCF" thickness="1"></v-divider>
        </v-list-item>
      </v-list>
      <a href="" style="display: flex; justify-content: flex-end; color:#222222; padding:20px">もっとみる</a>
    </v-sheet>
  </v-sheet>
</template>
<script>
export default {
  data() {
    return {
      recentMessages: [
        {
          title: 'コードが正しく反映されないのですが、どこが誤っていますか',
          category: 'python',
          statuses: ['解決済']
        },
        {
          title: 'コードが正しく反映されないのですが、どこが誤っていますか',
          category: 'PHP',
          statuses: ['未読', '未解決']
        },
        {
          title: 'コードが正しく反映されないのですが、どこが誤っていますか',
          category: 'Obj-c',
          statuses: ['未解決']
        },
      ]
    };
  },
  methods: {
    limitText(value) {
      if (!value) return '';
      if (value.length > 20) {
        return value.slice(0, 20) + '...';
      } else {
        return value;
      }
    },
    statusClass(status) {
      return {
        '未読': 'unread', // 未読ステータスの色とフォントの太さを設定
        '未解決': 'unsolved', // フラグステータスの色とフォントを斜体に設定
        '解決済': 'solved', // アーカイブステータスの色を設定
      }[status];
    },
    statusText(status) {
      return status;
    }
  }
};
</script>

<style lang="scss" scoped>
.unread {
  font-size: 0.8em;
  background-color: #FF5A36;
  color: #FFFFFF;
  border-radius: 5px;
  padding: 2px 10px;
  font-weight: bold;
}

.unsolved {
  font-size: 0.8em;
  background-color: #292737;
  color: #FFFFFF;
  border-radius: 5px;
  padding: 2px 10px;
  font-weight: bold;
}

.solved {
  font-size: 0.8em;
  background-color: #FFFFFF;
  color: #292737;
  border-radius: 5px;
  border:solid 1px #292737 ;
  padding: 2px 10px;
  font-weight: bold;
}
</style>