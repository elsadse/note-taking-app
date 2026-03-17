import type { ComponentType } from "react"
import { ArchiveIcon } from "./icons/ArchiveIcon"
import { HomeIcon } from "./icons/HomeIcon"
import { SearchIcon } from "./icons/SearchIcon"
import { SettingsIcon } from "./icons/SettingsIcon"
import { TagIcon } from "./icons/TagIcon"


export function MenuBar({ itemSelected }: { itemSelected: string }) {
    return (
        <div className="flex flex-row px-4 py-3 justify-between bg-neutral-0 md:px-8">
            <MenuBarItem icon={{Icon:HomeIcon, css:"fill"}} textIcon="Home" isSelected={itemSelected==="Home"}/>
            <MenuBarItem icon={{Icon:SearchIcon, css:"stroke"}} textIcon="Search" />
            <MenuBarItem icon={{Icon:ArchiveIcon, css:"stroke"}} textIcon="Archived" />
            <MenuBarItem icon={{Icon:TagIcon, css:"stroke"}} textIcon="Tags" />
            <MenuBarItem icon={{Icon:SettingsIcon, css:"fill"}} textIcon="Settings" />
        </div>
    )
}

type MenuBarItemProps={
    icon: {
        Icon: ComponentType<{ className?: string }>,
        css: "fill" | "stroke"
    },
    textIcon: string,
    isSelected?:boolean
}

export function MenuBarItem({ icon, textIcon, isSelected }:MenuBarItemProps) {
    return (
        <button className={`flex flex-col gap-y-1 px-4 md:px-6 py-1 items-center rounded-4 ${isSelected?"bg-neutral-blue-50":""}`}>
            <icon.Icon className={`size-6 ${isSelected?`${icon.css}-neutral-blue-500`:`${icon.css}-neutral-600`}`} />
            <span className={`sans-serif-text-preset-6 ${isSelected?"text-neutral-blue-500":"text-neutral-600"} text-center hidden md:block`}>{textIcon}</span>
        </button>
    )
}