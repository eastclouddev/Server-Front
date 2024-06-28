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
   * フィルター
   *     category: str
   * ソート
   *     sort: str(sortとorderはセット)
   *     order: str
   * 
   * Returns
   * -----------------------
   * questions: array
   *     id: int
   *         質問のID
   *     title: str
   *         質問のタイトル
   *     objective: str
   *         学習内容で実践したいこと
   *     current_situation: str
   *         現状
   *     research: str
   *         自分が調べたこと
   *     content: str
   *         質問の内容
   *     curriculum_id: int
   *         紐づいたカリキュラムのID
   *     tech_category: str
   *         カリキュラムのコースに紐づいた技術カテゴリ
   *     created_at: str
   *         質問作成日
   *     is_read: bool
   *         未読コメントの有無
   *     is_closed: bool
   *         完了しているかどうか
   */
  get: {
    query?: {
      category?: string | undefined
      sort?: string | undefined
      order?: string | undefined
    } | undefined

    status: 200
    /** Successful Response */
    resBody: Types.Schemas__students__QuestionListResponseBody
  }
}
