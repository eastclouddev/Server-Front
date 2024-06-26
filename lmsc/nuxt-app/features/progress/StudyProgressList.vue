<template>
  <v-container style="margin: 5% 0">
    <v-card flat class="mx-auto" style="margin: 3% 0; max-width: 100%">
      <v-row style="padding: 10px">
        <img
          src="/assets/progress.svg"
          alt="study"
          style="padding: 0 10px 0 20px"
        />
        <v-card-title
          class="pt-2 pb-2 pl-0 sp_title"
          style="font-size: 1.6em; font-weight: bold"
          color="#242424"
        >
          学習進捗詳細
        </v-card-title>
      </v-row>
      <v-divider
        class="#CFCFCF"
        thickness="1"
        style="padding-bottom: 50px; margin-top: 10px"
      ></v-divider>
      <Position :item="Links" style="margin-bottom: 30px !important" />

        <template v-if="userRole === 1">
          <Admin />
        </template>
        <template v-else-if="userRole === 2">
          <Mentor />
        </template>
        <template v-else-if="userRole === 4">
          <Corporation :userRole="userRole"/>
        </template>
        
      </v-card>
    </v-container>
  </template>

<script>
import { defineAsyncComponent } from 'vue';
import { useUserStore } from '~/store/user.ts';
import Position from '~/features/CompanyInfomation/components/PositionInfo.vue';

const Corporation = defineAsyncComponent(
  () => import('~/features/progress/components/ListStudyProgress.vue')
)
const Admin = defineAsyncComponent(
  () => import('~/features/progress/components/ListCompanyStudyProgress.vue')
)
const Mentor = defineAsyncComponent(
  () => import('~/features/progress/components/ListCompanyStudyProgress.vue')
)

export default {
  components: {
    Corporation,
    Mentor,
    Admin,
    Position,
  },
  data() {
    return {
      Links: {
        title: '学習進捗詳細',
        link: '/dashboard',
      },
      userRole: null,
    }
  },
  created() {
    this.fetchUserRole()
  },
  methods: {
    fetchUserRole() {
      const userStore = useUserStore()
      // this.userRole = userStore.userRole;　//TODO: APIつなぎこみ時　コメントアウトはずす＋仮設定削除
      this.userRole = 4 //ロールID仮設定
    },
    returnLink() {
      window.location.href = this.Links.link
    },
  },
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .sp {
    &_title {
      font-size: 2.5em !important;
    }

    &_text {
      font-size: 1.4em;
    }
  }
}

.return-mark {
  color: #ff5136;
  background-color: #ffff;
  border: 1px solid#FF5136;
  border-radius: 5px;
  padding: 0 1%;
  width: 260px !important;
}
.full-width-dotted-line {
  width: 100%;
  border-top: 2px dotted #cfcfcf;
  margin: 20px 0;
</style>
