import { CheckCircleIcon } from "./icons/CheckCircleIcon"
import { CloseRemoveIcon } from "./icons/CloseRemoveIcon"

type ToastProps={
    titleToast:string,
    link?: string
}

export function Toast({titleToast, link}: ToastProps){
    return(
        <div className="w-97.5 h-8 flex flex-row gap-x-2 p-2 rounded-8 items-center justify-between border border-neutral-200">
            <CheckCircleIcon className="size-4 fill-neutral-green-500"/>
            <div className="w-full flex flex-row justify-between">
                <span className="sans-serif-text-preset-6 text-neutral-950">{titleToast}</span>
                {link && <a href="#" className="sans-serif-text-preset-6 text-neutral-950 underline">{link}</a>}
            </div>
            <CloseRemoveIcon className="size-4 stroke-neutral-400 cursor-pointer"/>
        </div>
    )
}