import { SideBarAllNotes } from "../../components/sideBar/SideBarAllNotes";
import { CreateNote } from "../CreateNote";

export function ContentCreateNote() {
    return (
        <div className="flex flex-row pr-4 flex-1">
            <div className="h-full flex-1">
                <SideBarAllNotes />
            </div>
            <div className="flex-2 flex flex-col gap-y-4 px-6 py-5 border-r border-neutral-200">
                <CreateNote/>
            </div>
            <div className="flex-1">
            </div>
        </div>
    )
}