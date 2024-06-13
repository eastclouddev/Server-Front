/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * カリキュラム詳細取得
   * 
   * Parameter
   * -----------------------
   * curriculum_id: int
   *     詳細を取得したいカリキュラムのID
   * 
   * Returns
   * -----------------------
   * dict
   *     curriculum_id: int
   *         カリキュラムのID
   *     title: str
   *         カリキュラムのタイトル
   *     description: str
   *         カリキュラムの詳細な説明
   *     video_url: str
   *         ビデオコンテンツのURL(ビデオが存在する場合のみ）
   *     content: str 
   *         カリキュラムのテキストコンテンツ(テキストコンテンツが存在する場合のみ）
   *     is_test: boolean
   *         このカリキュラムがテストかどうかを示すフラグ（boolean）
   *     display_no: int
   *         カリキュラムの表示順
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.CurriculumDetailResponseBody
  }
}
