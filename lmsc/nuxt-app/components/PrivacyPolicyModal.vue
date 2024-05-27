<template>
  <v-container class="pa-0 d-flex justify-center">
    <v-dialog max-width="760" height="475px">
      <template v-slot:activator="{ props: activatorProps }">
        <v-card flat class="d-flex sp_text">
          <span>個人情報は<a v-bind="activatorProps" style="cursor: pointer; text-decoration: underline;">プライバシーポリシー</a>に従って取り扱いします。
          </span>
        </v-card>
      </template>

      <template v-slot:default="{ isActive }">
        <v-card class="pa-5 ma-5" color="#F5F5F5">
          <v-card class="pa-5 ma-5" title="iDemy プライバシーポリシー" style="max-height: 300px; overflow-y: auto;">
            <v-card-text>
              <v-list class="pa-0">
                <v-list-item v-for="(item, index) in items" :key="'item-' + index" class="mb-4 pa-0">
                  <v-list-item-title class="mb-1">
                    <span>{{ item.id }}</span><span>{{ item.heading }}</span>
                  </v-list-item-title>
                  <div>{{ item.body }}</div>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
          <v-card-actions class="mx-auto">
            <v-spacer></v-spacer>
            <Button color="#FF5136" style="background-color: #FFFFFF;" variant="outlined" buttonText="閉じる"
              @click="isActive.value = false"></Button>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id:'1',
          heading: '個人情報の収集と利用 ',
          body: '当プラットフォームは、サービス提供のため、ユーザー登録時に名前、メールアドレス、職業、電話番号などの個人情報を収集します。これらの情報は、サービス改善、カスタマイズ、連絡、および法的要件遵守の目的で使用されます。'
        },
        {
          id:'2',
          heading: '情報の共有と開示',
          body: '当プラットフォームは、個人情報を第三者と共有または開示することはありませんが、法律により要求される場合やユーザーの同意がある場合を除きます。また、統計的な分析の目的で匿名化されたデータを利用することがあります。',
        },
        {
          id:'3',
          heading: '情報の保護 ',
          body: '当プラットフォームは、個人情報の安全を保護するために、適切な物理的、電子的、管理的措置を講じています。',
        },
        {
          id:'4',
          heading: 'ユーザーの権利 ',
          body: 'ユーザーは、自己の個人情報に対して、アクセス、修正、削除の要求をする権利を有します。これらの要求は、当プラットフォームが適切な方法で対応します。'
        },
        {
          id:'5',
          heading: 'クッキーの使用 ',
          body: '当プラットフォームは、サービスの利便性向上のためにクッキー（Cookie）を使用することがあります。ユーザーはブラウザの設定でクッキーの使用を制御することができます。'
        },
        {
          id:'6',
          heading: 'プライバシーポリシーの変更',
          body: '当プラットフォームは、本ポリシーの内容を更新する可能性があります。変更があった場合は、本サービス上で適宜お知らせします。'
        },
      ]
    }
  },
}
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
@media screen and (max-width: 768px) {
  .sp {
    &_text {
      font-size: 1.4em;
    }
  }
}
</style>