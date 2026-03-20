import { InfoCircleIcon } from "../icons/InfoCircleIcon";

export function InputError({ textError, isError }: { textError: string, isError:boolean }) {
    return (
        <div className="flex flex-row items-center gap-x-2">
            <InfoCircleIcon className={`size-4 ${isError?"stroke-neutral-red-500":"stroke-neutral-600"}`} />
            <span className={`${isError?"text-neutral-red-500":"text-neutral-600"} sans-serif-text-preset-5`}>{textError}</span>
        </div>
    )
}