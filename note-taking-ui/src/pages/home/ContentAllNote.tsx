import { Link, useNavigate } from "react-router";
import { NoteItem } from "../../components/sideBar/SideBarAllNotes";
import { Divider } from "../../components/Divider";
import { PlusIcon } from "../../components/icons/PlusIcon";
import { PrimaryButton } from "../../components/button/PrimaryButton";
import { useGlobalStore, type GlobalStore } from "../../hooks/useGlobalStore";
import { useShallow } from "zustand/shallow";

export function ContentAllNote() {

    const { sideBarItemSelected, menuItemSelected } = useGlobalStore(
        useShallow((store: GlobalStore) => ({
            sideBarItemSelected: store.sideBarItemSelected,
            menuItemSelected: store.menuItemSelected,
        }))
    )

    const navigate= useNavigate()

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
            {sideBarItemSelected === "Home" && menuItemSelected === "Home" && <span className="sans-serif-text-preset-1 text-neutral-950">All Notes</span>}
            {sideBarItemSelected === "Archive" || menuItemSelected === "Archive" && <span className="sans-serif-text-preset-1 text-neutral-950">Archived Notes</span>}
            {sideBarItemSelected === "Archive" || menuItemSelected === "Archive" && <span className="text-neutral-700 sans-serif-text-preset-5">All your archived notes are stored here. You can restore or delete them anytime.</span>}
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
            <div className="absolute top-[80vh] right-12" onClick={()=>navigate("/createNote")}>
                <PrimaryButton icon={{ Icon: PlusIcon, css: "fill" }} className="rounded-full size-12" iconClassName="size-4.5" />
            </div>
        </div>
    )
}