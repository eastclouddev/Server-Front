/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * レビュー投稿
   * 
   * Parameter
   * -----------------------
   * course_id: int
   *     レビューを取得したいコースのID
   * dict
   *     curriculum_id: int
   *         レビューが紐づくカリキュラムのID
   *     user_id: int
   *         ユーザーのID
   *     title: str
   *         レビューリクエストのタイトル
   *     content: str 
   *         レビューリクエストの内容
   *     media_content: dict
   *         関連するメディアコンテンツの情報
   *         url: str
   *             メディアコンテンツのURL
   * 
   * Returns
   * -----------------------
   * dict
   *     id: int
   *         レビューリクエストのID
   *     curriculum_id: int
   *         カリキュラムのID
   *     user: dict
   *         user_id: int
   *             レビューを投稿したユーザーのID
   *         name: str
   *             レビューを投稿したユーザーの名前
   *     title: str
   *         レビューリクエストのタイトル
   *     content: str 
   *         レビューリクエストの内容
   *     media_content: array
   *         関連するメディアコンテンツの情報
   *         url: str
   *             メディアコンテンツのURL
   *     created_at: str
   *         レビューが作成された日時（ISO 8601形式）
   *     is_read: bool
   *         未読コメントの有無
   *     is_closed: bool
   *         レビューリクエストがクローズされているかどうか
   *     reply_counts: int
   *         質問の返信数
   */
  post: {
    status: 201
    /** Successful Response */
    resBody: Types.ReviewRequestCreateResponseBody
    reqBody: Types.ReviewRequestCreateRequestBody
  }

  /**
   * コースのレビュー一覧
   * 
   * Parameter
   * -----------------------
   * course_id: int
   *     レビュー一覧を取得したいコースのID
   * 
   * Returns
   * -----------------------
   * reviews: array
   *     id: int
   *         レビューリクエストのID
   *     user: dict
   *         user_id: int
   *             レビューを投稿したユーザーのID
   *         name: str
   *             レビューを投稿したユーザーの名前
   *     title: str
   *         レビューリクエストのタイトル
   *     content: str
   *         レビューリクエストの内容
   *     curriculum_id: int
   *         関連するカリキュラムのID
   *     created_at: str
   *         レビューリクエストが作成された日時（ISO 8601形式）
   *     is_read: bool
   *         未読コメントの有無
   *     is_closed: bool
   *         レビューリクエストがクローズされているかどうか
   *     reply_counts: int
   *         レビューの返信数
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.Schemas__courses__ReviewRequestListResponseBody
  }
}
