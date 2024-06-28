/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /**
   * 受講生一覧(管理者)
   * 
   * Parameters
   * -----------------------
   * page: int
   *     取得するページ番号
   * limit: int
   *     1ページ当たりの記事数
   * 検索
   *     name: str
   *     company: str
   * フィルター
   *     role: str
   *     enable: bool
   * 
   * Return
   * -----------------------
   * users: array
   *     user_id: int
   *         ユーザーのID
   *     name: str
   *         ユーザーの名前
   *     company_name: str
   *         ユーザーの所属会社
   *     email: str
   *         メールアドレス
   *     role: str
   *         ユーザーの役割
   *     is_enable: bool
   *         アカウントの有効状態
   *     last_login: str
   *         最終ログイン日時（ISO 8601形式）
   */
  get: {
    query: {
      page: number
      limit: number
      name?: string | undefined
      company?: string | undefined
      role?: string | undefined
      enable?: boolean | undefined
    }

    status: 200
    /** Successful Response */
    resBody: Types.UserListResponseBody
  }
}
