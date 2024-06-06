/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * ニュースカテゴリ一覧取得
   * 
   * Parameters
   * -----------------------
   * なし
   * 
   * Returns
   * -----------------------
   * categories: array
   *     id: int
   *         カテゴリの一意識別子
   *     name: str
   *         カテゴリの名前
   *     created_at: str
   *         カテゴリが作成された日時（ISO 8601形式）
   *     updated_at: str
   *         カテゴリが最後に更新された日時（ISO 8601形式）
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.NewsCategoryListResponseBody
  }
}
