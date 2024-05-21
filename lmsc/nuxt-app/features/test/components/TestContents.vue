<script setup lang="ts">
import Problem from '~/features/test/components/Problem.vue'
// import Detail from '~/features/test/components/CourseDetail.vue'
// import Section from '~/features/test/components/CourseSection.vue'
</script>

<template>
  <v-container class="whole">
    <v-row>
      <v-col class="left">
        <Problem />
        <!-- <Detail /> -->
      </v-col>
      <v-col class="right">
        <!-- <Section /> -->
        d
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.whole {
  width: 100%;
  display: flex;
  gap: 39px;
  margin-top: 67px;
  .left {
    width: 830px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 33px;
  }
  .right {
    width: 340px;
  }
}
</style>
