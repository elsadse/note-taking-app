import { useShallow } from "zustand/shallow";
import { useGlobalStore, type GlobalStore } from "../../../hooks/useGlobalStore";
import { ContentSettings } from "./ContentSettings";
import { SettingsColorTheme } from "./SettingsColorTheme";
import { SettingsFontOption } from "./SettingsFontOption";

export function ContentSettingsDesktop() {

    const { settingMenuItemSelected } = useGlobalStore(
        useShallow((store: GlobalStore) => ({
            settingMenuItemSelected: store.settingMenuItemSelected,
        }))
    )

    return (
        <div className="flex flex-row pr-4 flex-1">
            <div className="h-full flex-1 border-r border-neutral-200">
                <ContentSettings />
            </div>
            <div className="flex-2 flex flex-col gap-y-4 px-6 py-5">
                {settingMenuItemSelected==="ColorTheme" && <SettingsColorTheme />}
                {settingMenuItemSelected==="FontTheme" && <SettingsFontOption />}
            </div>
            <div className="flex-1">
            </div>
        </div>
    )
}