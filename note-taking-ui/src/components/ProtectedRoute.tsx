import type { JSX } from "react"
import { Navigate, Outlet } from "react-router"
import { useAuthContext } from "../hooks/useAuthContext"

export function ProtectedRoute(): JSX.Element {
    const { authenticatedUser, isInitialized } = useAuthContext()

    if (!isInitialized) {
        return <div>wait...</div>  
    }
    
    if (authenticatedUser === null) {
        return <Navigate to="login" replace/>
    } 

    return <Outlet/>
}