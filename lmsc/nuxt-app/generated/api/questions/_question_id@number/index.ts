/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * 質問スレッド詳細取得
   * 
   * Parameter
   * -----------------------
   * なし
   * 
   * Returns
   * -----------------------
   * dict
   *     question: dict
   *         id: int
   *             質問のID
   *         curriculum_id: int
   *             質問が含まれるカリキュラムのID
   *         user_id: int
   *             質問を投稿したユーザーのID
   *         title: int
   *             質問のタイトル
   *         content: str
   *             質問の内容
   *         media_content: json
   *             質問に関するメディアコンテンツの情報
   *         is_closed: bool
   *             質問がクローズされているか
   *         created_at: str
   *             作成日（ISO 8601形式）
   *     answer: array
   *         id: int
   *             回答のID
   *         question_id: int
   *             回答が紐づく質問のID
   *         user_id: int
   *             回答を投稿したユーザーのID
   *         parent_answer_id: int or None
   *             返信先の回答ID（返信先がない場合はNoneが返る）
   *         content: str
   *             回答の内容
   *         media_content: json
   *             回答に関するメディアコンテンツの情報
   *         is_read: bool
   *             回答が既読かどうかを示すフラグ
   *         created_at: str
   *             作成日（ISO 8601形式）
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.QuestionThreadDetailResponseBody
  }

  /**
   * 質問編集
   * 
   * Parameter
   * -----------------------
   * question_id: int
   *     更新したい質問のID
   * title: str
   *     更新された質問のタイトル
   * content: str
   *     更新したい質問の内容
   * media_content: json
   *     更新したい質問に関連するメディアコンテンツの情報
   * is_closed: bool
   *     完了しているかどうかを表すフラグ
   * 
   * Returns
   * -----------------------
   * dict
   *     id: int
   *         更新された質問のID
   *     curriculum_id: int
   *         回答が紐づくカリキュラムのID
   *     user_id: int
   *         回答を投稿したユーザーのID
   *     title: str
   *         更新された質問のタイトル
   *     content: str
   *         更新された質問の内容
   *     media_content: Optional[json]
   *         更新されたメディアコンテンツの情報
   *     is_closed: bool
   *         質問が完了しているかどうかを示すフラグ（boolean）
   *     updated_at: str
   *         質問が最後に更新された日時（ISO 8601形式）
   */
  patch: {
    status: 200
    /** Successful Response */
    resBody: Types.QuestionUpdateResponseBody
    reqBody: Types.QuestionUpdateRequestBody
  }
}
