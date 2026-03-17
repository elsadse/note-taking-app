type PrimaryButtonProps={
    titleButton: string,
    isDisabled?: boolean,
    className?: string,
    icon?: {
        Icon: React.ComponentType<{ className?: string }>,
        css: "fill" | "stroke"
    },
    type?:"button"|"reset"|"submit"
}

export function PrimaryButton({titleButton, isDisabled=false, className, icon, type}:PrimaryButtonProps){
    
    return (
        <button type={type} disabled={isDisabled} className={`group flex flex-row justify-center items-center gap-x-2 rounded-8 px-4 py-3 cursor-pointer bg-neutral-blue-500 
            hover:bg-neutral-blue-700
            focus:ring ring-neutral-400 
            disabled:bg-neutral-50 disabled:pointer-events-none disabled:cursor-not-allowed
            ${className}`}>
            {icon && <icon.Icon className={`size-4.5 ${icon.css}-neutral-0 group-disabled:${icon.css}-neutral-300`}/>}
            <span className="sans-serif-text-preset-4 text-neutral-0 group-disabled:text-neutral-300 text-left">{titleButton}</span>
        </button>
    )
}