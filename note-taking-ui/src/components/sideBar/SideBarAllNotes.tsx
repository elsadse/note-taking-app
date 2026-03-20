import { useShallow } from "zustand/shallow"
import { PrimaryButton } from "../button/PrimaryButton"
import { PlusIcon } from "../icons/PlusIcon"
import { useGlobalStore, type GlobalStore } from "../../hooks/useGlobalStore"
import { useNavigate } from "react-router"
import { useState } from "react"
import { Divider } from "../Divider"

export function SideBarAllNotes() {

    const { sideBarItemSelected } = useGlobalStore(
        useShallow((store: GlobalStore) => ({
            sideBarItemSelected: store.sideBarItemSelected,
        }))
    )

    const navigate = useNavigate()

    const [isDiplayNewNote, setIsDiplayNewNote] = useState<boolean>(false)

    const notes = [
        {
            title: "React Performance Optimization",
            tags: ["Dev", "React"],
            date: "29 Oct 2024",
            selected: false
        },
        {
            title: "Japan Travel Planning",
            tags: ["Travel", "Japan", "Personal"],
            date: "28 Oct 2024",
            selected: false
        },
        {
            title: "Favorite Pasta Recipes",
            tags: ["Cooking", "Recipes"],
            date: "27 Oct 2024",
            selected: false
        },
        {
            title: "TypeScript Migration Guide",
            tags: ["Dev", "React", "TypeScript"],
            date: "26 Oct 2024",
            selected: false
        },
    ]

    return (
        <div className="flex flex-col gap-y-4 pl-8 pr-4 py-5 bg-neutral-0 border-r border-neutral-200 h-full">
            <div
                onClick={() => {
                    setIsDiplayNewNote(true)
                    navigate("/createNote")
                }}>
                <PrimaryButton titleButton="Create New Note" icon={{ Icon: PlusIcon, css: "fill" }} />
            </div>
            {sideBarItemSelected === "Archive" && <span className="text-neutral-700 sans-serif-text-preset-5">All your archived notes are stored here. You can restore or delete them anytime.</span>}
            <div className="flex flex-col gap-y-1 overflow-y-auto">
                {isDiplayNewNote && (
                    <div className="p-2 rounded-6 bg-neutral-100">
                        <span className="sans-serif-text-preset-3 text-neutral-950">Untitled Note</span>
                    </div>
                )}
                {notes.map((note, noteIndex) => (
                    <div key={noteIndex} className="flex flex-col">
                        <NoteItem key={noteIndex} title={note.title} tags={note.tags} date={note.date} isSelected={note.selected} />
                        {noteIndex < notes.length - 1 && <Divider/>}
                    </div>
                ))}
            </div>
        </div>
    )
}


type NoteItemProps = {
    title: string,
    tags: string[],
    date: string,
    isSelected: boolean
}

export function NoteItem({ title, tags, date, isSelected }: NoteItemProps) {
    return (
        <div className={`flex flex-col gap-y-3 p-2 ${isSelected ? "bg-neutral-100" : ""}`}>
            <span className="sans-serif-text-preset-3 text-neutral-950">{title}</span>
            <div className="flex flex-row gap-x-1">
                {tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-1.5 py-0.5 rounded-sm text-neutral-950 bg-neutral-200">
                        {tag}
                    </span>
                ))}
            </div>
            <span className="sans-serif-text-preset-6 text-neutral-700">{date}</span>
        </div>
    )
}
