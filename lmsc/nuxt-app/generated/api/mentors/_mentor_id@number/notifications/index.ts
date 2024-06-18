/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * 通知一覧（メンター）
   * 
   * Parameters
   * -----------------------
   * mentor_id:int
   *     ユーザーのID
   * Returns
   * -----------------------
   * notifications: array
   *     id: int
   *         通知のID
   *     from_user: dict
   *         id: int
   *             通知を送ったユーザーのID
   *         name: str
   *             通知を送ったユーザーの名前
   *     question_id: int
   *         質問のID
   *     answer_id: int
   *         回答のID
   *     review_request_id: int
   *         レビューリクエストのID
   *     review_respomse_id: int
   *         レビューリスポンスのID
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
   * メンターが受け取る通知は受講生の質問・回答・レビュー依頼・レビュー回答
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.Schemas__mentors__NotificationListResponseBody
  }
}
