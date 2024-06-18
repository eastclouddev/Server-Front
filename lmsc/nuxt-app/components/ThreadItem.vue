<template>
  <v-list-item class="d-flex flex-column align-start">
    <v-list-item-content>
      <div class="d-flex align-center">
        <img src="@/assets/accountcircle.svg" alt="" width="50px" class="pr-3">
        <v-list-item-title style="font-weight:bold;">{{ thread.title }}</v-list-item-title>
      </div>
      <ul class="pt-8 pb-5">
        <li class="pb-5">
          <p>{{ thread.content }}</p>
        </li>
      </ul>
      <div class="d-flex align-center pb-15">
        <p class="pr-5" style="color:#FF5A36;">{{ thread.user_name }}</p>
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
                <v-list-item-title style="font-weight:bold;" class="pb-5">{{ thread.title }}</v-list-item-title>
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

      <!-- Show selected file preview -->
      <div v-if="newMessage.fileUrl" class="selected-file-preview">
        <div v-if="isImage(newMessage.fileType)">
          <v-img :src="newMessage.fileUrl" max-width="400" max-height="300"></v-img>
        </div>
        <div v-else>
          <a :href="newMessage.fileUrl" download :style="{ color: '#FF5A36', textDecoration: 'underline' }">{{ newMessage.fileName }}</a>
        </div>
      </div>

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
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <div class="d-flex justify-center mt-8">
        <Button v-if="userRole === 2 || userRole === 4" color="#FF5A36" width="30rem" buttonText="解決"></Button>
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
import { createReviewResponse } from '~/features/review/api/postReview.ts';

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
        content: '',
        fileUrl: null,
        fileName: '',
        fileType: '',
        parent_response_id: null
      },
      dialog: false,
      dialogImage: null,
      errorMessage:''
    };
  },
  computed: {
    userRole() {
      const userStore = useUserStore();
      return userStore.user ? userStore.user.role_id : null;
    },
    userId() {
      const userStore = useUserStore();
      return userStore.user ? userStore.user.id : null;
    }
  },
  methods: {
    calculateTime(date) {
      const now = new Date();
      const postDate = new Date(date);
      const diff = now - postDate;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      return days === 0 ? '' : `${days}日前`;
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
    async sendMessage() {
if (!this.newMessage.content.trim() && !this.newMessage.fileUrl) {
      this.errorMessage = 'コメントを入力してください。';
        return;
      }

      const user_id = this.userId;
      const review_request_id = this.thread.review_request_id;

      if (!user_id || !review_request_id) {
        console.error('user_id or review_request_id is missing');
        return;
      }

      const requestBody = {
        user_id: user_id,
        parent_response_id: null,
        content: this.newMessage.content,
        review_request_id: review_request_id
      };

      if (this.newMessage.fileUrl) {
        requestBody.media_content = { url: this.newMessage.fileUrl };
      }

      console.log('Sending request:', JSON.stringify(requestBody, null, 2));

      try {
        const newMessage = await createReviewResponse(review_request_id, requestBody);
        this.thread.messages.push(newMessage);

        this.newMessage.content = '';
        this.newMessage.fileUrl = null;
        this.newMessage.fileName = '';
        this.newMessage.fileType = '';
        this.$refs.fileInputComponent.resetFile();
        this.errorMessage = '';
      } catch (error) {
        if (error.response) {
          this.errorMessage = 'Error creating review response: ' + error.response.data;
        } else {
          this.errorMessage = 'Error creating review response: ' + error.message;
        }
      }
    },
    onFileSelected(file) {
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.newMessage.fileUrl = e.target.result;
          this.newMessage.fileName = file.name;
          this.newMessage.fileType = file.type;
        };
        reader.readAsDataURL(file);
      } else {
        this.newMessage.fileUrl = null;
        this.newMessage.fileName = '';
        this.newMessage.fileType = '';
      }
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
.error-message {
color: red;
margin-top: 10px;
text-align: center;
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
