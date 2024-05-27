<template>
  <v-container class="ma-0 d-flex justify-center">
    <v-card flat class=" d-flex align-center" height="50">
      <v-checkbox v-model="checkbox">
        <template v-slot:label>
          <a class="sp_text" @click="termsModal = true" style="cursor: pointer; text-decoration: underline; color: #242424;">利用規約</a>
          <p class="sp_text" style="color: #242424;">を確認する。</p>
        </template>
      </v-checkbox>
    </v-card>
    <v-dialog v-model="termsModal" max-width="760" height="475" @input="checkbox = termsModal">
      <v-card class="pa-5 ma-5" color="#F5F5F5">
        <v-card class="pa-5 ma-5" title="利用規約" style="max-height: 300px; overflow-y: auto;">
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
            @click="termsModal = false">
          </Button>
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
      termsModal: false,

      items: [
        {
          id:'1',
          heading: '総則',
          body: '本規約は、iDemy（以下、「当プラットフォーム」といいます）が提供するすべてのサービス（以下、「本サービス」といいます）の利用条件を定めるものです。ユーザーは、本サービスを利用することにより、本規約に同意したものとみなされます。'
        },
        {
          id:'2',
          heading: 'アカウント登録',
          body: '本サービスの利用にはアカウント登録が必要です。ユーザーは、真実かつ正確な情報を提供し、常にこれを最新の状態に保つ責任があります。',
        },
        {
          id:'3',
          heading: '著作権',
          body: '本サービス上の教材、テキスト、画像などすべてのコンテンツの著作権は、当プラットフォームまたは第三者に帰属します。ユーザーは、著作権法で明示的に許可されている場合を除き、これらのコンテンツを無断で複製、配布、公開することはできません。',
        },
        {
          id:'4',
          heading: '禁止行為',
          body: 'ユーザーは、本サービスを不正な目的で使用したり、他のユーザーの利用を妨げたり、第三者の権利を侵害する行為をしてはなりません。'
        },
        {
          id:'5',
          heading: '免責事項',
          body: '当プラットフォームは、本サービスの内容の正確性や完全性、特定の目的への適合性について、明示または暗示を問わず、いかなる保証も行いません。また、サービスの利用から生じるいかなる損害についても責任を負いません。'
        },
        {
          id:'6',
          heading: '変更および終了',
          body: '当プラットフォームは、ユーザーに事前通告なしに本サービスの内容を変更または終了する権利を有します。また、ユーザーが本規約に違反した場合には、予告なくサービスの利用を禁止することがあります。'
        },
        {
          id:'7',
          heading: '紛争解決',
          body: '本規約または本サービスの利用に関連して発生した紛争については、当プラットフォームの所在地を管轄する法院の専属的合意管轄とします。'
        },
      ]
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

@media screen and (max-width: 768px) {
  .sp {
    &_text {
      font-size: 1.4em;
    }
  }
}
</style>

