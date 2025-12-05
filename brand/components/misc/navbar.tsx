"use client";

import { IconButton } from "@/brand/components/buttons/icon_button";
import { PrimaryButton } from "@/brand/components/buttons/primary_button";
import { InstaLogo, Star, Verify, XLogo } from "@/brand/components/icons";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import NavBarMobile from "./navbar-mobile";
import { NavbarLogo } from "./navbar-logo";

export default function Navbar() {
  const [hideText, setHideText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideText(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="relative md:flex items-center w-full px-4 hidden">
        {/* Left: Logo */}
        <NavbarLogo hideText={hideText} />

        {/* Center: NavTabs */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <NavTabs />
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center ml-auto gap-4">
          <button className="text-foreground border rounded-full p-3 border-dark-grey bg-light-grey">
            <InstaLogo className="text-foreground size-6 fill-foreground" />
          </button>
          <PrimaryButton
            icon={<Verify />}
            label="Become A Member"
            className="text-background"
          />
        </div>
      </nav>
      <NavBarMobile hideText={hideText} />
    </>
  );
}

export function NavTabs({ onTabClick }: { onTabClick?: () => void }) {
  const tabs = [
    { text: "Home", link: "#top" },
    { text: "Our Apps", link: "#our-apps" },
    { text: "About Us", link: "#about-us" },
  ];
  const [activeTab, setActiveTab] = useState("Home");
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  // Calculate position and width of the active tab for sliding indicator
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeButton = Array.from(container.children).find((child) =>
      (child as HTMLElement).textContent?.includes(activeTab)
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
      className="relative flex items-center p-2 rounded-full bg-light-grey backdrop-blur-md gap-2"
      ref={containerRef}
    >
      {/* Sliding background indicator */}
      <div
        className="absolute top-0 bottom-0 my-1.5 rounded-full bg-grey-1 transition-all duration-300 ease-in-out"
        style={{
          left: indicatorStyle.left,
          width: indicatorStyle.width,
        }}
      />

      {/* Tabs */}
      {tabs.map((tab) => (
        <button
          key={tab.text}
          className={`relative flex items-center justify-center px-4 py-2 text-base font-medium transition-colors z-10 rounded-full ${
            activeTab === tab.text ? "text-primary" : "text-gray-400"
          }`}
          onClick={(e) => {
            setActiveTab(tab.text);
            onTabClick?.();

            e.preventDefault();
            const element = document.getElementById(tab.link.replace("#", ""));

            if (element) {
              const yOffset = 0;

              let y =
                element.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;

              if (tab.link == "#top") y = 0;

              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
        >
          <span className="flex items-center gap-1">
            {/* Reserve space for star to prevent text shift */}
            {activeTab === tab.text ? (
              <Star />
            ) : (
              <span className="inline-block w-4 h-4" />
            )}
            {tab.text}
          </span>
        </button>
      ))}
    </div>
  );
}
