import { Divider } from "../../components/Divider"
import { CircleClockIcon } from "../../components/icons/CircleClockIcon"
import { TagIcon } from "../../components/icons/TagIcon"
import { PageHeaderControl } from "../../components/pageHeader/PageHeaderControl"

export function ContentNote() {

    return (
        <div className="flex flex-col gap-y-3 px-4 py-5 bg-neutral-0 flex-1 overflow-hidden
                md:gap-y-4 md:px-8 md:py-6
            ">
            <PageHeaderControl />
            <span className="sans-serif-text-preset-1 text-neutral-950">React Performance Optimization</span>
            <PropertyItem />
            <Divider/>
            <textarea className="sans-serif-text-preset-5 text-neutral-800 flex-1 overflow-hidden"
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
                    <CircleClockIcon className="size-4" />
                    <span className="sans-serif-text-preset-6 text-neutral-700">Last edited</span>
                </div>
                <span className="sans-serif-text-preset-6 text-neutral-700 text-center py-1">29 Oct 2024</span>
            </div>
        </div>
    )
}
