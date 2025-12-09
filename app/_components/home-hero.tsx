"use client";

import { PrimaryButton } from "@/brand/components/buttons/primary_button";
import {
  Facebook,
  Flash,
  Tiktok,
  Verify,
  XLogo,
} from "@/brand/components/icons";
import panorama from "@/public/new/panorama.png";
import Image from "next/image";
import premierLeague from "@/public/new/premier-league.svg";
import uefa from "@/public/new/uefa.svg";
import ligue1 from "@/public/new/ligue1.svg";
import bundesliga from "@/public/new/bundesliga.svg";
import laliga from "@/public/new/laliga.svg";
import serieA from "@/public/new/seriea.svg";
import mls from "@/public/new/mls.svg";
import { SocialMediasStack } from "./playcope-vision";
import { useEffect, useRef, useState, CSSProperties } from "react";

const leagues = [
  {
    name: "Premier League",
    image: premierLeague,
  },
  {
    name: "UEFA Champions League",
    image: uefa,
  },
  {
    name: "Ligue 1",
    image: ligue1,
  },
  {
    name: "Bundesliga",
    image: bundesliga,
  },
  {
    name: "La Liga",
    image: laliga,
  },
  {
    name: "Serie A",
    image: serieA,
  },
  {
    name: "Major League Soccer",
    image: mls,
  },
];

const PanoramaBg = () => {
  return (
    <svg
      width="1728"
      height="680"
      viewBox="0 0 1728 680"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-94 0C649.056 216.861 1068.39 224.559 1822 0V680C1068.32 446.396 649.104 459.126 -94 680V0Z"
        fill="#F8F8F8"
      />
    </svg>
  );
};

const TOP_PATH = 'path("M-94 0 C 649.056 216.861, 1068.39 224.559, 1822 0")';
const BOTTOM_PATH =
  'path("M-94 680 C 649.104 459.126, 1068.32 446.396, 1822 680")';

export function HomeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        // Calculate scale based on container width vs design width (1728px)
        // Clamp minimum scale to 0.5 to zoom in on mobile
        const newScale = Math.max(
          Math.min(containerRef.current.offsetWidth / 1728, 1),
          0.5
        );
        setScale(newScale);
      }
    };

    // Initial calculation
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="top" className="min-h-screen mt-12 md:mt-24 overflow-x-clip">
      <div className="max-md:px-4">
        <div className="w-fit mx-auto mb-5 md:hidden">
          <FollowersCount />
        </div>
        <div className="flex w-fit mx-auto md:gap-4 items-center justify-center">
          <div className="text-center text-light-black text-4xl md:text-7xl font-normal capitalize">
            One Ecosystem
          </div>
          <div className="md:block hidden">
            <FollowersCount />
          </div>
        </div>
        <div className="text-center text-4xl md:text-7xl font-normal capitalize md:pt-3 pt-1">
          Endless Football
        </div>
      </div>
      <div className="text-center text-dark-grey text-base md:text-xl font-normal capitalize md:leading-8 pt-5 max-md:px-4">
        Our products combine cutting-edge AI with football intuition{" "}
        <br className="md:block hidden" />
        to help you understand, predict, and enjoy the game on a whole new level
      </div>
      <div className="flex items-center justify-center gap-4 pt-5 md:flex-row flex-col max-md:px-4">
        <PrimaryButton
          icon={<Verify />}
          label="Become A Member"
          className="text-background max-md:text-base max-md:w-full"
        />
        <PrimaryButton
          icon={<Flash className="text-light-black!" />}
          label="See Live Products"
          className="bg-grey-1! max-md:text-base max-md:w-full"
        />
      </div>

      <div
        ref={containerRef}
        className="relative mt-10 md:mt-18 w-full"
        style={{ height: 680 * scale }}
      >
        <div
          className="absolute top-0 left-1/2 origin-top"
          style={{
            width: 1728,
            height: 680,
            transform: `translateX(-50%) scale(${scale})`,
            transformOrigin: "top center",
          }}
        >
          <div className="top-banner">
            {leagues.map((league, index) => (
              <div
                key={`${league.name}-top-${index}`}
                className="absolute flex items-center gap-3 md:-top-8 -top-10"
                style={
                  {
                    offsetPath: TOP_PATH,
                    animation: `marquee-backward 30s linear infinite`,
                    animationDelay: `-${(index / leagues.length) * 30}s`,
                    offsetRotate: "auto",
                  } as CSSProperties
                }
              >
                <Image
                  src={league.image}
                  alt={league.name}
                  className="size-12 md:size-10"
                />
                <span className="text-xl md:text-sm font-semibold text-light-black/60 uppercase tracking-wider">
                  {league.name}
                </span>
              </div>
            ))}
          </div>
          <div className="absolute left-0 -z-10 top-20 md:-top-15 w-full flex justify-center">
            <div className="relative max-h-[680px]">
              <PanoramaBg />
            </div>
          </div>

          <div className="absolute left-0 -z-10 md:-bottom-15 bottom-20 w-full flex justify-center">
            <div className="relative max-h-[680px]">
              <PanoramaBg />
            </div>
          </div>
          <div className="bottom">
            {leagues.map((league, index) => (
              <div
                key={`${league.name}-bottom-${index}`}
                className="absolute flex items-center gap-3 md:top-8 top-9"
                style={
                  {
                    offsetPath: BOTTOM_PATH,
                    animation: `marquee-forward 30s linear infinite`,
                    animationDelay: `-${(index / leagues.length) * 30}s`,
                    offsetRotate: "auto",
                  } as CSSProperties
                }
              >
                <Image
                  src={league.image}
                  alt={league.name}
                  className="size-12 md:size-10"
                />
                <span className="text-xl md:text-sm font-semibold text-light-black/60 uppercase tracking-wider">
                  {league.name}
                </span>
              </div>
            ))}
          </div>

          <Image
            alt="panorama"
            src={panorama}
            className="z-10"
            style={{ width: 1728, height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
function FollowersCount() {
  return (
    <div className="flex gap-4">
      <div className="flex items-center">
        <SocialMediasStack />
      </div>
      <div className="-ml-8">
        <div className="text-center text-xl md:text-2xl font-bold capitalize">
          500k+ football fans
        </div>
        <div className="md:text-lg font-normal capitalize">
          trusts and follows us
        </div>
      </div>
    </div>
  );
}
