/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /**
   * 有効アカウント数取得(法人、法人代行)
   * Parameters
   * -----------------------
   * company_id: int
   *     会社のID
   * Return
   * -----------------------
   * company_id: 会社のID
   * role_counts: array
   *     role_id: int
   *         ロールのID
   *     role_name: str
   *         ロールの名称
   *     count: int
   *         そのロールを持つ有効なユーザーの数
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.Schemas__companies__AccountListResponseBody
  }
}
