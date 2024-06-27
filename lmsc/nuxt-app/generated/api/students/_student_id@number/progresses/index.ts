/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * 現在の学習進捗
   * Parameters
   * -----------------------
   * request: Request
   *     headersから情報を取得する
   *
   * Returns
   * -----------------------
   * progresses: array
   *     course_id: int
   *         コースのID
   *     course_title: str
   *         コースのタイトル
   *     progress_percentage: int
   *         コースの進捗率
   *     status: str
   *         コースのステータス
   *     last_accessed_at: str
   *         最終アクセス日（ISO 8601形式）
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.ProgressesResponse
  }
}
