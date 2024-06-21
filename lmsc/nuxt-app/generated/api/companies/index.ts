/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /**
   * 会社情報一覧取得
   * 
   * Parameters
   * -----------------------
   * なし
   * 
   * Returns
   * -----------------------
   * companies: array
   *     company_id: int
   *         会社のID（int）
   *     name: str
   *         会社名
   *     name_kana: str
   *         会社名のフリガナ
   *     prefecture: str
   *         都道府県
   *     city: str
   *         市区町村
   *     town: str
   *         町名、番地等
   *     address: str
   *         建物名、部屋番号等
   *     postal_code: str
   *         郵便番号
   *     phone_number: str
   *         電話番号
   *     email: str
   *         メールアドレス
   *     created_at: str
   *         会社情報が作成された日時（ISO 8601形式）
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.CompanyListResponseBody
  }

  /**
   * 会社情報作成
   * 
   * Parameters
   * -----------------------
   * dict
   *     name: str
   *         会社名
   *     name_kana: str
   *         会社名フリガナ
   *     prefecture: str
   *         都道府県
   *     city: str
   *         市区町村
   *     town: str
   *         町名、番地等
   *     address: str
   *         建物名、部屋番号等
   *     postal_code: str
   *         郵便番号
   *     phone_number: str
   *         電話番号
   *     email: str
   *         メールアドレス
   * 
   * Returns
   * -----------------------
   * dict
   *     company_id: int
   *         新しく作成された会社のID
   *     name: str
   *         会社名
   *     name_kana: str
   *         会社名フリガナ
   *     prefecture: str
   *         都道府県
   *     city: str
   *         市区町村
   *     town: str
   *         町名、番地等
   *     address: str
   *         建物名、部屋番号等
   *     postal_code: str
   *         郵便番号
   *     phone_number: str
   *         電話番号
   *     email: str
   *         メールアドレス
   */
  post: {
    status: 200
    /** Successful Response */
    resBody: Types.CompanyCreateResponseBody
    reqBody: Types.CompanyCreateRequestBody
  }
}
