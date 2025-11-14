"use client";
import { SpotlightSvg } from "@/brand/components/icons";
import { useEffect, useState } from "react";

export function Spotlight() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(0, 1 - scrollY / 500);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 -z-10 transition-opacity duration-300"
        style={{ opacity }}
      >
        <SpotlightSvg />
      </div>
      <div
        className="fixed top-0 right-0 -z-10 transform scale-x-[-1] transition-opacity duration-300"
        style={{ opacity }}
      >
        <SpotlightSvg />
      </div>
    </>
  );
}
