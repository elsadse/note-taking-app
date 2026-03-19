import { useState, type ComponentType } from "react"
import { ArchiveIcon } from "./icons/ArchiveIcon"
import { HomeIcon } from "./icons/HomeIcon"
import { SearchIcon } from "./icons/SearchIcon"
import { SettingsIcon } from "./icons/SettingsIcon"
import { TagIcon } from "./icons/TagIcon"
import { useGlobalStore, type GlobalStore } from "../hooks/useGlobalStore"
import { useShallow } from "zustand/shallow"
import { useNavigate } from "react-router"


export function MenuBar() {
    const [selectedItem, setSelectedItem] = useState<"Home" | "Archive" | "Search" | "Tags" | "Settings">("Home")

    const { setMenuItemSelected } = useGlobalStore(
        useShallow((store: GlobalStore) => ({
            setMenuItemSelected: store.setMenuItemSelected,
        }))
    )

    const navigate= useNavigate()

    return (
        <div className="flex flex-row px-4 py-3 justify-between bg-neutral-0 md:px-8">
            <MenuBarItem
                onClick={() => {
                    if (selectedItem !== "Home") {
                        setSelectedItem("Home")
                        setMenuItemSelected("Home")
                    }
                    navigate("/")
                }}
                icon={{ Icon: HomeIcon, css: "fill" }} textIcon="Home" isSelected={selectedItem === "Home"} />
            <MenuBarItem 
                onClick={() => {
                    if (selectedItem !== "Search") {
                        setSelectedItem("Search")
                        setMenuItemSelected("Search")
                        navigate("/search")
                    }
                }}
                icon={{ Icon: SearchIcon, css: "stroke" }} textIcon="Search" isSelected={selectedItem === "Search"}/>
            <MenuBarItem 
                onClick={() => {
                    if (selectedItem !== "Archive") {
                        setSelectedItem("Archive")
                        setMenuItemSelected("Archive")
                        navigate("/")
                    }
                }}
                icon={{ Icon: ArchiveIcon, css: "stroke" }} textIcon="Archived" isSelected={selectedItem === "Archive"}/>
            <MenuBarItem
                onClick={() => {
                    if (selectedItem !== "Tags") {
                        setSelectedItem("Tags")
                        setMenuItemSelected("Tags")
                    }
                    navigate("/tags")
                }} 
                icon={{ Icon: TagIcon, css: "stroke" }} textIcon="Tags" isSelected={selectedItem === "Tags"}/>
            <MenuBarItem 
                onClick={() => {
                    if (selectedItem !== "Settings") {
                        setSelectedItem("Settings")
                        setMenuItemSelected("Settings")
                    }
                }} 
                icon={{ Icon: SettingsIcon, css: "fill" }} textIcon="Settings" isSelected={selectedItem === "Settings"}/>
        </div>
    )
}

type MenuBarItemProps = {
    icon: {
        Icon: ComponentType<{ className?: string }>,
        css: "fill" | "stroke"
    },
    textIcon: string,
    isSelected?: boolean,
    onClick?: () => void,
}

export function MenuBarItem({ icon, textIcon, isSelected, onClick }: MenuBarItemProps) {
    return (
        <button onClick={onClick}
            className={`flex flex-col gap-y-1 px-4 md:px-6 py-1 items-center rounded-4 ${isSelected ? "bg-neutral-blue-50" : ""}`}>
            <icon.Icon className={`size-6 ${isSelected ? `${icon.css}-neutral-blue-500` : `${icon.css}-neutral-600`}`} />
            <span className={`sans-serif-text-preset-6 ${isSelected ? "text-neutral-blue-500" : "text-neutral-600"} text-center hidden md:block xl:hidden`}>{textIcon}</span>
        </button>
    )
}