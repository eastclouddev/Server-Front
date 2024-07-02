<template>
  <v-menu flat v-model="menu" :style="menuStyle" width="18rem">
    <template v-slot:activator>
      <v-btn @click="toggleMenu">
        <v-icon color="#242424" size="23">mdi-bell</v-icon>
        <v-badge color="#FF5A36" :content="unreadMessagesCount()" offset-x="0" offset-y="-8" v-if="unreadMessagesCount() > 0"></v-badge>
      </v-btn>
    </template>
    <v-list>
      <v-list-item>
        <v-list-item-title class="d-flex align-center" style="font-weight:bold;">
          <v-icon color="#242424" size="23" class="ma-3">mdi-bell</v-icon>
          お知らせ
          <v-badge color="#FF5A36" :content="unreadMessagesCount()" offset-x="-25" offset-y="-3" v-if="unreadMessagesCount() > 0"></v-badge>
        </v-list-item-title>
      </v-list-item>
      <v-sheet class="ma-4">
        <NuxtLink :to="`/${message.url}`" class="d-flex align-start pt-4" style="text-decoration: none; color:#242424;" v-for="(message, index) in messages.slice(0, 4)" :key="index">
          <div>
            <v-avatar v-if="message.unread" size="40">
              <v-badge bordered bottom color="#FF5A36" dot offset-x="25" offset-y="25">
                <img src="/assets/accountcircle.svg" alt="account">
              </v-badge>
            </v-avatar>
            <v-avatar v-else size="40">
              <img src="/assets/accountcircle.svg" alt="account">
            </v-avatar>
          </div>
          <div class="pl-3">
            <p style="font-size:0.9em;">{{ message.category }}</p>
            <v-list-item-title style="font-weight:bold; font-size:0.9em;">{{ truncateText(message.title,12) }}</v-list-item-title>
            <p style="font-size:0.9em;">{{ message.content }}</p>
            <p style="font-size:0.8em; color:#BFBFBF;" class="pb-2">{{ calculateTime(message.date) }}</p>
            <v-divider color="#BFBFBF"></v-divider>
          </div>
        </NuxtLink>
        <NuxtLink to="/" style="display: flex; justify-content: flex-end; color:#242424;" class="mt-2 mb-2">すべて表示</NuxtLink>
      </v-sheet>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'ToolbarMenu',
  data() {
    return {
      menu: false,
      messages: [
        {
          title: 'コードが正しく反映されないのでレビューを依頼します。',
          content: 'メンターからの返信が来ています',
          category: 'Python',
          date: '2024-05-01T12:30:00',
          url: '/',
          unread: true // 未読のメッセージ
        },
        {
          title: 'コードが正しく反映されないのでレビューを依頼します。',
          content: 'メンターからの返信が来ています',
          category: 'PHP',
          date: '2024-05-02T10:45:00',
          url: '/',
          unread: true // 未読のメッセージ
        },
        {
          title: 'コードが正しく反映されないのでレビューを依頼します。',
          content: 'メンターからの返信が来ています',
          category: 'Obj-c',
          date: '2024-05-03T15:20:00',
          url: '/',
          unread: true // 既読
        },
        {
          title: 'コードが正しく反映されないのでレビューを依頼します。',
          content: 'メンターからの返信が来ています',
          category: 'Obj-c',
          date: '2024-05-04T09:10:00',
          url: '/',
          unread: false // 既読
        },
      ]
    }
  },
  computed: {
    menuStyle() {
      return window.innerWidth <= 768 ? 'width: 100%; top: 50px;' : 'top: 50px;';
    }
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu;
    },
    truncateText(text, maxLength) {
      return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    },
    calculateTime(date) {
      const now = new Date();
      const postDate = new Date(date);
      const diff = now - postDate;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      return `${days}日前`;
    },
    markAsRead(messageIndex) {
      this.messages[messageIndex].unread = false;
    },
    unreadMessagesCount() {
      return this.messages.filter(message => message.unread).length;
    }
  },
  beforeRouteLeave(to, from, next) {
    this.messages.forEach((message, index) => {
      if (message.unread) {
        this.markAsRead(index);
      }
    });
    next();
  }
}
</script>

<style lang="scss" scoped>
.v-overlay-container {
  .v-overlay {
    left: auto;
    right: 350px;
  }
}
@media screen and (max-width: 768px) {
.v-overlay-container {
  .v-overlay {
    top: 15px;
    box-shadow: none;
  }
}
}
</style>