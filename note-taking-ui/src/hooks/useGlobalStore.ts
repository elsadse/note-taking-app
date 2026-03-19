import { create } from "zustand"

export type SideBarItem = "Home" | "Archive"
export type MenuItem = SideBarItem | "Search" | "Tags" | "Settings"

export type GlobalStore = {
    sideBarItemSelected: SideBarItem,
    setSideBarItemSelected: (sideBarItemSelected: SideBarItem) => void,

    menuItemSelected: MenuItem,
    setMenuItemSelected: (menuItemSelected: MenuItem) => void,

    tagFilters: string[],
    addTagFilter: (tag: string) => void,
    removeTagFilter: (tag: string) => void,
}


export const useGlobalStore = create<GlobalStore>()((set) => ({
    sideBarItemSelected: "Home",
    setSideBarItemSelected: (sideBarItemSelected: SideBarItem) => set({ sideBarItemSelected }),

    menuItemSelected: "Home",
    setMenuItemSelected: (menuItemSelected: MenuItem) => set({ menuItemSelected }),

    tagFilters: [],
    addTagFilter: (tag: string) => set((store) => {
        const tagFilters = [...store.tagFilters, tag]
        return {tagFilters }
    }),
    removeTagFilter: (tag: string) => set((store) => {
        const tagFilters = store.tagFilters.filter((t) => t !== tag)
        return { tagFilters }
    }),
}))