import { Outlet } from "react-router";
import { MenuBar } from "../../components/MenuBar";
import { PageHeader } from "../../components/pageHeader/PageHeader";

export function HomeLayout() {
    return (
        <div className="relative flex flex-col h-screen">
            <PageHeader />
            <Outlet/>
            <MenuBar itemSelected="Home"/>
        </div>
    )
}