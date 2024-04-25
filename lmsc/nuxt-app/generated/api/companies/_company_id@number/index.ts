/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * 会社詳細取得
   * 
   * Parameter
   * -----------------------
   * company_id: int
   *     詳細情報を取得したい会社のID
   * 
   * Returns
   * -----------------------
   * dict
   *     company_id: int
   *         会社のID
   *     name: str
   *         会社の名前
   *     prefecture: str
   *         所在地の都道府県
   *     city: str
   *         所在地の市区町村
   *     town: str
   *         所在地の町名・番地等
   *     address: str
   *         会社の詳細な住所
   *     postal_code: str
   *         郵便番号
   *     phone_number: str
   *         電話番号
   *     email: str
   *         会社のメールアドレス
   *     created_at: str
   *         レコードの作成日時（ISO 8601形式）
   *     updated_at: str
   *         レコードの最終更新日時（ISO 8601形式）
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.Schemas__companies__DetailResponseBody
  }
}
