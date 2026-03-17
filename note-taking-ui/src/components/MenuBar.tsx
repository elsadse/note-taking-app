import type { ComponentType } from "react"
import { ArchiveIcon } from "./icons/ArchiveIcon"
import { HomeIcon } from "./icons/HomeIcon"
import { SearchIcon } from "./icons/SearchIcon"
import { SettingsIcon } from "./icons/SettingsIcon"
import { TagIcon } from "./icons/TagIcon"

export function MenuBar() {
    return (
        <div className="flex flex-row px-4 py-3 justify-between md:px-8">
            <MenuBarItem Icon={HomeIcon} textIcon="Home" />
            <MenuBarItem Icon={SearchIcon} textIcon="Search" />
            <MenuBarItem Icon={ArchiveIcon} textIcon="Archived" />
            <MenuBarItem Icon={TagIcon} iconClassName="stroke-neutral-600" textIcon="Tags" />
            <MenuBarItem Icon={SettingsIcon} textIcon="Settings" />
        </div>
    )
}


export function MenuBarItem({ Icon, iconClassName, textIcon }: { Icon: ComponentType<{ className?: string }>, textIcon: string, iconClassName?: string }) {
    return (
        <button className="flex flex-col gap-y-1 py-1 items-center">
            <Icon className={`size-6 ${iconClassName}`} />
            <span className="sans-serif-text-preset-6 text-neutral-600 text-center hidden md:block">{textIcon}</span>
        </button>
    )
}