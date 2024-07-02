/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * カリキュラムのレビュー一覧
   * 
   * Parameter
   * -----------------------
   * curriculum_id: int
   *     レビュー一覧を取得したいカリキュラムのID
   * 
   * Returns
   * -----------------------
   * reviews: array
   *     id: int
   *         レビューリクエストのID
   *     curriculum_id: int
   *         関連するカリキュラムのID
   *     user_id: int
   *         レビューリクエストを投稿したユーザーのID
   *     title: str
   *         レビューリクエストのタイトル
   *     content: str
   *         レビューリクエストの内容
   *     is_closed: bool
   *         レビューリクエストがクローズされているかどうか
   *     created_at: str
   *         レビューリクエストが作成された日時（ISO 8601形式）
   *     updated_at: str
   *         レビューリクエストが最後に更新された日時（ISO 8601形式）
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.ReviewsResponseBody
  }

  /**
   * レビュー作成
   * 
   * Parameter
   * -----------------------
   * curriculum_id: int
   *     詳細を取得したいカリキュラムのID
   * dict
   *     user_id: int
   *         ユーザーのID
   *     title: str
   *         レビューリクエストのタイトル
   *     content: str 
   *         レビューリクエストの内容
   *     is_closed: boolean
   *         レビューリクエストの初期状態（通常はfalseで未クローズ状態）
   *  Returns
   * -----------------------
   * dict
   *     id: int
   *         レビューリクエストのID
   *     curriculum_id: int
   *         カリキュラムのID
   *     user_id: int
   *         ユーザーのID
   *     title: str
   *         レビューリクエストのタイトル
   *     content: str 
   *         レビューリクエストの内容
   *     is_closed: boolean
   *         レビューリクエストがクローズされているかどうか（boolean）
   *     created_at: str
   *         作成された日時
   */
  post: {
    status: 201
    /** Successful Response */
    resBody: Types.Schemas__curriculums__ReviewResponse
    reqBody: Types.ReviewRequestBody_Input
  }
}
