<!-- Todo:コース一覧ページに書き換える -->
<template>
  <v-row>
    <v-col>
      <CourseDetails :course="course" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import CourseDetails from "~/features/course/courseDetail/components/CourseDetails.vue";
import type { CourseDetail } from "~/features/course/types";
import type { CourseDetailResponseBody } from "~/generated/api/@types";

const course: CourseDetail = {
  course_id: 1,
  title: "Python 3 入門 + 応用 ①",
  description: `本コースは、Webディレクターの経験がないくてもWebディレクターの仕事を一通り学び、実践することができるコースになっております。
実性を獲得する方法、顧客に馬く提案の仕方、価格交渉時の注意点、スケジュールがズしたときの対処方法など、ディレクションを行っていく上で大切なポイントについて学ぶことができます。
現在、Web制作は副業として人気が高いですが、作るだけでは実際にビジネスとして成り立ちません。正しい知識がないと、失敗してしまうことが多いです。
Web制作のこれから
知識と、現場の想像するホームページを作成したり、顧客から原稿・画像が納品の3日前に送られてきて徹夜でホームページを作成したり、デザイン変更の翌日に納品日が決まるなどめまぐるしい現場ながらも、エキサイティングで刺激的なWeb業界の中で、このようにすれば利益を出すことができるのかをしっかりお伝えできればと思います。
しかし、あらかじめ失敗する理由や対策方法を知っていれば、顧客とのトラブルやミスを減らすことができます。また、価格競争が激しいWeb業界の中で、このようにすれば利益を出すことができるのかをしっかりお伝えできればと思います。
さらに、本コースでは最新のWeb技術やツールの使い方、トレンドについてもカバーしています。例えば、レスポンシブデザインやSEOの基本、最新のJavaScriptフレームワークの使い方など、現場で即戦力となるスキルを習得できます。
また、プロジェクト管理やチームマネジメントのスキルも重要です。これには、タスク管理ツールの使い方や、チームメンバーとの効果的なコミュニケーション方法、プロジェクトの進捗を把握するためのメトリクスの設定方法などが含まれます。
さらに、クライアントとの関係構築の重要性についても学びます。信頼関係を築くためのコミュニケーション術や、クライアントのニーズを正確に把握するためのヒアリング技術、そして長期的なビジネス関係を築くための戦略についても詳しく解説します。
実際の事例を通じて学ぶこともこのコースの特徴です。成功したプロジェクトのケーススタディや、失敗から学ぶべき教訓など、具体的な例を交えながら理解を深めていきます。これにより、理論だけでなく実践的な知識も身につけることができます。
最後に、卒業後も継続的に学び続けるためのリソースやコミュニティについても紹介します。最新情報をキャッチアップするためのおすすめのブログやポッドキャスト、Webディレクター同士が情報交換を行うためのオンラインコミュニティなど、学び続けるための環境を整える方法もお伝えします。`,
  level: "初級",
  duration: 30.5,
  video: {
    video_url: '/_nuxt/assets/81562_1280x720.mp4', // 仮データ
    thumbnail_url:'https://picsum.photos/id/237/200/300', // 仮データ
  },
  sections: [
    {
      section_id: 1,
      title: "Python 3 入門",
      description: "Python 3の基本的な使い方を学びます。",
      curriculums: [
        {
          curriculum_id: 1,
          title: "Python 3のインストール",
          description: "Python 3のインストール方法を学びます。",
        },
        {
          curriculum_id: 2,
          title: "Python 3の基本的な使い方",
          description: null,
        },
      ],
    },
    {
      section_id: 2,
      title: "Python 3 応用",
      description: null,
      curriculums: [
        {
          curriculum_id: 3,
          title: "Python 3の応用的な使い方",
          description: null,
        },
      ],
    },
  ],
};
</script>
