"use client";
import { ReactLenis } from "lenis/react";

function SmoothScrolling({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        duration: 2.5,
        smoothWheel: true,
        wheelMultiplier: 0.7,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
