/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /**
   * 進捗管理一覧
   * 
   * Parameters
   * -----------------------
   * なし
   * 
   * Returns
   * -----------------------
   * progresses: array
   *     progress_id: int
   *         進捗のID
   *     user_id: int
   *         ユーザーのID
   *     course_id: int
   *         コースのID
   *     section_id: int
   *         セクションのID
   *     curriculum_id: int
   *         カリキュラムのID
   *     progress_percentage: int
   *         進捗のパーセンテージ
   *     status: str
   *         ステータス
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.Schemas__progresses__ProgressListResponseBody
  }
}
