import { ApiError } from "./ApiError";
import type { UnauthorizedApiResponse } from "./schema";

export class UnauthorizedApiError extends ApiError {

    constructor(response: UnauthorizedApiResponse) {
        super(response)
    }
}