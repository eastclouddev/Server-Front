/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * 受講生一覧（法人、法人代行)
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
   * 
   * Returns
   * -----------------------
   * {"users": users_list} : dic{}
   *                 受け取ったroleと一致するユーザー全員の情報
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
      role: string
      page: number
      limit: number
    }

    status: 200
    /** Successful Response */
    resBody: Types.Schemas__companies__ResponseBody
  }
}
