/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /**
   * ニュース一覧取得
   * 
   * Parameters
   * -----------------------
   * page: int
   *     表示するページ
   * limit: int
   *     1ページに表示するニュース数
   * 
   * Returns
   * -----------------------
   * news: array
   *     id: int
   *         ニュースのID
   *     title: str
   *         ニュースのタイトル
   *     published_at: str
   *         ニュースの公開日（ISO 8601形式）
   * page: int
   *     表示するページ
   * limit: int
   *     1ページに表示するニュース数
   * total_page: int
   *     全ページ数
   * total_news: int
   *     全ニュース数
   */
  get: {
    query: {
      page: number
      limit: number
    }

    status: 200
    /** Successful Response */
    resBody: Types.Schemas__news__AllResponseBody
  }

  /**
   * ニュース作成
   * Parameters
   * -----------------------
   * dict
   *     title: str
   *         作成するニュースのタイトル
   *     content: str
   *         作成するニュースの本文
   *     is_published: bool
   *         公開フラグ
   *     published_at: str
   *         公開日（ISO 8601形式）
   * 
   * Returns
   * -----------------------
   * dict
   *     id: int
   *         作成されたニュースのID
   *     title: str
   *         作成されたニュースのタイトル
   *     content: str
   *         作成されたニュースの内容
   *     is_published: bool
   *         ニュースの公開フラグ
   *     published_at: str
   *         ニュースの公開日（ISO 8601形式）
   *     created_at: str
   *         ニュースの作成日（ISO 8601形式）
   */
  post: {
    status: 201
    /** Successful Response */
    resBody: Types.Schemas__news__CreateResponseBody
    reqBody: Types.Schemas__news__CreateRequestBody
  }
}
