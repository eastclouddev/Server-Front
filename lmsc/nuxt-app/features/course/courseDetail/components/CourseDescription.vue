<template>
  <v-container>
    <v-breadcrumbs :items="items" color="#FF5A36">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>

コースのコンポーネント＞＞コース一覧から持ってくる
      <CuriculumList />
      <RecommendationItem />

  </v-container>
</template>

<script>
import RecommendationItem from '~/features/course/courseDetail/components/RecommendationItem.vue';
import CuriculumList from '~/features/course/courseDetail/components/CurriculumList.vue'

export default {
  components: {
    RecommendationItem,
    CuriculumList
  },
  data() {
    return {
      items: [
        {
          title: 'コース一覧',
          disabled: false,
          href: '/',
        },
        {
          title: 'Python',
          disabled: false,
        },
      ],
    }
  },
}
</script>

<style scoped>
</style>
