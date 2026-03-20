import { useState } from "react";
import { ArchiveIcon } from "../icons/ArchiveIcon";
import { ChevronRightIcon } from "../icons/ChevronRightIcon";
import { HomeIcon } from "../icons/HomeIcon";
import { TagIcon } from "../icons/TagIcon";
import { Logo } from "../Logo";
import { useGlobalStore, type GlobalStore } from "../../hooks/useGlobalStore";
import { useShallow } from "zustand/shallow";

export function SideBarNavigation() {
    const [selectedItem, setSelectedItem] = useState<"Home" | "Archive">("Home")

    const { setSideBarItemSelected } = useGlobalStore(
        useShallow((store: GlobalStore) => ({
            setSideBarItemSelected: store.setSideBarItemSelected,
        }))
    )

    const tags = ["Cooking", "Dev", "Ideas", "Fitness", "Health", "Personal", "React", "Recipes", "Shopping", "Travel", "TypeScrit"]

    return (
        <div className="w-68 h-full flex flex-col items-center gap-y-4 px-4 py-3 border-r border-neutral-200">
            <Logo />
            <div className="flex flex-col gap-y-2">
                <div className="flex flex-col gap-y-1 justify-between">
                    <div
                        onClick={() => {
                            if (selectedItem === "Archive") {
                                setSelectedItem("Home")
                                setSideBarItemSelected("Home")
                            }
                        }}
                        className={`flex flex-row gap-x-2 px-3 py-2.5 rounded-8 items-center justify-between ${selectedItem === "Home" ? "bg-neutral-100" : ""}`}>
                        <HomeIcon className={`size-5 ${selectedItem === "Home" ? "fill-neutral-blue-500" : "fill-neutral-700"}`} />
                        <span className="w-full sans-serif-text-preset-4 text-neutral-950">All Notes</span>
                        {selectedItem === "Home" && <ChevronRightIcon className="size-5 fill-neutral-950" />}
                    </div>
                    <div
                        onClick={() => {
                            if (selectedItem === "Home") {
                                setSelectedItem("Archive")
                                setSideBarItemSelected("Archive")
                            }
                        }}
                        className={`flex flex-row gap-x-2 px-3 py-2.5 rounded-8 items-center justify-between ${selectedItem === "Archive" ? "bg-neutral-100" : ""}`}>
                        <ArchiveIcon className={`size-5 ${selectedItem === "Archive" ? "stroke-neutral-blue-500" : "stroke-neutral-700"}`} />
                        <span className="w-full sans-serif-text-preset-4 text-neutral-700">Archived Notes</span>
                        {selectedItem === "Archive" && <ChevronRightIcon className="size-5 fill-neutral-950" />}
                    </div>
                </div>
                <div className="h-0.25 bg-neutral-200 shrink-0" />
                <span className="py-2 sans-serif-text-preset-4 text-neutral-500">
                    Tags
                </span>
                <div className="flex flex-col gap-y-1 overflow-y-auto">
                    {tags.map((tag, tagIndex) => (
                        <SideBarItem key={tagIndex} tag={tag} />
                    ))}
                </div>
            </div>
        </div>
    )
}


export function SideBarItem({ tag }: { tag: string }) {
    const { tagFilters, addFilter, removeFilter } = useGlobalStore(
        useShallow((store: GlobalStore) => ({
            tagFilters: store.tagFilters,
            addFilter: store.addTagFilter,
            removeFilter: store.removeTagFilter,
        }))
    )

    const isSelected = tagFilters.includes(tag)

    return (
        <div
            onClick={() => {
                if (isSelected) {
                    removeFilter(tag)
                } else {
                    addFilter(tag)
                }
            }}
            className={`flex flex-row gap-x-2 py-2.5 rounded-8 items-center ${isSelected ? "bg-neutral-100" : ""}`}>
            <TagIcon className={`size-5 ${isSelected ? "stroke-neutral-blue-500" : "stroke-neutral-700"}`} />
            <span className="w-full sans-serif-text-preset-4 text-neutral-700">{tag}</span>
            {isSelected && <ChevronRightIcon className="size-5 fill-neutral-950 hidden xl:block" />}
        </div>
    )
}