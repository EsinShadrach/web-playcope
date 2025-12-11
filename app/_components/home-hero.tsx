"use client";

import { PrimaryButton } from "@/brand/components/buttons/primary_button";
import { Flash } from "@/brand/components/icons";
import bundesliga from "@/public/new/bundesliga.svg";
import laliga from "@/public/new/laliga.svg";
import ligue1 from "@/public/new/ligue1.svg";
import mls from "@/public/new/mls.svg";
import panorama from "@/public/new/panorama.png";
import premierLeague from "@/public/new/premier-league.svg";
import serieA from "@/public/new/seriea.svg";
import uefa from "@/public/new/uefa.svg";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { SocialMediasStack } from "./playcope-vision";

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

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const VolumeUpIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM3 9V15H7L12 20V4L7 9H3Z" />
  </svg>
);

const VolumeOffIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M3 9V15H7L12 20V4L7 9H3ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23Z" />
    <line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M18 6L6 18M6 6L18 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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

const PANORAMA_CLIP_PATH =
  'path("M-94 0C649.056 216.861 1068.39 224.559 1822 0V680C1068.32 446.396 649.104 459.126 -94 680V0Z")';

export function HomeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

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

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play().catch(() => {
              // Auto-play was prevented
            });
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="top" className="min-h-screen mt-12 md:mt-24 overflow-x-clip">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-md:px-4"
      >
        <motion.div
          variants={fadeInUp}
          className="w-fit mx-auto mb-5 md:hidden"
        >
          <FollowersCount />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="flex w-fit mx-auto md:gap-4 items-center justify-center"
        >
          <h1 className="text-center text-light-black text-4xl md:text-7xl font-normal capitalize">
            One Ecosystem
          </h1>
          <div className="md:block hidden">
            <FollowersCount />
          </div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="text-center text-4xl md:text-7xl font-normal capitalize md:pt-3 pt-1"
        >
          <h2>Endless Football</h2>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-center text-dark-grey text-base md:text-xl font-normal capitalize md:leading-8 pt-5 max-md:px-4"
      >
        Our products combine cutting-edge AI with football intuition{" "}
        <br className="md:block hidden" />
        to help you understand, predict, and enjoy the game on a whole new level
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex items-center justify-center gap-4 pt-5 md:flex-row flex-col max-md:px-4"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="max-md:w-full"
        >
          <PrimaryButton
            icon={<Flash className="text-background!" />}
            onClick={() => {
              const element = document.getElementById("our-apps");
              if (element) {
                const y =
                  element.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            label="See Live Products"
            className="text-background max-md:text-base max-md:w-full"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
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

          <video
            ref={videoRef}
            autoPlay
            muted={isMuted} // Controlled by state
            loop
            playsInline
            className="z-10 absolute top-0 left-0"
            style={{
              width: 1728,
              height: 680,
              objectFit: "cover",
              clipPath: PANORAMA_CLIP_PATH,
            }}
          >
            <source src={"/new/hero-video-optimized.mp4"} type="video/mp4" />
          </video>
          {/* Transparent overlay for click detection on the video area */}
          <div
            onClick={() => setIsFullscreen(true)}
            className="z-20 absolute top-0 left-0 cursor-pointer"
            style={{
              width: 1728,
              height: 680,
              clipPath: PANORAMA_CLIP_PATH,
            }}
          />
        </div>
        <button
          onClick={toggleMute}
          className="absolute bottom-22 right-4 border border-white/20 md:bottom-20 md:right-10 z-30 bg-white/20 backdrop-blur-sm p-3 md:p-4 rounded-full hover:bg-white/30 transition-colors text-white"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <VolumeOffIcon className="size-5 md:size-6" />
          ) : (
            <VolumeUpIcon className="size-5 md:size-6" />
          )}
        </button>
      </motion.div>
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-10"
            onClick={() => setIsFullscreen(false)}
          >
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/80 hover:text-white transition-colors"
            >
              <CloseIcon className="size-8 md:size-10" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-7xl max-h-[80vh] aspect-video relative rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video autoPlay controls className="w-full h-full object-cover">
                <source
                  src={"/new/hero-video-optimized.mp4"}
                  type="video/mp4"
                />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
          Trust And Follows Us
        </div>
      </div>
    </div>
  );
}
