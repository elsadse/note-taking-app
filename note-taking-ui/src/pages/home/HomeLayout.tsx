import { useBreakpoint } from "../../hooks/useBreakPoint";
import { HomeLayoutMd } from "./HomeLayoutMd";
import { HomePageDesktopLayout } from "./HomePageDesktopLayout";

export function HomeLayout() {
    const bp = useBreakpoint();
    
    if (bp === "xl") return <HomePageDesktopLayout />;
    return <HomeLayoutMd />;
}