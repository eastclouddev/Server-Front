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
   * id: int
   *     通知のID
   * from_user_id: int
   *     ユーザーのID
   * from_user_name: str
   *     ユーザーの名前
   * content: str
   *     通知の内容
   * related_question_id: int
   *     質問のID
   * related_answer_id: int
   *     回答のID
   * related_review_request_id: int
   *     レビューリクエストのID
   * related_review_response_id: int
   *     レビューレスポンスのID
   * is_read: bool
   *     通知が既読かどうか
   * created_at: str
   *     作成日時
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.NotificationListResponseBody
  }
}
