<template>
  <v-menu
    flat
    v-model="notificationMenu"
    :width="menuWidth"
    :absolute="isSmallScreen"
    class="custom-menu"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" icon @click="toggleNotificationMenu" style="border-radius: 0">
        <v-icon color="#242424" size="23">mdi-bell</v-icon>
        <v-badge
          color="#FF5A36"
          :content="unreadMessagesCount()"
          offset-x="0"
          offset-y="-8"
          v-if="unreadMessagesCount() > 0"
        ></v-badge>
      </v-btn>
    </template>
    <v-list>
      <v-list-item>
        <v-list-item-title class="d-flex align-center" style="font-weight:bold;">
          <v-icon color="#242424" size="23" class="ma-3 list_item">mdi-bell</v-icon>
          お知らせ
          <v-badge
            color="#FF5A36"
            :content="unreadMessagesCount()"
            offset-x="-25"
            offset-y="-3"
            v-if="unreadMessagesCount() > 0"
          ></v-badge>
        </v-list-item-title>
      </v-list-item>
      <v-sheet class="ma-4">
        <div v-if="messages.length === 0" class="d-flex flex-column justify-center" style="height: 80px;">
          <span>新しいお知らせはありません。</span>
          <NuxtLink
            @click="toggleNotificationMenu"
            style="display: flex; justify-content: flex-end; color:#242424; cursor:pointer; text-decoration: underline;"
            class="mt-2 mb-2"
          >閉じる</NuxtLink>
        </div>
        <div v-else>
          <div v-for="(message, index) in messages.slice(0, 4)" :key="index">
            <NuxtLink
              :to="`/${message.url}`"
              class="d-flex align-start pt-4 list_item"
              style="text-decoration: none; color:#242424;"
              @click.native="markAsRead(message.id, index)"
            >
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
import { markNotificationAsRead } from '~/features/notification/api/patchNotifi.ts';
import AccountIcon from '~/assets/accountcircle.svg';
import { useUserStore } from '~/store/user.ts';

export default {
  name: 'NotificationMenu',
  data() {
    return {
      notificationMenu: false,
      messages: [],
      menuWidth: window.innerWidth <= 768 ? '100%' : '18rem',
      isSmallScreen: window.innerWidth <= 768
    };
  },
  computed: {
    userRole() {
      const userStore = useUserStore();
      return userStore.user.role_id;
    },
    userId() {
      const userStore = useUserStore();
      return userStore.user.id;
    }
  },
  methods: {
    toggleNotificationMenu() {
      this.notificationMenu = !this.notificationMenu;
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
    async markAsRead(messageId, messageIndex) {
      try {
        await markNotificationAsRead(messageId);
        this.messages[messageIndex].unread = false;
      } catch (error) {
        console.error('Error marking notification as read:', error);
      }
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
            id: notification.id,
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
    },
    updateMenuWidth() {
      const isSmall = window.innerWidth <= 768;
      this.menuWidth = isSmall ? '100%' : '18rem';
      this.isSmallScreen = isSmall;
    }
  },
  created() {
    this.loadNotifications();
    window.addEventListener('resize', this.updateMenuWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateMenuWidth);
  },
  beforeRouteLeave(to, from, next) {
    this.messages.forEach((message, index) => {
      if (message.unread) {
        this.markAsRead(message.id, index);
      }
    });
    next();
  }
};
</script>
<style scoped lang="scss">
.v-overlay-container {
  .v-overlay {
    left: auto;
    right: 350px;
    top: 50px;
  }
}

@media screen and (max-width: 768px) {
  .list_item {
    padding: 30px;
  }
  .v-overlay-container {
    .v-overlay {
      top: 65px !important;
      left: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      background-color: rgba(255, 255, 255, 0.9) !important;
      position: fixed !important;
      box-shadow: none !important;
    }
  }
}

/* カスタムボックスシャドウを追加 */
.custom-menu .v-menu__content {
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1) !important; 
}
</style>