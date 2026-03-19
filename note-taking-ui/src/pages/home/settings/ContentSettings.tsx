import { SettingsMenu } from "../../../components/sideBar/SettingsMenu";

export function ContentSettings() {
    return (
        <div className="flex flex-col gap-y-4 px-4 py-5 md:px-8 md:py-6 bg-neutral-0 flex-1 overflow-hidden">
            <span className="sans-serif-text-preset-1 text-neutral-950 text-left">Settings</span>
            <SettingsMenu />
        </div>
    )
}