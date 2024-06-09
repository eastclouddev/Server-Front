/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * 請求先情報作成
   * Parameter
   * -----------------------
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
  post: {
    status: 201
    /** Successful Response */
    resBody: Types.CompanyBillingInfoCreateResponseBody
    reqBody: Types.CompanyBillingInfoCreateRequestBody
  }
}
