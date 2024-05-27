/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * 質問回答投稿作成
   * Parameters
   * -----------------------
   * dict
   *     user_id: int
   *         回答するユーザーのID
   *     content: str
   *         回答
   * 
   * Returns
   * -----------------------
   * dict
   *     answer_id: int
   *         作成された回答のID
   *     question_id: int
   *         回答に紐づく質問のID
   *     user_id: int
   *         回答したユーザーのID
   *     content: str
   *         回答
   */
  post: {
    status: 201
    /** Successful Response */
    resBody: Types.AnswerCreateResponseBody
    reqBody: Types.AnswerCreateRequestBody
  }
}
