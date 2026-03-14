import { BorderButton } from "./button/BorderButton";
import { PrimaryButton } from "./button/PrimaryButton";
import { SecondaryButton } from "./button/SecondaryButton";
import { RefreshLeftIcon } from "./icons/RefreshLeftIcon";
import { Logo } from "./Logo";
import { ArchiveModal } from "./modals/ArchiveModal";
import { DeleteModal } from "./modals/DeleteModal";
import { Toast } from "./Toast";

export function Components(){
    return(
        <div className="flex flex-col gap-y-4">
            <Logo/>
            <PrimaryButton titleButton="Primary Button" isDisabled={false}/>
            <SecondaryButton titleButton="Secondary Button" isDisabled={true}/>
            <BorderButton titleButton="Border Button" Icon={RefreshLeftIcon} isDisabled={false}/>
            <DeleteModal/>
            <ArchiveModal/>
            <Toast titleToast="Note saved successfully!"/>
            <Toast titleToast="Note archived" link="Archived Notes"/>
        </div>
    )
}