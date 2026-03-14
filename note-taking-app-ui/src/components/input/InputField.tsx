import { useState } from "react"

type InputFieldProps = {
    icons?: {
        IconBeforeInput?: React.ComponentType<{ className?: string }>,
        IconAfterInput?: React.ComponentType<{ className?: string }>,
        css: "fill" | "stroke"
    },
    type: string,
    name: string,
    placeholder: string,
    isError?: boolean,
}

export function InputField({ icons, type, name, placeholder, isError }: InputFieldProps) {
    const [inputValue, setInputValue] = useState("")

    return (
        <div className={`w-full flex flex-row items-center justify-between gap-x-2 px-4 py-3 rounded-8 border border-neutral-300 cursor-pointer
                hover:bg-neutral-50
                ${inputValue.length > 0 ? "ring ring-neutral-950" : ""}
                ${isError ? "border-neutral-red-500" : ""}
            `}>
            <div className="flex flex-row gap-x-2">
                {icons && icons.IconBeforeInput && <icons.IconBeforeInput className={`size-5 ${icons.css}-neutral-500`} />}
                <input type={type} name={name} id={name} placeholder={placeholder}
                    value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                    className="sans-serif-text-preset-5 text-neutral-950
                    focus:outline-none placeholder:text-neutral-500" />
            </div>
            {icons && icons.IconAfterInput && <icons.IconAfterInput className={`size-5 ${icons.css}-neutral-500`} />}
        </div>
    )
}