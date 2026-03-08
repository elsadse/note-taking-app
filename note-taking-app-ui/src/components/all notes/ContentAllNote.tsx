import { Link } from "react-router"
import iconPlus from "../../assets/images/icon-plus.svg"

export function ContentAllNote() {
    return (
        <div className="relative flex flex-col gap-y-4 px-4 py-5 bg-neutral-0 h-[85vh] max-h-[85vh]">
            <span className="sans-serif-text-preset-1 text-neutral-950">All Notes</span>
            <div className="flex flex-col gap-y-4 overflow-y-auto">
                <Link to="/note"><NoteItem /></Link>
                <div className="h-0.25 bg-neutral-200 shrink-0" />
                <Link to="/note"><NoteItem /></Link>
                <div className="h-0.25 bg-neutral-200 shrink-0" />
                <Link to="/note"><NoteItem /></Link>
            </div>
            <button className="absolute bottom-0 right-4 flex justify-center items-center bg-neutral-blue-500 size-12 rounded-3xl">
                <img src={iconPlus} alt="icon add" className="size-4.5" />
            </button>
        </div>
    )
}

export function NoteItem() {
    return (
        <div className="flex flex-col gap-y-3 p-2">
            <span className="sans-serif-text-preset-3 text-neutral-950">React Performance Optimization</span>
            <div className="flex flex-row gap-x-1">
                <span className="px-1.5 py-0.5 rounded-sm text-neutral-950 bg-neutral-200">
                    Dev
                </span>
                <span className="px-1.5 py-0.5 rounded-sm text-neutral-950 bg-neutral-200">
                    React
                </span>
            </div>
            <span className="sans-serif-text-preset-6 text-neutral-700">29 Oct 2024</span>
        </div>
    )
}