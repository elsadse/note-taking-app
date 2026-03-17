import { Link } from "react-router";
import { NoteItem } from "../../components/sideBar/SideBarAllNotes";
import { Divider } from "../../components/Divider";
import { PlusIcon } from "../../components/icons/PlusIcon";
import { PrimaryButton } from "../../components/button/PrimaryButton";

export function ContentAllNote() {

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
    ]

    return (
        <div className="flex flex-col gap-y-4 px-4 py-5 bg-neutral-0 flex-1 overflow-hidden">
            <span className="sans-serif-text-preset-1 text-neutral-950">All Notes</span>
            <div className="flex flex-col gap-y-4 overflow-y-auto">
                {notes.map((note, noteIndex) => (
                    <div className="flex flex-col">
                        <Link to="/note">
                            <NoteItem key={noteIndex} title={note.title} tags={note.tags} date={note.date} isSelected={note.selected} />
                        </Link>
                        {noteIndex < notes.length - 1 && <Divider />}
                    </div>
                ))}
            </div>
            <div className="absolute top-[85vh] right-12">
                <PrimaryButton icon={{ Icon: PlusIcon, css: "fill" }} className="rounded-full size-12" iconClassName="size-4.5" />
            </div>
        </div>
    )
}