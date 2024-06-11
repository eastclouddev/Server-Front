<template>
    <v-container style="margin:5% 0; ">
      <v-card flat class="mx-auto" style="margin:3% 0; max-width: 100%;">
      <v-row style="padding: 10px; align-items: center;">
        <img src="/assets/progress.svg" alt="study" style="padding:0 10px 0 20px;">
        <!-- PCパターン -->
        <v-card-title class="pt-2 pb-2 pl-0 sp_title title_pc" style="font-size: 1.6em; font-weight: bold; padding-right: 30px;" color="#242424">
          学習進捗詳細 
        </v-card-title>
        <!-- SPパターン -->
        <v-card-title class="pt-2 pb-2 pl-0 sp_title title_sp" style="font-size: 1.6em; font-weight: bold; padding-right: 30px" color="#242424">
          進捗管理
        </v-card-title>
        <v-row style="background-color: #FBFBFB; border-radius: 5px; flex: none;height: fit-content;">
        <img src="/assets/accountcircle.svg" alt="account" style="padding:0 10px 0 20px;">
        <v-card-title class="pt-2 pb-2 pl-0 sp_title"  style="font-size:1.5em; font-weight: bold;" color="#242424"> {{ username }} </v-card-title>
        </v-row>
      </v-row>
        <v-divider class="#CFCFCF" thickness="1" style="padding-bottom: 50px; margin-top: 10px;"></v-divider>
        <Position :item="Links" style="margin-bottom: 30px !important;"/>
        <DetailStudyProgress />
      </v-card>
    </v-container>
  </template>

<script >
import DetailStudyProgress from '~/features/progress/components/DetailStudyProgress.vue';
import Position from '~/features/progress/components/Position.vue';

export default {
  components: {
    DetailStudyProgress,
    Position,
  },
  data() {
    return {
      username: '山田太郎',
      Links :{
        title : "",
        link :"/",
      }
    };
  },

  mounted() {
    // ログイン情報を取得してアカウント名を設定
    // サーバーからログインユーザーの情報を取得するAPIを呼び出す
    this.username = '山田太郎';
  },

  created() {
    // コンポーネントの作成時に username を title に設定
    this.Links.title = this.username;
  },

  methods: {
    returnLink() {
      window.location.href = this.Links.link;
    }
  }
};

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
  color: #FF5136;
  background-color: #FFFF;
  border: 1px solid#FF5136;
  border-radius: 5px;
  padding: 0 1%;
  width: 260px !important;
}
  .full-width-dotted-line {
  width: 100%;
  border-top: 2px dotted #CFCFCF;
  margin: 20px 0;
}

@media (max-width: 768px) {
  .title_pc {
    display: none;
  }
  }
  @media (min-width: 769px) {
  .title_pc{
    display: block;
  }
  }

  @media (max-width: 768px) {
  .title_sp {
    display: block;
  }
  }
  @media (min-width: 769px) {
  .title_sp{
    display: none;
  }
  }
  </style>