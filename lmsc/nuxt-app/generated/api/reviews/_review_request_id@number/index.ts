/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * レビュースレッド詳細
   * 
   * Parameter
   * -----------------------
   * review_request_id: int
   *     スレッド詳細を取得したいレビューリクエストのID
   * 
   * Returns
   * -----------------------
   * review_request: dict
   *     id: int
   *         レビューリクエストのID
   *     curriculum_id: int
   *         関連するカリキュラムのID
   *     user: dict
   *         user_id: int
   *             レビューリクエストを投稿したユーザーのID
   *         name: str
   *             レビューリクエストを投稿したユーザーの名前
   *     title: str
   *         レビューリクエストのタイトル
   *     content: str
   *         レビューリクエストの内容
   *     media_content: json
   *         レビューに関連するメディアコンテンツの情報
   *         url: str
   *             メディアコンテンツのURL
   *     is_closed: bool
   *         レビューリクエストがクローズされているかどうか
   *     created_at: str
   *         レビューリクエストが作成された日時（ISO8601形式）
   * review_responses: array
   *     id: int
   *         回答のID
   *     review_request_id: int
   *         回答が紐づくレビューリクエストのID
   *     user: dict
   *         user_id: int
   *             回答を投稿したユーザーのID
   *         name: str
   *             回答を投稿したユーザーの名前
   *     parent_response_id: int
   *         返信先の回答ID
   *     content: str
   *         回答の内容
   *     media_content: json
   *         回答に関連するメディアコンテンツの情報
   *         url: str
   *             メディアコンテンツのURL
   *     created_at: str
   *         回答が作成された日時（ISO8601形式）
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.AllReviewResponse
  }
}
