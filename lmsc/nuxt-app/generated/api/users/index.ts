/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /**
   * 受講生一覧(管理者)
   * 
   * Parameters
   * -----------------------
   * role: str
   *     ユーザーの役割
   * page: int
   *     取得するページ番号
   * limit: int
   *     1ページ当たりの記事数
   * 
   * Return
   * -----------------------
   * users: array
   *     user_id: int
   *         ユーザーのID
   *     first_name: str
   *         名前
   *     last_name: str
   *         姓
   *     email: str
   *         メールアドレス
   *     role: str
   *         ユーザーの役割
   *     last_login: str
   *         最終ログイン日時（ISO 8601形式）
   */
  get: {
    query: {
      role: string
      page: number
      limit: number
    }

    status: 200
    /** Successful Response */
    resBody: Types.UserResponseBody
  }
}
