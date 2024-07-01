/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /**
   * ニュース一覧(管理者)取得
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
   *         取得したニュースのID
   *     title: str
   *         ニュースのタイトル
   *     category: array
   *         categoey_id: int
   *             カテゴリのID
   *         category_name: str
   *             カテゴリのID
   *     published_at: str
   *         ニュースの公開日（ISO 8601形式）
   *     is_published: bool
   *         ニュース公開状態
   */
  get: {
    query: {
      page: number
      limit: number
    }

    status: 200
    /** Successful Response */
    resBody: Types.NewsListResponseBody
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
   *     category_id: int
   *         カテゴリのID
   *     published_at: str
   *         公開日（ISO 8601形式）
   * 
   * Returns
   * -----------------------
   * dict
   *     news_id: int
   *         ニュースのID
   *     title: str
   *         ニュースのタイトル
   *     content: str
   *         ニュースの本文
   *     category: array
   *         category_id: int
   *             カテゴリのID
   *         category_name: str
   *             カテゴリの名前
   *     is_published: bool
   *         ニュース公開状態
   *     published_at: str
   *         ニュースの公開日（ISO 8601形式）
   *     created_at: str
   *         ニュースの作成日（ISO 8601形式）
   */
  post: {
    status: 201
    /** Successful Response */
    resBody: Types.NewsCreateResponseBody
    reqBody: Types.NewsCreateRequestBody
  }
}
