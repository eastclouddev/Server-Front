import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_vbrzjm } from './billings/_billing_id@number';
import type { Methods as Methods_xi4crh } from './companies';
import type { Methods as Methods_7dyior } from './companies/_company_id@number';
import type { Methods as Methods_hxcrb8 } from './companies/_company_id@number/users';
import type { Methods as Methods_13yxxb0 } from './courses';
import type { Methods as Methods_poio86 } from './courses/_course_id@number';
import type { Methods as Methods_1tl4w1u } from './curriculums/_curriculum_id@number';
import type { Methods as Methods_9wwipc } from './curriculums/_curriculum_id@number/questions';
import type { Methods as Methods_ivecxg } from './curriculums/_curriculum_id@number/reviews';
import type { Methods as Methods_idk8rz } from './login';
import type { Methods as Methods_1rpsris } from './logout';
import type { Methods as Methods_19zj46v } from './mentors/_mentor_id@number/accounts';
import type { Methods as Methods_79gsgt } from './mentors/_mentor_id@number/rewards';
import type { Methods as Methods_7zqsp5 } from './mentors/_mentor_id@number/students/questions';
import type { Methods as Methods_t9xdat } from './news';
import type { Methods as Methods_ah5d5l } from './news/_news_id@number';
import type { Methods as Methods_oji007 } from './password_reset';
import type { Methods as Methods_vesziw } from './password_reset/confirm';
import type { Methods as Methods_1h2e7pl } from './progresses';
import type { Methods as Methods_csvpx4 } from './questions/_question_id@number';
import type { Methods as Methods_tnd0ic } from './questions/_question_id@number/answers';
import type { Methods as Methods_if5q52 } from './receipts/_receipt_id@number';
import type { Methods as Methods_1bxksbk } from './reviews/_mentor_id@number/students/reviews';
import type { Methods as Methods_1w7qnl8 } from './reviews/_review_id@number';
import type { Methods as Methods_458k6a } from './reviews/_review_request_id@number';
import type { Methods as Methods_1ccq37s } from './reviews/responses/_response_id@number';
import type { Methods as Methods_wq2jhe } from './rewards';
import type { Methods as Methods_4q3e6b } from './state_progresses';
import type { Methods as Methods_1qnirv8 } from './students/_student_id@number/questions';
import type { Methods as Methods_8ls8pm } from './users/_user_id@number';
import type { Methods as Methods_1l20ihb } from './users/_user_id@number/email/confirm_change';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/';
  const PATH1 = '/billings/';
  const PATH2 = '/companies/';
  const PATH3 = '/users/';
  const PATH4 = '/courses/';
  const PATH5 = '/curriculums/';
  const PATH6 = '/questions/';
  const PATH7 = '/reviews/';
  const PATH8 = '/login/';
  const PATH9 = '/logout/';
  const PATH10 = '/mentors/';
  const PATH11 = '/accounts/';
  const PATH12 = '/rewards/';
  const PATH13 = '/students/questions/';
  const PATH14 = '/news/';
  const PATH15 = '/password_reset/';
  const PATH16 = '/password_reset/confirm/';
  const PATH17 = '/progresses/';
  const PATH18 = '/answers/';
  const PATH19 = '/receipts/';
  const PATH20 = '/students/reviews/';
  const PATH21 = '/reviews/responses/';
  const PATH22 = '/state_progresses/';
  const PATH23 = '/students/';
  const PATH24 = '/email/confirm_change/';
  const GET = 'GET';
  const POST = 'POST';
  const PATCH = 'PATCH';

  return {
    billings: {
      _billing_id: (val1: number) => {
        const prefix1 = `${PATH1}${val1}`;

        return {
          /**
           * 請求履歴詳細取得
           *
           * Parameter
           * -----------------------
           * billing_id: int
           *     取得する請求履歴のID
           *
           * Returns
           * -----------------------
           * dict
           *     billing_id: int
           *         請求履歴のID
           *     company_id: int
           *         会社のID
           *     date: str
           *         請求日（YYYY-MM-DD形式）
           *     amount: float
           *         請求金額
           *     status: string
           *         請求状況（例: "paid", "unpaid", "overdue"）
           *     payment_details: dict
           *         支払いの詳細（オプション、支払いが完了している場合に含まれる）
           *         payment_method: str
           *             支払い方法
           *         payment_date: str
           *             支払い日（YYYY-MM-DD形式）
           * @returns Successful Response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_vbrzjm['get']['resBody'], BasicHeaders, Methods_vbrzjm['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json(),
          /**
           * 請求履歴詳細取得
           *
           * Parameter
           * -----------------------
           * billing_id: int
           *     取得する請求履歴のID
           *
           * Returns
           * -----------------------
           * dict
           *     billing_id: int
           *         請求履歴のID
           *     company_id: int
           *         会社のID
           *     date: str
           *         請求日（YYYY-MM-DD形式）
           *     amount: float
           *         請求金額
           *     status: string
           *         請求状況（例: "paid", "unpaid", "overdue"）
           *     payment_details: dict
           *         支払いの詳細（オプション、支払いが完了している場合に含まれる）
           *         payment_method: str
           *             支払い方法
           *         payment_date: str
           *             支払い日（YYYY-MM-DD形式）
           * @returns Successful Response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_vbrzjm['get']['resBody'], BasicHeaders, Methods_vbrzjm['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH0}`,
        };
      },
    },
    companies: {
      _company_id: (val1: number) => {
        const prefix1 = `${PATH2}${val1}`;

        return {
          users: {
            /**
             * 受講生一覧（法人、法人代行)
             *
             * Parameters
             * ----------
             * role: str, 
             *     ユーザーの役割
             * page: int,
             *     取得するページ番号
             * limit: int
             *     1ページ当たりの記事数
             *
             *
             * Returns
             * -------
             * {"users": users_list} : dic{}
             *                 受け取ったroleと一致するユーザー全員の情報
             * @returns Successful Response
             */
            get: (option: { query: Methods_hxcrb8['get']['query'], config?: T | undefined }) =>
              fetch<Methods_hxcrb8['get']['resBody'], BasicHeaders, Methods_hxcrb8['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json(),
            /**
             * 受講生一覧（法人、法人代行)
             *
             * Parameters
             * ----------
             * role: str, 
             *     ユーザーの役割
             * page: int,
             *     取得するページ番号
             * limit: int
             *     1ページ当たりの記事数
             *
             *
             * Returns
             * -------
             * {"users": users_list} : dic{}
             *                 受け取ったroleと一致するユーザー全員の情報
             * @returns Successful Response
             */
            $get: (option: { query: Methods_hxcrb8['get']['query'], config?: T | undefined }) =>
              fetch<Methods_hxcrb8['get']['resBody'], BasicHeaders, Methods_hxcrb8['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_hxcrb8['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
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
           * @returns Successful Response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_7dyior['get']['resBody'], BasicHeaders, Methods_7dyior['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json(),
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
           * @returns Successful Response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_7dyior['get']['resBody'], BasicHeaders, Methods_7dyior['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH0}`,
        };
      },
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
       * @returns Successful Response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_xi4crh['get']['resBody'], BasicHeaders, Methods_xi4crh['get']['status']>(prefix, PATH2, GET, option).json(),
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
       * @returns Successful Response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_xi4crh['get']['resBody'], BasicHeaders, Methods_xi4crh['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      /**
       * 会社情報作成
       *
       * Parameters
       * -----------------------
       * dict
       *     name: str
       *         会社名
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
       * @returns Successful Response
       */
      post: (option: { body: Methods_xi4crh['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_xi4crh['post']['resBody'], BasicHeaders, Methods_xi4crh['post']['status']>(prefix, PATH2, POST, option).json(),
      /**
       * 会社情報作成
       *
       * Parameters
       * -----------------------
       * dict
       *     name: str
       *         会社名
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
       * @returns Successful Response
       */
      $post: (option: { body: Methods_xi4crh['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_xi4crh['post']['resBody'], BasicHeaders, Methods_xi4crh['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
    courses: {
      _course_id: (val1: number) => {
        const prefix1 = `${PATH4}${val1}`;

        return {
          /**
           * コース詳細取得
           *
           * Parameter
           * -----------------------
           * course_id: int
           *     取得するコースのID
           *
           * Returns
           * -----------------------
           * dict
           *     course_id: int
           *         コースのID
           *     title: str
           *         コースのタイトル
           *     description: str
           *         コースの詳細な説明
           *     created_user_id: int
           *         コースを作成したユーザーのID
           *     created_at: str
           *         コースの作成日時（ISO 8601形式）
           *     sections: array
           *         コースのセクション一覧
           *         section_id: int
           *             セクションのID
           *         title: str
           *             セクションのタイトル
           *         description: str
           *             セクションの説明
           *         curriculums: array
           *             セクションに紐づくカリキュラムの一覧
           *             curriculum_id: int
           *                 カリキュラムのID
           *             title: str
           *                 カリキュラムのタイトル
           *             description: str
           *                 カリキュラムの説明
           * @returns Successful Response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_poio86['get']['resBody'], BasicHeaders, Methods_poio86['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json(),
          /**
           * コース詳細取得
           *
           * Parameter
           * -----------------------
           * course_id: int
           *     取得するコースのID
           *
           * Returns
           * -----------------------
           * dict
           *     course_id: int
           *         コースのID
           *     title: str
           *         コースのタイトル
           *     description: str
           *         コースの詳細な説明
           *     created_user_id: int
           *         コースを作成したユーザーのID
           *     created_at: str
           *         コースの作成日時（ISO 8601形式）
           *     sections: array
           *         コースのセクション一覧
           *         section_id: int
           *             セクションのID
           *         title: str
           *             セクションのタイトル
           *         description: str
           *             セクションの説明
           *         curriculums: array
           *             セクションに紐づくカリキュラムの一覧
           *             curriculum_id: int
           *                 カリキュラムのID
           *             title: str
           *                 カリキュラムのタイトル
           *             description: str
           *                 カリキュラムの説明
           * @returns Successful Response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_poio86['get']['resBody'], BasicHeaders, Methods_poio86['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH0}`,
        };
      },
      /**
       * コース一覧取得
       *
       * Parameter
       * -----------------------
       * なし
       *
       * Returns
       * -----------------------
       * courses: array
       *     course_id: int
       *         コースのID
       *     title: str
       *         コースのタイトル
       *     description: str
       *         コースの説明
       *     created_user: int
       *         コースを作成したユーザーのID
       *     thumbnail_url: str
       *         コースのサムネイル画像のURL
       *     created_at: str
       *         コースの作成日時（ISO 8601形式）
       * @returns Successful Response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_13yxxb0['get']['resBody'], BasicHeaders, Methods_13yxxb0['get']['status']>(prefix, PATH4, GET, option).json(),
      /**
       * コース一覧取得
       *
       * Parameter
       * -----------------------
       * なし
       *
       * Returns
       * -----------------------
       * courses: array
       *     course_id: int
       *         コースのID
       *     title: str
       *         コースのタイトル
       *     description: str
       *         コースの説明
       *     created_user: int
       *         コースを作成したユーザーのID
       *     thumbnail_url: str
       *         コースのサムネイル画像のURL
       *     created_at: str
       *         コースの作成日時（ISO 8601形式）
       * @returns Successful Response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_13yxxb0['get']['resBody'], BasicHeaders, Methods_13yxxb0['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH4}`,
    },
    curriculums: {
      _curriculum_id: (val1: number) => {
        const prefix1 = `${PATH5}${val1}`;

        return {
          questions: {
            /**
             * 質問投稿作成取得
             *
             * Parameter
             * -----------------------
             * curriculum_id: int
             *     詳細を取得したいカリキュラムのID
             * dict
             *     user_id: int
             *         ユーザーのID
             *     title: str
             *         質問のタイトル
             *     content: str
             *         質問の内容
             *     media_content: str
             *         関連するメディアコンテンツの情報
             *         url: str
             *             メディアコンテンツのURL
             *
             * Returns
             * -----------------------
             * dict
             *     question_id: int
             *         質問のID
             *     curriculum_id: int
             *         カリキュラムのID
             *     user_id: int
             *         ユーザーのID
             *     title: str
             *         質問のタイトル
             *     content: str
             *         質問の内容
             *     media_content: str
             *         関連するメディアコンテンツの情報
             * @returns Successful Response
             */
            post: (option: { body: Methods_9wwipc['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_9wwipc['post']['resBody'], BasicHeaders, Methods_9wwipc['post']['status']>(prefix, `${prefix1}${PATH6}`, POST, option).json(),
            /**
             * 質問投稿作成取得
             *
             * Parameter
             * -----------------------
             * curriculum_id: int
             *     詳細を取得したいカリキュラムのID
             * dict
             *     user_id: int
             *         ユーザーのID
             *     title: str
             *         質問のタイトル
             *     content: str
             *         質問の内容
             *     media_content: str
             *         関連するメディアコンテンツの情報
             *         url: str
             *             メディアコンテンツのURL
             *
             * Returns
             * -----------------------
             * dict
             *     question_id: int
             *         質問のID
             *     curriculum_id: int
             *         カリキュラムのID
             *     user_id: int
             *         ユーザーのID
             *     title: str
             *         質問のタイトル
             *     content: str
             *         質問の内容
             *     media_content: str
             *         関連するメディアコンテンツの情報
             * @returns Successful Response
             */
            $post: (option: { body: Methods_9wwipc['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_9wwipc['post']['resBody'], BasicHeaders, Methods_9wwipc['post']['status']>(prefix, `${prefix1}${PATH6}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH6}`,
          },
          reviews: {
            /**
             * カリキュラムのレビュー一覧
             *
             * Parameter
             * -----------------------
             * curriculum_id: int
             *     レビュー一覧を取得したいカリキュラムのID
             *
             * Returns
             * -----------------------
             * reviews: array
             *     id: int
             *         レビューリクエストのID
             *     curriculum_id: int
             *         関連するカリキュラムのID
             *     user_id: int
             *         レビューリクエストを投稿したユーザーのID
             *     title: str
             *         レビューリクエストのタイトル
             *     content: str
             *         レビューリクエストの内容
             *     is_closed: bool
             *         レビューリクエストがクローズされているかどうか
             *     created_at: str
             *         レビューリクエストが作成された日時（ISO 8601形式）
             *     updated_at: str
             *         レビューリクエストが最後に更新された日時（ISO 8601形式）
             * @returns Successful Response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_ivecxg['get']['resBody'], BasicHeaders, Methods_ivecxg['get']['status']>(prefix, `${prefix1}${PATH7}`, GET, option).json(),
            /**
             * カリキュラムのレビュー一覧
             *
             * Parameter
             * -----------------------
             * curriculum_id: int
             *     レビュー一覧を取得したいカリキュラムのID
             *
             * Returns
             * -----------------------
             * reviews: array
             *     id: int
             *         レビューリクエストのID
             *     curriculum_id: int
             *         関連するカリキュラムのID
             *     user_id: int
             *         レビューリクエストを投稿したユーザーのID
             *     title: str
             *         レビューリクエストのタイトル
             *     content: str
             *         レビューリクエストの内容
             *     is_closed: bool
             *         レビューリクエストがクローズされているかどうか
             *     created_at: str
             *         レビューリクエストが作成された日時（ISO 8601形式）
             *     updated_at: str
             *         レビューリクエストが最後に更新された日時（ISO 8601形式）
             * @returns Successful Response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_ivecxg['get']['resBody'], BasicHeaders, Methods_ivecxg['get']['status']>(prefix, `${prefix1}${PATH7}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH7}`,
          },
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
           * @returns Successful Response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1tl4w1u['get']['resBody'], BasicHeaders, Methods_1tl4w1u['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json(),
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
           * @returns Successful Response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1tl4w1u['get']['resBody'], BasicHeaders, Methods_1tl4w1u['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH0}`,
        };
      },
    },
    login: {
      /**
       * ログイン認証
       *
       * Parameters
       * -----------------------
       * email: str
       *     ログインするユーザーのメールアドレス
       * password: str
       *     ログインするユーザーのパスワード
       * device_info: dict
       *     device_info: str
       *     device_name: str
       *     uuid: str
       *
       * Returns
       * -----------------------
       * dict
       *     user_id: int
       *         ログインしたユーザーのID
       *     access_token: str
       *         生成したトークン
       *     expires_in: int
       *         トークン有効期限
       *     role: str
       *         ユーザーのロール(役割)
       * @returns Successful Response
       */
      post: (option: { body: Methods_idk8rz['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_idk8rz['post']['resBody'], BasicHeaders, Methods_idk8rz['post']['status']>(prefix, PATH8, POST, option).json(),
      /**
       * ログイン認証
       *
       * Parameters
       * -----------------------
       * email: str
       *     ログインするユーザーのメールアドレス
       * password: str
       *     ログインするユーザーのパスワード
       * device_info: dict
       *     device_info: str
       *     device_name: str
       *     uuid: str
       *
       * Returns
       * -----------------------
       * dict
       *     user_id: int
       *         ログインしたユーザーのID
       *     access_token: str
       *         生成したトークン
       *     expires_in: int
       *         トークン有効期限
       *     role: str
       *         ユーザーのロール(役割)
       * @returns Successful Response
       */
      $post: (option: { body: Methods_idk8rz['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_idk8rz['post']['resBody'], BasicHeaders, Methods_idk8rz['post']['status']>(prefix, PATH8, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH8}`,
    },
    logout: {
      /**
       * ログアウト機能
       *
       * Parameter
       * -----------------------
       * header
       *     認証情報が含まれているリクエストヘッダ
       *
       * Return
       * -----------------------
       * なし
       */
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_1rpsris['post']['status']>(prefix, PATH9, POST, option).send(),
      /**
       * ログアウト機能
       *
       * Parameter
       * -----------------------
       * header
       *     認証情報が含まれているリクエストヘッダ
       *
       * Return
       * -----------------------
       * なし
       */
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_1rpsris['post']['status']>(prefix, PATH9, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH9}`,
    },
    mentors: {
      _mentor_id: (val1: number) => {
        const prefix1 = `${PATH10}${val1}`;

        return {
          accounts: {
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
             * @returns Successful Response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_19zj46v['get']['resBody'], BasicHeaders, Methods_19zj46v['get']['status']>(prefix, `${prefix1}${PATH11}`, GET, option).json(),
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
             * @returns Successful Response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_19zj46v['get']['resBody'], BasicHeaders, Methods_19zj46v['get']['status']>(prefix, `${prefix1}${PATH11}`, GET, option).json().then(r => r.body),
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
             * @returns Successful Response
             */
            post: (option: { body: Methods_19zj46v['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_19zj46v['post']['resBody'], BasicHeaders, Methods_19zj46v['post']['status']>(prefix, `${prefix1}${PATH11}`, POST, option).json(),
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
             * @returns Successful Response
             */
            $post: (option: { body: Methods_19zj46v['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_19zj46v['post']['resBody'], BasicHeaders, Methods_19zj46v['post']['status']>(prefix, `${prefix1}${PATH11}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH11}`,
          },
          rewards: {
            /**
             * 送金履歴一覧
             *
             * Parameter
             * -----------------------
             * mentor_id: int
             *     送金先履歴を取得したいメンターのID
             *
             * Returns
             * -----------------------
             * rewards: array
             *     reward_id: int
             *         送金履歴のID
             *     date: str
             *         送金日(YYYY-MM-DD形式)
             *     amount: float
             *         送金額
             *     to_mentor_id: int
             *         送金先のメンターID
             * @returns Successful Response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_79gsgt['get']['resBody'], BasicHeaders, Methods_79gsgt['get']['status']>(prefix, `${prefix1}${PATH12}`, GET, option).json(),
            /**
             * 送金履歴一覧
             *
             * Parameter
             * -----------------------
             * mentor_id: int
             *     送金先履歴を取得したいメンターのID
             *
             * Returns
             * -----------------------
             * rewards: array
             *     reward_id: int
             *         送金履歴のID
             *     date: str
             *         送金日(YYYY-MM-DD形式)
             *     amount: float
             *         送金額
             *     to_mentor_id: int
             *         送金先のメンターID
             * @returns Successful Response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_79gsgt['get']['resBody'], BasicHeaders, Methods_79gsgt['get']['status']>(prefix, `${prefix1}${PATH12}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH12}`,
          },
          students: {
            questions: {
              /**
               * 受講生からの質問一覧取得
               *
               * Parameter
               * -----------------------
               * mentor_id: int
               *     質問を取得するメンターのユーザーID
               *
               * Returns
               * -----------------------
               * questions: array
               *     id: int
               *         新しく作成された送金先情報のID
               *     title: str
               *         質問のタイトル
               *     content: str
               *         質問の内容
               *     curriculum_id: str
               *         質問が紐づくカリキュラムのID
               *     created_at: str
               *         質問作成日
               *     is_read: str
               *         未読コメントの有無
               *     is_closed: str
               *         完了しているかどうか
               * @returns Successful Response
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_7zqsp5['get']['resBody'], BasicHeaders, Methods_7zqsp5['get']['status']>(prefix, `${prefix1}${PATH13}`, GET, option).json(),
              /**
               * 受講生からの質問一覧取得
               *
               * Parameter
               * -----------------------
               * mentor_id: int
               *     質問を取得するメンターのユーザーID
               *
               * Returns
               * -----------------------
               * questions: array
               *     id: int
               *         新しく作成された送金先情報のID
               *     title: str
               *         質問のタイトル
               *     content: str
               *         質問の内容
               *     curriculum_id: str
               *         質問が紐づくカリキュラムのID
               *     created_at: str
               *         質問作成日
               *     is_read: str
               *         未読コメントの有無
               *     is_closed: str
               *         完了しているかどうか
               * @returns Successful Response
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_7zqsp5['get']['resBody'], BasicHeaders, Methods_7zqsp5['get']['status']>(prefix, `${prefix1}${PATH13}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix1}${PATH13}`,
            },
          },
        };
      },
    },
    news: {
      _news_id: (val1: number) => {
        const prefix1 = `${PATH14}${val1}`;

        return {
          /**
           * ニュース詳細取得
           *
           * Parameter
           * -----------------------
           * news_id: int
           *     取得するニュースのID
           *
           * Returns
           * -----------------------
           * dict
           *     id: int
           *         取得したニュースのID
           *     title: str
           *         ニュースのタイトル
           *     content: str
           *         ニュースの内容
           *     published_at: str
           *         ニュースの公開日（ISO 8601形式）
           * @returns Successful Response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_ah5d5l['get']['resBody'], BasicHeaders, Methods_ah5d5l['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json(),
          /**
           * ニュース詳細取得
           *
           * Parameter
           * -----------------------
           * news_id: int
           *     取得するニュースのID
           *
           * Returns
           * -----------------------
           * dict
           *     id: int
           *         取得したニュースのID
           *     title: str
           *         ニュースのタイトル
           *     content: str
           *         ニュースの内容
           *     published_at: str
           *         ニュースの公開日（ISO 8601形式）
           * @returns Successful Response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_ah5d5l['get']['resBody'], BasicHeaders, Methods_ah5d5l['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json().then(r => r.body),
          /**
           * ニュース更新
           *
           * Parameters
           * -----------------------
           * news_id: int
           *     編集したいニュースのid
           * dict
           *     title: str
           *         更新するニュースのタイトル
           *     content: str
           *         更新するニュースの本文
           *     is_published: bool
           *         公開フラグ
           *     published_at: str
           *         公開日（ISO 8601形式）
           *
           * Returns
           * -----------------------
           * dict
           *     news_id: int
           *         更新されたニュースのID
           *     title: str
           *         更新されたニュースのタイトル
           *     content: str
           *         更新されたニュースの内容
           *     is_published: bool
           *         ニュースの公開フラグ
           *     published_at: str
           *         ニュースの公開日（ISO 8601形式）
           *     updated_at: str
           *         ニュースの更新日（ISO 8601形式）
           * @returns Successful Response
           */
          patch: (option: { body: Methods_ah5d5l['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_ah5d5l['patch']['resBody'], BasicHeaders, Methods_ah5d5l['patch']['status']>(prefix, `${prefix1}${PATH0}`, PATCH, option).json(),
          /**
           * ニュース更新
           *
           * Parameters
           * -----------------------
           * news_id: int
           *     編集したいニュースのid
           * dict
           *     title: str
           *         更新するニュースのタイトル
           *     content: str
           *         更新するニュースの本文
           *     is_published: bool
           *         公開フラグ
           *     published_at: str
           *         公開日（ISO 8601形式）
           *
           * Returns
           * -----------------------
           * dict
           *     news_id: int
           *         更新されたニュースのID
           *     title: str
           *         更新されたニュースのタイトル
           *     content: str
           *         更新されたニュースの内容
           *     is_published: bool
           *         ニュースの公開フラグ
           *     published_at: str
           *         ニュースの公開日（ISO 8601形式）
           *     updated_at: str
           *         ニュースの更新日（ISO 8601形式）
           * @returns Successful Response
           */
          $patch: (option: { body: Methods_ah5d5l['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_ah5d5l['patch']['resBody'], BasicHeaders, Methods_ah5d5l['patch']['status']>(prefix, `${prefix1}${PATH0}`, PATCH, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH0}`,
        };
      },
      /**
       * ニュース一覧取得
       *
       * Parameters
       * -----------------------
       * page: int
       *     表示するページ
       * limit: int
       *     1ページに表示するニュース数
       *
       * Returns
       * -----------------------
       * news: array
       *     id: int
       *         ニュースのID
       *     title: str
       *         ニュースのタイトル
       *     published_at: str
       *         ニュースの公開日（ISO 8601形式）
       * page: int
       *     表示するページ
       * limit: int
       *     1ページに表示するニュース数
       * total_page: int
       *     全ページ数
       * total_news: int
       *     全ニュース数
       * @returns Successful Response
       */
      get: (option: { query: Methods_t9xdat['get']['query'], config?: T | undefined }) =>
        fetch<Methods_t9xdat['get']['resBody'], BasicHeaders, Methods_t9xdat['get']['status']>(prefix, PATH14, GET, option).json(),
      /**
       * ニュース一覧取得
       *
       * Parameters
       * -----------------------
       * page: int
       *     表示するページ
       * limit: int
       *     1ページに表示するニュース数
       *
       * Returns
       * -----------------------
       * news: array
       *     id: int
       *         ニュースのID
       *     title: str
       *         ニュースのタイトル
       *     published_at: str
       *         ニュースの公開日（ISO 8601形式）
       * page: int
       *     表示するページ
       * limit: int
       *     1ページに表示するニュース数
       * total_page: int
       *     全ページ数
       * total_news: int
       *     全ニュース数
       * @returns Successful Response
       */
      $get: (option: { query: Methods_t9xdat['get']['query'], config?: T | undefined }) =>
        fetch<Methods_t9xdat['get']['resBody'], BasicHeaders, Methods_t9xdat['get']['status']>(prefix, PATH14, GET, option).json().then(r => r.body),
      /**
       * ニュース作成
       * Parameters
       * -----------------------
       * dict
       *     title: str
       *         作成するニュースのタイトル
       *     content: str
       *         作成するニュースの本文
       *     is_published: bool
       *         公開フラグ
       *     published_at: str
       *         公開日（ISO 8601形式）
       *
       * Returns
       * -----------------------
       * dict
       *     id: int
       *         作成されたニュースのID
       *     title: str
       *         作成されたニュースのタイトル
       *     content: str
       *         作成されたニュースの内容
       *     is_published: bool
       *         ニュースの公開フラグ
       *     published_at: str
       *         ニュースの公開日（ISO 8601形式）
       *     created_at: str
       *         ニュースの作成日（ISO 8601形式）
       * @returns Successful Response
       */
      post: (option: { body: Methods_t9xdat['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_t9xdat['post']['resBody'], BasicHeaders, Methods_t9xdat['post']['status']>(prefix, PATH14, POST, option).json(),
      /**
       * ニュース作成
       * Parameters
       * -----------------------
       * dict
       *     title: str
       *         作成するニュースのタイトル
       *     content: str
       *         作成するニュースの本文
       *     is_published: bool
       *         公開フラグ
       *     published_at: str
       *         公開日（ISO 8601形式）
       *
       * Returns
       * -----------------------
       * dict
       *     id: int
       *         作成されたニュースのID
       *     title: str
       *         作成されたニュースのタイトル
       *     content: str
       *         作成されたニュースの内容
       *     is_published: bool
       *         ニュースの公開フラグ
       *     published_at: str
       *         ニュースの公開日（ISO 8601形式）
       *     created_at: str
       *         ニュースの作成日（ISO 8601形式）
       * @returns Successful Response
       */
      $post: (option: { body: Methods_t9xdat['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_t9xdat['post']['resBody'], BasicHeaders, Methods_t9xdat['post']['status']>(prefix, PATH14, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_t9xdat['get']['query'] } | undefined) =>
        `${prefix}${PATH14}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    password_reset: {
      confirm: {
        post: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_vesziw['post']['status']>(prefix, PATH16, POST, option).send(),
        $post: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_vesziw['post']['status']>(prefix, PATH16, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH16}`,
      },
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_oji007['post']['status']>(prefix, PATH15, POST, option).send(),
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_oji007['post']['status']>(prefix, PATH15, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH15}`,
    },
    progresses: {
      /**
       * 進捗管理一覧
       *
       * Parameters
       * ----------
       *
       * Returns
       * -------
       * {"progresses": progresses_list} : dic{}
       *                 進捗一覧
       * @returns Successful Response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1h2e7pl['get']['resBody'], BasicHeaders, Methods_1h2e7pl['get']['status']>(prefix, PATH17, GET, option).json(),
      /**
       * 進捗管理一覧
       *
       * Parameters
       * ----------
       *
       * Returns
       * -------
       * {"progresses": progresses_list} : dic{}
       *                 進捗一覧
       * @returns Successful Response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1h2e7pl['get']['resBody'], BasicHeaders, Methods_1h2e7pl['get']['status']>(prefix, PATH17, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH17}`,
    },
    questions: {
      _question_id: (val1: number) => {
        const prefix1 = `${PATH6}${val1}`;

        return {
          answers: {
            /**
             * 質問回答投稿作成
             * Parameters
             * -----------------------
             * dict
             *     user_id: int
             *         回答するユーザーのID
             *     content: str
             *         回答
             *
             * Returns
             * -----------------------
             * dict
             *     answer_id: int
             *         作成された回答のID
             *     question_id: int
             *         回答に紐づく質問のID
             *     user_id: int
             *         回答したユーザーのID
             *     content: str
             *         回答
             * @returns Successful Response
             */
            post: (option: { body: Methods_tnd0ic['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_tnd0ic['post']['resBody'], BasicHeaders, Methods_tnd0ic['post']['status']>(prefix, `${prefix1}${PATH18}`, POST, option).json(),
            /**
             * 質問回答投稿作成
             * Parameters
             * -----------------------
             * dict
             *     user_id: int
             *         回答するユーザーのID
             *     content: str
             *         回答
             *
             * Returns
             * -----------------------
             * dict
             *     answer_id: int
             *         作成された回答のID
             *     question_id: int
             *         回答に紐づく質問のID
             *     user_id: int
             *         回答したユーザーのID
             *     content: str
             *         回答
             * @returns Successful Response
             */
            $post: (option: { body: Methods_tnd0ic['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_tnd0ic['post']['resBody'], BasicHeaders, Methods_tnd0ic['post']['status']>(prefix, `${prefix1}${PATH18}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH18}`,
          },
          /**
           * 質問スレッド詳細取得
           *
           * Parameter
           * -----------------------
           * なし
           *
           * Returns
           * -----------------------
           * dict
           *     question: dict
           *         id: int
           *             質問のID
           *         curriculum_id: int
           *             質問が含まれるカリキュラムのID
           *         user_id: int
           *             質問を投稿したユーザーのID
           *         title: int
           *             質問のタイトル
           *         content: str
           *             質問の内容
           *         media_content: json
           *             質問に関するメディアコンテンツの情報
           *         is_closed: bool
           *             質問がクローズされているか
           *         created_at: str
           *             作成日（ISO 8601形式）
           *     answer: array
           *         id: int
           *             回答のID
           *         question_id: int
           *             回答が紐づく質問のID
           *         user_id: int
           *             回答を投稿したユーザーのID
           *         parent_answer_id: int or None
           *             返信先の回答ID（返信先がない場合はNoneが返る）
           *         content: str
           *             回答の内容
           *         media_content: json
           *             回答に関するメディアコンテンツの情報
           *         is_read: bool
           *             回答が既読かどうかを示すフラグ
           *         created_at: str
           *             作成日（ISO 8601形式）
           * @returns Successful Response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_csvpx4['get']['resBody'], BasicHeaders, Methods_csvpx4['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json(),
          /**
           * 質問スレッド詳細取得
           *
           * Parameter
           * -----------------------
           * なし
           *
           * Returns
           * -----------------------
           * dict
           *     question: dict
           *         id: int
           *             質問のID
           *         curriculum_id: int
           *             質問が含まれるカリキュラムのID
           *         user_id: int
           *             質問を投稿したユーザーのID
           *         title: int
           *             質問のタイトル
           *         content: str
           *             質問の内容
           *         media_content: json
           *             質問に関するメディアコンテンツの情報
           *         is_closed: bool
           *             質問がクローズされているか
           *         created_at: str
           *             作成日（ISO 8601形式）
           *     answer: array
           *         id: int
           *             回答のID
           *         question_id: int
           *             回答が紐づく質問のID
           *         user_id: int
           *             回答を投稿したユーザーのID
           *         parent_answer_id: int or None
           *             返信先の回答ID（返信先がない場合はNoneが返る）
           *         content: str
           *             回答の内容
           *         media_content: json
           *             回答に関するメディアコンテンツの情報
           *         is_read: bool
           *             回答が既読かどうかを示すフラグ
           *         created_at: str
           *             作成日（ISO 8601形式）
           * @returns Successful Response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_csvpx4['get']['resBody'], BasicHeaders, Methods_csvpx4['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH0}`,
        };
      },
    },
    receipts: {
      _receipt_id: (val1: number) => {
        const prefix1 = `${PATH19}${val1}`;

        return {
          /**
           * 領収書出力
           *
           * Parameter
           * -----------------------
           * receipt_id: int
           *     出力する領収書のID
           *
           * Returns
           * -----------------------
           * dict
           *     receipt_id: int
           *         領収書のID
           *     company_id: int
           *         会社のID
           *     billing_id: int
           *         関連する請求履歴のID
           *     date: str
           *         領収書の日付（YYYY-MM-DD形式）
           *     amount: float
           *         支払金額
           *     received_from: str
           *         支払いを受けた会社または個人の名前
           *     payment_method: str
           *         支払い方法
           * @returns Successful Response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_if5q52['get']['resBody'], BasicHeaders, Methods_if5q52['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json(),
          /**
           * 領収書出力
           *
           * Parameter
           * -----------------------
           * receipt_id: int
           *     出力する領収書のID
           *
           * Returns
           * -----------------------
           * dict
           *     receipt_id: int
           *         領収書のID
           *     company_id: int
           *         会社のID
           *     billing_id: int
           *         関連する請求履歴のID
           *     date: str
           *         領収書の日付（YYYY-MM-DD形式）
           *     amount: float
           *         支払金額
           *     received_from: str
           *         支払いを受けた会社または個人の名前
           *     payment_method: str
           *         支払い方法
           * @returns Successful Response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_if5q52['get']['resBody'], BasicHeaders, Methods_if5q52['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH0}`,
        };
      },
    },
    reviews: {
      _mentor_id: (val1: number) => {
        const prefix1 = `${PATH7}${val1}`;

        return {
          students: {
            reviews: {
              /**
               * 受講生のレビュー一覧取得
               *
               * Parameter
               * -----------------------
               * mentor_id: int
               *     取得するメンターのユーザーID
               *
               * Returns
               * -----------------------
               * reviews: array
               *     id: int
               *         レビューのID
               *     title: str
               *         レビューのタイトル
               *     content: str
               *         レビューの内容
               *     curriculum_id: int
               *         レビューに紐づくカリキュラムのID
               *     created_at:str
               *         レビューの作成日（ISO 8601形式）
               *     is_read: bool
               *         未読コメントの有無
               *     is_closed: bool
               *         完了しているかどうか
               * @returns Successful Response
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_1bxksbk['get']['resBody'], BasicHeaders, Methods_1bxksbk['get']['status']>(prefix, `${prefix1}${PATH20}`, GET, option).json(),
              /**
               * 受講生のレビュー一覧取得
               *
               * Parameter
               * -----------------------
               * mentor_id: int
               *     取得するメンターのユーザーID
               *
               * Returns
               * -----------------------
               * reviews: array
               *     id: int
               *         レビューのID
               *     title: str
               *         レビューのタイトル
               *     content: str
               *         レビューの内容
               *     curriculum_id: int
               *         レビューに紐づくカリキュラムのID
               *     created_at:str
               *         レビューの作成日（ISO 8601形式）
               *     is_read: bool
               *         未読コメントの有無
               *     is_closed: bool
               *         完了しているかどうか
               * @returns Successful Response
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_1bxksbk['get']['resBody'], BasicHeaders, Methods_1bxksbk['get']['status']>(prefix, `${prefix1}${PATH20}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix1}${PATH20}`,
            },
          },
        };
      },
      _review_id: (val1: number) => {
        const prefix1 = `${PATH7}${val1}`;

        return {
          /**
           * レビュー更新（受講生）
           *
           * Parameters
           * -----------------------
           * dict
           *     review_id: int
           *         更新したいレビューのID
           *     title: str
           *         レビューリクエストのタイトル
           *     content: str
           *         レビューの更新された内容
           *     is_read: bool
           *         レビューが既読かどうかを更新するフラグ
           *
           * Returns
           * -----------------------
           * dict
           *     id: int
           *         更新されたレビューリクエストのID
           *     title: str
           *         レビューリクエストのタイトル
           *     content: text
           *         更新されたレビューの内容
           *     is_read: bool
           *         レビューが既読かどうかを示すフラグ
           *     updated_at: str
           *         レビューが最後に更新された日時
           * @returns Successful Response
           */
          patch: (option: { body: Methods_1w7qnl8['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1w7qnl8['patch']['resBody'], BasicHeaders, Methods_1w7qnl8['patch']['status']>(prefix, `${prefix1}${PATH0}`, PATCH, option).json(),
          /**
           * レビュー更新（受講生）
           *
           * Parameters
           * -----------------------
           * dict
           *     review_id: int
           *         更新したいレビューのID
           *     title: str
           *         レビューリクエストのタイトル
           *     content: str
           *         レビューの更新された内容
           *     is_read: bool
           *         レビューが既読かどうかを更新するフラグ
           *
           * Returns
           * -----------------------
           * dict
           *     id: int
           *         更新されたレビューリクエストのID
           *     title: str
           *         レビューリクエストのタイトル
           *     content: text
           *         更新されたレビューの内容
           *     is_read: bool
           *         レビューが既読かどうかを示すフラグ
           *     updated_at: str
           *         レビューが最後に更新された日時
           * @returns Successful Response
           */
          $patch: (option: { body: Methods_1w7qnl8['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1w7qnl8['patch']['resBody'], BasicHeaders, Methods_1w7qnl8['patch']['status']>(prefix, `${prefix1}${PATH0}`, PATCH, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH0}`,
        };
      },
      _review_request_id: (val1: number) => {
        const prefix1 = `${PATH7}${val1}`;

        return {
          /**
           * レビュースレッド詳細
           *
           * Parameter
           * -----------------------
           * dict
           *     review_request_id: int
           *         スレッド詳細を取得したいレビューリクエストのID
           *
           * Returns
           * -----------------------
           * dict
           *     id: int
           *         レビューリクエストのID
           *     curriculum_id: int
           *         関連するカリキュラムのID
           *     user_id: int
           *         レビューリクエストを投稿したユーザーのID
           *     title: str
           *         レビューリクエストのタイトル
           *     content: str
           *         レビューリクエストの内容
           *     is_closed: bool
           *         レビューリクエストがクローズされているかどうか
           *     created_at: str
           *         レビューリクエストが作成された日時
           *     updated_at:str
           *         レビューリクエストが最後に更新された日時
           *     id: int
           *         回答のID
           *     review_request_id: int
           *         回答が紐づくレビューリクエストのID
           *     user_id: int
           *         回答を投稿したユーザーのID
           *     parent_response_id: int
           *         返信先の回答ID
           *     content: str
           *         回答の内容
           *     is_read: bool
           *         回答が既読かどうかを示すフラグ
           *     created_at: str
           *         回答が作成された日時
           * @returns Successful Response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_458k6a['get']['resBody'], BasicHeaders, Methods_458k6a['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json(),
          /**
           * レビュースレッド詳細
           *
           * Parameter
           * -----------------------
           * dict
           *     review_request_id: int
           *         スレッド詳細を取得したいレビューリクエストのID
           *
           * Returns
           * -----------------------
           * dict
           *     id: int
           *         レビューリクエストのID
           *     curriculum_id: int
           *         関連するカリキュラムのID
           *     user_id: int
           *         レビューリクエストを投稿したユーザーのID
           *     title: str
           *         レビューリクエストのタイトル
           *     content: str
           *         レビューリクエストの内容
           *     is_closed: bool
           *         レビューリクエストがクローズされているかどうか
           *     created_at: str
           *         レビューリクエストが作成された日時
           *     updated_at:str
           *         レビューリクエストが最後に更新された日時
           *     id: int
           *         回答のID
           *     review_request_id: int
           *         回答が紐づくレビューリクエストのID
           *     user_id: int
           *         回答を投稿したユーザーのID
           *     parent_response_id: int
           *         返信先の回答ID
           *     content: str
           *         回答の内容
           *     is_read: bool
           *         回答が既読かどうかを示すフラグ
           *     created_at: str
           *         回答が作成された日時
           * @returns Successful Response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_458k6a['get']['resBody'], BasicHeaders, Methods_458k6a['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH0}`,
        };
      },
      responses: {
        _response_id: (val2: number) => {
          const prefix2 = `${PATH21}${val2}`;

          return {
            /**
             * レビュー回答更新
             *
             * Parameters
             * -----------------------
             * dict
             *     response_id: int
             *         更新したい回答のID
             *     content: str
             *         回答の更新された内容
             *     is_read: bool
             *         回答が既読かどうかを更新するフラグ
             *
             * Returns
             * -----------------------
             * dict
             *     id: int
             *         更新された回答のID
             *     review_request_id: int
             *         回答が紐づくレビューリクエストのID
             *     user_id: int
             *         回答を投稿したユーザーのID
             *     parent_response_id: int
             *         返信先の回答ID
             *     content: str
             *         更新された回答の内容
             *     is_read: bool
             *         回答が既読かどうかを示すフラグ
             *     updated_at: str
             *         回答が最後に更新された日時
             * @returns Successful Response
             */
            patch: (option: { body: Methods_1ccq37s['patch']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1ccq37s['patch']['resBody'], BasicHeaders, Methods_1ccq37s['patch']['status']>(prefix, `${prefix2}${PATH0}`, PATCH, option).json(),
            /**
             * レビュー回答更新
             *
             * Parameters
             * -----------------------
             * dict
             *     response_id: int
             *         更新したい回答のID
             *     content: str
             *         回答の更新された内容
             *     is_read: bool
             *         回答が既読かどうかを更新するフラグ
             *
             * Returns
             * -----------------------
             * dict
             *     id: int
             *         更新された回答のID
             *     review_request_id: int
             *         回答が紐づくレビューリクエストのID
             *     user_id: int
             *         回答を投稿したユーザーのID
             *     parent_response_id: int
             *         返信先の回答ID
             *     content: str
             *         更新された回答の内容
             *     is_read: bool
             *         回答が既読かどうかを示すフラグ
             *     updated_at: str
             *         回答が最後に更新された日時
             * @returns Successful Response
             */
            $patch: (option: { body: Methods_1ccq37s['patch']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1ccq37s['patch']['resBody'], BasicHeaders, Methods_1ccq37s['patch']['status']>(prefix, `${prefix2}${PATH0}`, PATCH, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}${PATH0}`,
          };
        },
      },
    },
    rewards: {
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_wq2jhe['get']['status']>(prefix, PATH12, GET, option).send(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_wq2jhe['get']['status']>(prefix, PATH12, GET, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH12}`,
    },
    state_progresses: {
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
       * @returns Successful Response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_4q3e6b['get']['resBody'], BasicHeaders, Methods_4q3e6b['get']['status']>(prefix, PATH22, GET, option).json(),
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
       * @returns Successful Response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_4q3e6b['get']['resBody'], BasicHeaders, Methods_4q3e6b['get']['status']>(prefix, PATH22, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH22}`,
    },
    students: {
      _student_id: (val1: number) => {
        const prefix1 = `${PATH23}${val1}`;

        return {
          questions: {
            /**
             * 自分の質問を取得する
             *
             * Parameter
             * -----------------------
             * user_id: int
             *     取得するユーザーのID
             *
             * Returns
             * -----------------------
             * questions: array
             *     id: int
             *         質問のID
             *     title: str
             *         質問のタイトル
             *     content: str
             *         質問の内容
             *     curriculum_id: int
             *         紐づいたカリキュラムのID
             *     created_at: str
             *         質問作成日
             *     is_read: bool
             *         未読コメントの有無
             *     is_closed: bool
             *         完了しているかどうか
             * @returns Successful Response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1qnirv8['get']['resBody'], BasicHeaders, Methods_1qnirv8['get']['status']>(prefix, `${prefix1}${PATH6}`, GET, option).json(),
            /**
             * 自分の質問を取得する
             *
             * Parameter
             * -----------------------
             * user_id: int
             *     取得するユーザーのID
             *
             * Returns
             * -----------------------
             * questions: array
             *     id: int
             *         質問のID
             *     title: str
             *         質問のタイトル
             *     content: str
             *         質問の内容
             *     curriculum_id: int
             *         紐づいたカリキュラムのID
             *     created_at: str
             *         質問作成日
             *     is_read: bool
             *         未読コメントの有無
             *     is_closed: bool
             *         完了しているかどうか
             * @returns Successful Response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1qnirv8['get']['resBody'], BasicHeaders, Methods_1qnirv8['get']['status']>(prefix, `${prefix1}${PATH6}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH6}`,
          },
        };
      },
    },
    users: {
      _user_id: (val1: number) => {
        const prefix1 = `${PATH3}${val1}`;

        return {
          email: {
            confirm_change: {
              /**
               * メールアドレス認証と更新
               *
               * Parameters
               * -----------------------
               * user_id: int
               *     メールアドレスを変更しようとしているユーザーのID
               * token: str
               *     メールアドレス変更を認証するための一意のトークン
               *
               * Return
               * -----------------------
               * message: str
               *     "Your email address has been successfully updated."}
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_1l20ihb['get']['status']>(prefix, `${prefix1}${PATH24}`, GET, option).send(),
              /**
               * メールアドレス認証と更新
               *
               * Parameters
               * -----------------------
               * user_id: int
               *     メールアドレスを変更しようとしているユーザーのID
               * token: str
               *     メールアドレス変更を認証するための一意のトークン
               *
               * Return
               * -----------------------
               * message: str
               *     "Your email address has been successfully updated."}
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_1l20ihb['get']['status']>(prefix, `${prefix1}${PATH24}`, GET, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix1}${PATH24}`,
            },
          },
          /**
           * アカウント更新
           *
           * Parameters
           * -----------------------
           * dict
           *     first_name: str
           *         名前
           *     last_name: str
           *         姓
           *     first_name_kana: str
           *         名前（カナ）
           *     last_name_kana: str
           *         姓（カナ）
           *     email: str
           *         メールアドレス
           * user_id: int
           *     更新するユーザーのID
           *
           * Returns
           * -----------------------
           * なし
           */
          patch: (option: { body: Methods_8ls8pm['patch']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_8ls8pm['patch']['status']>(prefix, `${prefix1}${PATH0}`, PATCH, option).send(),
          /**
           * アカウント更新
           *
           * Parameters
           * -----------------------
           * dict
           *     first_name: str
           *         名前
           *     last_name: str
           *         姓
           *     first_name_kana: str
           *         名前（カナ）
           *     last_name_kana: str
           *         姓（カナ）
           *     email: str
           *         メールアドレス
           * user_id: int
           *     更新するユーザーのID
           *
           * Returns
           * -----------------------
           * なし
           */
          $patch: (option: { body: Methods_8ls8pm['patch']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_8ls8pm['patch']['status']>(prefix, `${prefix1}${PATH0}`, PATCH, option).send().then(r => r.body),
          /**
           * アカウント詳細取得
           *
           * Parameter
           * -----------------------
           * user_id: int
           *     取得するユーザーのID
           *
           * Returns
           * -----------------------
           * dict
           *     user_id: str
           *         取得したユーザーのID
           *     first_name: str
           *         名前
           *     last_name: str
           *         姓
           *     first_name_kana: str
           *         名前（カナ）
           *     last_name_kana: str
           *         姓（カナ）
           *     email: str
           *         メールアドレス
           *     role: str
           *         ユーザーのロール
           *     last_login: str
           *         最終ログイン日時（ISO 8601形式）
           * @returns Successful Response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_8ls8pm['get']['resBody'], BasicHeaders, Methods_8ls8pm['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json(),
          /**
           * アカウント詳細取得
           *
           * Parameter
           * -----------------------
           * user_id: int
           *     取得するユーザーのID
           *
           * Returns
           * -----------------------
           * dict
           *     user_id: str
           *         取得したユーザーのID
           *     first_name: str
           *         名前
           *     last_name: str
           *         姓
           *     first_name_kana: str
           *         名前（カナ）
           *     last_name_kana: str
           *         姓（カナ）
           *     email: str
           *         メールアドレス
           *     role: str
           *         ユーザーのロール
           *     last_login: str
           *         最終ログイン日時（ISO 8601形式）
           * @returns Successful Response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_8ls8pm['get']['resBody'], BasicHeaders, Methods_8ls8pm['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH0}`,
        };
      },
    },
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).send(),
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).send().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
