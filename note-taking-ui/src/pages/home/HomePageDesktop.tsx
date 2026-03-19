import { useShallow } from "zustand/shallow";
import { PrimaryButton } from "../../components/button/PrimaryButton";
import { SecondaryButton } from "../../components/button/SecondaryButton";
import { Divider } from "../../components/Divider";
import { SearchIcon } from "../../components/icons/SearchIcon";
import { SettingsIcon } from "../../components/icons/SettingsIcon";
import { InputField } from "../../components/input/InputField";
import { MenuBarItem } from "../../components/MenuBar";
import { SideBarAllNotes } from "../../components/sideBar/SideBarAllNotes";
import { SideBarNavigation } from "../../components/sideBar/SideBarNavigation";
import { SideBarRightMenu } from "../../components/sideBar/SideBarRightMenu";
import { useGlobalStore, type GlobalStore } from "../../hooks/useGlobalStore";
import { DisplayNote } from "./ContentNote";

export function HomePageDesktop() {
    const { sideBarItemSelected } = useGlobalStore(
        useShallow((store: GlobalStore) => ({
            sideBarItemSelected: store.sideBarItemSelected,
        }))
    )

    return (
        <div className="h-screen flex flex-row">
            <SideBarNavigation />
            <div className="w-full flex flex-col">
                <div className="flex flex-row justify-between items-center px-8 py-4 border-b border-neutral-200">
                    <span className="sans-serif-text-preset-1 text-neutral-950">{sideBarItemSelected === "Home" ? "All Notes" : "Archived Notes"}</span>
                    <div className="flex flex-row gap-x-4 items-center">
                        <InputField name="search" placeholder="Search by title, content, or tags…" type="text" icons={{ IconBeforeInput: SearchIcon, css: "stroke" }} />
                        <MenuBarItem icon={{ Icon: SettingsIcon, css: "fill" }} textIcon="Settings" />
                    </div>
                </div>
                <div className="flex flex-row pr-4 flex-1">
                    <div className="h-full flex-1">
                        <SideBarAllNotes />
                    </div>
                    <div className="flex-2 flex flex-col gap-y-4 px-6 py-5 border-r border-neutral-200">
                        <DisplayNote />
                        <Divider />
                        <div className="flex flex-row gap-x-4">
                            <PrimaryButton titleButton="Save Note" />
                            <SecondaryButton titleButton="Cancel" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <SideBarRightMenu />
                    </div>
                </div>
            </div>
        </div>
    )
}