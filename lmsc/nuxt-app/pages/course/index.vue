<template>
  <v-container>
    <v-row>
      <v-col>
        <CourseDetails :course="course" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import CourseDetails from '~/features/course/courseDetail/components/CourseDetails.vue'
import type { CourseDetailResponseBody } from '~/generated/api/@types'
import { useUserStore } from '~/store/user'

definePageMeta({
  layout: 'authenticated', // ここでレイアウトを設定
  middleware: 'auth', // ここでミドルウェアを設定
})

const userStore = useUserStore()
console.log('User store state in course page:', userStore.isAuthenticated)

const course = ref<CourseDetailResponseBody>({
  course_id: 1,
  title: 'Python 3 入門 + 応用 ①',
  description: `本コースは、Webディレクターの経験がないくてもWebディレクターの仕事を一通り学び、実践することができるコースになっております。 <br/>
    実性を獲得する方法、顧客に馬く提案の仕方、価格交渉時の注意点、スケジュールがズしたときの対処方法など、ディレクションを行っていく上で大切なポイントについて学ぶことができます。<br/>
    現在、Web制作は副業として人気が高いですが、作るだけでは実際にビジネスとして成り立ちません。正しい知識がないと、失敗してしまうことが多いです。<br/>
    Web制作のこれから<br/>
    知識と、現場の想像するホームページを作成したり、顧客から原稿・画像が納品の3日前に送られてきて徹夜でホームページを作成したり、デザイン変更の翌日に納品日が決まるなどめまぐるしい現場ながらも、 エキサイティングで刺激的なWeb業界の中で、このようにすれば利益を出すことができるのかをしっかりお伝えできればと思います。<br/>
    しかし、あらかじめ失敗する理由や対策方法を知っていれば、顧客とのトラブルやミスを減らすことができます。また、価格競争が激しいWeb業界の中で、このようにすれば利益を出すことができるのかをしっかりお伝えできればと思います。`,
  created_user_id: 100,
  created_at: '2023-01-01T12:00:00Z',
  sections: [
    {
      section_id: 1,
      title: 'Python 3 入門',
      description: 'Python 3の基本的な使い方を学びます。',
      curriculums: [
        {
          curriculum_id: 1,
          title: 'Python 3のインストール',
          description: 'Python 3のインストール方法を学びます。',
        },
        {
          curriculum_id: 2,
          title: 'Python 3の基本的な使い方',
          description: null,
        },
      ],
    },
    {
      section_id: 2,
      title: 'Python 3 応用',
      description: null,
      curriculums: [
        {
          curriculum_id: 3,
          title: 'Python 3の応用的な使い方',
          description: null,
        },
      ],
    },
  ],
})
</script>
