import { Link } from "react-router"
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
    link?: {
        text: string,
        url: string
    },
    isError?: boolean,
    onIconClick?: () => void
}

export function InputTypeGroup({ name, titleLabel, type, placeholder, icon, textError, link, isError = true, onIconClick }: InputTypeGroupProps) {
    return (
        <div className="flex flex-col gap-y-1.5">
            <div className="flex flex-row justify-between">
                <label htmlFor={name} className="sans-serif-text-preset-4 text-neutral-950 text-left"> {titleLabel} </label>
                {link && <Link to={link.url} className="sans-serif-text-preset-6 text-neutral-600 text-right underline decoration-neutral-600">{link.text}</Link>}
            </div>
            {icon ?
                <InputField type={type} name={name} placeholder={placeholder} isError={textError && isError ? true : false} icons={{ IconAfterInput: icon.Icon, css: icon.css }} onIconClick={onIconClick} />
                : <InputField type={type} name={name} placeholder={placeholder} isError={textError ? true : false} />
            }
            {textError && <InputError isError={isError} textError={textError} />}
        </div>
    )
}




