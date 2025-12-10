"use client";
import { ReactLenis } from "lenis/react";

function SmoothScrolling({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.01, duration: 0.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
