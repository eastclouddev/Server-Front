<template>
  <v-dialog max-width="1040px" height="auto">
    <template v-slot:activator="{ props: activatorProps }">
      <v-card
        flat
        class="text-center sp_text"
        style="background-color: transparent"
      >
        <a
          v-bind="activatorProps"
          style="cursor: pointer; text-decoration: underline; color: #ff5136"
          >詳細</a
        >
      </v-card>
    </template>
    <template v-slot:default>
      <v-card-actions>
        <v-spacer></v-spacer>
        <Button
          color="#FFFFFF"
          style="background-color: #ff5136; width: 10rem"
          buttonText="ダウンロード"
          icon="mdi-download"
          @click="downloadInvoice"
        >
        </Button>
      </v-card-actions>
      <v-card class="pa-5 ma-5">
        <v-card-text>
          <v-sheet class="d-flex justify-space-between">
            <div>
              <h1 style="color: #ff5a36">請求書</h1>
              <div
                class="pa-2 d-flex justify-space-between"
                style="font-weight: bold"
              >
                <span>株式会社〇〇</span
                ><span style="color: #ff5a36">御中</span>
              </div>
              <v-divider style="color: #ff5a36; opacity: 1"></v-divider>
              <p class="pa-2" style="color: #ff5a36; font-size: 0.8em">
                下記の通りにご請求申しあげます。
              </p>
            </div>
            <p>2024年3月1日</p>
          </v-sheet>
          <v-sheet class="mb-10 d-flex justify-space-between align-end">
            <div>
              <div class="d-flex">
                <p
                  class="d-flex align-center justify-center pa-1 mb-2 mr-10"
                  style="
                    color: #ffffff;
                    background-color: #ff5136;
                    width: 8rem;
                    border-radius: 5px;
                    font-weight: bold;
                  "
                >
                  ご請求金額
                </p>
                <p style="font-size: 2em; font-weight: bold">
                  ￥０００００００-
                </p>
              </div>
              <v-divider
                style="color: #ff5a36; opacity: 1"
                height="10px"
              ></v-divider>
            </div>
            <div class="d-flex flex-column">
              <div class="d-flex align-end">
                <p style="font-weight: bold" class="mr-10">株式会社〇〇</p>
                <span class="stanp">印</span>
              </div>
              <div>
                <p>郵便番号〒100-0000</p>
                <p>住所</p>
                <p>電話番号</p>
                <p>メールアドレス</p>
              </div>
            </div>
          </v-sheet>

          <v-table density="compact" width="100%">
            <thead style="color: #ffffff; background-color: #ff5a36">
              <tr>
                <th
                  class="text-center pa-0"
                  style="
                    font-weight: bold;
                    border: 2px solid #ffffff;
                    border-radius: 5px;
                  "
                >
                  No.
                </th>
                <th
                  class="text-center pa-0"
                  style="
                    font-weight: bold;
                    border: 2px solid #ffffff;
                    border-radius: 5px;
                  "
                >
                  内訳
                </th>
                <th
                  class="text-center pa-0"
                  style="
                    font-weight: bold;
                    border: 2px solid #ffffff;
                    border-radius: 5px;
                  "
                >
                  数量
                </th>
                <th
                  class="text-center pa-0"
                  style="
                    font-weight: bold;
                    border: 2px solid #ffffff;
                    border-radius: 5px;
                  "
                >
                  単価
                </th>
                <th
                  class="text-center pa-0"
                  style="
                    font-weight: bold;
                    border: 2px solid #ffffff;
                    border-radius: 5px;
                  "
                >
                  合計
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in items"
                :key="item.id"
                :style="{
                  backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#FFFAF4',
                }"
              >
                <td
                  :style="{
                    borderRight: '2px solid #FF5A36',
                    borderLeft: '2px solid #FF5A36',
                    borderTop: index === 0 ? '2px solid #FF5A36' : 'none',
                    borderBottom:
                      index === items.length - 1 ? '2px solid #FF5A36' : 'none',
                    borderTopLeftRadius: index === 0 ? '5px' : '0',
                    borderBottomLeftRadius:
                      index === items.length - 1 ? '5px' : '0',
                    width: '30px',
                  }"
                  class="text-center"
                >
                  {{ index + 1 }}
                </td>
                <td
                  :style="{
                    borderRight: '2px solid #FF5A36',
                    borderTop: index === 0 ? '2px solid #FF5A36' : 'none',
                    borderBottom:
                      index === items.length - 1 ? '2px solid #FF5A36' : 'none',
                  }"
                >
                  {{ item.description }}
                </td>
                <td
                  :style="{
                    borderRight: '2px solid #FF5A36',
                    borderTop: index === 0 ? '2px solid #FF5A36' : 'none',
                    borderBottom:
                      index === items.length - 1 ? '2px solid #FF5A36' : 'none',
                    width: '30px',
                  }"
                  class="text-center"
                >
                  {{ item.order }}
                </td>
                <td
                  :style="{
                    borderRight: '2px solid #FF5A36',
                    borderTop: index === 0 ? '2px solid #FF5A36' : 'none',
                    borderBottom:
                      index === items.length - 1 ? '2px solid #FF5A36' : 'none',
                    width: '100px',
                  }"
                  class="text-center"
                >
                  {{ item.amount }}
                </td>
                <td
                  :style="{
                    borderRight: '2px solid #FF5A36',
                    borderTop: index === 0 ? '2px solid #FF5A36' : 'none',
                    borderBottom:
                      index === items.length - 1 ? '2px solid #FF5A36' : 'none',
                    borderTopRightRadius: index === 0 ? '5px' : '0',
                    width: '100px',
                  }"
                  class="text-center"
                >
                  <span v-if="item.order * item.amount">{{
                    item.order * item.amount
                  }}</span>
                </td>
              </tr>
            </tbody>
          </v-table>
          <div class="d-flex justify-space-between">
            <div>
              <h4 style="color: #ff5a36" class="mt-3">備考欄</h4>
              <v-text-field
                width="600px"
                variant="plain"
                disabled
                style="
                  border: 1px solid #ff5a36;
                  border-radius: 5px;
                  height: 75px;
                "
              >
              </v-text-field>
            </div>
            <v-table
              class="mb-5"
              style="
                width: 244px;
                border: 2px solid #ff5a36;
                border-top: none;
                border-radius: 0 0 5px 5px;
              "
            >
              <tbody>
                <tr
                  v-for="(row, index) in summaryRows"
                  :key="index"
                  :style="{
                    backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#FFFAF4',
                  }"
                  class="d-flex"
                >
                  <th
                    class="flex-grow-1 text-center pa-2"
                    style="
                      color: #ff5136;
                      border-right: 2px solid #ff5a36;
                      width: 142px;
                      height: 36px;
                      font-weight: bold;
                      font-size: 0.9em;
                    "
                  >
                    {{ row.label }}
                  </th>
                  <td
                    class="flex-grow-1 text-center pa-2"
                    style="width: 98px; height: 36px"
                  >
                    ¥{{ row.value }}
                  </td>
                </tr>
              </tbody>
            </v-table>
          </div>

          <v-sheet>
            <h4
              class="text-center pt-1 pb-1 mb-3"
              style="
                color: #ffffff;
                background-color: #ff5136;
                width: 8rem;
                border-radius: 5px;
                font-weight: bold;
              "
            >
              お振込先情報
            </h4>
            <v-card flat class="pa-3" style="border: 1px solid #ff5a36">
              <p>振り込み期日:</p>
              <p>銀行情報</p>
            </v-card>
          </v-sheet>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          description: '担当したコースまたは内訳表示',
          order: 1,
          amount: 10200,
        },
        {
          id: 2,
          description: '担当したコースまたは内訳表示',
          order: 1,
          amount: 10200,
        },
        {
          id: 3,
          description: '',
          order: '',
          amount: '',
        },
        {
          id: 4,
          description: '',
          order: '',
          amount: '',
        },
        {
          id: 5,
          description: '',
          order: '',
          amount: '',
        },
        {
          id: 6,
          description: '',
          order: '',
          amount: '',
        },
        {
          id: 7,
          description: '',
          order: '',
          amount: '',
        },
        {
          id: 8,
          description: '',
          order: '',
          amount: '',
        },
        {
          id: 9,
          description: '',
          order: '',
          amount: '',
        },
        {
          id: 10,
          description: '',
          order: '',
          amount: '',
        },
      ],
    }
  },
  computed: {
    subtotal() {
      return this.items.reduce((sum, item) => sum + item.order * item.amount, 0)
    },
    tax() {
      return Math.round(this.subtotal * 0.1) // 消費税10%と仮定
    },
    total() {
      return this.subtotal + this.tax
    },
    summaryRows() {
      return [
        { label: '小計', value: this.subtotal },
        { label: '消費税', value: this.tax },
        { label: '合計金額', value: this.total },
      ]
    },
  },
  methods: {
    downloadInvoice() {
      // ダウンロードロジック追加
      alert('請求書をダウンロードします。')
    },
  },
}
</script>
<style lang="scss" scoped>
.stanp {
  width: 80px;
  height: 80px;
  line-height: 80px;
  border: 2px solid #cc092b;
  color: #cc092b;
  border-radius: 50%;
  background-color: #ffffff;
  text-align: center;
  display: inline-block;
  margin-bottom: 10px;
}
</style>
