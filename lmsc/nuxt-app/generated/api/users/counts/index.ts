/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * 有効アカウント数取得
   * 
   * Parameters
   * -----------------------
   * なし
   * 
   * Return
   * -----------------------
   * role_counts: array
   *     role_id: int
   *         ロールのID
   *     role_name: str
   *         ロールの名称
   *     count: int
   *         そのロールを持つ有効なユーザーの総数
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.AccountListResponseBody
  }
}
