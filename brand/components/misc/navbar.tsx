"use client";

import { IconButton } from "@/brand/components/buttons/icon_button";
import { PrimaryButton } from "@/brand/components/buttons/primary_button";
import {
  Facebook,
  Flash,
  InstaLogo,
  ReceiveSquare,
  Star,
  Tiktok,
  Verify,
  XLogo,
} from "@/brand/components/icons";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import NavBarMobile from "./navbar-mobile";
import { NavbarLogo } from "./navbar-logo";
import { motion } from "framer-motion";

export default function Navbar() {
  const [hideText, setHideText] = useState(false);
  const [showSocials, setShowSocials] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isBottom = windowHeight + scrollY >= documentHeight - 100;

      setHideText(scrollY > 40);
      setShowSocials(scrollY > 40 && !isBottom);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    {
      icon: <Tiktok className="size-4" />,
      url: "https://www.tiktok.com/@playcope.com",
    },
    {
      icon: <InstaLogo className="size-4" />,
      url: "https://www.instagram.com/playcope",
    },
  ];

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
        <div className="flex items-center ml-auto gap-2">
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-foreground border rounded-full p-3 border-dark-grey bg-light-grey flex justify-center items-center"
            >
              {link.icon}
            </motion.a>
          ))}
          <PrimaryButton
            icon={<Flash />}
            label="See Live Products"
            onClick={() => {
              const element = document.getElementById("our-apps");
              if (element) {
                const y =
                  element.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className="text-background ml-2"
          />
        </div>
      </nav>
      <NavBarMobile hideText={hideText} showSocials={showSocials} />
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
