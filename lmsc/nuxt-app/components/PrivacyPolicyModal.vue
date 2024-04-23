<template>
  <v-container class="pa-0 d-flex justify-center">
    <v-dialog max-width="760" height="475px">
      <template v-slot:activator="{ props: activatorProps }">
        <v-card flat class="d-flex">
          <p>個人情報は</p>
          <a v-bind="activatorProps" style="cursor: pointer; text-decoration: underline;">プライバシーポリシー</a>
          <p>に従って取り扱いします。</p>
        </v-card>
      </template>

      <template v-slot:default="{ isActive }">
        <v-card class="pa-5 ma-5" color="#F5F5F5">
          <v-card class="pa-5 ma-5" style="max-height: 300px; overflow-y: auto;">
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore
              magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore
              magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et
              dolore
              magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et
              dolore
              magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et
              dolore
              magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et
              dolore
              magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et
              dolore
              magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et
              dolore
              magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et
              dolore
              magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et
              dolore
              magna aliqua.
            </v-card-text>
          </v-card>
          <v-card-actions class="mx-auto">
            <v-spacer></v-spacer>
            <v-btn color="#FF5136" style="background-color: #FFFFFF;" width="25rem" variant="outlined" text=" 閉じる"
              @click="isActive.value = false"></v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-container>
</template>
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