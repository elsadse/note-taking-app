import { Link } from "react-router";
import { ArrowLeft } from "../../../components/icons/ArrowLeft";
import { ThemeOption } from "./SettingsColorTheme";
import { PrimaryButton } from "../../../components/button/PrimaryButton";
import { SansSerifIcon } from "../../../components/icons/SansSerifIcon";
import { SerifIcon } from "../../../components/icons/SerifIcon";
import { MonospaceIcon } from "../../../components/icons/MonospaceIcon";

export function SettingsFontOption() {
    return (
        <div className="flex flex-col gap-y-4 px-4 py-5 md:px-8 md:py-6 bg-neutral-0 flex-1">
            <div className="flex flex-col gap-y-5">
                <div className="flex flex-col gap-y-3">
                    <Link to="/settings" className="block xl:hidden">
                        <div className="flex flex-row gap-x-1">
                            <ArrowLeft className="fill-neutral-600 size-4.5" />
                            <span className="sans-serif-text-preset-4 text-neutral-600">Settings</span>
                        </div>
                    </Link>
                    <div className="flex flex-col gap-y-2">
                        <span className="sans-serif-text-preset-1 text-neutral-950">Font Theme</span>
                        <span className="sans-serif-text-preset-5 text-neutral-700">Choose your font theme:</span>
                    </div>
                </div>
                <ThemeOption theme="Sans-serif " themeDescription="Clean and modern, easy to read." icon={{ Icon: SansSerifIcon, css: "fill" }} />
                <ThemeOption theme="Serif " themeDescription="Classic and elegant for a timeless feel." icon={{ Icon: SerifIcon, css: "fill" }} />
                <ThemeOption theme="Monospace" themeDescription="Code-like, great for a technical vibe." icon={{ Icon: MonospaceIcon, css: "fill" }} />
                <div className="flex justify-end">
                    <PrimaryButton titleButton="Apply Changes" />
                </div>
            </div>
        </div>
    )
}