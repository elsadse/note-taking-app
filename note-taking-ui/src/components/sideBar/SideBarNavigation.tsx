import { ArchiveIcon } from "../icons/ArchiveIcon";
import { ChevronRightIcon } from "../icons/ChevronRightIcon";
import { HomeIcon } from "../icons/HomeIcon";
import { TagIcon } from "../icons/TagIcon";
import { Logo } from "../Logo";

export function SideBarNavigation() {

    const tags = ["Cooking", "Dev", "Ideas", "Fitness", "Health", "Personal", "React", "Recipes", "Shopping", "Travel", "TypeScrit"]

    return (
        <div className="w-68 h-full flex flex-col items-center gap-y-4 px-4 py-3 border-r border-neutral-200">
            <Logo />
            <div className="flex flex-col gap-y-2">
                <div className="flex flex-col gap-y-1 justify-between">
                    <div className="flex flex-row gap-x-2 px-3 py-2.5 rounded-8 bg-neutral-100 items-center justify-between">
                        <HomeIcon className="size-5 fill-neutral-blue-500" />
                        <span className="w-full sans-serif-text-preset-4 text-neutral-950">All Notes</span>
                        <ChevronRightIcon className="size-5 fill-neutral-950" />
                    </div>
                    <div className="flex flex-row gap-x-2 px-3 py-2.5 rounded-8 items-center justify-between">
                        <ArchiveIcon className="size-5 stroke-neutral-700" />
                        <p className="w-full sans-serif-text-preset-4 text-neutral-700">Archived Notes</p>
                    </div>
                </div>
                <div className="h-0.25 bg-neutral-200 shrink-0" />
                <span className="py-2 sans-serif-text-preset-4 text-neutral-500">
                    Tags
                </span>
                <div className="flex flex-col gap-y-1 overflow-y-auto">
                    {tags.map((tag, tagIndex) => (
                        <SideBarItem key={tagIndex} tag={tag}/>
                    ))}
                </div>
            </div>
        </div>
    )
}


export function SideBarItem({ tag }: { tag: string }) {
    return (
        <div className="flex flex-row gap-x-2 py-2.5 rounded-8 items-center">
            <TagIcon className="size-5 stroke-neutral-700" />
            <span className="w-full sans-serif-text-preset-4 text-neutral-700">{tag}</span>
        </div>
    )
}