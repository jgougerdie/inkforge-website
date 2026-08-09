import { useCallback, useRef, useState, type CSSProperties, type MouseEvent } from "react";

const MAX_TILT_DEG = 8;

interface TiltState {
  ref: React.RefObject<HTMLElement>;
  style: CSSProperties;
  glareStyle: CSSProperties;
  onMouseMove: (e: MouseEvent) => void;
  onMouseLeave: () => void;
}

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Mouse-reactive 3D tilt + glare, skipped entirely under prefers-reduced-motion. */
export function useTilt<T extends HTMLElement = HTMLElement>(): TiltState {
  const ref = useRef<T>(null);
  const [style, setStyle] = useState<CSSProperties>({});
  const [glareStyle, setGlareStyle] = useState<CSSProperties>({ opacity: 0 });

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (prefersReducedMotion() || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * MAX_TILT_DEG * 2;
    const rotateX = (0.5 - y) * MAX_TILT_DEG * 2;

    setStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`,
      transition: "transform 80ms ease-out",
    });
    setGlareStyle({
      opacity: 1,
      background: `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.35), transparent 55%)`,
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    setStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)",
      transition: "transform 400ms ease-out",
    });
    setGlareStyle((prev) => ({ ...prev, opacity: 0, transition: "opacity 400ms ease-out" }));
  }, []);

  return { ref: ref as React.RefObject<HTMLElement>, style, glareStyle, onMouseMove, onMouseLeave };
}
