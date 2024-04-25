/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * 質問投稿作成取得
   * 
   * Parameter
   * -----------------------
   * curriculum_id: int
   *     詳細を取得したいカリキュラムのID
   * dict
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
   */
  post: {
    status: 201
    /** Successful Response */
    resBody: Types.Schemas__curriculums__ResponseBody
    reqBody: Types.Schemas__curriculums__RequestBody
  }
}
