<script setup lang="ts">
import Problem from '~/features/test/components/Problem.vue'
// import Detail from '~/features/test/components/CourseDetail.vue'
// import Section from '~/features/test/components/CourseSection.vue'
</script>

<template>
  <div class="whole">
    <div class="left">
      <Problem />
      <!-- <Detail /> -->
    </div>
    <div class="right">
      <!-- <Section /> -->
      d
    </div>
  </div>
</template>

<style scoped lang="scss">
.whole {
  width: 100%;
  display: flex;
  gap: 39px;
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
