import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageLayout(){
    return (
        <div className="">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}