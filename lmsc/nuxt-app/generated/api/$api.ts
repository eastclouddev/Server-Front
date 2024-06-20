import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_vbrzjm } from './billings/_billing_id@number';
import type { Methods as Methods_xi4crh } from './companies';
import type { Methods as Methods_18ofpgv } from './companies/_company_id/billing_info';
import type { Methods as Methods_96nn1k } from './companies/_company_id/billing_info/_billing_info_id@number';
import type { Methods as Methods_7dyior } from './companies/_company_id@number';
import type { Methods as Methods_16y40ss } from './companies/_company_id@number/billings';
import type { Methods as Methods_18uwb4v } from './companies/_company_id@number/progresses';
import type { Methods as Methods_hxcrb8 } from './companies/_company_id@number/users';
import type { Methods as Methods_1rhnnoh } from './companies/_company_id@number/users/counts';
import type { Methods as Methods_1rhnnoh } from './companies/_company_id@number/users/counts';
import type { Methods as Methods_13yxxb0 } from './courses';
import type { Methods as Methods_poio86 } from './courses/_course_id@number';
import type { Methods as Methods_76nv1w } from './courses/_course_id@number/questions';
import type { Methods as Methods_10pnr6o } from './courses/_course_id@number/reviews';
import type { Methods as Methods_1jtgkuj } from './courses/start';
import type { Methods as Methods_1tl4w1u } from './curriculums/_curriculum_id@number';
import type { Methods as Methods_1n8it4t } from './hogechat';
import type { Methods as Methods_idk8rz } from './login';
import type { Methods as Methods_1rpsris } from './logout';
import type { Methods as Methods_1hb0s9x } from './mentors/_mentor_id@number/notifications';
import type { Methods as Methods_w2iay8 } from './mentors/_mentor_id@number/progresses';
import type { Methods as Methods_7zqsp5 } from './mentors/_mentor_id@number/students/questions';
import type { Methods as Methods_1fsn4zt } from './mentors/_mentor_id@number/students/reviews';
import type { Methods as Methods_1osy0o9 } from './mentors/counts';
import type { Methods as Methods_1fsn4zt } from './mentors/_mentor_id@number/students/reviews';
import type { Methods as Methods_1osy0o9 } from './mentors/counts';
import type { Methods as Methods_t9xdat } from './news';
import type { Methods as Methods_ah5d5l } from './news/_news_id@number';
import type { Methods as Methods_1uxbl4e } from './news/categories';
import type { Methods as Methods_ovggmd } from './news/categories/_category_id@number';
import type { Methods as Methods_19fpiw4 } from './news/published';
import type { Methods as Methods_sr2fny } from './notifications';
import type { Methods as Methods_wemohn } from './notifications/_notification_id@number/mark_read';
import type { Methods as Methods_oji007 } from './password_reset';
import type { Methods as Methods_vesziw } from './password_reset/confirm';
import type { Methods as Methods_1h2e7pl } from './progresses';
import type { Methods as Methods_csvpx4 } from './questions/_question_id@number';
import type { Methods as Methods_tnd0ic } from './questions/_question_id@number/answers';
import type { Methods as Methods_s3ej2m } from './questions/answers/_answer_id@number';
import type { Methods as Methods_if5q52 } from './receipts/_receipt_id@number';
import type { Methods as Methods_1w7qnl8 } from './reviews/_review_id@number';
import type { Methods as Methods_458k6a } from './reviews/_review_request_id@number';
import type { Methods as Methods_2cu3ed } from './reviews/_review_request_id@number/responses';
import type { Methods as Methods_1ccq37s } from './reviews/responses/_response_id@number';
import type { Methods as Methods_wq2jhe } from './rewards';
import type { Methods as Methods_1o5yr5y } from './samplechat';
import type { Methods as Methods_9ucswa } from './students/_student_id@number/assign_mentor';
import type { Methods as Methods_97y4kl } from './students/_student_id@number/notifications';
import type { Methods as Methods_16cgbqo } from './students/_student_id@number/progresses';
import type { Methods as Methods_1qnirv8 } from './students/_student_id@number/questions';
import type { Methods as Methods_1qnfpc0 } from './students/_student_id@number/reviews';
import type { Methods as Methods_1xhiioa } from './users';
import type { Methods as Methods_8ls8pm } from './users/_user_id@number';
import type { Methods as Methods_1s8f1kf } from './users/counts';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/';
  const PATH1 = '/billings/';
  const PATH2 = '/companies/';
  const PATH3 = '/billing_info/';
  const PATH4 = '/progresses/';
  const PATH5 = '/users/';
  const PATH6 = '/users/counts/';
  const PATH7 = '/courses/';
  const PATH8 = '/questions/';
  const PATH9 = '/reviews/';
  const PATH10 = '/courses/start/';
  const PATH11 = '/curriculums/';
  const PATH12 = '/hogechat/';
  const PATH13 = '/login/';
  const PATH14 = '/logout/';
  const PATH15 = '/mentors/';
  const PATH16 = '/notifications/';
  const PATH17 = '/students/questions/';
  const PATH18 = '/students/reviews/';
  const PATH19 = '/mentors/counts/';
  const PATH20 = '/news/';
  const PATH21 = '/news/categories/';
  const PATH22 = '/news/published/';
  const PATH23 = '/mark_read/';
  const PATH24 = '/password_reset/';
  const PATH25 = '/password_reset/confirm/';
  const PATH26 = '/answers/';
  const PATH27 = '/questions/answers/';
  const PATH28 = '/receipts/';
  const PATH29 = '/responses/';
  const PATH30 = '/reviews/responses/';
  const PATH31 = '/rewards/';
  const PATH32 = '/samplechat/';
  const PATH33 = '/students/';
  const PATH34 = '/assign_mentor/';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
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
      _company_id: (val1: number | string) => {
        const prefix1 = `${PATH2}${val1}`;

        return {
          billing_info: {
            _billing_info_id: (val3: number) => {
              const prefix3 = `${prefix1}${PATH3}${val3}`;

              return {
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
                 * @returns Successful Response
                 */
                get: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods_96nn1k['get']['resBody'], BasicHeaders, Methods_96nn1k['get']['status']>(prefix, `${prefix3}${PATH0}`, GET, option).json(),
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
                 * @returns Successful Response
                 */
                $get: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods_96nn1k['get']['resBody'], BasicHeaders, Methods_96nn1k['get']['status']>(prefix, `${prefix3}${PATH0}`, GET, option).json().then(r => r.body),
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
                 * @returns Successful Response
                 */
                put: (option: { body: Methods_96nn1k['put']['reqBody'], config?: T | undefined }) =>
                  fetch<Methods_96nn1k['put']['resBody'], BasicHeaders, Methods_96nn1k['put']['status']>(prefix, `${prefix3}${PATH0}`, PUT, option).json(),
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
                 * @returns Successful Response
                 */
                $put: (option: { body: Methods_96nn1k['put']['reqBody'], config?: T | undefined }) =>
                  fetch<Methods_96nn1k['put']['resBody'], BasicHeaders, Methods_96nn1k['put']['status']>(prefix, `${prefix3}${PATH0}`, PUT, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}${PATH0}`,
              };
            },
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
             * @returns Successful Response
             */
            post: (option: { body: Methods_18ofpgv['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_18ofpgv['post']['resBody'], BasicHeaders, Methods_18ofpgv['post']['status']>(prefix, `${prefix1}${PATH3}`, POST, option).json(),
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
             * @returns Successful Response
             */
            $post: (option: { body: Methods_18ofpgv['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_18ofpgv['post']['resBody'], BasicHeaders, Methods_18ofpgv['post']['status']>(prefix, `${prefix1}${PATH3}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH3}`,
          },
        };
      },
      _company_id_number: (val1: number) => {
        const prefix1 = `${PATH2}${val1}`;

        return {
          billings: {
            /**
             * 請求履歴一覧取得
             *
             * Parameter
             * -----------------------
             * company_id: int
             *     会社のID
             * Returns
             * -----------------------
             * dict
             *     billing_id: int
             *         請求履歴のID
             *     date: str
             *         請求日（YYYY-MM-DD形式）
             *     amount: float
             *         請求金額
             *     status: string
             *         請求状況（例: "paid", "unpaid", "overdue"）
             *     description:str
             *         請求内容の説明
             * @returns Successful Response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_16y40ss['get']['resBody'], BasicHeaders, Methods_16y40ss['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json(),
            /**
             * 請求履歴一覧取得
             *
             * Parameter
             * -----------------------
             * company_id: int
             *     会社のID
             * Returns
             * -----------------------
             * dict
             *     billing_id: int
             *         請求履歴のID
             *     date: str
             *         請求日（YYYY-MM-DD形式）
             *     amount: float
             *         請求金額
             *     status: string
             *         請求状況（例: "paid", "unpaid", "overdue"）
             *     description:str
             *         請求内容の説明
             * @returns Successful Response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_16y40ss['get']['resBody'], BasicHeaders, Methods_16y40ss['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH1}`,
          },
          progresses: {
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
             * @returns Successful Response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_18uwb4v['get']['resBody'], BasicHeaders, Methods_18uwb4v['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json(),
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
             * @returns Successful Response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_18uwb4v['get']['resBody'], BasicHeaders, Methods_18uwb4v['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH4}`,
          },
          users: {
            counts: {
              /**
               * 有効アカウント数取得(法人、法人代行)
               * Parameters
               * -----------------------
               * company_id: int
               *     会社のID
               * Return
               * -----------------------
               * company_id: 会社のID
               * role_counts: array
               *     role_id: int
               *         ロールのID
               *     role_name: str
               *         ロールの名称
               *     count: int
               *         そのロールを持つ有効なユーザーの数
               * @returns Successful Response
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_1rhnnoh['get']['resBody'], BasicHeaders, Methods_1rhnnoh['get']['status']>(prefix, `${prefix1}${PATH6}`, GET, option).json(),
              /**
               * 有効アカウント数取得(法人、法人代行)
               * Parameters
               * -----------------------
               * company_id: int
               *     会社のID
               * Return
               * -----------------------
               * company_id: 会社のID
               * role_counts: array
               *     role_id: int
               *         ロールのID
               *     role_name: str
               *         ロールの名称
               *     count: int
               *         そのロールを持つ有効なユーザーの数
               * @returns Successful Response
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_1rhnnoh['get']['resBody'], BasicHeaders, Methods_1rhnnoh['get']['status']>(prefix, `${prefix1}${PATH6}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix1}${PATH6}`,
            },
            /**
             * 受講生一覧（法人、法人代行)
             *
             * Parameters
             * -----------------------
             * role: str
             *     ユーザーの役割
             * page: int
             *     取得するページ番号
             * limit: int
             *     1ページ当たりの記事数
             *
             * Returns
             * -----------------------
             * users: array
             *     user_id: int
             *         ユーザーのID
             *     name: str
             *         ユーザーの名前
             *     email: str
             *         ユーザーのメールアドレス
             *     role: str
             *         ユーザーのロール
             *     is_enable: bool
             *         アカウントの有効状態
             *     last_login: str
             *         最終ログイン日（ISO 8601形式）
             * @returns Successful Response
             */
            get: (option: { query: Methods_hxcrb8['get']['query'], config?: T | undefined }) =>
              fetch<Methods_hxcrb8['get']['resBody'], BasicHeaders, Methods_hxcrb8['get']['status']>(prefix, `${prefix1}${PATH5}`, GET, option).json(),
            /**
             * 受講生一覧（法人、法人代行)
             *
             * Parameters
             * -----------------------
             * role: str
             *     ユーザーの役割
             * page: int
             *     取得するページ番号
             * limit: int
             *     1ページ当たりの記事数
             *
             * Returns
             * -----------------------
             * users: array
             *     user_id: int
             *         ユーザーのID
             *     name: str
             *         ユーザーの名前
             *     email: str
             *         ユーザーのメールアドレス
             *     role: str
             *         ユーザーのロール
             *     is_enable: bool
             *         アカウントの有効状態
             *     last_login: str
             *         最終ログイン日（ISO 8601形式）
             * @returns Successful Response
             */
            $get: (option: { query: Methods_hxcrb8['get']['query'], config?: T | undefined }) =>
              fetch<Methods_hxcrb8['get']['resBody'], BasicHeaders, Methods_hxcrb8['get']['status']>(prefix, `${prefix1}${PATH5}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_hxcrb8['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
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
           *     name: str
           *         会社名のフリガナ
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
           *     name: str
           *         会社名のフリガナ
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
          /**
           * 会社情報更新
           *
           * Parameters
           * -----------------------
           * company_id: int
           *     会社情報のID
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
           * message: str
           *     完了時のメッセージ(Company information updated successfully.)
           */
          patch: (option: { body: Methods_7dyior['patch']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_7dyior['patch']['status']>(prefix, `${prefix1}${PATH0}`, PATCH, option).send(),
          /**
           * 会社情報更新
           *
           * Parameters
           * -----------------------
           * company_id: int
           *     会社情報のID
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
           * message: str
           *     完了時のメッセージ(Company information updated successfully.)
           */
          $patch: (option: { body: Methods_7dyior['patch']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_7dyior['patch']['status']>(prefix, `${prefix1}${PATH0}`, PATCH, option).send().then(r => r.body),
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
       * @returns Successful Response
       */
      $post: (option: { body: Methods_xi4crh['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_xi4crh['post']['resBody'], BasicHeaders, Methods_xi4crh['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
    courses: {
      _course_id: (val1: number) => {
        const prefix1 = `${PATH7}${val1}`;

        return {
          questions: {
            /**
             * 質問投稿
             *
             * Parameter
             * -----------------------
             * course_id: int
             *     質問を投稿したいコースのID
             * dict
             *     curriculum_id: int
             *         質問が紐づくカリキュラムのID
             *     user_id: int
             *         ユーザーのID
             *     title: str
             *         質問のタイトル
             *     objective: str
             *         学習内容で実践したこと
             *     current_situation: str
             *         現状
             *     research: str
             *         自分が調べたこと
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
             *     user: dict
             *         user_id: int
             *             質問を投稿したユーザーのID
             *         name: str
             *             質問を投稿したユーザーの名前
             *     title: str
             *         質問のタイトル
             *     objective: str
             *         学習内容で実践したこと
             *     current_situation: str
             *         現状
             *     research: str
             *         自分が調べたこと
             *     content: str
             *         質問の内容
             *     media_content: dict
             *         関連するメディアコンテンツの情報
             *     created_at: str
             *         質問作成日（ISO 8601形式）
             *     is_read: bool
             *         未読コメントの有無
             *     is_closed: bool
             *         完了しているかどうか
             *     reply_counts: int
             *         質問の返信数
             * @returns Successful Response
             */
            post: (option: { body: Methods_76nv1w['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_76nv1w['post']['resBody'], BasicHeaders, Methods_76nv1w['post']['status']>(prefix, `${prefix1}${PATH8}`, POST, option).json(),
            /**
             * 質問投稿
             *
             * Parameter
             * -----------------------
             * course_id: int
             *     質問を投稿したいコースのID
             * dict
             *     curriculum_id: int
             *         質問が紐づくカリキュラムのID
             *     user_id: int
             *         ユーザーのID
             *     title: str
             *         質問のタイトル
             *     objective: str
             *         学習内容で実践したこと
             *     current_situation: str
             *         現状
             *     research: str
             *         自分が調べたこと
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
             *     user: dict
             *         user_id: int
             *             質問を投稿したユーザーのID
             *         name: str
             *             質問を投稿したユーザーの名前
             *     title: str
             *         質問のタイトル
             *     objective: str
             *         学習内容で実践したこと
             *     current_situation: str
             *         現状
             *     research: str
             *         自分が調べたこと
             *     content: str
             *         質問の内容
             *     media_content: dict
             *         関連するメディアコンテンツの情報
             *     created_at: str
             *         質問作成日（ISO 8601形式）
             *     is_read: bool
             *         未読コメントの有無
             *     is_closed: bool
             *         完了しているかどうか
             *     reply_counts: int
             *         質問の返信数
             * @returns Successful Response
             */
            $post: (option: { body: Methods_76nv1w['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_76nv1w['post']['resBody'], BasicHeaders, Methods_76nv1w['post']['status']>(prefix, `${prefix1}${PATH8}`, POST, option).json().then(r => r.body),
            /**
             * コースの質問一覧
             *
             * Parameter
             * -----------------------
             * course_id: int
             *     質問一覧を取得したいコースのID
             *
             * Returns
             * -----------------------
             * questions: array
             *     question_id: int
             *         質問のID
             *     user: dict
             *         user_id: int
             *             質問を投稿したユーザーのID
             *         name: str
             *             質問を投稿したユーザーの名前
             *     title: str
             *         質問のタイトル
             *     content: str
             *         質問の内容
             *     curriculum_id: int
             *         カリキュラムのID
             *     created_at: str
             *         質問作成日（ISO 8601形式）
             *     is_read: bool
             *         未読コメントの有無
             *     is_closed: bool
             *         完了しているかどうか
             *     reply_counts: int
             *         質問の返信数
             * @returns Successful Response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_76nv1w['get']['resBody'], BasicHeaders, Methods_76nv1w['get']['status']>(prefix, `${prefix1}${PATH8}`, GET, option).json(),
            /**
             * コースの質問一覧
             *
             * Parameter
             * -----------------------
             * course_id: int
             *     質問一覧を取得したいコースのID
             *
             * Returns
             * -----------------------
             * questions: array
             *     question_id: int
             *         質問のID
             *     user: dict
             *         user_id: int
             *             質問を投稿したユーザーのID
             *         name: str
             *             質問を投稿したユーザーの名前
             *     title: str
             *         質問のタイトル
             *     content: str
             *         質問の内容
             *     curriculum_id: int
             *         カリキュラムのID
             *     created_at: str
             *         質問作成日（ISO 8601形式）
             *     is_read: bool
             *         未読コメントの有無
             *     is_closed: bool
             *         完了しているかどうか
             *     reply_counts: int
             *         質問の返信数
             * @returns Successful Response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_76nv1w['get']['resBody'], BasicHeaders, Methods_76nv1w['get']['status']>(prefix, `${prefix1}${PATH8}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH8}`,
          },
          reviews: {
            /**
             * レビュー投稿
             *
             * Parameter
             * -----------------------
             * course_id: int
             *     レビューを取得したいコースのID
             * dict
             *     curriculum_id: int
             *         レビューが紐づくカリキュラムのID
             *     user_id: int
             *         ユーザーのID
             *     title: str
             *         レビューリクエストのタイトル
             *     content: str
             *         レビューリクエストの内容
             *     media_content: dict
             *         関連するメディアコンテンツの情報
             *         url: str
             *             メディアコンテンツのURL
             *
             * Returns
             * -----------------------
             * dict
             *     id: int
             *         レビューリクエストのID
             *     curriculum_id: int
             *         カリキュラムのID
             *     user: dict
             *         user_id: int
             *             レビューを投稿したユーザーのID
             *         name: str
             *             レビューを投稿したユーザーの名前
             *     title: str
             *         レビューリクエストのタイトル
             *     content: str
             *         レビューリクエストの内容
             *     media_content: array
             *         関連するメディアコンテンツの情報
             *         url: str
             *             メディアコンテンツのURL
             *     created_at: str
             *         レビューが作成された日時（ISO 8601形式）
             *     is_read: bool
             *         未読コメントの有無
             *     is_closed: bool
             *         レビューリクエストがクローズされているかどうか
             *     reply_counts: int
             *         質問の返信数
             * @returns Successful Response
             */
            post: (option: { body: Methods_10pnr6o['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_10pnr6o['post']['resBody'], BasicHeaders, Methods_10pnr6o['post']['status']>(prefix, `${prefix1}${PATH9}`, POST, option).json(),
            /**
             * レビュー投稿
             *
             * Parameter
             * -----------------------
             * course_id: int
             *     レビューを取得したいコースのID
             * dict
             *     curriculum_id: int
             *         レビューが紐づくカリキュラムのID
             *     user_id: int
             *         ユーザーのID
             *     title: str
             *         レビューリクエストのタイトル
             *     content: str
             *         レビューリクエストの内容
             *     media_content: dict
             *         関連するメディアコンテンツの情報
             *         url: str
             *             メディアコンテンツのURL
             *
             * Returns
             * -----------------------
             * dict
             *     id: int
             *         レビューリクエストのID
             *     curriculum_id: int
             *         カリキュラムのID
             *     user: dict
             *         user_id: int
             *             レビューを投稿したユーザーのID
             *         name: str
             *             レビューを投稿したユーザーの名前
             *     title: str
             *         レビューリクエストのタイトル
             *     content: str
             *         レビューリクエストの内容
             *     media_content: array
             *         関連するメディアコンテンツの情報
             *         url: str
             *             メディアコンテンツのURL
             *     created_at: str
             *         レビューが作成された日時（ISO 8601形式）
             *     is_read: bool
             *         未読コメントの有無
             *     is_closed: bool
             *         レビューリクエストがクローズされているかどうか
             *     reply_counts: int
             *         質問の返信数
             * @returns Successful Response
             */
            $post: (option: { body: Methods_10pnr6o['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_10pnr6o['post']['resBody'], BasicHeaders, Methods_10pnr6o['post']['status']>(prefix, `${prefix1}${PATH9}`, POST, option).json().then(r => r.body),
            /**
             * コースのレビュー一覧
             *
             * Parameter
             * -----------------------
             * course_id: int
             *     レビュー一覧を取得したいコースのID
             *
             * Returns
             * -----------------------
             * reviews: array
             *     id: int
             *         レビューリクエストのID
             *     user: dict
             *         user_id: int
             *             レビューを投稿したユーザーのID
             *         name: str
             *             レビューを投稿したユーザーの名前
             *     title: str
             *         レビューリクエストのタイトル
             *     content: str
             *         レビューリクエストの内容
             *     curriculum_id: int
             *         関連するカリキュラムのID
             *     created_at: str
             *         レビューリクエストが作成された日時（ISO 8601形式）
             *     is_read: bool
             *         未読コメントの有無
             *     is_closed: bool
             *         レビューリクエストがクローズされているかどうか
             *     reply_counts: int
             *         レビューの返信数
             * @returns Successful Response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_10pnr6o['get']['resBody'], BasicHeaders, Methods_10pnr6o['get']['status']>(prefix, `${prefix1}${PATH9}`, GET, option).json(),
            /**
             * コースのレビュー一覧
             *
             * Parameter
             * -----------------------
             * course_id: int
             *     レビュー一覧を取得したいコースのID
             *
             * Returns
             * -----------------------
             * reviews: array
             *     id: int
             *         レビューリクエストのID
             *     user: dict
             *         user_id: int
             *             レビューを投稿したユーザーのID
             *         name: str
             *             レビューを投稿したユーザーの名前
             *     title: str
             *         レビューリクエストのタイトル
             *     content: str
             *         レビューリクエストの内容
             *     curriculum_id: int
             *         関連するカリキュラムのID
             *     created_at: str
             *         レビューリクエストが作成された日時（ISO 8601形式）
             *     is_read: bool
             *         未読コメントの有無
             *     is_closed: bool
             *         レビューリクエストがクローズされているかどうか
             *     reply_counts: int
             *         レビューの返信数
             * @returns Successful Response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_10pnr6o['get']['resBody'], BasicHeaders, Methods_10pnr6o['get']['status']>(prefix, `${prefix1}${PATH9}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH9}`,
          },
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
           *     thumbnail_url: str
           *         コースのサムネイル画像のURL
           *     expectesd_end_hours: int
           *         コースの終了想定時間
           *     total_curriculums: int
           *         カリキュラム総数
           *     tech_category: str
           *         技術カテゴリ
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
           *         duration: str
           *             セクションの時間（HH:MM:SS形式）
           *         curriculums: array
           *             セクションに紐づくカリキュラムの一覧
           *             curriculum_id: int
           *                 カリキュラムのID
           *             title: str
           *                 カリキュラムのタイトル
           *             description: str
           *                 カリキュラムの説明
           *             duration: str
           *                 セクションの時間（HH:MM:SS形式）
           *             is_completed: bool
           *                 カリキュラム完了状況
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
           *     thumbnail_url: str
           *         コースのサムネイル画像のURL
           *     expectesd_end_hours: int
           *         コースの終了想定時間
           *     total_curriculums: int
           *         カリキュラム総数
           *     tech_category: str
           *         技術カテゴリ
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
           *         duration: str
           *             セクションの時間（HH:MM:SS形式）
           *         curriculums: array
           *             セクションに紐づくカリキュラムの一覧
           *             curriculum_id: int
           *                 カリキュラムのID
           *             title: str
           *                 カリキュラムのタイトル
           *             description: str
           *                 カリキュラムの説明
           *             duration: str
           *                 セクションの時間（HH:MM:SS形式）
           *             is_completed: bool
           *                 カリキュラム完了状況
           * @returns Successful Response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_poio86['get']['resBody'], BasicHeaders, Methods_poio86['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH0}`,
        };
      },
      start: {
        /**
         * コース開始
         *
         * Parameter
         * -----------------------
         * user_id: int
         *     コースを開始するユーザーのID
         * course_ids: array[int]
         *     開始するコースのIDリスト
         *
         * Returns
         * -----------------------
         * courses: array
         *     course_id: int
         *         開始したコースのID
         *     started_at: str
         *         コースの開始日（ISO 8601形式）
         * @returns Successful Response
         */
        post: (option: { body: Methods_1jtgkuj['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1jtgkuj['post']['resBody'], BasicHeaders, Methods_1jtgkuj['post']['status']>(prefix, PATH10, POST, option).json(),
        /**
         * コース開始
         *
         * Parameter
         * -----------------------
         * user_id: int
         *     コースを開始するユーザーのID
         * course_ids: array[int]
         *     開始するコースのIDリスト
         *
         * Returns
         * -----------------------
         * courses: array
         *     course_id: int
         *         開始したコースのID
         *     started_at: str
         *         コースの開始日（ISO 8601形式）
         * @returns Successful Response
         */
        $post: (option: { body: Methods_1jtgkuj['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1jtgkuj['post']['resBody'], BasicHeaders, Methods_1jtgkuj['post']['status']>(prefix, PATH10, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH10}`,
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
       *     expectesd_end_hours: int
       *         コースの終了想定時間
       *     total_curriculums: int
       *         カリキュラム総数
       *     tech_category: str
       *         技術カテゴリ
       *     created_at: str
       *         コースの作成日時（ISO 8601形式）
       * @returns Successful Response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_13yxxb0['get']['resBody'], BasicHeaders, Methods_13yxxb0['get']['status']>(prefix, PATH7, GET, option).json(),
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
       *     expectesd_end_hours: int
       *         コースの終了想定時間
       *     total_curriculums: int
       *         カリキュラム総数
       *     tech_category: str
       *         技術カテゴリ
       *     created_at: str
       *         コースの作成日時（ISO 8601形式）
       * @returns Successful Response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_13yxxb0['get']['resBody'], BasicHeaders, Methods_13yxxb0['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH7}`,
    },
    curriculums: {
      _curriculum_id: (val1: number) => {
        const prefix1 = `${PATH11}${val1}`;

        return {
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
           *     is_quiz: boolean
           *         このカリキュラムがテストかどうかを示すフラグ（boolean）
           *     quiz_content: array
           *         quiz_id: int
           *             テストのID
           *         question: str
           *             問題文
           *         media_content: str
           *             メディアコンテンツのURL
           *         options: array
           *             選択肢
           *         correct_answer: int
           *             正しい回答
           *         explanation: str
           *             正解にする説明
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
           *     is_quiz: boolean
           *         このカリキュラムがテストかどうかを示すフラグ（boolean）
           *     quiz_content: array
           *         quiz_id: int
           *             テストのID
           *         question: str
           *             問題文
           *         media_content: str
           *             メディアコンテンツのURL
           *         options: array
           *             選択肢
           *         correct_answer: int
           *             正しい回答
           *         explanation: str
           *             正解にする説明
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
    hogechat: {
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_1n8it4t['get']['status']>(prefix, PATH12, GET, option).send(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_1n8it4t['get']['status']>(prefix, PATH12, GET, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH12}`,
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
        fetch<Methods_idk8rz['post']['resBody'], BasicHeaders, Methods_idk8rz['post']['status']>(prefix, PATH13, POST, option).json(),
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
        fetch<Methods_idk8rz['post']['resBody'], BasicHeaders, Methods_idk8rz['post']['status']>(prefix, PATH13, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH13}`,
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
        fetch<void, BasicHeaders, Methods_1rpsris['post']['status']>(prefix, PATH14, POST, option).send(),
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
        fetch<void, BasicHeaders, Methods_1rpsris['post']['status']>(prefix, PATH14, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH14}`,
    },
    mentors: {
      _mentor_id: (val1: number) => {
        const prefix1 = `${PATH15}${val1}`;

        return {
          notifications: {
            /**
             * 通知一覧（メンター）
             *
             * Parameters
             * -----------------------
             * mentor_id:int
             *     ユーザーのID
             * Returns
             * -----------------------
             * notifications: array
             *     id: int
             *         通知のID
             *     from_user: dict
             *         id: int
             *             通知を送ったユーザーのID
             *         name: str
             *             通知を送ったユーザーの名前
             *     question_id: int
             *         質問のID
             *     answer_id: int
             *         回答のID
             *     review_request_id: int
             *         レビューリクエストのID
             *     review_respomse_id: int
             *         レビューリスポンスのID
             *     title: str
             *         通知のタイトル
             *     content: str
             *         通知の内容
             *     is_read: bool
             *         通知が既読かどうか
             *     created_at: str
             *         通知が生成された日時（ISO 8601形式）
             *
             * explanation
             * -----------------------
             * メンターが受け取る通知は受講生の質問・回答・レビュー依頼・レビュー回答
             * @returns Successful Response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1hb0s9x['get']['resBody'], BasicHeaders, Methods_1hb0s9x['get']['status']>(prefix, `${prefix1}${PATH16}`, GET, option).json(),
            /**
             * 通知一覧（メンター）
             *
             * Parameters
             * -----------------------
             * mentor_id:int
             *     ユーザーのID
             * Returns
             * -----------------------
             * notifications: array
             *     id: int
             *         通知のID
             *     from_user: dict
             *         id: int
             *             通知を送ったユーザーのID
             *         name: str
             *             通知を送ったユーザーの名前
             *     question_id: int
             *         質問のID
             *     answer_id: int
             *         回答のID
             *     review_request_id: int
             *         レビューリクエストのID
             *     review_respomse_id: int
             *         レビューリスポンスのID
             *     title: str
             *         通知のタイトル
             *     content: str
             *         通知の内容
             *     is_read: bool
             *         通知が既読かどうか
             *     created_at: str
             *         通知が生成された日時（ISO 8601形式）
             *
             * explanation
             * -----------------------
             * メンターが受け取る通知は受講生の質問・回答・レビュー依頼・レビュー回答
             * @returns Successful Response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1hb0s9x['get']['resBody'], BasicHeaders, Methods_1hb0s9x['get']['status']>(prefix, `${prefix1}${PATH16}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH16}`,
          },
          progresses: {
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
             * @returns Successful Response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_w2iay8['get']['resBody'], BasicHeaders, Methods_w2iay8['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json(),
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
             * @returns Successful Response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_w2iay8['get']['resBody'], BasicHeaders, Methods_w2iay8['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH4}`,
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
               *     objective: str
               *         学習内容で実践したいこと
               *     current_situation: str
               *         現状
               *     research: str
               *         自分が調べたこと
               *     content: str
               *         質問の内容
               *     curriculum_id: str
               *         質問が紐づくカリキュラムのID
               *     tech_category: str
               *         カリキュラムのコースに紐づいた技術カテゴリ
               *     created_at: str
               *         質問作成日
               *     is_read: str
               *         未読コメントの有無
               *     is_closed: str
               *         完了しているかどうか
               * @returns Successful Response
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_7zqsp5['get']['resBody'], BasicHeaders, Methods_7zqsp5['get']['status']>(prefix, `${prefix1}${PATH17}`, GET, option).json(),
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
               *     objective: str
               *         学習内容で実践したいこと
               *     current_situation: str
               *         現状
               *     research: str
               *         自分が調べたこと
               *     content: str
               *         質問の内容
               *     curriculum_id: str
               *         質問が紐づくカリキュラムのID
               *     tech_category: str
               *         カリキュラムのコースに紐づいた技術カテゴリ
               *     created_at: str
               *         質問作成日
               *     is_read: str
               *         未読コメントの有無
               *     is_closed: str
               *         完了しているかどうか
               * @returns Successful Response
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_7zqsp5['get']['resBody'], BasicHeaders, Methods_7zqsp5['get']['status']>(prefix, `${prefix1}${PATH17}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix1}${PATH17}`,
            },
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
               *     tech_category: str
               *         カリキュラムのコースに紐づいた技術カテゴリ
               *     created_at:str
               *         レビューの作成日（ISO 8601形式）
               *     is_read: bool
               *         未読コメントの有無
               *     is_closed: bool
               *         完了しているかどうか
               * @returns Successful Response
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_1fsn4zt['get']['resBody'], BasicHeaders, Methods_1fsn4zt['get']['status']>(prefix, `${prefix1}${PATH18}`, GET, option).json(),
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
               *     tech_category: str
               *         カリキュラムのコースに紐づいた技術カテゴリ
               *     created_at:str
               *         レビューの作成日（ISO 8601形式）
               *     is_read: bool
               *         未読コメントの有無
               *     is_closed: bool
               *         完了しているかどうか
               * @returns Successful Response
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_1fsn4zt['get']['resBody'], BasicHeaders, Methods_1fsn4zt['get']['status']>(prefix, `${prefix1}${PATH18}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix1}${PATH18}`,
            },
          },
        };
      },
      counts: {
        /**
         * メンター担当受講生数取得
         *
         * Parameter
         * -----------------------
         * なし
         *
         * Returns
         * -----------------------
         * mentors: array
         *     mentor_id: int
         *         メンターの一意識別子
         *     mentor_name: str
         *         メンターの名前
         *     student_content: str
         *         そのメンターが担当する受講生の数
         * @returns Successful Response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1osy0o9['get']['resBody'], BasicHeaders, Methods_1osy0o9['get']['status']>(prefix, PATH19, GET, option).json(),
        /**
         * メンター担当受講生数取得
         *
         * Parameter
         * -----------------------
         * なし
         *
         * Returns
         * -----------------------
         * mentors: array
         *     mentor_id: int
         *         メンターの一意識別子
         *     mentor_name: str
         *         メンターの名前
         *     student_content: str
         *         そのメンターが担当する受講生の数
         * @returns Successful Response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1osy0o9['get']['resBody'], BasicHeaders, Methods_1osy0o9['get']['status']>(prefix, PATH19, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH19}`,
      },
    },
    news: {
      _news_id: (val1: number) => {
        const prefix1 = `${PATH20}${val1}`;

        return {
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
           *     categoey_id: int
           *         カテゴリのID
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
           *     category: array
           *         category_id: int
           *             カテゴリのID
           *         category_name: str
           *             カテゴリの名前
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
           *     categoey_id: int
           *         カテゴリのID
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
           *     category: array
           *         category_id: int
           *             カテゴリのID
           *         category_name: str
           *             カテゴリの名前
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
      categories: {
        _category_id: (val2: number) => {
          const prefix2 = `${PATH21}${val2}`;

          return {
            /**
             * ニュースカテゴリー更新
             * Parameters
             * -----------------------
             * category_id: int
             *     更新するカテゴリのID
             * dict
             *     name: str
             *         更新後のカテゴリ名
             * Returns
             * -----------------------
             * message: str
             *     メッセージ
             * category: array
             *     id: int
             *         カテゴリの一意識別子
             *     name: str
             *         カテゴリの名前
             *     created_at: str
             *         カテゴリの作成日
             *     updated_at: str
             *         カテゴリの更新日
             * @returns Successful Response
             */
            patch: (option: { body: Methods_ovggmd['patch']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_ovggmd['patch']['resBody'], BasicHeaders, Methods_ovggmd['patch']['status']>(prefix, `${prefix2}${PATH0}`, PATCH, option).json(),
            /**
             * ニュースカテゴリー更新
             * Parameters
             * -----------------------
             * category_id: int
             *     更新するカテゴリのID
             * dict
             *     name: str
             *         更新後のカテゴリ名
             * Returns
             * -----------------------
             * message: str
             *     メッセージ
             * category: array
             *     id: int
             *         カテゴリの一意識別子
             *     name: str
             *         カテゴリの名前
             *     created_at: str
             *         カテゴリの作成日
             *     updated_at: str
             *         カテゴリの更新日
             * @returns Successful Response
             */
            $patch: (option: { body: Methods_ovggmd['patch']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_ovggmd['patch']['resBody'], BasicHeaders, Methods_ovggmd['patch']['status']>(prefix, `${prefix2}${PATH0}`, PATCH, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}${PATH0}`,
          };
        },
        /**
         * ニュースカテゴリ一覧取得
         *
         * Parameters
         * -----------------------
         * なし
         *
         * Returns
         * -----------------------
         * categories: array
         *     id: int
         *         カテゴリの一意識別子
         *     name: str
         *         カテゴリの名前
         *     created_at: str
         *         カテゴリが作成された日時（ISO 8601形式）
         *     updated_at: str
         *         カテゴリが最後に更新された日時（ISO 8601形式）
         * @returns Successful Response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1uxbl4e['get']['resBody'], BasicHeaders, Methods_1uxbl4e['get']['status']>(prefix, PATH21, GET, option).json(),
        /**
         * ニュースカテゴリ一覧取得
         *
         * Parameters
         * -----------------------
         * なし
         *
         * Returns
         * -----------------------
         * categories: array
         *     id: int
         *         カテゴリの一意識別子
         *     name: str
         *         カテゴリの名前
         *     created_at: str
         *         カテゴリが作成された日時（ISO 8601形式）
         *     updated_at: str
         *         カテゴリが最後に更新された日時（ISO 8601形式）
         * @returns Successful Response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1uxbl4e['get']['resBody'], BasicHeaders, Methods_1uxbl4e['get']['status']>(prefix, PATH21, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH21}`,
      },
      published: {
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
         *     category: dict
         *         category_id: int
         *             カテゴリのID
         *         category_name: str
         *             カテゴリの名前
         *     published_at: str
         *         ニュースの公開日（ISO 8601形式）
         * @returns Successful Response
         */
        get: (option: { query: Methods_19fpiw4['get']['query'], config?: T | undefined }) =>
          fetch<Methods_19fpiw4['get']['resBody'], BasicHeaders, Methods_19fpiw4['get']['status']>(prefix, PATH22, GET, option).json(),
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
         *     category: dict
         *         category_id: int
         *             カテゴリのID
         *         category_name: str
         *             カテゴリの名前
         *     published_at: str
         *         ニュースの公開日（ISO 8601形式）
         * @returns Successful Response
         */
        $get: (option: { query: Methods_19fpiw4['get']['query'], config?: T | undefined }) =>
          fetch<Methods_19fpiw4['get']['resBody'], BasicHeaders, Methods_19fpiw4['get']['status']>(prefix, PATH22, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_19fpiw4['get']['query'] } | undefined) =>
          `${prefix}${PATH22}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * ニュース一覧(管理者)取得
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
       *         取得したニュースのID
       *     title: str
       *         ニュースのタイトル
       *     category: array
       *         categoey_id: int
       *             カテゴリのID
       *         category_name: str
       *             カテゴリのID
       *     published_at: str
       *         ニュースの公開日（ISO 8601形式）
       *     is_published: bool
       *         ニュース公開状態
       * @returns Successful Response
       */
      get: (option: { query: Methods_t9xdat['get']['query'], config?: T | undefined }) =>
        fetch<Methods_t9xdat['get']['resBody'], BasicHeaders, Methods_t9xdat['get']['status']>(prefix, PATH20, GET, option).json(),
      /**
       * ニュース一覧(管理者)取得
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
       *         取得したニュースのID
       *     title: str
       *         ニュースのタイトル
       *     category: array
       *         categoey_id: int
       *             カテゴリのID
       *         category_name: str
       *             カテゴリのID
       *     published_at: str
       *         ニュースの公開日（ISO 8601形式）
       *     is_published: bool
       *         ニュース公開状態
       * @returns Successful Response
       */
      $get: (option: { query: Methods_t9xdat['get']['query'], config?: T | undefined }) =>
        fetch<Methods_t9xdat['get']['resBody'], BasicHeaders, Methods_t9xdat['get']['status']>(prefix, PATH20, GET, option).json().then(r => r.body),
      /**
       * ニュース作成
       * Parameters
       * -----------------------
       * dict
       *     title: str
       *         作成するニュースのタイトル
       *     content: str
       *         作成するニュースの本文
       *     category_id: int
       *         カテゴリのID
       *     published_at: str
       *         公開日（ISO 8601形式）
       *
       * Returns
       * -----------------------
       * dict
       *     news_id: int
       *         ニュースのID
       *     title: str
       *         ニュースのタイトル
       *     content: str
       *         ニュースの本文
       *     category: array
       *         category_id: int
       *             カテゴリのID
       *         category_name: str
       *             カテゴリの名前
       *     is_published: bool
       *         ニュース公開状態
       *     published_at: str
       *         ニュースの公開日（ISO 8601形式）
       *     created_at: str
       *         ニュースの作成日（ISO 8601形式）
       * @returns Successful Response
       */
      post: (option: { body: Methods_t9xdat['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_t9xdat['post']['resBody'], BasicHeaders, Methods_t9xdat['post']['status']>(prefix, PATH20, POST, option).json(),
      /**
       * ニュース作成
       * Parameters
       * -----------------------
       * dict
       *     title: str
       *         作成するニュースのタイトル
       *     content: str
       *         作成するニュースの本文
       *     category_id: int
       *         カテゴリのID
       *     published_at: str
       *         公開日（ISO 8601形式）
       *
       * Returns
       * -----------------------
       * dict
       *     news_id: int
       *         ニュースのID
       *     title: str
       *         ニュースのタイトル
       *     content: str
       *         ニュースの本文
       *     category: array
       *         category_id: int
       *             カテゴリのID
       *         category_name: str
       *             カテゴリの名前
       *     is_published: bool
       *         ニュース公開状態
       *     published_at: str
       *         ニュースの公開日（ISO 8601形式）
       *     created_at: str
       *         ニュースの作成日（ISO 8601形式）
       * @returns Successful Response
       */
      $post: (option: { body: Methods_t9xdat['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_t9xdat['post']['resBody'], BasicHeaders, Methods_t9xdat['post']['status']>(prefix, PATH20, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_t9xdat['get']['query'] } | undefined) =>
        `${prefix}${PATH20}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    notifications: {
      _notification_id: (val1: number) => {
        const prefix1 = `${PATH16}${val1}`;

        return {
          mark_read: {
            /**
             * 通知内容を既読に更新
             *
             * Parameters
             * -----------------------
             * notification_id: int
             *     既読にする通知のID
             *
             * -----------------------
             * mesasge: str
             *     操作成功のメッセージ(固定値:Notification marked as read successfully.)
             * notification_id: int
             *     既読にした通知のID
             * @returns Successful Response
             */
            patch: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_wemohn['patch']['resBody'], BasicHeaders, Methods_wemohn['patch']['status']>(prefix, `${prefix1}${PATH23}`, PATCH, option).json(),
            /**
             * 通知内容を既読に更新
             *
             * Parameters
             * -----------------------
             * notification_id: int
             *     既読にする通知のID
             *
             * -----------------------
             * mesasge: str
             *     操作成功のメッセージ(固定値:Notification marked as read successfully.)
             * notification_id: int
             *     既読にした通知のID
             * @returns Successful Response
             */
            $patch: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_wemohn['patch']['resBody'], BasicHeaders, Methods_wemohn['patch']['status']>(prefix, `${prefix1}${PATH23}`, PATCH, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH23}`,
          },
        };
      },
      /**
       * 通知一覧(管理者)
       *
       * Parameters
       * -----------------------
       * なし
       *
       * -----------------------
       * dict: array
       *     id: int
       *         通知のID
       *     from_user: dict
       *         id: int
       *             ユーザーのID
       *         name: str
       *             ユーザーの名前
       *     question_id: int
       *         質問のID
       *     answer_id: int
       *         回答のID
       *     related_review_request_id: int
       *         レビューリクエストのID
       *     related_review_response_id: int
       *         レビューレスポンスのID
       *     title: str
       *         通知のタイトル
       *     content: str
       *         通知の内容
       *     is_read: bool
       *         通知が既読かどうか
       *     created_at: str
       *         通知が生成された日時（ISO 8601形式）
       *
       * explanation
       * -----------------------
       * メンターは全ての通知を取得
       * @returns Successful Response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_sr2fny['get']['resBody'], BasicHeaders, Methods_sr2fny['get']['status']>(prefix, PATH16, GET, option).json(),
      /**
       * 通知一覧(管理者)
       *
       * Parameters
       * -----------------------
       * なし
       *
       * -----------------------
       * dict: array
       *     id: int
       *         通知のID
       *     from_user: dict
       *         id: int
       *             ユーザーのID
       *         name: str
       *             ユーザーの名前
       *     question_id: int
       *         質問のID
       *     answer_id: int
       *         回答のID
       *     related_review_request_id: int
       *         レビューリクエストのID
       *     related_review_response_id: int
       *         レビューレスポンスのID
       *     title: str
       *         通知のタイトル
       *     content: str
       *         通知の内容
       *     is_read: bool
       *         通知が既読かどうか
       *     created_at: str
       *         通知が生成された日時（ISO 8601形式）
       *
       * explanation
       * -----------------------
       * メンターは全ての通知を取得
       * @returns Successful Response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_sr2fny['get']['resBody'], BasicHeaders, Methods_sr2fny['get']['status']>(prefix, PATH16, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH16}`,
    },
    password_reset: {
      confirm: {
        post: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_vesziw['post']['status']>(prefix, PATH25, POST, option).send(),
        $post: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_vesziw['post']['status']>(prefix, PATH25, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH25}`,
      },
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_oji007['post']['status']>(prefix, PATH24, POST, option).send(),
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_oji007['post']['status']>(prefix, PATH24, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH24}`,
    },
    progresses: {
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
       * @returns Successful Response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1h2e7pl['get']['resBody'], BasicHeaders, Methods_1h2e7pl['get']['status']>(prefix, PATH4, GET, option).json(),
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
       * @returns Successful Response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1h2e7pl['get']['resBody'], BasicHeaders, Methods_1h2e7pl['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH4}`,
    },
    questions: {
      _question_id: (val1: number) => {
        const prefix1 = `${PATH8}${val1}`;

        return {
          answers: {
            /**
             * 質問回答投稿作成
             *
             * Parameters
             * -----------------------
             * dict
             *     user_id: int
             *         回答するユーザーのID
             *     parent_answer_id: int
             *         返信先の回答ID
             *     content: str
             *         回答
             *     media_content: json
             *         関連するメディアコンテンツの情報
             *
             * Returns
             * -----------------------
             * dict
             *     answer_id: int
             *         作成された回答のID
             *     question_id: int
             *         回答に紐づく質問のID
             *     parent_answer_id: int
             *         返信先の回答ID
             *     user: dict
             *         user_id: int
             *             回答したユーザーのID
             *         name: str
             *             回答したユーザーの名前
             *     content: str
             *         回答
             *     media_content: json
             *         関連するメディアコンテンツの情報
             *         url: str
             *             メディアコンテンツのURL
             *     created_at: str
             *         回答が作成された日時（ISO8601形式）
             * @returns Successful Response
             */
            post: (option: { body: Methods_tnd0ic['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_tnd0ic['post']['resBody'], BasicHeaders, Methods_tnd0ic['post']['status']>(prefix, `${prefix1}${PATH26}`, POST, option).json(),
            /**
             * 質問回答投稿作成
             *
             * Parameters
             * -----------------------
             * dict
             *     user_id: int
             *         回答するユーザーのID
             *     parent_answer_id: int
             *         返信先の回答ID
             *     content: str
             *         回答
             *     media_content: json
             *         関連するメディアコンテンツの情報
             *
             * Returns
             * -----------------------
             * dict
             *     answer_id: int
             *         作成された回答のID
             *     question_id: int
             *         回答に紐づく質問のID
             *     parent_answer_id: int
             *         返信先の回答ID
             *     user: dict
             *         user_id: int
             *             回答したユーザーのID
             *         name: str
             *             回答したユーザーの名前
             *     content: str
             *         回答
             *     media_content: json
             *         関連するメディアコンテンツの情報
             *         url: str
             *             メディアコンテンツのURL
             *     created_at: str
             *         回答が作成された日時（ISO8601形式）
             * @returns Successful Response
             */
            $post: (option: { body: Methods_tnd0ic['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_tnd0ic['post']['resBody'], BasicHeaders, Methods_tnd0ic['post']['status']>(prefix, `${prefix1}${PATH26}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH26}`,
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
           *         user: dict
           *             user_id: int
           *                 質問を投稿したユーザーのID
           *             name: str
           *                 質問を投稿したユーザーの名前
           *         title: int
           *             質問のタイトル
           *         objective: str
           *             学習内容で実践したこと
           *         current_situation: str
           *             現状
           *         research: str
           *             自分で調べたこと
           *         content: str
           *             質問の内容
           *         media_content: json
           *             質問に関するメディアコンテンツの情報
           *             url: str
           *                 メディアコンテンツのURL
           *         is_closed: bool
           *             質問がクローズされているか
           *         created_at: str
           *             作成日（ISO 8601形式）
           *     answer: array
           *         id: int
           *             回答のID
           *         question_id: int
           *             回答が紐づく質問のID
           *         user: dict
           *             user_id: int
           *                 回答を投稿したユーザーのID
           *             name: str
           *                 回答を投稿したユーザーの名前               
           *         parent_answer_id: int or None
           *             返信先の回答ID（返信先がない場合はNoneが返る）
           *         content: str
           *             回答の内容
           *         media_content: json
           *             回答に関するメディアコンテンツの情報
           *             url: str
           *                 メディアコンテンツのURL
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
           *         user: dict
           *             user_id: int
           *                 質問を投稿したユーザーのID
           *             name: str
           *                 質問を投稿したユーザーの名前
           *         title: int
           *             質問のタイトル
           *         objective: str
           *             学習内容で実践したこと
           *         current_situation: str
           *             現状
           *         research: str
           *             自分で調べたこと
           *         content: str
           *             質問の内容
           *         media_content: json
           *             質問に関するメディアコンテンツの情報
           *             url: str
           *                 メディアコンテンツのURL
           *         is_closed: bool
           *             質問がクローズされているか
           *         created_at: str
           *             作成日（ISO 8601形式）
           *     answer: array
           *         id: int
           *             回答のID
           *         question_id: int
           *             回答が紐づく質問のID
           *         user: dict
           *             user_id: int
           *                 回答を投稿したユーザーのID
           *             name: str
           *                 回答を投稿したユーザーの名前               
           *         parent_answer_id: int or None
           *             返信先の回答ID（返信先がない場合はNoneが返る）
           *         content: str
           *             回答の内容
           *         media_content: json
           *             回答に関するメディアコンテンツの情報
           *             url: str
           *                 メディアコンテンツのURL
           *         created_at: str
           *             作成日（ISO 8601形式）
           * @returns Successful Response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_csvpx4['get']['resBody'], BasicHeaders, Methods_csvpx4['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json().then(r => r.body),
          /**
           * 質問編集
           *
           * Parameter
           * -----------------------
           * question_id: int
           *     更新したい質問のID
           * title: str
           *     更新された質問のタイトル
           * content: str
           *     更新したい質問の内容
           * media_content: json
           *     更新したい質問に関連するメディアコンテンツの情報
           * is_closed: bool
           *     完了しているかどうかを表すフラグ
           *
           * Returns
           * -----------------------
           * dict
           *     id: int
           *         更新された質問のID
           *     curriculum_id: int
           *         回答が紐づくカリキュラムのID
           *     user_id: int
           *         回答を投稿したユーザーのID
           *     title: str
           *         更新された質問のタイトル
           *     content: str
           *         更新された質問の内容
           *     media_content: Optional[json]
           *         更新されたメディアコンテンツの情報
           *     is_closed: bool
           *         質問が完了しているかどうかを示すフラグ（boolean）
           *     updated_at: str
           *         質問が最後に更新された日時（ISO 8601形式）
           * @returns Successful Response
           */
          patch: (option: { body: Methods_csvpx4['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_csvpx4['patch']['resBody'], BasicHeaders, Methods_csvpx4['patch']['status']>(prefix, `${prefix1}${PATH0}`, PATCH, option).json(),
          /**
           * 質問編集
           *
           * Parameter
           * -----------------------
           * question_id: int
           *     更新したい質問のID
           * title: str
           *     更新された質問のタイトル
           * content: str
           *     更新したい質問の内容
           * media_content: json
           *     更新したい質問に関連するメディアコンテンツの情報
           * is_closed: bool
           *     完了しているかどうかを表すフラグ
           *
           * Returns
           * -----------------------
           * dict
           *     id: int
           *         更新された質問のID
           *     curriculum_id: int
           *         回答が紐づくカリキュラムのID
           *     user_id: int
           *         回答を投稿したユーザーのID
           *     title: str
           *         更新された質問のタイトル
           *     content: str
           *         更新された質問の内容
           *     media_content: Optional[json]
           *         更新されたメディアコンテンツの情報
           *     is_closed: bool
           *         質問が完了しているかどうかを示すフラグ（boolean）
           *     updated_at: str
           *         質問が最後に更新された日時（ISO 8601形式）
           * @returns Successful Response
           */
          $patch: (option: { body: Methods_csvpx4['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_csvpx4['patch']['resBody'], BasicHeaders, Methods_csvpx4['patch']['status']>(prefix, `${prefix1}${PATH0}`, PATCH, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH0}`,
        };
      },
      answers: {
        _answer_id: (val2: number) => {
          const prefix2 = `${PATH27}${val2}`;

          return {
            /**
             * 質問回答更新（受講生、メンター）
             *
             * Parameter
             * -----------------------
             * answer_id: int
             *     更新したい回答のID
             * content: str
             *     更新したい回答の内容
             * media_content: json
             *     更新したい回答に関連するメディアコンテンツの情報
             * is_read: bool
             *     回答か既読かを表すフラグ
             *
             * Returns
             * -----------------------
             * dict
             *     id: int
             *         更新された回答のID
             *     question_id: int
             *         回答が紐づく質問のID
             *     user_id: int
             *         回答を投稿したユーザーのID
             *     parent_answer_id: Optional[int]
             *         返信先の回答ID
             *     content: str
             *         更新された回答の内容
             *     media_content: Optional[json]
             *         更新されたメディアコンテンツの情報
             *     is_read: bool
             *         回答が既読かどうかを示すフラグ（boolean）
             *     updated_at: str
             *         回答が最後に更新された日時（ISO 8601形式）
             * @returns Successful Response
             */
            patch: (option: { body: Methods_s3ej2m['patch']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_s3ej2m['patch']['resBody'], BasicHeaders, Methods_s3ej2m['patch']['status']>(prefix, `${prefix2}${PATH0}`, PATCH, option).json(),
            /**
             * 質問回答更新（受講生、メンター）
             *
             * Parameter
             * -----------------------
             * answer_id: int
             *     更新したい回答のID
             * content: str
             *     更新したい回答の内容
             * media_content: json
             *     更新したい回答に関連するメディアコンテンツの情報
             * is_read: bool
             *     回答か既読かを表すフラグ
             *
             * Returns
             * -----------------------
             * dict
             *     id: int
             *         更新された回答のID
             *     question_id: int
             *         回答が紐づく質問のID
             *     user_id: int
             *         回答を投稿したユーザーのID
             *     parent_answer_id: Optional[int]
             *         返信先の回答ID
             *     content: str
             *         更新された回答の内容
             *     media_content: Optional[json]
             *         更新されたメディアコンテンツの情報
             *     is_read: bool
             *         回答が既読かどうかを示すフラグ（boolean）
             *     updated_at: str
             *         回答が最後に更新された日時（ISO 8601形式）
             * @returns Successful Response
             */
            $patch: (option: { body: Methods_s3ej2m['patch']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_s3ej2m['patch']['resBody'], BasicHeaders, Methods_s3ej2m['patch']['status']>(prefix, `${prefix2}${PATH0}`, PATCH, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}${PATH0}`,
          };
        },
      },
    },
    receipts: {
      _receipt_id: (val1: number) => {
        const prefix1 = `${PATH28}${val1}`;

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
      _review_id: (val1: number) => {
        const prefix1 = `${PATH9}${val1}`;

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
        const prefix1 = `${PATH9}${val1}`;

        return {
          responses: {
            /**
             * レビュー回答作成
             *
             * Parameters
             * -----------------------
             * dict
             *     user_id: int
             *         回答を投稿するユーザーのID
             *     parent_response_id: int
             *         返信先の回答ID
             *     content: str
             *         回答の内容
             *     media_content: json
             *         関連するメディアコンテンツの情報
             *         url: str
             *             メディアコンテンツのURL
             * review_request_id: int
             *     回答を投稿したいレビューリクエストのID
             *
             * Returns
             * -----------------------
             * dict
             *     id: int
             *         新しく作成された回答のID
             *     review_request_id: int
             *         回答が紐づくレビューリクエストのID
             *     user: dict
             *         user_id: int
             *             回答を投稿したユーザーのID
             *         name: str
             *             回答を投稿したユーザーの名前
             *     parent_response_id: int
             *         返信先の回答ID
             *     content: str
             *         回答の内容
             *     media_content: json
             *         関連するメディアコンテンツの情報
             *         url: str
             *             メディアコンテンツのURL
             *     created_at: str
             *         回答が作成された日時（ISO8601形式）
             * @returns Successful Response
             */
            post: (option: { body: Methods_2cu3ed['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_2cu3ed['post']['resBody'], BasicHeaders, Methods_2cu3ed['post']['status']>(prefix, `${prefix1}${PATH29}`, POST, option).json(),
            /**
             * レビュー回答作成
             *
             * Parameters
             * -----------------------
             * dict
             *     user_id: int
             *         回答を投稿するユーザーのID
             *     parent_response_id: int
             *         返信先の回答ID
             *     content: str
             *         回答の内容
             *     media_content: json
             *         関連するメディアコンテンツの情報
             *         url: str
             *             メディアコンテンツのURL
             * review_request_id: int
             *     回答を投稿したいレビューリクエストのID
             *
             * Returns
             * -----------------------
             * dict
             *     id: int
             *         新しく作成された回答のID
             *     review_request_id: int
             *         回答が紐づくレビューリクエストのID
             *     user: dict
             *         user_id: int
             *             回答を投稿したユーザーのID
             *         name: str
             *             回答を投稿したユーザーの名前
             *     parent_response_id: int
             *         返信先の回答ID
             *     content: str
             *         回答の内容
             *     media_content: json
             *         関連するメディアコンテンツの情報
             *         url: str
             *             メディアコンテンツのURL
             *     created_at: str
             *         回答が作成された日時（ISO8601形式）
             * @returns Successful Response
             */
            $post: (option: { body: Methods_2cu3ed['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_2cu3ed['post']['resBody'], BasicHeaders, Methods_2cu3ed['post']['status']>(prefix, `${prefix1}${PATH29}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH29}`,
          },
          /**
           * レビュースレッド詳細
           *
           * Parameter
           * -----------------------
           * review_request_id: int
           *     スレッド詳細を取得したいレビューリクエストのID
           *
           * Returns
           * -----------------------
           * review_request: dict
           *     id: int
           *         レビューリクエストのID
           *     curriculum_id: int
           *         関連するカリキュラムのID
           *     user: dict
           *         user_id: int
           *             レビューリクエストを投稿したユーザーのID
           *         name: str
           *             レビューリクエストを投稿したユーザーの名前
           *     title: str
           *         レビューリクエストのタイトル
           *     content: str
           *         レビューリクエストの内容
           *     media_content: json
           *         レビューに関連するメディアコンテンツの情報
           *         url: str
           *             メディアコンテンツのURL
           *     is_closed: bool
           *         レビューリクエストがクローズされているかどうか
           *     created_at: str
           *         レビューリクエストが作成された日時（ISO8601形式）
           * review_responses: array
           *     id: int
           *         回答のID
           *     review_request_id: int
           *         回答が紐づくレビューリクエストのID
           *     user: dict
           *         user_id: int
           *             回答を投稿したユーザーのID
           *         name: str
           *             回答を投稿したユーザーの名前
           *     parent_response_id: int
           *         返信先の回答ID
           *     content: str
           *         回答の内容
           *     media_content: json
           *         回答に関連するメディアコンテンツの情報
           *         url: str
           *             メディアコンテンツのURL
           *     created_at: str
           *         回答が作成された日時（ISO8601形式）
           * @returns Successful Response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_458k6a['get']['resBody'], BasicHeaders, Methods_458k6a['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json(),
          /**
           * レビュースレッド詳細
           *
           * Parameter
           * -----------------------
           * review_request_id: int
           *     スレッド詳細を取得したいレビューリクエストのID
           *
           * Returns
           * -----------------------
           * review_request: dict
           *     id: int
           *         レビューリクエストのID
           *     curriculum_id: int
           *         関連するカリキュラムのID
           *     user: dict
           *         user_id: int
           *             レビューリクエストを投稿したユーザーのID
           *         name: str
           *             レビューリクエストを投稿したユーザーの名前
           *     title: str
           *         レビューリクエストのタイトル
           *     content: str
           *         レビューリクエストの内容
           *     media_content: json
           *         レビューに関連するメディアコンテンツの情報
           *         url: str
           *             メディアコンテンツのURL
           *     is_closed: bool
           *         レビューリクエストがクローズされているかどうか
           *     created_at: str
           *         レビューリクエストが作成された日時（ISO8601形式）
           * review_responses: array
           *     id: int
           *         回答のID
           *     review_request_id: int
           *         回答が紐づくレビューリクエストのID
           *     user: dict
           *         user_id: int
           *             回答を投稿したユーザーのID
           *         name: str
           *             回答を投稿したユーザーの名前
           *     parent_response_id: int
           *         返信先の回答ID
           *     content: str
           *         回答の内容
           *     media_content: json
           *         回答に関連するメディアコンテンツの情報
           *         url: str
           *             メディアコンテンツのURL
           *     created_at: str
           *         回答が作成された日時（ISO8601形式）
           * @returns Successful Response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_458k6a['get']['resBody'], BasicHeaders, Methods_458k6a['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH0}`,
        };
      },
      responses: {
        _response_id: (val2: number) => {
          const prefix2 = `${PATH30}${val2}`;

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
        fetch<void, BasicHeaders, Methods_wq2jhe['get']['status']>(prefix, PATH31, GET, option).send(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_wq2jhe['get']['status']>(prefix, PATH31, GET, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH31}`,
    },
    samplechat: {
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_1o5yr5y['get']['status']>(prefix, PATH32, GET, option).send(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_1o5yr5y['get']['status']>(prefix, PATH32, GET, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH32}`,
    },
    students: {
      _student_id: (val1: number) => {
        const prefix1 = `${PATH33}${val1}`;

        return {
          assign_mentor: {
            /**
             * 受講生と担当メンターの関連付け
             *
             * Parameters
             * -----------------------
             * student_id: int
             *     メンターを割り当てる受講生のID
             *
             * Returns
             * -----------------------
             * なし
             */
            post: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_9ucswa['post']['status']>(prefix, `${prefix1}${PATH34}`, POST, option).send(),
            /**
             * 受講生と担当メンターの関連付け
             *
             * Parameters
             * -----------------------
             * student_id: int
             *     メンターを割り当てる受講生のID
             *
             * Returns
             * -----------------------
             * なし
             */
            $post: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_9ucswa['post']['status']>(prefix, `${prefix1}${PATH34}`, POST, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH34}`,
          },
          notifications: {
            /**
             * 通知一覧(受講生)
             *
             * Parameters
             * -----------------------
             * student_id: int
             *     ユーザーのID
             *
             * Returns
             * -----------------------
             * notifications: array
             *     id: int
             *         通知のID
             *     from_user: dict
             *         id: int
             *             通知を送ったユーザーのID
             *         name: str
             *             通知を送ったユーザーの名前
             *     question_id: int
             *         関連する質問のID
             *     answer_id: int
             *         関連する回答のID
             *     related_review_request_id: int
             *         レビューリクエストのID
             *     related_review_respomse_id: int
             *         レビューリスポンスのID
             *     title: str
             *         通知のタイトル
             *     content: str
             *         通知の内容
             *     is_read: bool
             *         通知が既読かどうか
             *     created_at: str
             *         通知が生成された日時（ISO 8601形式）
             *
             * explanation
             * -----------------------
             * 受講生が受け取る通知はメンターの回答・レビュー回答のみ
             * (質問・レビュー依頼は受講生が行う)
             * @returns Successful Response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_97y4kl['get']['resBody'], BasicHeaders, Methods_97y4kl['get']['status']>(prefix, `${prefix1}${PATH16}`, GET, option).json(),
            /**
             * 通知一覧(受講生)
             *
             * Parameters
             * -----------------------
             * student_id: int
             *     ユーザーのID
             *
             * Returns
             * -----------------------
             * notifications: array
             *     id: int
             *         通知のID
             *     from_user: dict
             *         id: int
             *             通知を送ったユーザーのID
             *         name: str
             *             通知を送ったユーザーの名前
             *     question_id: int
             *         関連する質問のID
             *     answer_id: int
             *         関連する回答のID
             *     related_review_request_id: int
             *         レビューリクエストのID
             *     related_review_respomse_id: int
             *         レビューリスポンスのID
             *     title: str
             *         通知のタイトル
             *     content: str
             *         通知の内容
             *     is_read: bool
             *         通知が既読かどうか
             *     created_at: str
             *         通知が生成された日時（ISO 8601形式）
             *
             * explanation
             * -----------------------
             * 受講生が受け取る通知はメンターの回答・レビュー回答のみ
             * (質問・レビュー依頼は受講生が行う)
             * @returns Successful Response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_97y4kl['get']['resBody'], BasicHeaders, Methods_97y4kl['get']['status']>(prefix, `${prefix1}${PATH16}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH16}`,
          },
          progresses: {
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
              fetch<Methods_16cgbqo['get']['resBody'], BasicHeaders, Methods_16cgbqo['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json(),
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
              fetch<Methods_16cgbqo['get']['resBody'], BasicHeaders, Methods_16cgbqo['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH4}`,
          },
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
             *     objective: str
             *         学習内容で実践したいこと
             *     current_situation: str
             *         現状
             *     research: str
             *         自分が調べたこと
             *     content: str
             *         質問の内容
             *     curriculum_id: int
             *         紐づいたカリキュラムのID
             *     tech_category: str
             *         カリキュラムのコースに紐づいた技術カテゴリ
             *     created_at: str
             *         質問作成日
             *     is_read: bool
             *         未読コメントの有無
             *     is_closed: bool
             *         完了しているかどうか
             * @returns Successful Response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1qnirv8['get']['resBody'], BasicHeaders, Methods_1qnirv8['get']['status']>(prefix, `${prefix1}${PATH8}`, GET, option).json(),
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
             *     objective: str
             *         学習内容で実践したいこと
             *     current_situation: str
             *         現状
             *     research: str
             *         自分が調べたこと
             *     content: str
             *         質問の内容
             *     curriculum_id: int
             *         紐づいたカリキュラムのID
             *     tech_category: str
             *         カリキュラムのコースに紐づいた技術カテゴリ
             *     created_at: str
             *         質問作成日
             *     is_read: bool
             *         未読コメントの有無
             *     is_closed: bool
             *         完了しているかどうか
             * @returns Successful Response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1qnirv8['get']['resBody'], BasicHeaders, Methods_1qnirv8['get']['status']>(prefix, `${prefix1}${PATH8}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH8}`,
          },
          reviews: {
            /**
             * 自分のレビュー一覧取得
             *
             * Parameters
             * -----------------------
             * user_id:int
             *     ユーザーのID
             *
             * Returns
             * -----------------------
             * reviews: dict
             *     id: int
             *         レビューのID
             *     title: str
             *         レビューのタイトル
             *     content: str
             *         レビューの内容
             *     curriculum_id: int
             *         紐づいたカリキュラムのID
             *     tech_category: str
             *         カリキュラムのコースに紐づいた技術カテゴリ
             *     created_at: str
             *         レビュー作成日
             *     is_read: bool
             *         未読コメントの有無
             *     is_closed: bool
             *         完了しているかどうか
             * @returns Successful Response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1qnfpc0['get']['resBody'], BasicHeaders, Methods_1qnfpc0['get']['status']>(prefix, `${prefix1}${PATH9}`, GET, option).json(),
            /**
             * 自分のレビュー一覧取得
             *
             * Parameters
             * -----------------------
             * user_id:int
             *     ユーザーのID
             *
             * Returns
             * -----------------------
             * reviews: dict
             *     id: int
             *         レビューのID
             *     title: str
             *         レビューのタイトル
             *     content: str
             *         レビューの内容
             *     curriculum_id: int
             *         紐づいたカリキュラムのID
             *     tech_category: str
             *         カリキュラムのコースに紐づいた技術カテゴリ
             *     created_at: str
             *         レビュー作成日
             *     is_read: bool
             *         未読コメントの有無
             *     is_closed: bool
             *         完了しているかどうか
             * @returns Successful Response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1qnfpc0['get']['resBody'], BasicHeaders, Methods_1qnfpc0['get']['status']>(prefix, `${prefix1}${PATH9}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH9}`,
          },
        };
      },
    },
    users: {
      _user_id: (val1: number) => {
        const prefix1 = `${PATH5}${val1}`;

        return {
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
           *     is_enable: bool
           *         アカウントの状態
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
           *     is_enable: bool
           *         アカウントの状態
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
           *     company_name: str
           *         会社名
           *     is_enable: bool
           *         アカウントの状態
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
           *     company_name: str
           *         会社名
           *     is_enable: bool
           *         アカウントの状態
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
      counts: {
        /**
         * 有効アカウント数取得
         *
         * Parameters
         * -----------------------
         * なし
         *
         * Return
         * -----------------------
         * role_counts: array
         *     role_id: int
         *         ロールのID
         *     role_name: str
         *         ロールの名称
         *     count: int
         *         そのロールを持つ有効なユーザーの総数
         * @returns Successful Response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1s8f1kf['get']['resBody'], BasicHeaders, Methods_1s8f1kf['get']['status']>(prefix, PATH6, GET, option).json(),
        /**
         * 有効アカウント数取得
         *
         * Parameters
         * -----------------------
         * なし
         *
         * Return
         * -----------------------
         * role_counts: array
         *     role_id: int
         *         ロールのID
         *     role_name: str
         *         ロールの名称
         *     count: int
         *         そのロールを持つ有効なユーザーの総数
         * @returns Successful Response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1s8f1kf['get']['resBody'], BasicHeaders, Methods_1s8f1kf['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH6}`,
      },
      /**
       * 受講生一覧(管理者)
       *
       * Parameters
       * -----------------------
       * role: str
       *     ユーザーの役割
       * page: int
       *     取得するページ番号
       * limit: int
       *     1ページ当たりの記事数
       *
       * Return
       * -----------------------
       * users: array
       *     user_id: int
       *         ユーザーのID
       *     name: str
       *         ユーザーの名前
       *     company_name: str
       *         ユーザーの所属会社
       *     email: str
       *         メールアドレス
       *     role: str
       *         ユーザーの役割
       *     is_enable: bool
       *         アカウントの有効状態
       *     last_login: str
       *         最終ログイン日時（ISO 8601形式）
       * @returns Successful Response
       */
      get: (option: { query: Methods_1xhiioa['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1xhiioa['get']['resBody'], BasicHeaders, Methods_1xhiioa['get']['status']>(prefix, PATH5, GET, option).json(),
      /**
       * 受講生一覧(管理者)
       *
       * Parameters
       * -----------------------
       * role: str
       *     ユーザーの役割
       * page: int
       *     取得するページ番号
       * limit: int
       *     1ページ当たりの記事数
       *
       * Return
       * -----------------------
       * users: array
       *     user_id: int
       *         ユーザーのID
       *     name: str
       *         ユーザーの名前
       *     company_name: str
       *         ユーザーの所属会社
       *     email: str
       *         メールアドレス
       *     role: str
       *         ユーザーの役割
       *     is_enable: bool
       *         アカウントの有効状態
       *     last_login: str
       *         最終ログイン日時（ISO 8601形式）
       * @returns Successful Response
       */
      $get: (option: { query: Methods_1xhiioa['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1xhiioa['get']['resBody'], BasicHeaders, Methods_1xhiioa['get']['status']>(prefix, PATH5, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1xhiioa['get']['query'] } | undefined) =>
        `${prefix}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
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
