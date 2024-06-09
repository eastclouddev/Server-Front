/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * カリキュラムの質問一覧
   * 
   * Parameter
   * -----------------------
   * curriculum_id: int
   *     質問一覧を取得したいカリキュラムのID
   * 
   * Returns
   * -----------------------
   * dict
   *     question_id: int
   *         質問のID
   *     curriculum_id: int
   *         カリキュラムのID
   *     user_id: int
   *         ユーザーのID
   *     title: str
   *         質問のタイトル
   *     content: str 
   *         質問の内容
   *     media_content: str
   *         関連するメディアコンテンツの情報
   *         url: str
   *             メディアコンテンツのURL
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.Schemas__curriculums__QuestionListResponseBody
  }
}
