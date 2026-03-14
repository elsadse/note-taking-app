import { InfoCircleIcon } from "../icons/InfoCircleIcon";

export function InputError({ textError }: { textError: string }) {
    return (
        <div className="flex flex-row items-center gap-x-2">
            <InfoCircleIcon className="size-4 stroke-neutral-red-500" />
            <span className="text-neutral-red-500 sans-serif-text-preset-5">{textError}</span>
        </div>
    )
}