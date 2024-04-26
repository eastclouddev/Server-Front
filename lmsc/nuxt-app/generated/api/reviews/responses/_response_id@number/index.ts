/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * レビュー回答更新
   * 
   * Parameters
   * -----------------------
   * dict
   *     response_id: int
   *         更新したい回答のID
   *     content: str
   *         回答の更新された内容
   *     is_read: bool
   *         回答が既読かどうかを更新するフラグ
   * 
   * Returns
   * -----------------------
   * dict
   *     id: int
   *         更新された回答のID
   *     review_request_id: int
   *         回答が紐づくレビューリクエストのID
   *     user_id: int
   *         回答を投稿したユーザーのID
   *     parent_response_id: int
   *         返信先の回答ID
   *     content: str
   *         更新された回答の内容
   *     is_read: bool
   *         回答が既読かどうかを示すフラグ
   *     updated_at: str
   *         回答が最後に更新された日時
   */
  patch: {
    status: 200
    /** Successful Response */
    resBody: Types.UpdateResponseResponseBody
    reqBody: Types.UpdateResponseRequestBody
  }
}
