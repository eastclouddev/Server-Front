/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * 自分のレビュー一覧取得
   * 
   * Parameters
   * -----------------------
   * user_id: int
   *     ユーザーのID
   * フィルタ―
   *     category: str
   * ソート
   *     sort: str(sortとorderはセット)
   *         created_at
   *     order: str
   *         asc, desc
   * 
   * Returns
   * -----------------------
   * reviews: dict
   *     id: int
   *         レビューのID
   *     title: str
   *         レビューのタイトル
   *     content: str
   *         レビューの内容
   *     curriculum_id: int
   *         紐づいたカリキュラムのID
   *     tech_category: str
   *         カリキュラムのコースに紐づいた技術カテゴリ
   *     created_at: str
   *         レビュー作成日
   *     is_read: bool
   *         未読コメントの有無
   *     is_closed: bool
   *         完了しているかどうか
   */
  get: {
    query?: {
      category?: string | undefined
      sort?: string | undefined
      order?: string | undefined
    } | undefined

    status: 200
    /** Successful Response */
    resBody: Types.Schemas__students__ReviewRequestListResponseBody
  }
}
