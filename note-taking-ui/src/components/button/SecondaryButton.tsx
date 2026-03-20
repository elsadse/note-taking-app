type SecondaryButtonProps={
    titleButton: string,
    isDisabled?: boolean,
    className?: string,
}

export function SecondaryButton({titleButton, isDisabled, className}:SecondaryButtonProps){
    
    return (
        <button disabled={isDisabled} className={`group flex flex-row justify-center items-center gap-x-2 rounded-8 px-4 py-3 cursor-pointer bg-neutral-100
            hover:bg-neutral-0 hover:border border-neutral-300
            focus:bg-neutral-0 focus:ring ring-neutral-950
            disabled:bg-neutral-50 disabled:pointer-events-none disabled:cursor-not-allowed
            ${className}`}>
            <span className="sans-serif-text-preset-4 text-neutral-600 group-hover:text-neutral-950 group-focus:text-neutral-950 group-disabled:text-neutral-300 text-left">{titleButton}</span>
        </button>
    )
}