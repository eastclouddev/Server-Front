/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * レビュー更新（受講生）
   * 
   * Parameters
   * -----------------------
   * dict
   *     review_id: int
   *         更新したいレビューのID
   *     title: str
   *         レビューリクエストのタイトル
   *     content: str
   *         レビューの更新された内容
   *     is_read: bool
   *         レビューが既読かどうかを更新するフラグ
   * 
   * Returns
   * -----------------------
   * dict
   *     id: int
   *         更新されたレビューリクエストのID
   *     title: str
   *         レビューリクエストのタイトル
   *     content: text
   *         更新されたレビューの内容
   *     is_read: bool
   *         レビューが既読かどうかを示すフラグ
   *     updated_at: str
   *         レビューが最後に更新された日時
   */
  patch: {
    status: 200
    /** Successful Response */
    resBody: Types.UpdateReviewResponseBody
    reqBody: Types.UpdateReviewRequestBody
  }
}
