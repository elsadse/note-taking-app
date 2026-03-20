import { ApiError } from "./ApiError";
import type { ValidationApiResponse } from "./schema";

export class ValidationApiError extends ApiError {

    constructor(response: ValidationApiResponse) {
        super(response)
    }
}