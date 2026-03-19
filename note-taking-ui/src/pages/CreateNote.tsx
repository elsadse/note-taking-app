import { Divider } from "../components/Divider";
import { CircleClockIcon } from "../components/icons/CircleClockIcon";
import { TagIcon } from "../components/icons/TagIcon";
import { PageHeaderControl } from "../components/pageHeader/PageHeaderControl";
import { useBreakpoint } from "../hooks/useBreakPoint";

export function CreateNote() {
    const bp = useBreakpoint()

    return (
        <div className="flex flex-col gap-y-3 px-4 py-5 bg-neutral-0 flex-1 overflow-hidden
                        md:gap-y-4 md:px-8 md:py-6
                    ">
            {bp !== "xl" && (
                <>
                    <PageHeaderControl isCreate={true} /> 
                    <Divider />
                </>
            )}

            <form className="w-full flex flex-col gap-y-3 bg-neutral-0 flex-1 overflow-hidden md:gap-y-4">
                <input className="sans-serif-text-preset-1 text-neutral-950 placeholder:sans-serif-text-preset-1 placeholder:text-neutral-950"
                    type="text" name="title" placeholder="Enter a title..." />
                <InputPropertyItem />
                <Divider />
                <textarea className="sans-serif-text-preset-5 text-neutral-800 flex-1 overflow-hidden"
                    defaultValue="" placeholder="Start typing your note here">
                </textarea>
            </form>
        </div>
    )
}



export function InputPropertyItem() {
    return (
        <div className="flex flex-col gap-y-1">
            <div className="flex flex-row gap-x-2">
                <div className="w-28.75 flex flex-row gap-x-2 py-1">
                    <TagIcon className="stroke-neutral-700 size-4" />
                    <span className="sans-serif-text-preset-6 text-neutral-700">Tags</span>
                </div>
                <input className="w-full sans-serif-text-preset-6 text-neutral-950 placeholder:sans-serif-text-preset-6 placeholder:text-neutral-400 focus:rounded-md"
                    type="text" name="tags" placeholder="Add tags separated by commas" />
            </div>
            <div className="flex flex-row gap-x-2">
                <div className="w-28.75 flex flex-row gap-x-2 py-1">
                    <CircleClockIcon className="size-4" />
                    <span className="sans-serif-text-preset-6 text-neutral-700">Last edited</span>
                </div>
                <span className="w-full sans-serif-text-preset-6 text-neutral-400 text-left py-1">Not yet started</span>
            </div>
        </div>
    )
}