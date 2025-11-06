"use client";

import { IconButton } from "@/brand/components/buttons/icon_button";
import { PrimaryButton } from "@/brand/components/buttons/primary_button";
import { InstaLogo, Logo, Star, Verify, XLogo } from "@/brand/components/icons";
import { useLayoutEffect, useRef, useState } from "react";

export default function Navbar() {
  return (
    <nav className="relative flex items-center w-full px-4">
      {/* Left: Logo */}
      <div className="flex items-center text-xl font-bold gap-3">
        <Logo className="h-9 text-primary fill-primary" />
        {/*HIDE WHEN WE START SCROLLING */}
        <span>Playcope</span>
      </div>

      {/* Center: NavTabs */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <NavTabs />
      </div>

      {/* Right: Buttons */}
      <div className="flex items-center ml-auto gap-4">
        <IconButton>
          <InstaLogo className="size-5" />
        </IconButton>
        <IconButton>
          <XLogo className="size-5" />
        </IconButton>
        <PrimaryButton icon={<Verify />} label="Become A Member" />
      </div>
    </nav>
  );
}

export function NavTabs() {
  const tabs = ["Home", "Our Apps", "About Us"];
  const [activeTab, setActiveTab] = useState("Home");
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  // Calculate position and width of the active tab for sliding indicator
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeButton = Array.from(container.children).find((child) =>
      (child as HTMLElement).textContent?.includes(activeTab),
    ) as HTMLElement | undefined;

    if (activeButton) {
      setIndicatorStyle({
        left: activeButton.offsetLeft,
        width: activeButton.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div
      className="relative flex items-center p-2 rounded-full bg-black2/50 backdrop-blur-md gap-2"
      ref={containerRef}
    >
      {/* Sliding background indicator */}
      <div
        className="absolute top-0 bottom-0 my-1.5 rounded-full bg-light-black transition-all duration-300 ease-in-out"
        style={{
          left: indicatorStyle.left,
          width: indicatorStyle.width,
        }}
      />

      {/* Tabs */}
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`relative flex items-center justify-center px-4 py-2 text-base font-medium transition-colors z-10 ${
            activeTab === tab ? "text-white" : "text-gray-400"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          <span className="flex items-center gap-1">
            {/* Reserve space for star to prevent text shift */}
            {activeTab === tab ? (
              <Star />
            ) : (
              <span className="inline-block w-4 h-4" />
            )}
            {tab}
          </span>
        </button>
      ))}
    </div>
  );
}
