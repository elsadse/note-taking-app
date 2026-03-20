import type { ErrorApiResponse } from "./schema"

export abstract class ApiError extends Error {
    readonly response: ErrorApiResponse

    protected constructor(response: ErrorApiResponse) {
        super()
        this.response = response
    }
}