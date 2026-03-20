import { useShallow } from "zustand/shallow";
import { SearchIcon } from "../../components/icons/SearchIcon";
import { SettingsIcon } from "../../components/icons/SettingsIcon";
import { InputField } from "../../components/input/InputField";
import { MenuBarItem } from "../../components/MenuBar";
import { SideBarNavigation } from "../../components/sideBar/SideBarNavigation";
import { useGlobalStore, type GlobalStore } from "../../hooks/useGlobalStore";
import { Link, Outlet } from "react-router";
import { ArchiveModal } from "../../components/modals/ArchiveModal";
import { DeleteModal } from "../../components/modals/DeleteModal";

export function HomePageDesktopLayout() {
    const { sideBarItemSelected, actionSelected, setActionSelected} = useGlobalStore(
        useShallow((store: GlobalStore) => ({
            sideBarItemSelected: store.sideBarItemSelected,
            actionSelected: store.actionSelected,
            setActionSelected: store.setActionSelected,
        }))
    )

    return (
        <div className="h-screen flex flex-row">
            {actionSelected === "Archive" && (
                <div className="fixed inset-0 z-20 flex items-center justify-center bg-[#131313]/70">
                    <ArchiveModal onClose={()=>setActionSelected("")}/>
                </div>
            )}

            {actionSelected === "Restore" && (
                <div className="fixed inset-0 z-20 flex items-center justify-center bg-[#131313]/70">
                    <ArchiveModal onClose={()=>setActionSelected("")} />
                </div>
            )}

            {actionSelected === "Delete" && (
                <div className="fixed inset-0 z-20 flex items-center justify-center bg-[#131313]/70">
                    <DeleteModal onClose={()=>setActionSelected("")} />
                </div>
            )}

            <SideBarNavigation />
            <div className="w-full flex flex-col">
                <div className="flex flex-row justify-between items-center px-8 py-4 border-b border-neutral-200">
                    <span className="sans-serif-text-preset-1 text-neutral-950">
                        {sideBarItemSelected === "Home" ? "All Notes" : "Archived Notes"}
                    </span>
                    <div className="flex flex-row gap-x-4 items-center">
                        <InputField name="search" placeholder="Search by title, content, or tags…" type="text" icons={{ IconBeforeInput: SearchIcon, css: "stroke" }} />
                        <Link to="/settings">
                            <MenuBarItem icon={{ Icon: SettingsIcon, css: "fill" }} textIcon="Settings" />
                        </Link>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    )
}