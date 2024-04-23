/* eslint-disable */
export type AllResponseList = {
  id: number
  title: string
  content: string
  curriculum_id: number
  created_at: string
  is_read: boolean
  is_closed: boolean
}

export type AllReviewResponse = {
  review_request: ReviewRequestBody
  responses: ReviewResponseBody[]
}

export type Company = {
  company_id: number
  name: string
  prefecture: string
  city: string
  town: string

  address: string | null

  postal_code: string
  phone_number: string
  email: string
  created_at: string
}

export type Course = {
  course_id: number
  title: string
  description: string
  created_user: number

  thumbnail_url: string | null

  created_at: string
}

export type Curriculum = {
  curriculum_id: number
  title: string

  description: string | null
}

export type DetailonseBody = {
  billing_id: number
  company_id: number
  date: string
  amount: number
  status: string

  payment_details?: Payment | null | undefined
}

export type DeviceInfo = {
  device_type?: string | null | undefined

  device_name?: string | null | undefined

  uuid?: string | null | undefined
}

export type HTTPValidationError = {
  detail?: ValidationError[] | undefined
}

export type MediaContent = {
  url: string
}

export type News = {
  id: number
  title: string
  published_at: string
}

export type Payment = {
  payment_method: string
  payment_date: string
}

export type Progress = {
  course_id: number
  course_title: string
  progress_percentage: number
  status: string
  last_accessed_at: string
}

export type ProgressesResponseBody = {
  progresses: ProgressesResponseList[]
}

export type ProgressesResponseList = {
  progress_id: number
  user_id: number
  course_id: number

  section_id: number | null

  curriculum_id: number | null

  progress_percentage: number
  status: string
}

export type Question = {
  id: number
  title: string
  content: string
  curriculum_id: number
  created_at: string
  is_read: boolean
  is_closed: boolean
}

export type Questions = {
  id: number
  title: string
  content: string
  curriculum_id: number
  created_at: string
  is_read: boolean
  is_closed: boolean
}

export type ResponseQuestion = {
  id: number
  curriculum_id: number
  user_id: number
  title: string
  content: string
  is_closed: boolean
  created_at: string
}

export type Review = {
  id: number
  curriculum_id: number
  user_id: number
  title: string
  content: string
  is_closed: boolean
  created_at: string
  updated_at: string
}

export type ReviewRequestBody = {
  id: number
  curriculum_id: number
  user_id: number
  title: string
  content: string
  is_closed: boolean
  created_at: string
  updated_at: string
}

export type ReviewResponseBody = {
  id: number
  review_request_id: number
  user_id: number

  parent_response_id: number | null

  content: string
  is_read: boolean
  created_at: string
}

export type ReviewsResponseBody = {
  reviews: Review[]
}

export type Rewards = {
  reward_id: number
  date: string
  amount: number
  to_mentor_id: number
}

export type RewardsResponseBody = {
  rewards: Rewards[]
}

export type Section = {
  section_id: number
  title: string

  description: string | null

  curriculums: Curriculum[]
}

export type UpdateRequestBody = {
  first_name?: string | null | undefined

  last_name?: string | null | undefined

  first_name_kana?: string | null | undefined

  last_name_kana?: string | null | undefined

  email?: string | null | undefined
}

export type UpdateResponseBody = {
  news_id: number
  title: string
  content: string
  is_published: boolean
  published_at: string
  updated_at: string
}

export type UpdateResponseRequestBody = {
  content: string | null

  is_read: boolean | null
}

export type UpdateResponseResponseBody = {
  id: number
  review_request_id: number
  user_id: number

  parent_response_id: number | null

  content: string
  is_read: boolean
  updated_at: string
}

export type UpdateReviewRequestBody = {
  title: string | null

  content: string | null

  is_closed: boolean | null
}

export type UpdateReviewResponseBody = {
  id: number
  title: string
  content: string
  is_closed: boolean
  updated_at: string
}

export type ValidationError = {
  loc: (string | number)[]
  msg: string
  type: string
}

export type Schemas__companies__AllResponseBody = {
  companies: Company[]
}

export type Schemas__companies__CreateRequestBody = {
  name: string
  prefecture: string
  city: string
  town: string

  address?: string | null | undefined

  postal_code: string
  phone_number: string
  email: string
}

