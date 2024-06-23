/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /**
   * 通知一覧(管理者)
   *
   * Parameters
   * -----------------------
   * なし
   *
   * -----------------------
   * dict: array
   *     id: int
   *         通知のID
   *     from_user: dict
   *         id: int
   *             ユーザーのID
   *         name: str
   *             ユーザーの名前
   *     question_id: int
   *         質問のID
   *     answer_id: int
   *         回答のID
   *     related_review_request_id: int
   *         レビューリクエストのID
   *     related_review_response_id: int
   *         レビューレスポンスのID
   *     title: str
   *         通知のタイトル
   *     content: str
   *         通知の内容
   *     is_read: bool
   *         通知が既読かどうか
   *     created_at: str
   *         通知が生成された日時（ISO 8601形式）
   *
   * explanation
   * -----------------------
   * メンターは全ての通知を取得
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.Schemas__notifications__NotificationListResponseBody
  }
}
