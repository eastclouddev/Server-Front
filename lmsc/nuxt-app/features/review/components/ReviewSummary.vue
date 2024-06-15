<template>
  <v-card flat class="mx-auto pa-7 mb-8" width="90%">
    <div class="d-flex justify-space-between align-center mb-4">
      <div class="d-flex">
        <img src="/assets/account.svg" alt="" />
        <v-card-title style="font-weight: bold">課題提出</v-card-title>
      </div>
    </div>
    <v-divider class="#CFCFCF" thickness="1"></v-divider>
    <v-breadcrumbs :items="breadcrumbs" color="#FF5A36" class="pl-0">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>

    <v-card class="pt-8 pb-8" color="#F5F5F5">
      <v-sheet max-width="90%" class="mx-auto d-flex" color="#F5F5F5">
        <FilterSelect
          v-model="selectedCategory"
          :filterOptions="categories"
          placeholderText="カテゴリ"
          @filter-change="filterData"
        />

        <FilterSelect
          v-model="selectedSort"
          :filterOptions="sortOptions"
          placeholderText="ソート"
          @filter-change="filterData"
        />
      </v-sheet>

      <v-sheet width="90%" class="mx-auto" color="#F5F5F5">
        <div v-if="filteredItems.length === 0">
          <p>該当する質問はありません。</p>
        </div>
        <div v-else>
          <v-card
            flat
            v-for="(item, index) in sortedItems"
            :key="index"
            class="pa-8 mb-7"
          >
            <div class="d-flex justify-space-between">
              <p style="width: 10rem; color: #ff5a36" class="sp_categoly">
                {{ item.tech_category }}
              </p>
              <div class="d-flex justify-end ml-auto pb-3 sp_status">
                <span v-if="!item.is_read" class="unread">未読</span>
                <span :class="getStatusClass(item.is_closed)">
                  {{ getStatusText(item.is_closed) }}
                </span>
              </div>
            </div>
            <div>
              <p
                style="width: 13rem; font-weight: bold"
                class="mb-2 sp_categoly"
              >
                {{ item.title }}
              </p>
              <div class="d-flex justify-space-between">
                <NuxtLink
                  :to="`/review/${item.id}`"
                  :style="{ color: '#242424', textDecoration: 'none' }"
                >
                  {{ truncateText(item.content, 32) }}
                </NuxtLink>
                <div class="d-flex">
                  <!-- TODO: ここにコメント数を表示する -->
                  <!-- <p>{{ item.number_of_comments }}</p> -->
                  <p>3</p>
                  <v-icon color="#FF5A36">mdi-comment-text</v-icon>
                </div>
              </div>
            </div>
          </v-card>
        </div>
      </v-sheet>
    </v-card>
  </v-card>
</template>

<script>
import FilterSelect from '~/components/FilterSerect.vue'

export default {
  components: {
    FilterSelect,
  },
  props: {
    reviews: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      categories: ['Webアプリ', 'OAuth2', 'ブロックチェーン'],
      sortOptions: ['新しい順', '古い順'],
      selectedCategory: null,
      selectedSort: null,
      breadcrumbs: [
        {
          title: 'ダッシュボード',
          disabled: false,
          href: '/dashboard',
        },
        {
          title: '課題提出一覧',
          disabled: false,
        },
      ],
    }
  },
  computed: {
    filteredItems() {
      return this.reviews.filter(item => {
        const categoryMatch =
          !this.selectedCategory || item.tech_category === this.selectedCategory
        return categoryMatch
      })
    },
    sortedItems() {
      return this.filteredItems.slice().sort((a, b) => {
        if (this.selectedSort === '新しい順') {
          return new Date(b.created_at) - new Date(a.created_at)
        } else {
          return new Date(a.created_at) - new Date(b.created_at)
        }
      })
    },
  },
  methods: {
    filterData() {
      // Add any filtering logic if necessary
    },
    truncateText(text, maxLength) {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...'
      } else {
        return text
      }
    },
    getStatusClass(isClosed) {
      return isClosed ? 'resolved' : 'unresolved'
    },
    getStatusText(isClosed) {
      return isClosed ? '解決済' : '未解決'
    },
  },
}
</script>

<style lang="scss" scoped>
.unread {
  color: #ffffff;
  background-color: #ff5a36;
  font-weight: bold;
  padding: 1px 3px;
  width: 5rem;
  text-align: center;
  border-radius: 5px;
  margin-left: 10px;
}

.resolved {
  color: #292737;
  font-weight: bold;
  padding: 1px 3px;
  width: 5rem;
  text-align: center;
  border-radius: 5px;
  border: solid 1px #292737;
  margin-left: 10px;
}

.unresolved {
  color: #ffffff;
  background-color: #292737;
  font-weight: bold;
  padding: 1px 3px;
  width: 5rem;
  text-align: center;
  border-radius: 5px;
  margin-left: 10px;
}

@media (max-width: 768px) {
  .sp {
    &_box {
      flex-direction: column;
      align-items: flex-start;
    }
    &_categoly {
      align-items: flex-start;
    }
    &_status {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  .unread {
    margin-bottom: 5px;
  }
  .resolved {
    margin-bottom: 5px;
  }
  .unresolved {
    margin-bottom: 5px;
  }
}
</style>
