import { ApiError } from "./ApiError";
import type { ForbiddenApiResponse } from "./schema";

export class ForbiddenApiError extends ApiError {

    constructor(response: ForbiddenApiResponse) {
        super(response)
    }
}