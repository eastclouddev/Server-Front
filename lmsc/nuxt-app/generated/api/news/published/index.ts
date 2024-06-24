/* eslint-disable */
import type * as Types from '../../@types'

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
   *     category: dict
   *         category_id: int
   *             カテゴリのID
   *         category_name: str
   *             カテゴリの名前
   *     published_at: str
   *         ニュースの公開日（ISO 8601形式）
   */
  get: {
    query: {
      page: number
      limit: number
    }

    status: 200
    /** Successful Response */
    resBody: Types.PublishedNewsListResponseBody
  }
}
