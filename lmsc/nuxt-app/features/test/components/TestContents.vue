<script setup lang="ts">
import Problem from '~/features/test/components/Problem.vue'
import Detail from '~/features/test/components/CourseDetail.vue'
import Section from '~/features/test/components/CourseSection.vue'

const props = defineProps({
  ques: Object
})
const problem = props.ques

</script>

<template>
  <v-container class="whole">
    <v-row>
      <v-col class="left">
        <Problem :text="problem"/>
        <Detail />
      </v-col>
      <v-col class="right">
        <Section />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.v-container {
  padding: 0;
}
.whole {
  width: 100%;
  display: flex;
  margin: 0;
  margin-top: 67px;

  * {
    padding: 0;
    margin: 0;
  }
  .v-row {
    gap: 30px;

    .left {
      width: 830px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 40px;
    }
    .right {
      width: 340px;
    }
  }
}

@media screen and (max-width: 768px) {
  .whole {
    margin-top: 82px;
    .v-row {
      gap: 0;
      .left {
        width: 708px;
        gap: 97px;
      }
      .right {
        display: none;
      }
    }
  }
}
</style>
