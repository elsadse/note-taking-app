import { z } from "zod"

export const AuthApiResponseSchema = z.object({
    id: z.number(),
    email: z.string(),
})

export type AuthApiResponse = z.infer<typeof AuthApiResponseSchema>