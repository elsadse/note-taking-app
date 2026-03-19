import { Outlet } from "react-router";
import { MenuBar } from "../../components/MenuBar";
import { PageHeader } from "../../components/pageHeader/PageHeader";

export function HomeLayoutMd() {
    return (
        <div className="relative flex flex-col h-screen">
            <PageHeader />
            <Outlet/>
            <MenuBar/>
        </div>
    )
}