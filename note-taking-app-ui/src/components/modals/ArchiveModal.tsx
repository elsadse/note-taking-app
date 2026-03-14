import { PrimaryButton } from "../button/PrimaryButton";
import { SecondaryButton } from "../button/SecondaryButton";
import { ArchiveIcon } from "../icons/ArchiveIcon";


export function ArchiveModal(){
    return(
        <div className="w-85.75 md:w-110 rounded-12 flex flex-col bg-neutral-0 border border-neutral-200">
            <div className="flex flex-row gap-x-4 p-5">
                <div className="bg-neutral-100 flex justify-center items-center size-10 rounded-8">
                    <ArchiveIcon className="size-6 stroke-neutral-950"/>
                </div>
                <div className="flex flex-col gap-y-1.5">
                    <span className="sans-serif-text-preset-3 text-neutral-950">Archive Note</span>
                    <span className="sans-serif-text-preset-5 text-neutral-950">Are you sure you want to archive this note? You can find it in the Archived Notes section and restore it anytime.</span>
                </div>
            </div>
            <div className="h-0.25 rounded-12 bg-neutral-200"/>
            <div className="flex flex-row justify-end items-center gap-x-4 px-5 py-4">
                <SecondaryButton titleButton="Cancel"/>
                <PrimaryButton titleButton="Archive Note"/>
            </div>
        </div>
    )
}