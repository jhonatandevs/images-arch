import { useEffect, useState } from "react";

export function useNearScreen(elementRef: React.RefObject<Element>, distance: string) {
    const [isNearScreen, setIsNearScreen] = useState(false);
    useEffect(() => {
        const onChange = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            const el = entries[0]
            if (el.isIntersecting) {
                setIsNearScreen(true)
                observer.disconnect();
            }
        }
        const observer = new IntersectionObserver(onChange, {
            rootMargin: distance
        });
        if (elementRef.current) {
            observer.observe(elementRef.current); // Usamos elementRef.current
        }
    }, []);
    return isNearScreen;
}