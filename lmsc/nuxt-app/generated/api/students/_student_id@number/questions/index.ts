/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * 自分の質問を取得する
   * 
   * Parameter
   * -----------------------
   * user_id: int
   *     取得するユーザーのID 
   * 
   * Returns
   * -----------------------
   * questions: array
   *     id: int
   *         質問のID
   *     title: str
   *         質問のタイトル
   *     content: str
   *         質問の内容
   *     curriculum_id: int
   *         紐づいたカリキュラムのID
   *     created_at: str
   *         質問作成日
   *     is_read: bool
   *         未読コメントの有無
   *     is_closed: bool
   *         完了しているかどうか
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.Schemas__students__ResponseBody
  }
}
