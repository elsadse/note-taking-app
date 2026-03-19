import { Outlet } from "react-router";
import { MenuBar } from "../../components/MenuBar";
import { PageHeader } from "../../components/pageHeader/PageHeader";
import { useGlobalStore, type GlobalStore } from "../../hooks/useGlobalStore";
import { useShallow } from "zustand/shallow";
import { ArchiveModal } from "../../components/modals/ArchiveModal";
import { DeleteModal } from "../../components/modals/DeleteModal";

export function HomeLayoutMd() {

    const { actionSelected, setActionSelected } = useGlobalStore(
        useShallow((store: GlobalStore) => ({
            actionSelected: store.actionSelected,
            setActionSelected: store.setActionSelected,
        }))
    )

    return (
        <div className="relative flex flex-col h-screen">
            {actionSelected === "Archive" && (
                <div className="fixed inset-0 z-20 flex items-center justify-center bg-[#131313]/70">
                    <ArchiveModal onClose={()=>setActionSelected("")}/>
                </div>
            )}

            {actionSelected === "Restore" && (
                <div className="fixed inset-0 z-20 flex items-center justify-center bg-[#131313]/70">
                    <ArchiveModal onClose={()=>setActionSelected("")}/>
                </div>
            )}

            {actionSelected === "Delete" && (
                <div className="fixed inset-0 z-20 flex items-center justify-center bg-[#131313]/70">
                    <DeleteModal onClose={()=>setActionSelected("")}/>
                </div>
            )}

            <PageHeader />
            <Outlet />
            <MenuBar />
        </div>
    )
}