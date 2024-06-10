<script lang="ts">
export type CourseList = {
  course_id: number // コースのID
  title: string // コースのタイトル
  description: string // コースの説明
  created_user: number // コースを作成したユーザーのID
  thumbnail_url: string // コースのサムネイル画像のURL
  created_at: string // コースの作成日時 (ISO 8601形式)
}

export type CourseData = {
  course_id: number // コースのID
  title: string // コースのタイトル
  description: string // コースの説明
  created_user: number // コースを作成したユーザーのID
  thumbnail_url: string // コースのサムネイル画像のURL
  expected_end_hours: number // コースの終了推定時間
  total_curriculums: number // カリキュラム総数
  tech_category: string // 技術カテゴリ
  created_at: string // コースの作成日時 (ISO 8601形式)
  sections: {
    section_id: number // セクションのID
    title: string // セクションのタイトル
    description: string // セクションの説明
    duration: number // セクションの時間
    curriculums: {
      curriculum_id: number // カリキュラムのID
      title: string // カリキュラムのタイトル
      description: string // カリキュラムの説明
      duration: number // カリキュラムの時間
      is_completed: boolean // カリキュラム完了状況
    }
  }
}
</script>
