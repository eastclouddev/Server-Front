/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * レビュー回答作成
   * 
   * Parameters
   * -----------------------
   * dict
   *     user_id: int
   *         回答を投稿するユーザーのID
   *     parent_response_id: int
   *         返信先の回答ID
   *     content: str
   *         回答の内容
   *     media_content: json
   *         関連するメディアコンテンツの情報
   *         url: str
   *             メディアコンテンツのURL
   * review_request_id: int
   *     回答を投稿したいレビューリクエストのID
   * 
   * Returns
   * -----------------------
   * dict
   *     id: int
   *         新しく作成された回答のID
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
   *         関連するメディアコンテンツの情報
   *         url: str
   *             メディアコンテンツのURL
   *     created_at: str
   *         回答が作成された日時（ISO8601形式）
   */
  post: {
    status: 201
    /** Successful Response */
    resBody: Types.ReviewResponseCreateResponseBody
    reqBody: Types.ReviewResponseCreateRequestBody
  }
}
