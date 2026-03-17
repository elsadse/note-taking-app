import { Outlet } from "react-router"

export function AuthLayout(){

    return (
        <div className=" bg-neutral-100 min-h-screen flex justify-center items-center px-4 py-2.5">
            <Outlet/>
        </div>
    )
}