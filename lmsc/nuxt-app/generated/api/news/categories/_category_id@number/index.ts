/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * ニュースカテゴリー更新
   * Parameters
   * -----------------------
   * category_id: int
   *     更新するカテゴリのID
   * dict
   *     name: str
   *         更新後のカテゴリ名
   * Returns
   * -----------------------
   * message: str
   *     メッセージ
   * category: array
   *     id: int
   *         カテゴリの一意識別子
   *     name: str
   *         カテゴリの名前
   *     created_at: str
   *         カテゴリの作成日
   *     updated_at: str
   *         カテゴリの更新日
   */
  patch: {
    status: 200
    /** Successful Response */
    resBody: Types.NewsCategoryUpdateResponseBody
    reqBody: Types.NewsCategoryUpdateRequestBody
  }
}
