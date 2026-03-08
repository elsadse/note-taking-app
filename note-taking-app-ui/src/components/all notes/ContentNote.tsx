import { ArrowLeft } from "../icons/ArrowLeft"
import iconDelete from "../../assets/images/icon-delete.svg"
import { TagIcon } from "../icons/TagIcon"
import { ArchiveIcon } from "../icons/ArchiveIcon"
import { TimeIcon } from "../icons/TimeIcon"
import { Link } from "react-router"


export function ContentNote() {

    return (
        <div className="flex flex-col gap-y-3 px-4 py-5 bg-neutral-0
                    md:gap-y-4 md:px-8 md:py-6
                "
            >
            <ContentHeader />
            <span className="sans-serif-text-preset-1 text-neutral-950">React Performance Optimization</span>
            <PropertyItem />
            <div className="h-0.25 bg-neutral-200" />
            <textarea className="sans-serif-text-preset-5 text-neutral-800 h-[57vh]"
                defaultValue="Key performance optimization techniques:

                1. Code Splitting
                - Use React.lazy() for route-based splitting
                - Implement dynamic imports for heavy components

                2.	Memoization
                - useMemo for expensive calculations
                - useCallback for function props
                - React.memo for component optimization

                3. Virtual List Implementation
                - Use react-window for long lists
                - Implement infinite scrolling

                TODO: Benchmark current application and identify bottlenecks">
            </textarea>
        </div>
    )

}


export function ContentHeader() {
    return (
        <div className="flex flex-col gap-y-3">
            <div className="flex flex-row justify-between">
                <Link to="/">
                    <div className="flex flex-row gap-x-1">
                        <ArrowLeft className="fill-neutral-600 size-4.5" />
                        <span className="sans-serif-text-preset-5 text-neutral-600">Go Back</span>
                    </div>
                </Link>
                <div className="flex flex-row gap-x-4">
                    <img src={iconDelete} className="size-4.5" />
                    <ArchiveIcon className="size-4.5" />
                    <span className="sans-serif-text-preset-5 text-neutral-600">Cancel</span>
                    <span className="sans-serif-text-preset-5 text-neutral-blue-500">Save Note</span>
                </div>
            </div>
            <div className="h-0.25 bg-neutral-200" />
        </div>
    )
}

export function PropertyItem() {
    return (
        <div className="flex flex-col gap-y-1">
            <div className="flex flex-row gap-x-2">
                <div className="w-28.75 flex flex-row gap-x-1.5 py-1">
                    <TagIcon className="stroke-neutral-700 size-4" />
                    <span className="sans-serif-text-preset-6 text-neutral-700">Tags</span>
                </div>
                <span className="sans-serif-text-preset-6 text-neutral-950 text-center py-1">Dev, React</span>
            </div>
            <div className="flex flex-row gap-x-2">
                <div className="w-28.75 flex flex-row gap-x-1.5 py-1">
                    <TimeIcon className="size-4" />
                    <span className="sans-serif-text-preset-6 text-neutral-700">Last edited</span>
                </div>
                <span className="sans-serif-text-preset-6 text-neutral-700 text-center py-1">29 Oct 2024</span>
            </div>
        </div>
    )
}
