/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /**
   * 受講生からの質問一覧取得
   * 
   * Parameter
   * -----------------------
   * mentor_id: int
   *     質問を取得するメンターのユーザーID
   * 
   * Returns
   * -----------------------
   * questions: array
   *     id: int
   *         新しく作成された送金先情報のID
   *     title: str
   *         質問のタイトル
   *     content: str
   *         質問の内容
   *     curriculum_id: str
   *         質問が紐づくカリキュラムのID
   *     created_at: str
   *         質問作成日
   *     is_read: str
   *         未読コメントの有無
   *     is_closed: str
   *         完了しているかどうか
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.Schemas__mentors__ResponseBody
  }
}
