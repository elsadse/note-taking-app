type BorderButtonProps = {
    titleButton: string,
    isDisabled?: boolean,
    className?: string,
    icon: {
        Icon: React.ComponentType<{ className?: string }>,
        css: "fill" | "stroke"
    }
}

export function BorderButton({ titleButton, isDisabled, className, icon}: BorderButtonProps) {

    return (
        <button disabled={isDisabled} className={`group flex flex-row justify-center items-center gap-x-2 rounded-8 px-4 py-3 cursor-pointer bg-neutral-0 border border-neutral-300
            hover:bg-neutral-100
            focus:ring ring-neutral-950
            disabled:bg-neutral-50 disabled:pointer-events-none disabled:cursor-not-allowed
            ${className}`}>
            <icon.Icon className={`size-5 ${icon.css}-neutral-950
                group-hover:${icon.css}-neutral-600
                group-disabled:${icon.css}-neutral-300
                `} />
            <span className="sans-serif-text-preset-4 text-neutral-950 group-hover:text-neutral-600  group-disabled:text-neutral-300 text-left">{titleButton}</span>
        </button>
    )
}