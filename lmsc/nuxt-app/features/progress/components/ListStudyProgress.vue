<template>
  <v-container style="margin-bottom:10%;padding-top: 15px !important; padding: 6%; background-color: #F5F5F5 !important">
          
          <SearchForm />
        <template v-if="filteredList.length > 0">
          <PcProgressTable :filteredList="filteredList" :childUserRole="userRole" />
          <SpProgressTable :filteredList="filteredList" :childUserRole="userRole" />

        </template>
        <template v-else>
          <p class="message">該当するデータがありません</p>
        </template>

  </v-container>
</template>

<script>
import SearchForm from '~/components/SearchForm.vue';
import SpProgressTable from "~/features/progress/components/SpProgressTable.vue";
import PcProgressTable from "~/features/progress/components/PcProgressTable.vue";

export default {
  props: {
    userRole: {
      type: Number,
      default: null,
      required: true
    }
  },
  components: {
    PcProgressTable,
    SpProgressTable,
    SearchForm,
  },
  data() {
    return {
      selectedMonth: null,
      selectedStatus: null,
      months: ['2024/01', '2023/12', '2023/11'],
      statuses: ['未請求', '請求済', '支払済'],
      data: [
        {
          id: 1,
          companyName: '株式会社AA',
          mailAddres: 'AAA@mail.com',
          payment: 1000,
        },
        {
          id: 2,
          companyName: '株式会社BB',
          mailAddres: 'BBB@mail.com',
          payment: 2000,
        },
        {
          id: 3,
          companyName: '株式会社CC',
          mailAddres: 'CCC@mail.com',
          payment: 1500,
        },
        {
          id: 4,
          companyName: '株式会社DD',
          mailAddres: 'DDD@mail.com',
          payment: 3000,
        },
        {
          id: 5,
          companyName: '株式会社EE',
          mailAddres: 'EEE@mail.com',
          payment: 3000,
        },
      ],
    }
  },
  computed: {
    filteredList() {
      return this.data.filter(item => {
        return (
          (!this.selectedMonth || item.billingDate === this.selectedMonth) &&
          (!this.selectedStatus || item.status === this.selectedStatus)
        )
      })
    },
  },
  methods: {
    returnLink() {
      window.location.href = '/company/list';
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
  color: #FF5136;
  background-color: #FFFF;
  border: 1px solid #FF5136;
  border-radius: 5px;
  padding: 0 1%;
  width: 260px !important;
}

.right-aligned-link {
  text-align: right;
}

.link-style {
  color: black;
  text-decoration: underline;
}
</style>
