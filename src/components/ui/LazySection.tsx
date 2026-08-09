import { useState, useEffect, useRef, type ReactNode, Suspense } from "react";
import Loading from "./Loading";

interface LazySectionProps {
  children: ReactNode;
  id?: string;
  minHeight?: string;
  rootMargin?: string;
}

export function LazySection({
  children,
  id,
  minHeight = "min-h-[50vh]",
  rootMargin = "500px 0px",
}: LazySectionProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleLoadSection = (e: Event) => {
      const customEvent = e as CustomEvent<{ id: string }>;
      if (id && customEvent.detail?.id === id) {
        setShouldRender(true);
      }
    };

    window.addEventListener("load-section", handleLoadSection);
    return () => window.removeEventListener("load-section", handleLoadSection);
  }, [id]);

  useEffect(() => {
    if (shouldRender) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [shouldRender, rootMargin]);

  return (
    // Always keep minHeight so the container height stays stable during load.
    // The real content naturally overrides the height once rendered,
    // preventing the abrupt reflow / scrollbar-width shift.
    <div id={id} ref={containerRef} className={`w-full ${minHeight}`}>
      {shouldRender ? (
        <Suspense fallback={<Loading />}>{children}</Suspense>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default LazySection;
