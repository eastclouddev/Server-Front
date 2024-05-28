<template>
  <v-card flat class="mx-auto pa-7 mb-8" width="90%">
    <div class="d-flex justify-space-between align-center mb-4">
      <div class="d-flex">
        <img src="/assets/question.svg" alt="">
        <v-card-title style="font-weight:bold;">質問リスト</v-card-title>
      </div>
    </div>
    <v-divider class="#CFCFCF" thickness="1"></v-divider>

    <v-card flat class="pt-8 pb-8 mt-8 mb-8" color="#FFF7EC">
      <v-sheet class="pa-8 mx-auto" width="90%" color="#FFF7EC">
        <v-breadcrumbs :items="breadcrumbs" color="#FF5A36" class="pl-0">
          <template v-slot:divider>
            <v-icon icon="mdi-chevron-right"></v-icon>
          </template>
        </v-breadcrumbs>

        <v-card flat class="pa-7 d-flex align-start mx-auto" width="85%" color="#FFF7EC">
          <img src="@/assets/accountcircle.svg" alt="" width="50px">
          <v-list class="pa-0" width="35rem">
            <v-list-item
              v-for="(thread, index) in threads"
              :key="index"
              class="d-flex flex-column align-start"
            >
              <v-list-item-content>
                <v-list-item-title style="font-weight:bold;">{{ thread.title }}</v-list-item-title>
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
                              <span v-if="!message.expanded">
                                {{ truncateText(message.content) }}
                              </span>
                              <span v-else>
                                {{ message.content }}
                              </span>
                              <a @click="toggleMore(message)" class="more-link">
                                {{ message.expanded ? '閉じる' : 'もっと見る' }}
                              </a>
                          </v-list-item-text>
                          <div class="d-flex align-center pb-8 pt-4">
                            <p class="pr-5" style="color:#FF5A36;">{{ message.author }}</p>
                            <p style="font-size:0.8em; color:#BFBFBF;">{{ calculateTime(message.date) }}</p>
                          </div>
                        </div>
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-sheet>
    </v-card>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        {
          title: 'ダッシュボード',
          disabled: false,
          href: '/dashboard',
        },
        {
          title: '質問リスト',
          disabled: false,
          href: '/question',
        },
        {
          title: 'コードについて',
          disabled: false,
        },
      ],
      threads: [
        {
          student_id: '山田太郎',
          title: 'コードについて',
          objective: 'コードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがどこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、',
          current_situation: 'コードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがどこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、',
          research: 'コードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがどこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、',
          content: 'コードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがどこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、',
          date: '2024-05-20',
          messages: [
            {
              author: '山田太郎',
              title: 'コードについて',
              content: 'コードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがどこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、',
              date: '2024-05-20 10:00',
              expanded: false,
            },
            {
              author: '山田太郎',
              title: 'コードについて',
              content: 'コードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがどこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、',
              date: '2024-05-20 10:00',
              expanded: false,
            },
          ],
        },
      ],
    };
  },
  methods: {
    calculateTime(date) {
      const now = new Date();
      const postDate = new Date(date);
      const diff = now - postDate;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
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
  },
};
</script>

<style lang="scss" scoped>
.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line{
  background-color: #FFF7EC;
}
.v-list {
  background-color: #FFF7EC !important;
  padding: 15px;
}
.more-link{
  cursor: pointer;
  text-decoration: underline;
  display: inline-block;
  float: right;
}
</style>