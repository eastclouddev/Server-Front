/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * カリキュラムのレビュー一覧
   * 
   * Parameter
   * -----------------------
   * curriculum_id: int
   *     レビュー一覧を取得したいカリキュラムのID
   * 
   * Returns
   * -----------------------
   * reviews: array
   *     id: int
   *         レビューリクエストのID
   *     curriculum_id: int
   *         関連するカリキュラムのID
   *     user_id: int
   *         レビューリクエストを投稿したユーザーのID
   *     title: str
   *         レビューリクエストのタイトル
   *     content: str
   *         レビューリクエストの内容
   *     is_closed: bool
   *         レビューリクエストがクローズされているかどうか
   *     created_at: str
   *         レビューリクエストが作成された日時（ISO 8601形式）
   *     updated_at: str
   *         レビューリクエストが最後に更新された日時（ISO 8601形式）
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.ReviewsResponseBody
  }
}
