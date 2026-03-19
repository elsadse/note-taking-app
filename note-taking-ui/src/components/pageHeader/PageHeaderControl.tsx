import { Link } from "react-router";
import { ArrowLeft } from "../icons/ArrowLeft";
import { ArchiveIcon } from "../icons/ArchiveIcon";
import { DeleteIcon } from "../icons/DeleteIcon";
import { useGlobalStore, type GlobalStore } from "../../hooks/useGlobalStore";
import { useShallow } from "zustand/shallow";
import { RefreshLeftIcon } from "../icons/RefreshLeftIcon";

export function PageHeaderControl({ isCreate = false }: { isCreate?: boolean }) {

    const { sideBarItemSelected, menuItemSelected } = useGlobalStore(
        useShallow((store: GlobalStore) => ({
            sideBarItemSelected: store.sideBarItemSelected,
            menuItemSelected: store.menuItemSelected,
        }))
    )

    return (
        <div className="flex flex-row justify-between">
            <Link to="/">
                <div className="flex flex-row gap-x-1">
                    <ArrowLeft className="fill-neutral-600 size-4.5" />
                    <span className="sans-serif-text-preset-5 text-neutral-600">Go Back</span>
                </div>
            </Link>
            <div className="flex flex-row gap-x-4">
                {!isCreate && (
                    <>
                        <DeleteIcon className="size-4.5 stroke-neutral-600" />
                        {sideBarItemSelected === "Home" && menuItemSelected !== "Archive" && <ArchiveIcon className="size-4.5 stroke-neutral-600" />}
                        {sideBarItemSelected === "Archive" || menuItemSelected === "Archive" && <RefreshLeftIcon className="size-4.5 fill-neutral-600" />}
                    </>
                )}
                <span className="sans-serif-text-preset-5 text-neutral-600">Cancel</span>
                <span className="sans-serif-text-preset-5 text-neutral-blue-500">Save Note</span>
            </div>
        </div>
    )
}