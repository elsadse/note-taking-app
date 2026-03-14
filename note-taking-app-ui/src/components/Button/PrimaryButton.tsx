type PrimaryButtonProps={
    titleButton: string,
    isDisabled?: boolean,
    className?: string,
}

export function PrimaryButton({titleButton, isDisabled, className}:PrimaryButtonProps){
    
    return (
        <button disabled={isDisabled} className={`group flex flex-row justify-center items-center gap-x-2 rounded-8 px-4 py-3 cursor-pointer bg-neutral-blue-500 
            hover:bg-neutral-blue-700
            focus:ring ring-neutral-400 
            disabled:bg-neutral-50 disabled:pointer-events-none disabled:cursor-not-allowed
            ${className}`}>
            <span className="sans-serif-text-preset-4 text-neutral-0 group-disabled:text-neutral-300 text-left">{titleButton}</span>
        </button>
    )
}