import { BorderButton } from "../button/BorderButton";
import { ArchiveIcon } from "../icons/ArchiveIcon";
import { DeleteIcon } from "../icons/DeleteIcon";

export function SideBarRightMenu(){
    return(
        <div className="h-full w-full flex flex-col gap-y-3 pl-4 py-5">
            <BorderButton icon={{Icon:ArchiveIcon, css:"stroke"}} titleButton="Archive Note" className="justify-start"/>
            <BorderButton icon={{Icon:DeleteIcon, css:"stroke"}} titleButton="Delete Note" className="justify-start"/>
        </div>
    )
}