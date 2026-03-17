import { Link } from "react-router";
import { ArrowLeft } from "../icons/ArrowLeft";
import { ArchiveIcon } from "../icons/ArchiveIcon";
import { DeleteIcon } from "../icons/DeleteIcon";

export function PageHeaderControl() {
    return (
        <div className="flex flex-row justify-between">
            <Link to="/">
                <div className="flex flex-row gap-x-1">
                    <ArrowLeft className="fill-neutral-600 size-4.5" />
                    <span className="sans-serif-text-preset-5 text-neutral-600">Go Back</span>
                </div>
            </Link>
            <div className="flex flex-row gap-x-4">
                <DeleteIcon className="size-4.5 stroke-neutral-600" />
                <ArchiveIcon className="size-4.5" />
                <span className="sans-serif-text-preset-5 text-neutral-600">Cancel</span>
                <span className="sans-serif-text-preset-5 text-neutral-blue-500">Save Note</span>
            </div>
        </div>
    )
}