import { ConflictApiError } from "./ConflictApiError"
import { ForbiddenApiError } from "./ForbiddenApiError"
import { NotFoundApiError } from "./NotFoundApiError"
import { ConflictApiResponseSchema, ForbiddenApiResponseSchema, NotFoundApiResponseSchema, UnauthorizedApiResponseSchema, ValidationApiResponseSchema } from "./schema"
import { UnauthorizedApiError } from "./UnauthorizedApiError"
import { ValidationApiError } from "./ValidationApiError"

export async function parseKnownErrors({ expectedStatusCode, response }: {
    expectedStatusCode: number,
    response: Response
}): Promise<void> {
    if (response.status === 422) {
        const parsedResponse = ValidationApiResponseSchema.safeParse(await response.json())
        if (!parsedResponse.success) {
            throw parsedResponse.error
        }
        //console.log(parsedResponse.data)
        throw new ValidationApiError(parsedResponse.data)
    }
    if (response.status === 401) {
        if (response.headers.get("Content-Length") === "0") {
            const tokenInvalid = response.headers.get("Token-Invalid")
            const tokenMissing = response.headers.get("Token-Missing")
            const tokenExpired = response.headers.get("Token-Expired")
            if (tokenInvalid === null || tokenMissing === null || tokenExpired === null) {
                throw new UnauthorizedApiError({
                    detail: "The provided token is either missing, invalid, or has expired. Please authenticate again."
                })
            }
        } else {
            const parsedResponse = UnauthorizedApiResponseSchema.safeParse(await response.json())
            console.log(parsedResponse)
            if (!parsedResponse.success) {
                throw parsedResponse.error
            }
            throw new UnauthorizedApiError(parsedResponse.data)
        }
    }
    if (response.status === 403) {
        const parsedResponse = ForbiddenApiResponseSchema.safeParse(await response.json())
        if (!parsedResponse.success) {
            throw parsedResponse.error
        }
        throw new ForbiddenApiError(parsedResponse.data)
    }
    if (response.status === 404) {
        const parsedResponse = NotFoundApiResponseSchema.safeParse(await response.json())
        if (!parsedResponse.success) {
            throw parsedResponse.error
        }
        throw new NotFoundApiError(parsedResponse.data)
    }
    if (response.status === 409) {
        const parsedResponse = ConflictApiResponseSchema.safeParse(await response.json())
        if (!parsedResponse.success) {
            throw parsedResponse.error
        }
        throw new ConflictApiError(parsedResponse.data)
    }

    if (response.status !== expectedStatusCode) {
        throw new Error(`Unexpected status code: ${response.status}`)
    }
}