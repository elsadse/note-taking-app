import { ApiError } from "./ApiError";
import type { NotFoundApiResponse } from "./schema";


export class NotFoundApiError extends ApiError {

    constructor(response: NotFoundApiResponse) {
        super(response)
    }
}