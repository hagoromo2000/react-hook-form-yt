import { z } from "zod";

export const validationSchema = z.object({
  name: z.string().nonempty("名前は必須です。").min(2, "名前は2文字以上です。"),
  email: z
    .string()
    .nonempty("メールアドレスは必須です。")
    .email("メールアドレスの形式が正しくありません。"),
  password: z
    .string()
    .nonempty("パスワードは必須です。")
    .min(8, "パスワードは8文字以上です。"),
});
