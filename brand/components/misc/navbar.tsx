"use client";

import { IconButton } from "@/brand/components/buttons/icon_button";
import { PrimaryButton } from "@/brand/components/buttons/primary_button";
import { InstaLogo, Logo, Star, Verify, XLogo } from "@/brand/components/icons";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

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
    <nav className="relative flex items-center w-full px-4">
      {/* Left: Logo */}
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        aria-label="Go to top"
        className={
          "relative flex items-center text-xl font-bold gap-3 cursor-pointer min-h-12 min-w-12"
        }
        style={{ minHeight: "48px" }}
      >
        <span
          className={`
            flex items-center justify-center
            transition-all duration-300 ease-in-out
            ${
              hideText
                ? "bg-primary w-12 h-12 rounded-full shadow-md"
                : "bg-transparent w-9 h-9 rounded-none"
            }
          `}
          style={{
            position: "relative",
            minWidth: hideText ? "3rem" : "2.25rem",
            minHeight: hideText ? "3rem" : "2.25rem",
            transitionProperty:
              "background, border-radius, width, height, min-width, min-height",
            willChange: "background, border-radius, width, height",
          }}
        >
          <Logo
            className={`
              transition-all duration-300 ease-in-out
              ${
                hideText
                  ? "h-7 w-7 text-white fill-white"
                  : "h-9 w-9 text-primary fill-primary"
              }
            `}
            style={{
              transitionProperty: "color, fill, width, height",
              willChange: "color, fill, width, height",
            }}
          />
        </span>
        {/* Brand text transitions away */}
        <span
          className={`
            transition-all duration-300 ease-in-out
            origin-left
            ${
              hideText
                ? "opacity-0 scale-95 translate-x-[-5px] pointer-events-none"
                : "opacity-100 scale-100 translate-x-0"
            }
          `}
          style={{
            transitionProperty: "opacity, transform",
            willChange: "opacity, transform",
            display: "inline-block",
            marginLeft: hideText ? "0px" : "0.5rem",
          }}
        >
          Playcope
        </span>
      </button>

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
  const tabs = [
    { text: "Home", link: "#top" },
    { text: "Our Apps", link: "#our-apps" },
    { text: "About Us", link: "about-us" },
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
          key={tab.text}
          className={`relative flex items-center justify-center px-4 py-2 text-base font-medium transition-colors z-10 ${
            activeTab === tab.text ? "text-white" : "text-gray-400"
          }`}
          onClick={(e) => {
            setActiveTab(tab.text);

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
