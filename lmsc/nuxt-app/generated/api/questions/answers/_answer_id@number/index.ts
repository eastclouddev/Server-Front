/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * 質問回答更新（受講生、メンター）
   * 
   * Parameter
   * -----------------------
   * answer_id: int
   *     更新したい回答のID
   * content: str
   *     更新したい回答の内容
   * media_content: json
   *     更新したい回答に関連するメディアコンテンツの情報
   * is_read: bool
   *     回答か既読かを表すフラグ
   * 
   * Returns
   * -----------------------
   * dict
   *     id: int
   *         更新された回答のID
   *     question_id: int
   *         回答が紐づく質問のID
   *     user_id: int
   *         回答を投稿したユーザーのID
   *     parent_answer_id: Optional[int]
   *         返信先の回答ID
   *     content: str
   *         更新された回答の内容
   *     media_content: Optional[json]
   *         更新されたメディアコンテンツの情報
   *     is_read: bool
   *         回答が既読かどうかを示すフラグ（boolean）
   *     updated_at: str
   *         回答が最後に更新された日時（ISO 8601形式）
   */
  patch: {
    status: 200
    /** Successful Response */
    resBody: Types.UpdateAnswerResponseBody
    reqBody: Types.UpdateAnswerRequestBody
  }
}
