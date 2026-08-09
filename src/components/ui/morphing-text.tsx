import { useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const morphTime = 1.5;
const cooldownTime = 1;

const getBlur = (fraction: number) => {
  if (fraction <= 0) return 100;
  if (fraction >= 1) return 0;
  return Math.min(8 / fraction - 8, 100);
};

const getOpacity = (fraction: number) => {
  if (fraction <= 0) return 0;
  if (fraction >= 1) return 100;
  return Math.pow(fraction, 0.4) * 100;
};

const useMorphingText = (texts: string[]) => {
  const textIndexRef = useRef(0);
  const activeRef = useRef<0 | 1>(0); // 0: text1 active/visible, 1: text2 active/visible
  const morphRef = useRef(0);
  const cooldownRef = useRef(cooldownTime);
  const timeRef = useRef(performance.now());

  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  // Initial text setup on mount
  useEffect(() => {
    if (texts.length === 0) return;
    if (text1Ref.current) {
      text1Ref.current.textContent = texts[0];
      text1Ref.current.style.filter = "none";
      text1Ref.current.style.opacity = "100%";
    }
    if (text2Ref.current) {
      text2Ref.current.textContent = texts[1 % texts.length];
      text2Ref.current.style.filter = "none";
      text2Ref.current.style.opacity = "0%";
    }
  }, [texts]);

  const setStyles = useCallback((fraction: number) => {
    const activeSpan = activeRef.current === 0 ? text1Ref.current : text2Ref.current;
    const inactiveSpan = activeRef.current === 0 ? text2Ref.current : text1Ref.current;

    if (!activeSpan || !inactiveSpan) return;

    // Active span fades OUT
    const invFraction = 1 - fraction;
    activeSpan.style.filter = `blur(${getBlur(invFraction)}px)`;
    activeSpan.style.opacity = `${getOpacity(invFraction)}%`;

    // Inactive span fades IN
    inactiveSpan.style.filter = `blur(${getBlur(fraction)}px)`;
    inactiveSpan.style.opacity = `${getOpacity(fraction)}%`;
  }, []);

  const doMorph = useCallback(() => {
    morphRef.current -= cooldownRef.current;
    cooldownRef.current = 0;

    let fraction = morphRef.current / morphTime;

    if (fraction >= 1) {
      fraction = 1;
      cooldownRef.current = cooldownTime;
    }

    setStyles(fraction);

    if (fraction === 1) {
      // Toggle active span & advance text index when morph completes
      activeRef.current = activeRef.current === 0 ? 1 : 0;
      textIndexRef.current = (textIndexRef.current + 1) % texts.length;
    }
  }, [setStyles, texts.length]);

  const doCooldown = useCallback(() => {
    morphRef.current = 0;
    const activeSpan = activeRef.current === 0 ? text1Ref.current : text2Ref.current;
    const inactiveSpan = activeRef.current === 0 ? text2Ref.current : text1Ref.current;

    if (activeSpan && inactiveSpan) {
      activeSpan.style.filter = "none";
      activeSpan.style.opacity = "100%";

      inactiveSpan.style.filter = "none";
      inactiveSpan.style.opacity = "0%";

      // Pre-load next text string on hidden inactive span during cooldown
      const nextTextIndex = (textIndexRef.current + 1) % texts.length;
      if (inactiveSpan.textContent !== texts[nextTextIndex]) {
        inactiveSpan.textContent = texts[nextTextIndex];
      }
    }
  }, [texts]);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const newTime = performance.now();
      const dt = (newTime - timeRef.current) / 1000;
      timeRef.current = newTime;

      cooldownRef.current -= dt;

      if (cooldownRef.current <= 0) doMorph();
      else doCooldown();
    };

    timeRef.current = performance.now();
    animate();
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [doMorph, doCooldown]);

  return { text1Ref, text2Ref };
};

interface MorphingTextProps {
  className?: string;
  texts: string[];
}

const Texts: React.FC<Pick<MorphingTextProps, "texts">> = ({ texts }) => {
  const { text1Ref, text2Ref } = useMorphingText(texts);
  return (
    <>
      <span
        className="absolute inset-x-0 top-0 m-auto inline-block w-full will-change-[filter,opacity] transform-gpu"
        ref={text1Ref}
      />
      <span
        className="absolute inset-x-0 top-0 m-auto inline-block w-full will-change-[filter,opacity] transform-gpu"
        ref={text2Ref}
      />
    </>
  );
};

const SvgFilters: React.FC = () => (
  <svg
    id="filters"
    className="fixed h-0 w-0"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <filter id="threshold">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140"
        />
      </filter>
    </defs>
  </svg>
);

export const MorphingText: React.FC<MorphingTextProps> = ({
  texts,
  className,
}) => (
  <div
    className={cn(
      "relative h-12 w-full text-center text-xl font-bold leading-none filter-[url(#threshold)_blur(0.4px)] sm:h-16 sm:text-3xl md:h-24 md:text-4xl lg:text-[3.5rem]",
      className,
    )}
  >
    <Texts texts={texts} />
    <SvgFilters />
  </div>
);

