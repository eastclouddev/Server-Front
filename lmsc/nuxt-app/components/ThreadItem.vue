<template>
  <v-list-item class="d-flex flex-column align-start">
    <v-list-item-content>
      <div class="d-flex align-center">
        <img src="@/assets/accountcircle.svg" alt="" width="50px" class="pr-3">
        <v-list-item-title style="font-weight:bold;">{{ thread.title }}</v-list-item-title>
      </div>
      <ul class="pt-8 pb-5">
        <li class="pb-5">
          <h4>やりたいこと</h4>
          <p>{{ thread.objective }}</p>
        </li>
        <li class="pb-5">
          <h4>現状</h4>
          <p>{{ thread.current_situation }}</p>
        </li>
        <li class="pb-5">
          <h4>自分が調べたこと</h4>
          <p>{{ thread.research }}</p>
        </li>
        <li class="pb-5">
          <h4>質問内容</h4>
          <p>{{ thread.content }}</p>
        </li>
      </ul>
      <div class="d-flex align-center pb-15">
        <p class="pr-5" style="color:#FF5A36;">{{ thread.student_id }}</p>
        <span style="font-size:0.8em; color:#BFBFBF;">{{ calculateTime(thread.date) }}</span>
      </div>
    </v-list-item-content>
    <v-divider class="#CFCFCF" thickness="1"></v-divider>

    <v-list-item-content>
      <h4 style="font-weight:bold;" class="pt-5">{{ thread.messages.length }}件の返信</h4>
      <v-list v-if="thread.messages && thread.messages.length">
        <v-list-item
          v-for="(message, msgIndex) in thread.messages"
          :key="msgIndex"
          class="pl-5 d-flex align-start"
        >
          <v-list-item-content>
            <div class="d-flex align-start">
              <img src="@/assets/accountcircle.svg" alt="">
              <div class="pa-2">
                <v-list-item-title style="font-weight:bold;" class="pb-5">{{ message.title }}</v-list-item-title>
                <v-list-item-text>
                  <div>
                    <span v-if="isTruncated(message.content) && !message.expanded">
                      {{ truncateText(message.content) }}
                      <a @click="toggleMore(message)" class="more_link">もっと見る</a>
                    </span>
                    <span v-else>
                      {{ message.content }}
                      <a v-if="isTruncated(message.content)" @click="toggleMore(message)" class="more_link">閉じる</a>
                    </span>
                  </div>
                </v-list-item-text>
                <div class="d-flex flex-column pb-8 pt-4">
                  <div v-if="isImage(message.fileType)">
                    <v-img
                      :src="message.fileUrl"
                      @click="openDialog(message.fileUrl)"
                      class="message_image"
                      max-width="400"
                      max-height="300"
                    ></v-img>
                  </div>
                  <div v-else>
                    <a :href="message.fileUrl" download :style="{ color: '#FF5A36', textDecoration: 'underline' }">{{ message.fileName }}</a>
                  </div>
                  <div class="d-flex align-center">
                    <p class="pr-5 mt-2" style="color:#FF5A36;">{{ message.author }}</p>
                    <p v-if="calculateTime(message.date)" style="font-size:0.8em; color:#BFBFBF;" class="mt-2">{{ calculateTime(message.date) }}</p>
                  </div>
                </div>
              </div>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-text-field
        v-model="newMessage.content"
        @keydown.enter="sendMessage"
        placeholder="返信を入力する"
        variant="plain"
        style="background-color: #FFFFFF; height:130px; border:1px solid #292737; border-radius:5px;"
        class="mb-5 pl-3"
      ></v-text-field>
      <div class="d-flex justify-space-between sp_buttonwrap">
        <Fileinput @file-selected="onFileSelected" ref="fileInputComponent" class="sp_button" />
        <Button @click="sendMessage" color="#FF5A36" width="8rem" buttonText="回答を追加"></Button>
      </div>
      <div class="d-flex justify-center mt-8">
        <Button v-if="userRole === 2" color="#FF5A36" width="30rem" buttonText="解決"></Button>
      </div>

      <v-dialog v-model="dialog" max-width="1200px">
        <v-card>
          <v-img :src="dialogImage"></v-img>
        </v-card>
      </v-dialog>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import Fileinput from '~/features/question/components/Fileinput.vue';
import { useUserStore } from '~/store/user.ts';

export default {
  props: {
    thread: Object,
  },
  components: {
    Fileinput,
  },
  data() {
    return {
      newMessage: {
        author: '山田太郎',
        title: 'コードについて',
        content: '',
        fileUrl: null,
        fileName: '',
        fileType: ''
      },
      dialog: false,
      dialogImage: null,
    };
  },
  computed: {
    userRole() {
      const userStore = useUserStore();
      return userStore.user.role_id; // userRoleではなく user.role_id を使用
    }
  },
  methods: {
    calculateTime(date) {
      const now = new Date();
      const postDate = new Date(date);
      const diff = now - postDate;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      if (days === 0) {
        return '';
      }
      return `${days}日前`;
    },
    isTruncated(content) {
      return content.length > 60;
    },
    truncateText(content) {
      return content.substring(0, 60) + '...';
    },
    toggleMore(message) {
      message.expanded = !message.expanded;
    },
    sendMessage() {
      if (this.newMessage.content.trim() === '') {
        return;
      }
      const newMessage = {
        ...this.newMessage,
        date: new Date().toISOString(),
      };
      this.thread.messages.push(newMessage);
      this.newMessage.content = '';
      this.newMessage.fileUrl = null;
      this.newMessage.fileName = '';
      this.newMessage.fileType = '';
      this.$refs.fileInputComponent.resetFile();
    },
    onFileSelected(file) {
      this.newMessage.fileUrl = file.url;
      this.newMessage.fileName = file.name;
      this.newMessage.fileType = file.type;
    },
    openDialog(image) {
      this.dialogImage = image;
      this.dialog = true;
    },
    isImage(fileType) {
      return fileType && fileType.startsWith('image/');
    }
  },
};
</script>

<style lang="scss">
.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line{
  background-color: #FFF7EC !important;
}
.v-list-item__content {
  width: 100%;
}
.v-list {
  background-color: #FFF7EC !important;
}
.more_link{
  cursor: pointer;
  text-decoration: underline;
  display: inline;
  float: right;
}
.message_image {
  cursor: pointer;
}
@media screen and (max-width: 768px) {
  .sp_buttonwrap {
    flex-direction: column;
  }
  .sp_button {
    margin-bottom: 10px;
  }
}
</style>