export type Schemas__companies__CreateResponseBody = {
  company_id: number
  name: string
  prefecture: string
  city: string
  town: string

  address: string | null

  postal_code: string
  phone_number: string
  email: string
}

export type Schemas__companies__DetailResponseBody = {
  company_id: number
  name: string
  prefecture: string
  city: string
  town: string
  address: string
  postal_code: string
  phone_number: string
  email: string
  created_at: string
  updated_at: string
}

export type Schemas__companies__ResponseBody = {
  users: Schemas__companies__ResponseList[]
}

export type Schemas__companies__ResponseList = {
  user_id: number
  first_name: string
  last_name: string
  email: string
  role: string
  last_login: string
}

export type Schemas__courses__AllResponseBody = {
  courses: Course[]
}

export type Schemas__courses__DetailResponseBody = {
  course_id: number
  title: string
  description: string
  created_user_id: number
  created_at: string
  sections: Section[]
}

export type Schemas__curriculums__DetailResponseBody = {
  curriculum_id: number
  title: string
  description: string

  video_url?: string | null | undefined

  content?: string | null | undefined

  is_test: boolean
  display_no: number
}

export type Schemas__curriculums__RequestBody = {
  user_id?: number | undefined
  title: string
  content: string
  media_content: MediaContent[]
}

export type Schemas__curriculums__ResponseBody = {
  question_id: number
  curriculum_id: number
  user_id: number
  title: string
  content: string
  media_content: MediaContent[]
}

export type Schemas__login__RequestBody = {
  email?: string | null | undefined

  password?: string | null | undefined

  device_info: DeviceInfo
}

export type Schemas__login__ResponseBody = {
  user_id: number
  access_token: string
  expires_in: number
  role: string
}

export type Schemas__mentors__CreateRequestBody = {
  bank_name: string
  branch_name: string
  bank_code: string
  branch_code: string
  account_type: string
  account_number: string
  account_name: string
}

export type Schemas__mentors__CreateResponseBody = {
  account_id: number
  mentor_id: number
  bank_name: string
  branch_name: string
  bank_code: string
  branch_code: string
  account_type: string
  account_number: string
  account_name: string
}

export type Schemas__mentors__DetailResponseBody = {
  mentor_id: number
  account_name: string
  bank_name: string
  branch_name: string
  account_number: string
  account_type: string
}

export type Schemas__mentors__ResponseBody = {
  questions: Question[]
}

export type Schemas__news__AllResponseBody = {
  news: News[]
  page: number
  limit: number
  total_pages: number
  total_news: number
}

export type Schemas__news__CreateRequestBody = {
  title: string
  content: string
  is_published: boolean
  published_at: string
}

export type Schemas__news__CreateResponseBody = {
  id: number
  title: string
  content: string
  is_published: boolean
  published_at: string
  created_at: string
}

export type Schemas__news__DetailResponseBody = {
  id: number
  title: string
  content: string
  published_at: string
}

export type Schemas__news__RequestBody = {
  title?: string | undefined
  content?: string | undefined
  is_published?: boolean | undefined
  published_at?: string | undefined
}

export type Schemas__questions__CreateRequestBody = {
  user_id: number
  content: string
}

export type Schemas__questions__CreateResponseBody = {
  answer_id: number
  question_id: number
  user_id: number
  content: string
}

export type Schemas__questions__DetailResponseBody = {
  question: ResponseQuestion
  answer: Schemas__questions__ResponseList[]
}

export type Schemas__questions__ResponseList = {
  id: number
  question_id: number
  user_id: number

  parent_answer_id: number | null

  content: string

  media_content: null

  is_read: boolean
  created_at: string
}

export type Schemas__receipts__ResponseBody = {
  receipt_id: number
  company_id: number
  billing_id: number
  date: string
  amount: number
  received_from: string
  payment_method: string
}

export type Schemas__reviews__AllResponseBody = {
  reviews: AllResponseList[]
}

export type Schemas__state_progresses__ResponseBody = {
  progresses: Progress[]
}

export type Schemas__students__ResponseBody = {
  questions: Questions[]
}

export type Schemas__users__DetailResponseBody = {
  user_id: number
  first_name: string
  last_name: string
  first_name_kana: string
  last_name_kana: string
  email: string
  role: string
  last_login: string
}
