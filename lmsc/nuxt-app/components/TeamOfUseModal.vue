<template>
  <v-container class="ma-0 d-flex justify-center">
    <v-card flat class=" d-flex align-center" height="50">
      <v-checkbox v-model="checkbox">
        <template v-slot:label>
          <a @click="termsModal = true" style="cursor: pointer; text-decoration: underline; color: #242424;">利用規約</a>
          <p style="color: #242424;">を確認する。</p>
        </template>
      </v-checkbox>
    </v-card>
    <v-dialog v-model="termsModal" max-width="760" height="475" @input="checkbox = termsModal">
      <v-card class="pa-5 ma-5" color="#F5F5F5">
        <v-card class="pa-5 ma-5" title="Work Ready利用規約" style="max-height: 300px; overflow-y: auto;">
          <v-card-text>
            <!-- テキスト -->
          </v-card-text>
        </v-card>
        <v-card-actions class="mx-auto">
          <v-spacer></v-spacer>
          <v-btn color="#FF5136" style="background-color: #FFFFFF;" width="25rem" variant="outlined" text=" 閉じる"
            @click="termsModal = false">
            閉じる
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      checkbox: false,
      termsModal: false // モーダルの表示状態を管理
    };
  }
};
</script>
<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-thumb {
  background-color: #FF5136;
  border-radius: 5px;
}

::-webkit-scrollbar-track {
  background-color: #f5f5f5;
}
</style>