/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * 送金先の情報詳細を取得
   * 
   * Parameter
   * -----------------------
   * mentor_id: int
   *     口座情報を取得したいメンターのID
   * 
   * Returns
   * -----------------------
   * dict
   *     mentor_id: int
   *         メンターのID
   *     account_name: str
   *         口座名義
   *     bank_name: str
   *         銀行名
   *     branch_name: str
   *         支店名
   *     account_number: str
   *         口座番号
   *     account_type: str
   *         口座の種類（例: "普通", "当座", "貯蓄"）
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.AccountInfoDetailResponseBody
  }

  /**
   * 送金先の作成
   * 
   * Parameter
   * -----------------------
   * mentor_id: int
   *     送金先情報を作成したいメンターのユーザーID
   * bank_name: str
   *     銀行名
   * branch_name: str
   *     支店名
   * bank_code: str
   *     銀行コード
   * branch_code: str
   *     支店コード
   * account_type: str
   *     口座種別  ordinary (普通), current (当座), savings (貯蓄)
   * account_number: str
   *     口座番号 
   * account_name: str
   *     口座名義
   * 
   * Returns
   * -----------------------
   * dict
   *     account_id: int
   *         新しく作成された送金先情報のID
   *     mentor_id: int
   *         送金先情報を作成したいメンターのユーザーID
   *     bank_name: str
   *         銀行名
   *     branch_name: str
   *         支店名
   *     bank_code: str
   *         銀行コード
   *     branch_code: str
   *         支店コード
   *     account_type: str
   *         口座種別  ordinary (普通), current (当座), savings (貯蓄)
   *     account_number: str
   *         口座番号 
   *     account_name: str
   *         口座名義
   */
  post: {
    status: 201
    /** Successful Response */
    resBody: Types.AccountInfoCreateResponseBody
    reqBody: Types.AccountInfoCreateRequestBody
  }
}
