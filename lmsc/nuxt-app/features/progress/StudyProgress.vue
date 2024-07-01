<template>
  <v-container style="margin: 5% 0">
    <v-card flat class="mx-auto" style="margin: 3% 0; max-width: 100%">
      <v-row style="padding: 10px; align-items: center">
        <img
          src="/assets/progress.svg"
          alt="study"
          style="padding: 0 10px 0 20px"
        />
        <!-- PCパターン -->
        <v-card-title
          class="pt-2 pb-2 pl-0 sp_title title_pc"
          style="font-size: 1.6em; font-weight: bold; padding-right: 30px"
          color="#242424"
        >
          学習進捗詳細
        </v-card-title>
        <!-- SPパターン -->
        <v-card-title
          class="pt-2 pb-2 pl-0 sp_title title_sp"
          style="font-size: 1.6em; font-weight: bold; padding-right: 30px"
          color="#242424"
        >
          進捗管理
        </v-card-title>
        <v-row
          style="
            background-color: #fbfbfb;
            border-radius: 5px;
            flex: none;
            height: fit-content;
          "
        >
          <img
            src="/assets/accountcircle.svg"
            alt="account"
            style="padding: 0 10px 0 20px"
          />
          <v-card-title
            class="pt-2 pb-2 pl-0 sp_title"
            style="font-size: 1.5em; font-weight: bold"
            color="#242424"
          >
            {{ username }}
          </v-card-title>
        </v-row>
      </v-row>
      <v-divider
        class="#CFCFCF"
        thickness="1"
        style="padding-bottom: 50px; margin-top: 10px"
      ></v-divider>
      <Position :item="Links" style="margin-bottom: 30px !important" />

      <DetailStudyProgress />
    </v-card>
  </v-container>
</template>

<script>
import { useUserStore } from '~/store/user.ts'

import DetailStudyProgress from '~/features/progress/components/DetailStudyProgress.vue'
import Position from '~/features/progress/components/Position.vue'

export default {
  components: {
    DetailStudyProgress,
    Position,
  },
  data() {
    return {
      username: '',
      Links: {
        title: '',
        link: '/', //TODO: ユーザー情報の個人情報詳細画面のリンク　確認＋実装
      },
    }
  },
  created() {
    this.fetchUsername()
  },
  methods: {
    fetchUsername() {
      const userStore = useUserStore()
      // this.username = userStore.userName; //TODO: APIつなぎこみ時　コメントアウトはずす＋仮設定削除
      this.username = 'やまだ太郎' //名前仮設定
      this.Links.title = this.username
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
}

@media (max-width: 768px) {
  .title_pc {
    display: none;
  }
}
@media (min-width: 769px) {
  .title_pc {
    display: block;
  }
}

@media (max-width: 768px) {
  .title_sp {
    display: block;
  }
}
@media (min-width: 769px) {
  .title_sp {
    display: none;
  }
}
</style>
