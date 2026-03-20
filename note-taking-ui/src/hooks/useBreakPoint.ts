import { useState, useEffect } from "react";

type BreakPoint = "md" | "xl";

export function useBreakPoint(): BreakPoint {
    const getBreakpoint = (): BreakPoint => {
        if (window.innerWidth >= 1440) return "xl";
        return "md";
    };

    const [breakpoint, setBreakpoint] = useState<BreakPoint>(getBreakpoint);

    useEffect(() => {
        const observer = new ResizeObserver(() => {
            setBreakpoint(getBreakpoint());
        });

        observer.observe(document.documentElement);

        return () => observer.disconnect();
    }, []);

    return breakpoint;
}