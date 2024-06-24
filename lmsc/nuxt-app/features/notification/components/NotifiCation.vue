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
        <div v-if="messages.length === 0" class="d-flex flex-column  justify-center" style="height: 80px;">
          <span>新しいお知らせはありません。</span>
          <NuxtLink  @click="toggleMenu" style="display: flex; justify-content: flex-end; color:#242424; cursor:pointer; text-decoration: underline;"
            class="mt-2 mb-2">閉じる</NuxtLink>
        </div>
        <div v-else>
          <div v-for="(message, index) in messages.slice(0, 4)" :key="index">
            <NuxtLink :to="`/${message.url}`" class="d-flex align-start pt-4" style="text-decoration: none; color:#242424;">
              <div>
                <v-avatar v-if="message.unread" size="40">
                  <v-badge bordered bottom color="#FF5A36" dot offset-x="25" offset-y="25">
                    <img :src="message.icon" alt="account" />
                  </v-badge>
                </v-avatar>
                <v-avatar v-else size="40">
                  <img :src="message.icon" alt="account" />
                </v-avatar>
              </div>
              <div class="pl-3">
                <p style="font-size:0.9em;">{{ message.category }}</p>
                <v-list-item-title style="font-weight:bold; font-size:0.9em;">{{ truncateText(message.title, 12) }}</v-list-item-title>
                <p style="font-size:0.9em;">{{ message.content }}</p>
                <p style="font-size:0.8em; color:#BFBFBF;" class="pb-2">{{ calculateTime(message.date) }}</p>
                <v-divider color="#BFBFBF"></v-divider>
              </div>
            </NuxtLink>
          </div>
          <NuxtLink to="/" style="display: flex; justify-content: flex-end; color:#242424; cursor: pointer;" class="mt-2 mb-2">
          すべて表示
          </NuxtLink>
        </div>
      </v-sheet>
    </v-list>
  </v-menu>
</template>

<script>
import { fetchNotifications } from '~/features/notification/api/getNotifi.ts';
import AccountIcon from '~/assets/accountcircle.svg';

export default {
  name: 'ToolbarMenu',
  data() {
    return {
      menu: false,
      messages: [],
      userRole: 1, // 例として1（admin）を使用
      userId: 1 // 例としてユーザーID 1を使用
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
    },
    async loadNotifications() {
      try {
        const data = await fetchNotifications(this.userRole, this.userId);
        console.log('Fetched data:', data);

        if (data && Array.isArray(data.notifications)) {
          this.messages = data.notifications.map(notification => ({
            icon: AccountIcon,
            title: notification.title,
            content: notification.content,
            date: notification.created_at,
            url: `/notifications/${notification.id}`,
            unread: !notification.is_read,
          }));
          console.log(this.messages);
        }
      } catch (error) {
        console.error('エラー設定:', error.config);
      }
    }
  },
  created() {
    this.loadNotifications();
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