import { useNavigate } from "react-router"
import { Divider } from "../Divider"
import { ChainIcon } from "../icons/ChainIcon"
import { ChevronRightIcon } from "../icons/ChevronRightIcon"
import { LogoutIcon } from "../icons/LogoutIcon"
import { SansSerifIcon } from "../icons/SansSerifIcon"
import { SunIcon } from "../icons/SunIcon"
import { useGlobalStore, type GlobalStore } from "../../hooks/useGlobalStore"
import { useShallow } from "zustand/shallow"

export function SettingsMenu() {

    const { setSettingMenuItemSelected } = useGlobalStore(
        useShallow((store: GlobalStore) => ({
            setSettingMenuItemSelected: store.setSettingMenuItemSelected,
        }))
    )

    const navigate = useNavigate()

    return (
        <div className="flex flex-col gap-y-2 pb-5">
            <MenuItem
                onClick={() => {
                    setSettingMenuItemSelected("ColorTheme")
                    navigate("/colorTheme")
                }}
                titleMenu="Color Theme" icon={{ Icon: SunIcon, css: "stroke" }} iconLeft={{ Icon: ChevronRightIcon, css: "fill" }} />
            <MenuItem
                onClick={() => {
                    setSettingMenuItemSelected("FontTheme")
                    navigate("/fontTheme")
                }}
                titleMenu="Font Theme" icon={{ Icon: SansSerifIcon, css: "fill" }} />
            <MenuItem
                onClick={() => {
                    setSettingMenuItemSelected("ChangePassword")
                    //navigate("/fontTheme")
                }}
                titleMenu="Change Password" icon={{ Icon: ChainIcon, css: "stroke" }} />
            <Divider />
            <MenuItem
                onClick={() => {
                    setSettingMenuItemSelected("Logout")
                }}
                titleMenu="Logout" icon={{ Icon: LogoutIcon, css: "stroke" }} />
        </div>
    )
}

type MenuItemProps = {
    icon: {
        Icon: React.ComponentType<{ className?: string }>,
        css: "fill" | "stroke"
    },
    titleMenu: string,
    iconLeft?: {
        Icon: React.ComponentType<{ className?: string }>,
        css: "fill" | "stroke"
    },
    isSelected?: boolean,
    onClick?: () => void
}

export function MenuItem({ icon, titleMenu, iconLeft, isSelected, onClick }: MenuItemProps) {
    return (
        <div
            onClick={onClick}
            className={`flex flex-row items-center justify-between gap-x-2 p-2 rounded-6 ${isSelected ? "bg-neutral-100" : "bg-neutral-0"}`}>
            <div className="flex flex-row items-center gap-x-2">
                <icon.Icon className={`size-5 ${icon.css}-neutral-950`} />
                <span className="sans-serif-text-preset-4 text-neutral-950 text-left">{titleMenu}</span>
            </div>
            {iconLeft && <iconLeft.Icon className={`size-5 ${iconLeft.css}-neutral-950`} />}
        </div>
    )
}