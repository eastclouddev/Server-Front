/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * 受講生一覧（法人、法人代行)
   * 
   * Parameters
   * -----------------------
   * page: int
   *     取得するページ番号
   * limit: int
   *     1ページ当たりの記事数
   * 検索
   *     name: str
   * フィルター
   *     role: str
   *     enable: bool
   * 
   * Returns
   * -----------------------
   * users: array
   *     user_id: int
   *         ユーザーのID
   *     name: str
   *         ユーザーの名前
   *     email: str
   *         ユーザーのメールアドレス
   *     role: str
   *         ユーザーのロール
   *     is_enable: bool
   *         アカウントの有効状態
   *     last_login: str
   *         最終ログイン日（ISO 8601形式）
   */
  get: {
    query: {
      page: number
      limit: number
      name?: string | undefined
      role?: string | undefined
      enable?: boolean | undefined
    }

    status: 200
    /** Successful Response */
    resBody: Types.StudentListResponseBody
  }
}
