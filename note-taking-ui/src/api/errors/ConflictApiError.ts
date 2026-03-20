import { ApiError } from "./ApiError";
import type { ConflictApiResponse } from "./schema";

export class ConflictApiError extends ApiError {

    constructor(response: ConflictApiResponse) {
        super(response)
    }
}