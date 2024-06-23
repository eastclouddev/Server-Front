/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * 質問回答投稿作成
   * 
   * Parameters
   * -----------------------
   * dict
   *     user_id: int
   *         回答するユーザーのID
   *     parent_answer_id: int
   *         返信先の回答ID
   *     content: str
   *         回答
   *     media_content: json
   *         関連するメディアコンテンツの情報
   * 
   * Returns
   * -----------------------
   * dict
   *     answer_id: int
   *         作成された回答のID
   *     question_id: int
   *         回答に紐づく質問のID
   *     parent_answer_id: int
   *         返信先の回答ID
   *     user: dict
   *         user_id: int
   *             回答したユーザーのID
   *         name: str
   *             回答したユーザーの名前
   *     content: str
   *         回答
   *     media_content: json
   *         関連するメディアコンテンツの情報
   *         url: str
   *             メディアコンテンツのURL
   *     created_at: str
   *         回答が作成された日時（ISO8601形式）
   */
  post: {
    status: 201
    /** Successful Response */
    resBody: Types.Schemas__questions__CreateResponseBody
    reqBody: Types.Schemas__questions__CreateRequestBody
  }
}
