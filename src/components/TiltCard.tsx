import type { ReactNode } from "react";
import { useTilt } from "@/hooks/useTilt";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

/** Generic mouse-reactive 3D tilt + glare wrapper for non-link cards (stat tiles, category cards). */
export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const tilt = useTilt<HTMLDivElement>();

  return (
    <div
      ref={tilt.ref as React.RefObject<HTMLDivElement>}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={{ ...tilt.style, transformStyle: "preserve-3d" }}
      className={`relative isolate overflow-hidden ${className}`}
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-10" style={tilt.glareStyle} />
      {children}
    </div>
  );
}
