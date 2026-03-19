import { PrimaryButton } from "../../components/button/PrimaryButton";
import { SecondaryButton } from "../../components/button/SecondaryButton";
import { Divider } from "../../components/Divider";
import { SideBarAllNotes } from "../../components/sideBar/SideBarAllNotes";
import { SideBarRightMenu } from "../../components/sideBar/SideBarRightMenu";
import { DisplayNote } from "./ContentNote";

export function ContentHomeDesktop() {
    return (
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
    )
}