/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * レビュー投稿
   * 
   * Parameter
   * -----------------------
<<<<<<< HEAD:lmsc/nuxt-app/generated/api/courses/_course_id@number/reviews/index.ts
   * course_id: int
   *     レビューを取得したいコースのID
=======
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
>>>>>>> develop:lmsc/nuxt-app/generated/api/curriculums/_curriculum_id@number/reviews/index.ts
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
    resBody: Types.Schemas__curriculums__ReviewResponse
    reqBody: Types.ReviewRequestBody_Input
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
