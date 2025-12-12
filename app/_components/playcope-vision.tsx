"use client";

import tribalPattern from "@/public/new/tribal-patterns.png";
import visionBg from "@/public/new/vision-bg.png";
import Image, { StaticImageData } from "next/image";
import React, { CSSProperties } from "react";
import { motion } from "framer-motion";
import wireItem1 from "@/public/new/wire-item-1.jpg";
import wireItem2 from "@/public/new/wire-item-2.jpg";
import wireItem3 from "@/public/new/wire-item-3.png";
import wireItem4 from "@/public/new/wire-item-4.jpg";
import wireItem5 from "@/public/new/wire-item-5.jpg";
import wireItem6 from "@/public/new/wire-item-6.webp";
import wireItem7 from "@/public/new/wire-item-7.webp";
import wireItem8 from "@/public/new/wire-item-8.jpg";
import wireItem9 from "@/public/new/wire-item-9.jpg";

import { PrimaryButton } from "@/brand/components/buttons/primary_button";
import {
  Facebook,
  Logo,
  Tiktok,
  XLogo,
  InstaLogo,
} from "@/brand/components/icons";

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

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, damping: 20, stiffness: 100 },
  },
};

export function PlaycopeVision() {
  return (
    <section
      id="playcope-vision"
      className="min-h-screen overflow-hidden max-md:mt-20"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20%" }}
        variants={staggerContainer}
        className="container mx-auto p-3"
      >
        <motion.div
          variants={fadeInUp}
          className="px-6 py-3 bg-light-grey rounded-3xl w-fit mx-auto"
        >
          <div className="text-light-black text-sm md:text-lg font-normal capitalize">
            what we want to achieve
          </div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="text-light-black text-4xl md:text-7xl font-normal capitalize mx-auto w-fit my-4"
        >
          playcope&apos;s vision
        </motion.div>
        <div className="flex mt-10 gap-6 justify-center md:flex-row flex-col">
          <_Card
            src={"/new/wave.png"}
            index={1}
            title="Connect"
            content="we connect fans to smarter insights and build communities that make conversations around football more informed and engaging."
          >
            <SocialMediasStack />

            <div className="h-px w-32 bg-linear-to-r from-white via-primary to-white -ml-12 -mr-px" />

            <div className="rounded-full size-12 border border-primary flex justify-center items-center p-4 text-primary bg-background shadow-[0_0_24px_rgba(13,79,247,0.8)] z-10">
              <Logo className="h-7 text-primary" />
            </div>
          </_Card>
          <_Card
            index={2}
            hasGradient
            src={"/new/triangle-wave.png"}
            title="Innovate"
            content="We use AI and data analytics to make football intelligence accessible to everyone—turning raw data into clear insights for better decisions."
          >
            <div className="">
              <div className="w-full flex gap-6">
                <div className="h-13 px-12 text-dark-grey py-2 bg-light-gray rounded-2xl outline -outline-offset-1 outline-grey-1 text-2xl font-normal capitalize flex justify-center items-center bg-background">
                  pustats
                </div>
                <div className="relative">
                  <div className="absolute inset-0 flex justify-center items-center">
                    <svg
                      width="144"
                      height="84"
                      viewBox="0 0 144 84"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 0H144C132.432 32.4733 133.036 50.877 144 84H0C6.88635 53.4214 7.10325 35.1125 0 0Z"
                        fill="#0D4FF7"
                      />
                    </svg>
                  </div>
                  <div className="h-13 px-12 text-primary py-2 bg-light-gray rounded-2xl outline-2 -outline-offset-1 outline-primary text-2xl font-bold capitalize flex justify-center items-center bg-background z-30 relative">
                    puntrr
                  </div>
                </div>
                <div className="h-13 px-12 text-dark-grey py-2 bg-light-gray rounded-2xl outline -outline-offset-1 outline-grey-1 text-2xl font-normal capitalize flex justify-center items-center bg-background">
                  playcope
                </div>
              </div>
            </div>
          </_Card>
          <_Card
            key={3}
            index={3}
            src={"/new/curve-wave.png"}
            title="Expand"
            content="Built in Africa, aimed at the world. Through scalable tools and key partnerships, we’re creating a global ecosystem for football data and fandom."
          >
            <WireItemsMarquee />
          </_Card>
        </div>
        <motion.div
          variants={fadeInUp}
          className="max-w-195 text-center justify-start text-dark-grey text-base md:text-lg font-normal capitalize mx-auto mt-10"
        >
          To redefine how the world understands football turning raw data into
          intelligent insights that make every fan smarter and every moment more
          meaningful.
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="w-fit mx-auto mt-5 flex items-center"
        >
          <SocialMediasStack />
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="-translate-x-4"
          >
            <PrimaryButton label="Follow Us" className="text-background!" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

const EXTENDED_WIRE_PATH =
  'path("M -200 10 L -33 0.48877 C 156.649 46.5832 264.85 42.4184 460 0.48877 L 600 10")';

function WireItemsMarquee() {
  const wireItems = [
    wireItem1,
    wireItem2,
    wireItem3,
    wireItem4,
    wireItem5,
    wireItem6,
    wireItem7,
    wireItem8,
    wireItem9,
  ];

  // Duration for the full path traversal
  const animationDuration = 50; // seconds

  return (
    <div className="relative h-full -translate-y-8">
      <div className="w-full">
        <svg
          className="text-dark-grey curved-line curved-wire mx-auto"
          width="427"
          height="35"
          viewBox="0 0 427 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-33 0.48877C156.649 46.5832 264.85 42.4184 460 0.48877"
            stroke="currentColor"
          />
        </svg>
      </div>
      <div className="wire-items-container">
        {wireItems.map((item, index) => (
          <div
            key={`wire-${index}`}
            className="absolute"
            style={
              {
                offsetPath: EXTENDED_WIRE_PATH,
                // Move backward (100% -> 0%) which is Right -> Left on our path
                animation: `marquee-backward ${animationDuration}s linear infinite`,
                // Stagger items evenly along the timeline
                animationDelay: `-${
                  (index / wireItems.length) * animationDuration
                }s`,
                offsetRotate: "0deg",
              } as CSSProperties
            }
          >
            <ImageCard src={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ImageCard({
  src,
  index,
}: {
  index?: number;
  src: StaticImageData;
}) {
  return (
    <div className="flex flex-col items-center max-w-fit">
      <div className="w-5 h-6 px-1 py-1.5 bg-primary rounded-lg inline-flex justify-center items-start translate-y-1.5 wire-clip relative z-40">
        <div className="w-2 h-2 bg-white rounded-full" />
      </div>

      <div className="border-2 border-primary size-18 rounded-2xl overflow-clip">
        <Image
          alt="wire-image"
          src={src}
          objectFit="cover"
          className="object-cover h-full w-full hover:scale-110 transition-all duration-300 relative z-10"
        />
      </div>
    </div>
  );
}

export function SocialMediasStack({
  addInstagram,
}: {
  addInstagram?: boolean;
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0, x: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { type: "spring" as const, stiffness: 200, damping: 20 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "-20%" }}
      className="flex items-center social-medias z-10"
    >
      <motion.a
        href="https://www.instagram.com/playcope"
        target="_blank"
        rel="noopener noreferrer"
        variants={itemVariants}
        whileHover={{ scale: 1.2, x: 0, zIndex: 50 }}
        className="size-12 flex justify-center items-center text-foreground border rounded-full p-3 border-dark-grey bg-light-grey relative"
      >
        <InstaLogo />
      </motion.a>
      <motion.a
        href="https://www.tiktok.com/@playcope.com"
        target="_blank"
        rel="noopener noreferrer"
        variants={itemVariants}
        whileHover={{ scale: 1.2, x: -10, zIndex: 50 }}
        className="-translate-x-4 size-12 flex justify-center items-center text-foreground border rounded-full p-3 border-dark-grey bg-light-grey relative"
      >
        <Tiktok />
      </motion.a>
      <motion.a
        href="https://www.facebook.com/share/17sSLqRSoJ/"
        target="_blank"
        rel="noopener noreferrer"
        variants={itemVariants}
        whileHover={{ scale: 1.2, x: -15, zIndex: 50 }}
        className="-translate-x-8 size-12 flex justify-center items-center text-foreground border rounded-full p-3 border-dark-grey bg-light-grey relative"
      >
        <Facebook />
      </motion.a>
      {addInstagram && (
        <motion.a
          href="https://www.x.com/playcope/"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover={{ scale: 1.2, x: -25, zIndex: 50 }}
          className="-translate-x-12 size-12 flex justify-center items-center text-foreground border rounded-full p-3 border-dark-grey bg-light-grey relative"
        >
          <XLogo />
        </motion.a>
      )}
    </motion.div>
  );
}

function _Card({
  index,
  src,
  title,
  content,
  hasGradient,
  children,
}: {
  index: number;
  src: string;
  title: string;
  hasGradient?: boolean;
  content: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="rounded-4xl w-full max-w-sm relative overflow-hidden min-h-[400px] cursor-pointer max-md:mx-auto"
    >
      <Image
        alt="vision-bg"
        src={visionBg}
        fill
        className="object-cover w-full h-full -z-10"
      />
      <div className="relative z-10 rounded-4xl flex flex-col h-full">
        <div className="flex justify-center items-center p-3 relative min-h-12">
          <div
            className="absolute inset-0 opacity-15 rounded-t-4xl"
            style={{
              backgroundImage: `url(${src})`,
              backgroundRepeat: "repeat",
            }}
          />
          <div
            className="absolute inset-0 flex justify-center items-center rounded-t-4xl"
            style={{
              background:
                "linear-gradient(to right, #F8F8F866 0%, #A1A1A1 51%, #F8F8F866 100%)",
            }}
          >
            <div className="text-grey-1 md:text-4xl text-3xl font-bold capitalize w-fit h-fit z-50 relative">
              {index}
            </div>
          </div>
        </div>
        <div className="w-full grow flex flex-col justify-between rounded-b-4xl py-6 gap-6">
          <div className="md:text-5xl text-4xl text-center font-normal capitalize">
            {title}
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="h-full card-image flex justify-center items-center relative my-4"
          >
            {hasGradient && (
              <motion.div
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 blur-xl -z-10"
                style={{
                  background:
                    "linear-gradient(to right, #0D4FF72E 0%, #FFFFFF3D 40%, #FFFFFF1F 60%, #0D4FF736 100%)",
                }}
              />
            )}
            {children}
          </motion.div>

          <div className="text-center text-dark-grey text-base font-normal capitalize h-fit w-fit px-4 pb-2">
            {content}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
