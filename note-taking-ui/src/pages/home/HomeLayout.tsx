import { useBreakpoint } from "../../hooks/useBreakPoint";
import { HomeLayoutMd } from "./HomeLayoutMd";
import { HomePageDesktop } from "./HomePageDesktop";

export function HomeLayout() {
    const bp = useBreakpoint();
    
    if (bp === "xl") return <HomePageDesktop />;
    return <HomeLayoutMd />;
}