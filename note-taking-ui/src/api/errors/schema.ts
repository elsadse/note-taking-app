import { z } from "zod"

const ValidationErrorItemSchema = z.object({
    field: z.string(),
    message: z.string(),
})
export const ValidationApiResponseSchema = z.object({
    detail: z.array(ValidationErrorItemSchema),
})
export type ValidationApiResponse = z.infer<typeof ValidationApiResponseSchema>

export const UnauthorizedApiResponseSchema = z.object({
    detail: z.string(),
})
export type UnauthorizedApiResponse = z.infer<typeof UnauthorizedApiResponseSchema>

export const ForbiddenApiResponseSchema = z.object({
    detail: z.string(),
})
export type ForbiddenApiResponse = z.infer<typeof ForbiddenApiResponseSchema>

export const NotFoundApiResponseSchema = z.object({
    detail: z.string(),
})
export type NotFoundApiResponse = z.infer<typeof NotFoundApiResponseSchema>

export const ConflictApiResponseSchema = z.object({
    detail: z.string(),
})
export type ConflictApiResponse = z.infer<typeof ConflictApiResponseSchema>

export const ErrorApiResponseSchema = z.union([
    ValidationApiResponseSchema,
    UnauthorizedApiResponseSchema,
    ForbiddenApiResponseSchema,
    NotFoundApiResponseSchema,
    ConflictApiResponseSchema,
])
export type ErrorApiResponse = z.infer<typeof ErrorApiResponseSchema>