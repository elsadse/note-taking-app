import { BorderButton } from "./button/BorderButton";
import { PrimaryButton } from "./button/PrimaryButton";
import { SecondaryButton } from "./button/SecondaryButton";
import { RefreshLeftIcon } from "./icons/RefreshLeftIcon";
import { SearchIcon } from "./icons/SearchIcon";
import { ShowIcon } from "./icons/ShowIcon";
import { InputField } from "./input/InputField";
import { InputTypeGroup } from "./input/InputTypeGroup";
import { Logo } from "./Logo";
import { ArchiveModal } from "./modals/ArchiveModal";
import { DeleteModal } from "./modals/DeleteModal";
import { Toast } from "./Toast";

export function Components() {
    return (
        <div className="flex flex-col gap-y-5 py-5">
            <Logo />
            <PrimaryButton titleButton="Primary Button" isDisabled={false} />
            <SecondaryButton titleButton="Secondary Button" isDisabled={true} />
            <BorderButton titleButton="Border Button" Icon={RefreshLeftIcon} isDisabled={false} />
            <DeleteModal />
            <ArchiveModal />
            <Toast titleToast="Note saved successfully!" />
            <Toast titleToast="Note archived" link="Archived Notes" />
            <InputField name="search" placeholder="Search" type="text" icons={{IconBeforeInput:SearchIcon, css:"stroke"}} />
            <InputTypeGroup name="email" placeholder="exemple@email.com" titleLabel="Email" type="email" />
            <InputTypeGroup name="password" placeholder="Password" titleLabel="Password" type="password" textError="This is a hint text to help user." icon={{ Icon: ShowIcon, css: "fill" }} />
        </div>
    )
}