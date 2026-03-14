import { InputError } from "./InputError"
import { InputField } from "./InputField"

type InputTypeGroupProps = {
    name: string,
    titleLabel: string,
    type: string,
    placeholder: string,
    icon?: {
        Icon: React.ComponentType<{ className?: string }>
        css: "fill" | "stroke"
    },
    textError?: string,
}

export function InputTypeGroup({ name, titleLabel, type, placeholder, icon, textError }: InputTypeGroupProps) {
    return (
        <div className="flex flex-col gap-y-1.5">
            <label htmlFor={name} className="sans-serif-text-preset-4 text-neutral-950 text-left"> {titleLabel} </label>
            {icon ?
                <InputField type={type} name={name} placeholder={placeholder} isError={textError ? true : false} icons={{ IconAfterInput: icon.Icon, css: icon.css }} />
                : <InputField type={type} name={name} placeholder={placeholder} isError={textError ? true : false} />
            }
            {textError && <InputError textError={textError} />}
        </div>
    )
}




