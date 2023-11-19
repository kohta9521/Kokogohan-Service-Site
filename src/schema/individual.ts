import { z } from 'zod'

// mail
const email: z.ZodString = z
    .string({ required_error: '入力が必須の項目です' })
    .min(1, { message: '入力が必須の項目です' })
    .max(255, { message: '255文字以内で入力してください' })
    .email({ message: 'メールアドレスの形式で入力してください' })

// name
const name: z.ZodString = z
    .string({ required_error: '入力が必須の項目です' })
    .min(1, { message: '入力が必須の項目です' })
    .max(255, { message: '255文字以内で入力してください' })

// ふりがな
const kana: z.ZodString = z.string({ required_error: '入力が必須の項目です' })
// TODO ふりがなのバリデーション調べて追加

// tel
const telephone: z.ZodString = z
    .string({ required_error: '入力が必須の項目です' })
    .min(1, { message: '入力ちが必須の項目です' })
    .max(255, { message: '255文字以内で入力してください' })

// messageTitle
const title: z.ZodString = z
    .string({ required_error: '入力が必須の項目です' })
    .min(1, { message: '入力が必須の項目です' })
    .max(255, { message: '255文字以内で入力してください' })

// message
const message: z.ZodString = z
    .string({ required_error: '入力が必須の項目です' })
    .min(1, { message: '入力が必須の項目です' })
    .max(1000, { message: '1000文字以内で入力してください' })

// agree
const agree: z.ZodLiteral<string> = z.literal('true', {
    errorMap: () => ({ message: '同意が必須です' }),
})

export const ContactIndividualSchema = z.object({
    email: email,
    name: name,
    kana: kana,
    telephone: telephone,
    title: title,
    message: message,
    agree: agree,
})

export type ContactIndividualType = z.infer<typeof ContactIndividualSchema>