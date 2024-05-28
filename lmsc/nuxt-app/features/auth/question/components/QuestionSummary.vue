<template>
  <v-card flat class="mx-auto pa-7 mb-8" width="90%">
    <div class="d-flex justify-space-between align-center mb-4">
      <div class="d-flex">
        <img src="/assets/question.svg" alt="">
        <v-card-title style="font-weight:bold;">質問リスト</v-card-title>
      </div>
    </div>
    <v-divider class="#CFCFCF" thickness="1"></v-divider>
    <v-breadcrumbs :items="breadcrumbs" color="#FF5A36" class="pl-0">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>

    <v-card class="pt-8 pb-8" color="#F5F5F5">
      <FilterComponent
        :categories="categories"
        v-model:selectedCategory="selectedCategory"
        @category-change="onCategoryChange"
      />
      <v-sheet width="90%" class="mx-auto" color="#F5F5F5">
        <div v-if="filteredItems.length === 0">
          <p>該当する質問はありません。</p>
        </div>
        <div v-else >
          <v-card flat v-for="(item, index) in filteredItems" :key="index" class="pa-8 mb-7">
            <div class="d-flex justify-space-between">
              <p style="width:10rem; color:#FF5A36;" class="sp_categoly">{{ item.category }}</p>
              <div class="d-flex justify-end ml-auto pb-3 sp_status">
                <span :class="getStatusClass(item.status1)">{{ getStatusText(item.status1) }}</span>
                <span v-if="item.status2" :class="getStatusClass(item.status2)">{{ getStatusText(item.status2) }}</span>
              </div>
            </div>
            <div>
              <p style="width:10rem; font-weight:bold;" class="mb-2 sp_categoly">{{ item.title }}</p>
              <div class="d-flex justify-space-between">
                <NuxtLink to="/questiondetail" :style="{ color: '#242424', textDecoration: 'none' }">
                  {{ truncateText(item.message, 32) }}
                </NuxtLink>
                <div class="d-flex">
                  <p class="mr-2">{{ item.post }}</p>
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
import FilterComponent from './FilterComponent.vue';

export default {
  components: {
    FilterComponent
  },
  data() {
    return {
      selectedCategory: null,
      items: [
        {
          id: '1',
          title:'コードについて',
          message: 'コードが正しく反映されないのですが、どこのコードが正しく反映されないのでしょうか？',
          category: 'Python',
          status1: '未解決',
          post: 2,
          date: '2024-05-02T10:45:00',
        },
        {
          id: '2',
          title:'コードについて',
          message: 'コードが正しく反映されないのですが、どこのコードが正しく反映されないのでしょうか？',
          category: 'PHP',
          status1: '未読', status2: '未解決',
          post: 2,
          date: '2024-05-03T10:45:00',
        },
        {
          id: '3',
          title:'コードについて',
          message: 'コードが正しく反映されないのですが、どこのコードが正しく反映されないのでしょうか？',
          category: 'Obj-c',
          status1: '解決済',
          post: 2,
          date: '2024-05-03T10:45:00',
        },
        {
          id: '4',
          title:'コードについて',
          message: 'コードが正しく反映されないのですが、どこのコードが正しく反映されないのでしょうか？',
          category: 'Obj-c',
          status1: '未読',
          status2: '未解決',
          post: 2,
          date: '2024-05-04T10:45:00',
        },
        {
          id: '5',
          title:'コードについて',
          message: 'コードが正しく反映されないのですが、どこのコードが正しく反映されないのでしょうか？',
          category: 'Obj-c',
          status1: '解決済',
          post: 2,
          date: '2024-05-0T10:45:00',
        },
      ],
      breadcrumbs: [
        {
          title: 'ダッシュボード',
          disabled: false,
          href: '/dashboard',
        },
        {
          title: '質問リスト',
          disabled: false,
        },
      ],
      categories: ['Python', 'PHP', 'Obj-c'],
      statuses: ['未読', '解決済', '未解決'],
    }
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => {
        const categoryMatch = !this.selectedCategory || item.category === this.selectedCategory;
        return categoryMatch ;
      });
    }
  },
  methods: {
    onCategoryChange(category) {
      this.selectedCategory = category;
    },

    truncateText(text, maxLength) {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
      } else {
        return text;
      }
    },
    getStatusClass(status) {
      switch (status) {
        case '未読':
          return 'unread';
        case '解決済':
          return 'resolved';
        case '未解決':
          return 'unresolved';
      }
    },
    getStatusText(status) {
      return status;
    }
  }
}
</script>

<style lang="scss" scoped>
.unread {
  color: #FFFFFF;
  background-color: #FF5A36;
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
  color: #FFFFFF;
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