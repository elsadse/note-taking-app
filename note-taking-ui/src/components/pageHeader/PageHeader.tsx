import { Logo } from "../Logo";

export function PageHeader() {

    return (
        <div className="flex flex-row gap-x-3 px-4 py-3 bg-neutral-100
                md:gap-x-4 md:px-8 md:py-4">
            <div className="flex-row gap-x-2.5">
                <Logo/>
            </div>
        </div>
    )
}