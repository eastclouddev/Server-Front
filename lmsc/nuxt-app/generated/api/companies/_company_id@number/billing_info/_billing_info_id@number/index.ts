/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /**
   * 請求先情報取得
   * 
   * Parameter
   * -----------------------
   * billing_info_id: int
   *     詳細情報を取得したい請求先情報のID
   * 
   * Returns
   * -----------------------
   * dict
   *     id: int
   *         請求先情報ID（int）
   *     prefecture: str
   *         都道府県
   *     city: str
   *         市区町村
   *     town: str
   *         町名、番地等
   *     address: str
   *         建物名、部屋番号等
   *     billing_email: str
   *         メールアドレス
   *     invoice_number: str
   *         インボイス番号
   *     tax_number: str
   *         タックス番号
   *     payment_method: str
   *         支払い方法（例: "クレジットカード", "銀行振り込み" etc...）
   *     description:str
   *         支払い方法の説明
   *     notes: str
   *         メモ
   *     last_receipt_number: str
   *         領収書番号
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.CompanyBillingInfoDetailResponseBody
  }

  /**
   * 会社請求情報更新
   * 
   * Parameters
   * -----------------------
   * billing_info_id: int
   *     更新する請求情報のID
   * dict
   *     prefecture: str
   *         都道府県
   *     city: str
   *         市区町村
   *     town: str
   *         町名、番地等
   *     address: str
   *         建物名、部屋番号等
   *     billing_email: str
   *         メールアドレス
   *     invoice_number: str
   *         インボイス番号
   *     tax_number: str
   *         タックス番号
   *     payment_method_id: int
   *         支払い方法のID
   *     notes: str
   *         メモ
   *     last_receipt_number: str
   *         領収書番号
   * 
   * Returns
   * -----------------------
   * dict
   *     id: int
   *         請求先情報ID（int）
   *     prefecture: str
   *         都道府県
   *     city: str
   *         市区町村
   *     town: str
   *         町名、番地等
   *     address: str
   *         建物名、部屋番号等
   *     billing_email: str
   *         メールアドレス
   *     invoice_number: str
   *         インボイス番号
   *     tax_number: str
   *         タックス番号
   *     payment_method_id: int
   *         支払い方法のID
   *     notes: str
   *         メモ
   *     last_receipt_number: str
   *         領収書番号
   */
  put: {
    status: 200
    /** Successful Response */
    resBody: Types.CompanyBillingInfoUpdateResponseBody
    reqBody: Types.CompanyBillingInfoUpdateRequestBody
  }
}
