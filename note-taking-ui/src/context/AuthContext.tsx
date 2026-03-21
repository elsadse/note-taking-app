import { createContext } from "react"
import type { ErrorApiResponse } from "../api/errors/schema"
import type { Nullable } from "../types"

export type AuthContextType = {
    authenticatedUser: Nullable<string>
    login: (email: string, password: string) => void
    logout: () => void
    register: (email: string, password: string) => void
    error: {
        login: Nullable<ErrorApiResponse>
        register: Nullable<ErrorApiResponse>
    }
    isLoading: boolean,
    isInitialized:boolean
}

export const AuthContext = createContext<Nullable<AuthContextType>>(null)