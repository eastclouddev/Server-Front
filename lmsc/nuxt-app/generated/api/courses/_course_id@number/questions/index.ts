/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * 質問投稿
   * 
   * Parameter
   * -----------------------
   * course_id: int
   *     質問を投稿したいコースのID
   * dict
   *     curriculum_id: int
   *         質問が紐づくカリキュラムのID
   *     user_id: int
   *         ユーザーのID
   *     title: str
   *         質問のタイトル
   *     objective: str
   *         学習内容で実践したこと
   *     current_situation: str
   *         現状
   *     research: str
   *         自分が調べたこと
   *     content: str 
   *         質問の内容
   *     media_content: str
   *         関連するメディアコンテンツの情報
   *         url: str
   *             メディアコンテンツのURL
   * 
   * Returns
   * -----------------------
   * dict
   *     question_id: int
   *         質問のID
   *     curriculum_id: int
   *         カリキュラムのID
   *     user: dict
   *         user_id: int
   *             質問を投稿したユーザーのID
   *         name: str
   *             質問を投稿したユーザーの名前
   *     title: str
   *         質問のタイトル
   *     objective: str
   *         学習内容で実践したこと
   *     current_situation: str
   *         現状
   *     research: str
   *         自分が調べたこと
   *     content: str 
   *         質問の内容
   *     media_content: dict
   *         関連するメディアコンテンツの情報
   *     created_at: str
   *         質問作成日（ISO 8601形式）
   *     is_read: bool
   *         未読コメントの有無
   *     is_closed: bool
   *         完了しているかどうか
   *     reply_counts: int
   *         質問の返信数
   */
  post: {
    status: 201
    /** Successful Response */
    resBody: Types.QuestionCreateResponseBody
    reqBody: Types.QuestionCreateRequestBody
  }

  /**
   * コースの質問一覧
   * 
   * Parameter
   * -----------------------
   * course_id: int
   *     質問一覧を取得したいコースのID
   * 
   * Returns
   * -----------------------
   * questions: array
   *     question_id: int
   *         質問のID
   *     user: dict
   *         user_id: int
   *             質問を投稿したユーザーのID
   *         name: str
   *             質問を投稿したユーザーの名前
   *     title: str
   *         質問のタイトル
   *     content: str 
   *         質問の内容
   *     curriculum_id: int
   *         カリキュラムのID
   *     created_at: str
   *         質問作成日（ISO 8601形式）
   *     is_read: bool
   *         未読コメントの有無
   *     is_closed: bool
   *         完了しているかどうか
   *     reply_counts: int
   *         質問の返信数
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.Schemas__courses__QuestionListResponseBody
  }
}
