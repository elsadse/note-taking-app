import type { JSX } from "react"
import { Navigate, Outlet } from "react-router"
import { useAuthContext } from "../hooks/useAuthContext"

export function ProtectedRoute(): JSX.Element {
    const { authenticatedUser } = useAuthContext()
    
    if (authenticatedUser === null) {
        return <Navigate to="login" replace/>
    } 

    return <Outlet/>
}