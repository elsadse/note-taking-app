import { useState, useEffect } from "react";

type Breakpoint = "md" | "xl";

export function useBreakpoint(): Breakpoint {
    const getBreakpoint = (): Breakpoint => {
        if (window.innerWidth >= 1440) return "xl";
        return "md";
    };

    const [breakpoint, setBreakpoint] = useState<Breakpoint>(getBreakpoint);

    useEffect(() => {
        const observer = new ResizeObserver(() => {
            setBreakpoint(getBreakpoint());
        });

        observer.observe(document.documentElement);

        return () => observer.disconnect();
    }, []);

    return breakpoint;
}