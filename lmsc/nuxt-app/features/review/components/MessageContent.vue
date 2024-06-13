<template>
  <v-card flat class="mx-auto pa-7 mb-8" width="90%">
    <div class="d-flex justify-space-between align-center mb-4">
      <div class="d-flex">
        <img src="/assets/account.svg" alt="">
        <v-card-title style="font-weight:bold;">課題提出</v-card-title>
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

        <v-card flat class="pa-7 mx-auto" color="#FFF7EC">
          <v-list class="pa-0">
            <ThreadItem
              v-for="(thread, index) in threads" :key="index"
              :thread="thread"/>
          </v-list>
        </v-card>
      </v-sheet>
    </v-card>
  </v-card>
</template>

<script>
import ThreadItem from '~/components/ThreadItem.vue';

export default {
  components: {
    ThreadItem,
  },
  data() {
    return {
      breadcrumbs: [
        {
          title: 'ダッシュボード',
          disabled: false,
          href: '/dashboard',
        },
        {
          title: '課題提出一覧',
          disabled: false,
          href: '/review',
        },
        {
          title: '文字列の配列について',
          disabled: false,
        },
      ],
      threads: [
        {
          student_id: '山田太郎',
          title: '文字列の配列について',
          content: 'コードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがどこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、',
          date: '2024-05-20',
          messages: [
            {
              icon: '/assets/accountcircle.svg',
              author: '山田太郎',
              title: '文字列の配列について',
              content: 'コードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがどこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、',
              date: '2024-05-20 10:00',
              expanded: false,
            },
            {
              icon: '/assets/accountcircle.svg',
              author: '山田太郎',
              title: '文字列の配列について',
              content: 'コードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがどこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、どこがコードが正しく反映されないのですが、',
              date: '2024-05-20 10:00',
              expanded: false,
            },
          ],
        },
      ],
    };
  },
};
</script>

