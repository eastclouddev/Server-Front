/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * ニュース詳細取得
   * 
   * Parameter
   * -----------------------
   * news_id: int
   *     取得するニュースのID
   * 
   * Returns
   * -----------------------
   * dict
   *     id: int
   *         取得したニュースのID
   *     title: str
   *         ニュースのタイトル
   *     content: str
   *         ニュースの内容
   *     published_at: str
   *         ニュースの公開日（ISO 8601形式）
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.Schemas__news__DetailResponseBody
  }

  /**
   * ニュース更新
   * 
   * Parameters
   * -----------------------
   * news_id: int
   *     編集したいニュースのid
   * dict
   *     title: str
   *         更新するニュースのタイトル
   *     content: str
   *         更新するニュースの本文
   *     is_published: bool
   *         公開フラグ
   *     published_at: str
   *         公開日（ISO 8601形式）
   * 
   * Returns
   * -----------------------
   * dict
   *     news_id: int
   *         更新されたニュースのID
   *     title: str
   *         更新されたニュースのタイトル
   *     content: str
   *         更新されたニュースの内容
   *     is_published: bool
   *         ニュースの公開フラグ
   *     published_at: str
   *         ニュースの公開日（ISO 8601形式）
   *     updated_at: str
   *         ニュースの更新日（ISO 8601形式）
   */
  patch: {
    status: 200
    /** Successful Response */
    resBody: Types.UpdateResponseBody
    reqBody: Types.Schemas__news__RequestBody
  }
}
