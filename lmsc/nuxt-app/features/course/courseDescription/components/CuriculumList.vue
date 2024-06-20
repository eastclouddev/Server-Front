<template>
  <div>
    <div class="d-flex">
      <img src="/assets/curriculum.svg" class="pr-5" />
      <v-card-title
        class="pt-2 pb-2 pl-0 sp_title"
        style="font-size: 1.6em; font-weight: bold"
        color="#242424">
        カリキュラム一覧
      </v-card-title>
    </div>
    <v-divider class="#CFCFCF" thickness="1"></v-divider>
    <v-card flat class="d-flex align-center pa-10 mb-6 mt-6"
      style="border-radius: 5px 5px 0 0; box-shadow: 4px 0px 6px -3px rgba(0, 0, 0, 0.2);">
      <CourseSection />
    </v-card>
  </div>
</template>

<script>
import CourseSection from '~/features/test/components/CourseSection.vue'
export default {
  components: {
  CourseSection
  },
}
</script>