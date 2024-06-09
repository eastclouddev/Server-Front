<template>
  <v-container class="justify-space-between">
    <v-row class="align-center justify-space-between flex-column-sm mb-4">
      <div style="width: 200px; display: flex; align-items: center;" >
        <label class="sp_label" style="font-size: 1em; font-weight: bold;">郵便番号</label>
        <span v-if="showSpan" class="required-mark">必須</span>
      </div>
      <v-card flat class="sp_field d-flex d-flex" width="25rem">
        <v-sheet class="sp_post_left my-0 pb-4 pl-4 d-flex" color="#EBEBEB" style="padding-right: 15px; border-radius: 5px;">
          <v-text-field hide-details="auto" placeholder="000" variant="plain" full-width ></v-text-field>
         </v-sheet>
         <span class="post-number-hypen">ー</span>
         <v-sheet class="sp_post_right my-0 pb-4 pl-4 d-flex" color="#EBEBEB" style="padding-right: 15px; border-radius: 5px;">
          <v-text-field  hide-details="auto" placeholder="0000" variant="plain" full-width  ></v-text-field>
        </v-sheet>
        <v-btn flat class="search-mark" style="margin-top: 13px; padding-left: 15px; padding-right: 15px;">住所検索</v-btn>
      </v-card>
    </v-row>

    <v-row class="align-center justify-space-between flex-column-sm mb-4">
      <div style="width: 200px; display: flex; align-items: center;" >
        <label class="sp_label" style="font-size: 1em; font-weight: bold;">都道府県</label>
        <span v-if="showSpan" class="required-mark">必須</span>
      </div>
      <v-card flat class="sp_field d-flex flex-column" width="25rem" >
          <v-select flat class="sp_field" variant="solo-filled" bg-color="#EBEBEB" style="height: 64px; width: 200px; border-radius: 5px;" v-model="selected" :items="prefectures" item-title="label" item-value="value" placeholder="選択してください"  return-object hide-details="false" :menu-props="{ maxHeight: '500px' }" ></v-select>
      </v-card>
    </v-row>

    <v-row class="align-center justify-space-between flex-column-sm mb-4">
      <div style="width: 200px; display: flex; align-items: center;" >
        <label class="sp_label" style="font-size: 1em; font-weight: bold;">市区町村</label>
        <span v-if="showSpan" class="required-mark">必須</span>
      </div>
      <v-card flat class="sp_label sp_field d-flex flex-column" width="25rem">
        <v-sheet class="sp_field my-0 pr-4 pb-4 pl-4" color="#EBEBEB" style="width: 200px; border-radius: 5px;">
          <v-text-field hide-details="auto" placeholder="〇〇市" variant="plain" full-width ></v-text-field>
        </v-sheet>
      </v-card>
    </v-row>


    <v-row class="align-center justify-space-between flex-column-sm mb-0">
      <div style="width: 200px; display: flex; align-items: center;" >
        <label class="sp_label" style="font-size: 1em; font-weight: bold;">番地</label>
        <span v-if="showSpan" class="required-mark">必須</span>
      </div>
      <v-card flat class="sp_field d-flex flex-column" width="25rem">
        <v-sheet class="sp_field my-0 pr-4 pb-4 pl-4" color="#EBEBEB" style="width: 200px; border-radius: 5px;">
          <v-text-field hide-details="auto" placeholder="0-00-000" variant="plain" full-width ></v-text-field>
        </v-sheet>
      </v-card>
    </v-row>




  </v-container>
  
</template>
<script setup>

const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  showSpan: {
    type: Boolean,
    default: true
  }
});

const selected = ref()
const prefectures= [
      { label: '北海道', value: '1' },
      { label: '青森県', value: '2' },
      { label: '岩手県', value: '3' },
      { label: '宮城県', value: '4' },
      { label: '秋田県', value: '5' },
      { label: '山形県', value: '6' },
      { label: '福島県', value: '7' },
      { label: '茨城県', value: '8' },
      { label: '栃木県', value: '9' },
      { label: '群馬県', value: '10' },
      { label: '埼玉県', value: '11' },
      { label: '千葉県', value: '12' },
      { label: '東京都', value: '13' },
      { label: '神奈川県', value: '14' },
      { label: '新潟県', value: '15' },
      { label: '富山県', value: '16' },
      { label: '石川県', value: '17' },
      { label: '福井県', value: '18' },
      { label: '山梨県', value: '19' },
      { label: '長野県', value: '20' },
      { label: '岐阜県', value: '21' },
      { label: '静岡県', value: '22' },
      { label: '愛知県', value: '23' },
      { label: '三重県', value: '24' },
      { label: '滋賀県', value: '25' },
      { label: '京都府', value: '26' },
      { label: '大阪府', value: '27' },
      { label: '兵庫県', value: '28' },
      { label: '奈良県', value: '29' },
      { label: '和歌山県', value: '30' },
      { label: '鳥取県', value: '31' },
      { label: '島根県', value: '32' },
      { label: '岡山県', value: '33' },
      { label: '広島県', value: '34' },
      { label: '山口県', value: '35' },
      { label: '徳島県', value: '36' },
      { label: '香川県', value: '37' },
      { label: '愛媛県', value: '38' },
      { label: '高知県', value: '39' },
      { label: '福岡県', value: '40' },
      { label: '佐賀県', value: '41' },
      { label: '長崎県', value: '42' },
      { label: '熊本県', value: '43' },
      { label: '大分県', value: '44' },
      { label: '宮崎県', value: '45' },
      { label: '鹿児島県', value: '46' },
      { label: '沖縄県', value: '47' }
    ]

</script>
<style lang="scss" scoped>
.required-mark {
  color: #FFFF;
  background-color: #FF5A36;
  border-radius: 5px;
  font-weight: bold;
  padding: 0 1%;
  margin: 0 3%;
}
.search-mark {
  color: #FF5136;
  background-color: #FFFF;
  border: 1px solid#FF5136;
  border-radius: 5px;
  padding: 0 1%;
  margin: 0 3%;
}
.post-number-hypen{
  padding-top: 20px;
  margin-right: 15px;
  margin-left: 15px;
}
@media screen and (max-width: 768px) {
.sp {
  &_label {
    font-size: 2em !important;
  }

  &_field {
    width: 100% !important;
  }
  &_post_left{
    width: 20%;
  }
  &_post_right{
    width: 30%;
  }
}
}
</style>