import { Link } from "react-router"

type EmptyStateProps={
    text: string,
    link?:{
        textLink:string,
        url: string
    }
}

export function EmptyState({text, link}:EmptyStateProps){
    return(
        <p className="sans-serif-text-preset-5 text-neutral-950 text-left bg-neutral-100 border border-neutral-200 p-2 rounded-8">
            {text}
            {link &&(
                <Link to={link.url}>
                    <span className="underline">{link.url}</span>
                </Link>
            )}
        </p>
    )
}