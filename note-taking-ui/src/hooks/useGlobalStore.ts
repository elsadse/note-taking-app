import { create } from "zustand"

export type SideBarItem = "Home" | "Archive"

export type GlobalStore = {
    sideBarItemSelected: SideBarItem,
    setSideBarItemSelected: (sideBarItemSelected: SideBarItem) => void,
}


export const useGlobalStore = create<GlobalStore>()((set) => ({
    sideBarItemSelected: "Home",
    setSideBarItemSelected: (sideBarItemSelected: SideBarItem) => set({ sideBarItemSelected })
}))