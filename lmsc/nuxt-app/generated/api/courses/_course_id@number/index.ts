/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * コース詳細取得
   * 
   * Parameter
   * -----------------------
   * course_id: int
   *     取得するコースのID
   * 
   * Returns
   * -----------------------
   * dict
   *     course_id: int
   *         コースのID
   *     title: str
   *         コースのタイトル
   *     description: str
   *         コースの詳細な説明
   *     created_user_id: int
   *         コースを作成したユーザーのID
   *     thumbnail_url: str
   *         コースのサムネイル画像のURL
   *     expectesd_end_hours: int
   *         コースの終了想定時間
   *     total_curriculums: int
   *         カリキュラム総数
   *     tech_category: str
   *         技術カテゴリ
   *     created_at: str
   *         コースの作成日時（ISO 8601形式）
   *     sections: array
   *         コースのセクション一覧
   *         section_id: int
   *             セクションのID
   *         title: str
   *             セクションのタイトル
   *         description: str
   *             セクションの説明
   *         duration: str
   *             セクションの時間（HH:MM:SS形式）
   *         curriculums: array
   *             セクションに紐づくカリキュラムの一覧
   *             curriculum_id: int
   *                 カリキュラムのID
   *             title: str
   *                 カリキュラムのタイトル
   *             description: str
   *                 カリキュラムの説明
   *             duration: str
   *                 セクションの時間（HH:MM:SS形式）
   *             is_completed: bool
   *                 カリキュラム完了状況
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.CourseDetailResponseBody
  }
}
