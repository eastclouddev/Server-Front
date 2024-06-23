/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /**
   * 受講生のレビュー一覧取得
   * 
   * Parameter
   * -----------------------
   * mentor_id: int
   *     取得するメンターのユーザーID
   * 
   * Returns
   * -----------------------
   * reviews: array
   *     id: int
   *         レビューのID
   *     title: str
   *         レビューのタイトル
   *     content: str
   *         レビューの内容
   *     curriculum_id: int
   *         レビューに紐づくカリキュラムのID
   *     tech_category: str
   *         カリキュラムのコースに紐づいた技術カテゴリ
   *     created_at:str
   *         レビューの作成日（ISO 8601形式）
   *     is_read: bool
   *         未読コメントの有無
   *     is_closed: bool
   *         完了しているかどうか
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.Schemas__mentors__AllResponseBody
  }
}
