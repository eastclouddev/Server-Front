<template>
  <v-container>
    <v-breadcrumbs :items="items" color="#FF5A36">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
    <descriptionItem />
    <CuriculumList />
    <!-- 今回実装不要のためコメントアウト -->
    <!-- <RecommendItem /> -->
  </v-container>
</template>

<script>
import RecommendItem from '~/features/course/courseDescription/components/RecommendItem.vue';
import CuriculumList from '~/features/course/courseDescription/components/CuriculumList.vue'
import descriptionItem  from '~/features/course/courseDescription/components/DescriptionItem.vue'

export default {
  components: {
    RecommendItem,
    CuriculumList,
    descriptionItem
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