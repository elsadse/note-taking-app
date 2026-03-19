import { useShallow } from "zustand/shallow";
import { useGlobalStore, type GlobalStore } from "../../hooks/useGlobalStore";
import { BorderButton } from "../button/BorderButton";
import { ArchiveIcon } from "../icons/ArchiveIcon";
import { DeleteIcon } from "../icons/DeleteIcon";
import { RefreshLeftIcon } from "../icons/RefreshLeftIcon";

export function SideBarRightMenu() {
    const { sideBarItemSelected } = useGlobalStore(
        useShallow((store: GlobalStore) => ({
            sideBarItemSelected: store.sideBarItemSelected,
        }))
    )

    return (
        <div className="h-full w-full flex flex-col gap-y-3 pl-4 py-5">
            {sideBarItemSelected==="Home"&& <BorderButton icon={{ Icon: ArchiveIcon, css: "stroke" }} titleButton="Archive Note" className="justify-start" />}
            {sideBarItemSelected==="Archive"&& <BorderButton icon={{ Icon: RefreshLeftIcon, css: "fill" }} titleButton="Restore Note" className="justify-start" />}
            <BorderButton icon={{ Icon: DeleteIcon, css: "stroke" }} titleButton="Delete Note" className="justify-start" />
        </div>
    )
}