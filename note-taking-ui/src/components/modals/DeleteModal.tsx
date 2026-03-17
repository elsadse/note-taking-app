import { PrimaryButton } from "../button/PrimaryButton";
import { SecondaryButton } from "../button/SecondaryButton";
import { DeleteIcon } from "../icons/DeleteIcon";


export function DeleteModal(){
    return(
        <div className="w-85.75 md:w-110 rounded-12 flex flex-col bg-neutral-0 border border-neutral-200">
            <div className="flex flex-row gap-x-4 p-5">
                <div className="bg-neutral-100 flex justify-center items-center size-10 rounded-8">
                    <DeleteIcon className="size-6 stroke-neutral-950"/>
                </div>
                <div className="flex flex-col gap-y-1.5">
                    <span className="sans-serif-text-preset-3 text-neutral-950">Delete Note</span>
                    <span className="sans-serif-text-preset-5 text-neutral-950">Are you sure you want to permanently delete this note? This action cannot be undone.</span>
                </div>
            </div>
            <div className="h-0.25 rounded-12 bg-neutral-200"/>
            <div className="flex flex-row justify-end items-center gap-x-4 px-5 py-4">
                <SecondaryButton titleButton="Cancel"/>
                <PrimaryButton titleButton="Delete Note" className="bg-neutral-red-500 hover:bg-neutral-red-100"/>
            </div>
        </div>
    )
}