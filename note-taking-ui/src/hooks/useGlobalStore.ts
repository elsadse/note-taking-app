import { create } from "zustand"

export type SideBarItem = "Home" | "Archive"
export type MenuItem = SideBarItem | "Search" | "Tags"|"Settings"

export type GlobalStore = {
    sideBarItemSelected: SideBarItem,
    setSideBarItemSelected: (sideBarItemSelected: SideBarItem) => void,

    menuItemSelected: MenuItem,
    setMenuItemSelected: (menuItemSelected: MenuItem) => void,
}


export const useGlobalStore = create<GlobalStore>()((set) => ({
    sideBarItemSelected: "Home",
    setSideBarItemSelected: (sideBarItemSelected: SideBarItem) => set({ sideBarItemSelected }),

    menuItemSelected: "Home",
    setMenuItemSelected: (menuItemSelected: MenuItem) => set({ menuItemSelected }),
}))