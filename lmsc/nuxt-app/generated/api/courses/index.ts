/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /**
   * コース一覧取得
   * 
   * Parameter
   * -----------------------
   * フィルター
   *     category: str
   * ソート
   *     sort: str(sortとorderはセット)
   *         time
   *     order: str
   *         asc, desc
   * 検索
   *     name: str
   * 
   * Returns
   * -----------------------
   * courses: array
   *     course_id: int
   *         コースのID
   *     title: str
   *         コースのタイトル
   *     description: str
   *         コースの説明
   *     created_user: int
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
   */
  get: {
    query?: {
      category?: string | undefined
      sort?: string | undefined
      order?: string | undefined
      name?: string | undefined
    } | undefined

    status: 200
    /** Successful Response */
    resBody: Types.Schemas__courses__AllResponseBody
  }
}
