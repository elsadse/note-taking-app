import { create } from "zustand"

export type GlobalStore = {
    menuItemSelected:string,
    setMenuItemSelected: (menuItemSelected:string)=>void,
}


export const useGlobalStore = create<GlobalStore>()((set) => ({
    menuItemSelected: "Home",
    setMenuItemSelected: (menuItemSelected: string) => set({ menuItemSelected })
}))