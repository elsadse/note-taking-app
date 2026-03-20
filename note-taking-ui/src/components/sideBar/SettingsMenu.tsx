import { useNavigate } from "react-router"
import { Divider } from "../Divider"
import { ChainIcon } from "../icons/ChainIcon"
import { ChevronRightIcon } from "../icons/ChevronRightIcon"
import { LogoutIcon } from "../icons/LogoutIcon"
import { SansSerifIcon } from "../icons/SansSerifIcon"
import { SunIcon } from "../icons/SunIcon"
import { useGlobalStore, type GlobalStore, type SettingsMenuItem } from "../../hooks/useGlobalStore"
import { useShallow } from "zustand/shallow"
import { useState } from "react"
import { useAuthContext } from "../../hooks/useAuthContext"

export function SettingsMenu() {

    const { setSettingMenuItemSelected } = useGlobalStore(
        useShallow((store: GlobalStore) => ({
            setSettingMenuItemSelected: store.setSettingMenuItemSelected,
        }))
    )
    const { logout } = useAuthContext()

    const [isSelected, setIsSelected]= useState<SettingsMenuItem>("ColorTheme")

    const navigate = useNavigate()

    return (
        <div className="flex flex-col gap-y-2 pb-5">
            <MenuItem
                onClick={() => {
                    setSettingMenuItemSelected("ColorTheme")
                    setIsSelected("ColorTheme")
                    navigate("/colorTheme")
                }}
                titleMenu="Color Theme" icon={{ Icon: SunIcon, css: "stroke" }} 
                isSelected={isSelected==="ColorTheme"}/>
            <MenuItem
                onClick={() => {
                    setSettingMenuItemSelected("FontTheme")
                    setIsSelected("FontTheme")
                    navigate("/fontTheme")
                }}
                titleMenu="Font Theme" icon={{ Icon: SansSerifIcon, css: "fill" }} 
                isSelected={isSelected==="FontTheme"}/>
            <MenuItem
                onClick={() => {
                    setSettingMenuItemSelected("ChangePassword")
                    setIsSelected("ChangePassword")
                    navigate("/changePassword")
                }}
                titleMenu="Change Password" icon={{ Icon: ChainIcon, css: "stroke" }} 
                isSelected={isSelected==="ChangePassword"}/>
            <Divider />
            <MenuItem
                onClick={logout}
                titleMenu="Logout" icon={{ Icon: LogoutIcon, css: "stroke" }} isSelected={false}/>
        </div>
    )
}

type MenuItemProps = {
    icon: {
        Icon: React.ComponentType<{ className?: string }>,
        css: "fill" | "stroke"
    },
    titleMenu: string,
    isSelected?: boolean,
    onClick?: () => void
}

export function MenuItem({ icon, titleMenu, isSelected, onClick }: MenuItemProps) {
    return (
        <div
            onClick={onClick}
            className={`flex flex-row items-center justify-between gap-x-2 p-2 rounded-6 cursor-pointer ${isSelected ? "bg-neutral-100" : "bg-neutral-0"} hover:bg-neutral-100`}>
            <div className="flex flex-row items-center gap-x-2">
                <icon.Icon className={`size-5 ${icon.css}-neutral-950`} />
                <span className="sans-serif-text-preset-4 text-neutral-950 text-left">{titleMenu}</span>
            </div>
            {isSelected && <ChevronRightIcon className={`size-5 fill-neutral-950`} />}
        </div>
    )
}