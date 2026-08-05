import { useState, useEffect, useRef, type ReactNode, Suspense } from "react";
import Loading from "./Loading";

interface LazySectionProps {
  children: ReactNode;
  minHeight?: string;
  rootMargin?: string;
}

export function LazySection({
  children,
  minHeight = "min-h-[50vh]",
  rootMargin = "300px 0px",
}: LazySectionProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
    <div ref={containerRef} className={`w-full ${!shouldRender ? minHeight : ""}`}>
      {shouldRender ? (
        <Suspense fallback={<Loading />}>{children}</Suspense>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default LazySection;
