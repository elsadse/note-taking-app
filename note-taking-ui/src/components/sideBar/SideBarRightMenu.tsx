import { useShallow } from "zustand/shallow";
import { useGlobalStore, type GlobalStore } from "../../hooks/useGlobalStore";
import { BorderButton } from "../button/BorderButton";
import { ArchiveIcon } from "../icons/ArchiveIcon";
import { DeleteIcon } from "../icons/DeleteIcon";
import { RefreshLeftIcon } from "../icons/RefreshLeftIcon";

export function SideBarRightMenu() {
    const { sideBarItemSelected, setActionSelected } = useGlobalStore(
        useShallow((store: GlobalStore) => ({
            sideBarItemSelected: store.sideBarItemSelected,
            setActionSelected: store.setActionSelected,
        }))
    )

    return (
        <div className="h-full w-full flex flex-col gap-y-3 pl-4 py-5">
            {sideBarItemSelected==="Home"&& (
                <div onClick={()=> setActionSelected("Archive")}>
                    <BorderButton icon={{ Icon: ArchiveIcon, css: "stroke" }} titleButton="Archive Note" className="w-full justify-start" />
                </div>
            )}
            {sideBarItemSelected==="Archive"&& (
                <div onClick={()=> setActionSelected("Restore")}>
                    <BorderButton icon={{ Icon: RefreshLeftIcon, css: "fill" }} titleButton="Restore Note" className="w-full justify-start" />
                </div>
            )}
            <div onClick={()=> setActionSelected("Delete")}>
                <BorderButton icon={{ Icon: DeleteIcon, css: "stroke" }} titleButton="Delete Note" className="w-full justify-start" />
            </div>
        </div>
    )
}