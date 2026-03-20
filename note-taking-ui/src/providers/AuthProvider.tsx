import { useState, type ReactNode } from "react"
import { ApiError } from "../api/errors/ApiError"
import type { AuthApiResponse } from "../api/auth/schema"
import { authLogin, authLogout, authRegister } from "../api/auth"
import { useNavigate } from "react-router"
import { AuthContext } from "../context/AuthContext"
import type { ErrorApiResponse } from "../api/errors/schema"
import type { Nullable } from "../types"

export function AuthProvider({ children }: { children: ReactNode }): ReactNode {
    const [error, setError] = useState<{
        login: Nullable<ErrorApiResponse>
        register: Nullable<ErrorApiResponse>
    }>({ login: null, register: null })
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [authenticatedUser, setAuthenticatedUser] = useState<Nullable<string>>(null)

    const navigate = useNavigate()

    function login(email: string, password: string): void {
        setIsLoading(true)
        authLogin({ email, password })
            .then((response: AuthApiResponse) => {
                setAuthenticatedUser(response.email)
                setError({ ...error, login: null })
                navigate("/", { replace: true })
            })
            .catch((e) => {
                console.log("Login failed:", e)
                if (e instanceof ApiError) {
                    setError({ ...error, login: e.response })
                }
            })
            .finally((): void => setIsLoading(false))
    }

    function logout(): void {
        setIsLoading(true)
        authLogout()
            .catch((): void => {
                console.log("Logout failed:", error)
            })
            .finally((): void => {
                setAuthenticatedUser(null)
                setIsLoading(false)
                setError({ login: null, register: null })
                navigate("login", { replace: true })
            })
    }

    function register(email: string, password: string): void {
        setIsLoading(true)
        authRegister({email, password })
            .then((response: AuthApiResponse): void => {
                login(response.email, password)
            })
            .catch((e) => {
                console.log("Registration failed:", e)
                if (e instanceof ApiError) {
                    setError({ ...error, register: e.response })
                }
            })
            .finally((): void => setIsLoading(false))
    }

    return (
        <AuthContext.Provider value={{ authenticatedUser, login, logout, register, error, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}