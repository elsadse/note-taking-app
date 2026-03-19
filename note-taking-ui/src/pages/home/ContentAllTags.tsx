import { PrimaryButton } from "../../components/button/PrimaryButton"
import { Divider } from "../../components/Divider"
import { PlusIcon } from "../../components/icons/PlusIcon"
import { SideBarItem } from "../../components/sideBar/SideBarNavigation"

export function ContentAllTags() {

    const tags = ["Cooking", "Dev", "Ideas", "Fitness", "Health", "Personal", "React", "Recipes", "Shopping", "Travel", "TypeScrit"]

    return (
        <div className="flex flex-col gap-y-4 px-4 py-5 md:px-8 md:py-6 bg-neutral-0 flex-1 overflow-hidden">
            <span className="sans-serif-text-preset-1 text-neutral-950 text-left">Tags</span>
            <div className="flex flex-col gap-y-4 overflow-y-auto">
                {tags.map((tag, tagIndex) => (
                    <div className="flex flex-col">
                        <SideBarItem key={tagIndex} tag={tag} />
                        {tagIndex < tags.length - 1 && <Divider />}
                    </div>
                ))}
            </div>
            <div className="absolute top-[80vh] right-12">
                <PrimaryButton icon={{ Icon: PlusIcon, css: "fill" }} className="rounded-full size-12" iconClassName="size-4.5" />
            </div>
        </div>
    )
}