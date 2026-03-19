import { Link } from "react-router";
import { ArrowLeft } from "../../../components/icons/ArrowLeft";
import { PrimaryButton } from "../../../components/button/PrimaryButton";
import { ShowIcon } from "../../../components/icons/ShowIcon";
import { InputTypeGroup } from "../../../components/input/InputTypeGroup";

export function SettingsChangePassword() {
    return (
        <div className="flex flex-col gap-y-4 px-4 py-5 md:px-8 md:py-6 bg-neutral-0 flex-1">
            <div className="flex flex-col gap-y-5">
                <div className="flex flex-col gap-y-3">
                    <Link to="/settings" className="block xl:hidden">
                        <div className="flex flex-row gap-x-1">
                            <ArrowLeft className="fill-neutral-600 size-4.5" />
                            <span className="sans-serif-text-preset-4 text-neutral-600">Settings</span>
                        </div>
                    </Link>
                    <span className="sans-serif-text-preset-1 text-neutral-950">Change Password</span>
                </div>
                <div className="flex flex-col gap-y-6">
                    <InputTypeGroup name="oldPassword" placeholder="" titleLabel="Old Password" type="password" icon={{ Icon: ShowIcon, css: "fill" }}/>
                    <InputTypeGroup name="newPassword" placeholder="" titleLabel="New Password" type="password"  textError="At least 8 characters" isError={false} icon={{ Icon: ShowIcon, css: "fill" }}/>
                    <InputTypeGroup name="confirmPassword" placeholder="" titleLabel="Confirm Password" type="password" icon={{ Icon: ShowIcon, css: "fill" }}/>
                </div>
                <div className="flex justify-end">
                    <PrimaryButton titleButton="Save Password" />
                </div>
            </div>
        </div>
    )
}