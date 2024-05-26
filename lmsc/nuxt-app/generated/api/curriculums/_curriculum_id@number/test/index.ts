/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * テスト詳細取得
   * Parameter
   * -----------------------
   * curriculum_id: int
   *     テストを取得したいカリキュラムのID
   * Returns
   * -----------------------
   * dict
   *     curriculum_id: int
   *         カリキュラムのID
   *     tests: array
   *         test_id: int
   *             テストのID
   *         question: str
   *             質問文
   *         options: array of str
   *             選択肢
   *         correct_answer: str
   *             正解の選択肢
   *         explanation: str
   *             正解の解説
   *         media_content_url: str
   *             メディアコンテンツのURL
   */
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.QuizDetailResponseBody
  }
}
