import { Link } from "react-router";
import { ArrowLeft } from "../../../components/icons/ArrowLeft";
import { LightModeIcon } from "../../../components/icons/LightModeIcon";
import { DarkModeIcon } from "../../../components/icons/DarkModeIcon";
import { SunIcon } from "../../../components/icons/SunIcon";
import { PrimaryButton } from "../../../components/button/PrimaryButton";

export function SettingsColorTheme() {
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
                        <span className="sans-serif-text-preset-1 text-neutral-950">Color Theme</span>
                        <span className="sans-serif-text-preset-5 text-neutral-700">Choose your color theme:</span>
                    </div>
                </div>
                <ThemeOption theme="Light Mode" themeDescription="Pick a clean and classic light theme" icon={{ Icon: SunIcon, css: "stroke" }} />
                <ThemeOption theme="Dark Mode" themeDescription="Select a sleek and modern dark theme" icon={{ Icon: DarkModeIcon, css: "fill" }} />
                <ThemeOption theme="System" themeDescription="Adapts to your device’s theme" icon={{ Icon: LightModeIcon, css: "fill" }} />
                <div className="flex justify-end">
                    <PrimaryButton titleButton="Apply Changes" />
                </div>
            </div>
        </div>
    )
}


type ThemeOptionProps = {
    icon: {
        Icon: React.ComponentType<{ className?: string }>,
        css: "fill" | "stroke"
    },
    theme: string,
    themeDescription: string
}

export function ThemeOption({ icon, theme, themeDescription }: ThemeOptionProps) {
    return (
        <div className="flex flex-row gap-x-4 p-4 items-center justify-between rounded-12 border border-neutral-200">
            <div className="flex flex-row gap-x-4">
                <div className="flex justify-center items-center">
                    <icon.Icon className={`size-6 ${icon.css}-neutral-950`} />
                </div>
                <div className="flex flex-col gap-y-1.5">
                    <span className="sans-serif-text-preset-4 text-neutral-950 text-left">{theme}</span>
                    <span className="sans-serif-text-preset-6 text-neutral-700 text-left">{themeDescription}</span>
                </div>
            </div>
            <input type="radio" />
        </div>
    )
}