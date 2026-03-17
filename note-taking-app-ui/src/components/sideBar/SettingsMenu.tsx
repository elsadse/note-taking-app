import { ChainIcon } from "../icons/ChainIcon"
import { ChevronRightIcon } from "../icons/ChevronRightIcon"
import { LogoutIcon } from "../icons/LogoutIcon"
import { SansSerifIcon } from "../icons/SansSerifIcon"
import { SunIcon } from "../icons/SunIcon"

export function SettingsMenu() {
    return (
        <div className="w-64.5 flex flex-col gap-y-2 py-5 pl-8 pr-4 border border-neutral-200">
            <MenuItem titleMenu="Color Theme" icon={{ Icon: SunIcon, css: "stroke" }} iconLeft={{ Icon: ChevronRightIcon, css: "fill" }} isSelected={true}/>
            <MenuItem titleMenu="Font Theme" icon={{ Icon: SansSerifIcon, css: "fill" }} />
            <MenuItem titleMenu="Change Password" icon={{ Icon: ChainIcon, css: "stroke" }} />
            <MenuItem titleMenu="Logout" icon={{ Icon: LogoutIcon, css: "stroke" }} />
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
    isSelected?: boolean
}

export function MenuItem({ icon, titleMenu, iconLeft, isSelected }: MenuItemProps) {
    return (
        <div className={`flex flex-row items-center justify-between gap-x-2 p-2 rounded-6 ${isSelected?"bg-neutral-100":"bg-neutral-0"}`}>
            <div className="flex flex-row items-center gap-x-2">
                <icon.Icon className={`size-5 ${icon.css}-neutral-950`} />
                <span className="sans-serif-text-preset-4 text-neutral-950 text-left">{titleMenu}</span>
            </div>
            {iconLeft && <iconLeft.Icon className={`size-5 ${iconLeft.css}-neutral-950`} />}
        </div>
    )
}