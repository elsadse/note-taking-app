import type { ComponentType } from "react"

type BorderButtonProps={
    titleButton: string,
    isDisabled?: boolean,
    className?: string,
    Icon: ComponentType<{ className?: string }>,
    iconClassName?: string,
}

export function BorderButton({titleButton, isDisabled, className, Icon, iconClassName}:BorderButtonProps){
    
    return (
        <button disabled={isDisabled} className={`group flex flex-row justify-center items-center gap-x-2 rounded-8 px-4 py-3 cursor-pointer bg-neutral-0 border border-neutral-300
            hover:bg-neutral-100
            focus:ring ring-neutral-950
            disabled:bg-neutral-50 disabled:pointer-events-none disabled:cursor-not-allowed
            ${className}`}>
            <Icon className={`size-5 fill-black
                group-hover:fill-neutral-600
                group-disabled:fill-neutral-300
                ${iconClassName}`}/>
            <span className="sans-serif-text-preset-4 text-neutral-950 group-hover:text-neutral-600  group-disabled:text-neutral-300 text-left">{titleButton}</span>
        </button>
    )
}