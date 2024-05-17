<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-text-field
          v-model="search"
          append-inner-icon="mdi-magnify"
          @input="onSearch"
          @click:append-outer="onIconClick"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    };
  },
  methods: {
    onSearch() {
      console.log(this.search); // 検索クエリを処理するロジック
    },
    onIconClick() {
      // 検索アイコンがクリックされたときの処理をここに追加
      console.log('Icon clicked');
      // ここに検索結果を表示するためのロジックを追加
    },
  },
};
</script>