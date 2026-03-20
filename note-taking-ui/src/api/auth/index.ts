import { parseKnownErrors } from "../errors"
import { AuthApiResponseSchema, type AuthApiResponse } from "./schema"

const apiUrl = import.meta.env.VITE_NOTE_TAKING_API_URL

export async function authLogin({ email, password }: { email: string, password: string }): Promise<AuthApiResponse> {
    if (!apiUrl) throw new Error("VITE_NOTE_TAKING_API_URL environment variable is not set")

    const response = await fetch(`${apiUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include"
    })
    await parseKnownErrors({ expectedStatusCode: 200, response })

    const parsedResponse = AuthApiResponseSchema.safeParse(await response.json())
    if (!parsedResponse.success) {
        throw parsedResponse.error
    }

    return parsedResponse.data
}

export async function authLogout(): Promise<void> {
    if (!apiUrl) throw new Error("VITE_NOTE_TAKING_API_URL environment variable is not set")

    const response = await fetch(`${apiUrl}/auth/logout`, {
        method: "POST"
    })
    await parseKnownErrors({ expectedStatusCode: 204, response })
}

export async function authRegister({ email, password }: { email: string, password: string }): Promise<AuthApiResponse> {
    if (!apiUrl) throw new Error("VITE_NOTE_TAKING_API_URL environment variable is not set")

    const response = await fetch(`${apiUrl}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include"
    })
    await parseKnownErrors({ expectedStatusCode: 201, response })

    const parsedResponse = AuthApiResponseSchema.safeParse(await response.json())
    if (!parsedResponse.success) {
        throw parsedResponse.error
    }

    return parsedResponse.data
}