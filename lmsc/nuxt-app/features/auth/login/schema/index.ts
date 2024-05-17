import { object, string, setLocale } from 'yup'

setLocale({
  mixed: {
    required: '${path}を入力してください。',
  },
  string: {
    email: 'メールアドレスの形式が正しくありません。',
  },
})

export const schema = object({
  email: string().required().email().label('メールアドレス'),
  password: string()
    .required()
    .matches(/^[a-zA-Z0-9]{8,14}$/, 'パスワードは半角英数字のみ使用できます。')
    .min(8, 'パスワードは少なくとも8文字必要です。')
    .max(14, 'パスワードは14文字以下である必要があります。')
    .label('パスワード'),
})
