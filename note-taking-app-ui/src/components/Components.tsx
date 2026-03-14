import { BorderButton } from "./Button/BorderButton";
import { PrimaryButton } from "./Button/PrimaryButton";
import { SecondaryButton } from "./Button/SecondaryButton";
import { RefreshLeftIcon } from "./icons/RefreshLeftIcon";
import { Logo } from "./Logo";

export function Components(){
    return(
        <div className="flex flex-col gap-y-2">
            <Logo/>
            <PrimaryButton titleButton="Primary Button" isDisabled={false}/>
            <SecondaryButton titleButton="Secondary Button" isDisabled={true}/>
            <BorderButton titleButton="Border Button" Icon={RefreshLeftIcon} isDisabled={false}/>
        </div>
    )
}