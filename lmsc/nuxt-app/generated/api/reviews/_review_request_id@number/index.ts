/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * レビュースレッド詳細
   * 
   * Parameter
   * -----------------------
   * dict
   *     review_request_id: int
   *         スレッド詳細を取得したいレビューリクエストのID
   * 
   * Returns
   * -----------------------
   * dict
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
   *         レビューリクエストが作成された日時 
   *     updated_at:str
   *         レビューリクエストが最後に更新された日時
   *     id: int
   *         回答のID
   *     review_request_id: int
   *         回答が紐づくレビューリクエストのID
   *     user_id: int
   *         回答を投稿したユーザーのID
   *     parent_response_id: int
   *         返信先の回答ID
   *     content: str
   *         回答の内容
   *     is_read: bool
   *         回答が既読かどうかを示すフラグ
   *     created_at: str
   *         回答が作成された日時
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.AllReviewResponse
  }
}
