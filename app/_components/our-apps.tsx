"use client";

import { useRef } from "react";
import { PrimaryButton } from "@/brand/components/buttons/primary_button";
import {
  Logo,
  Logout,
  Profile2User,
  ReceiveSquare,
} from "@/brand/components/icons";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.95, rotateX: 10, backgroundPosition: "0% 0%" },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    backgroundPosition: ["0% 0%", "100% 100%"],
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 100,
      delay: 0.2,
      backgroundPosition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "linear",
      },
    },
  },
};

export function OurApps() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      id="our-apps"
      className="min-h-screen md:mt-36 mt-14 overflow-hidden"
    >
      <div className="container mx-auto p-3 flex justify-between md:flex-row flex-col">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          className="space-y-8"
        >
          <motion.div
            variants={fadeInUp}
            className="px-6 py-3 bg-light-grey rounded-3xl w-fit max-md:mx-auto"
          >
            <div className="text-light-black text-sm md:text-lg font-normal capitalize">
              our products
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="justify-start text-Light-Black text-4xl md:text-7xl font-normal capitalize md:leading-25 max-md:text-center leading-9"
          >
            what we have <br className="max-md:hidden" />
            built so far
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="justify-start text-dark-grey text-xl md:text-2xl max-md:my-4 max-md:mb-10 font-normal capitalize md:leading-9 md:-mt-8 max-md:text-center"
          >
            These are the solutions we&apos;re developing for{" "}
            <br className="max-md:hidden" />
            our users.
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full max-w-xl"
          style={{ perspective: "1000px" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
        >
          <motion.div
            variants={cardVariant}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            className="min-h-[600px] h-auto rounded-4xl p-[0.5px] overflow-x-clip transform-gpu"
            style={{
              background:
                "linear-gradient(to bottom right, #FF3B3066 25%, #0D4FF7 50%, #FFFFFF 90%)",
              backgroundSize: "200% 200%",
            }}
          >
            <div className="bg-background h-[600px] w-full rounded-[31.5px] px-0 p-6">
              <div className="flex justify-between items-center pb-6 px-6">
                <div className="size-10" />
                <div className="flex items-center text-primary mx-auto w-fit">
                  <Logo className="size-7" />
                  <div className="text-2xl font-bold capitalize">puntrr</div>
                </div>
                <div className="w-8 h-0 rounded-xl outline outline-dark-grey" />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="h-58 w-full relative">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 blur-xl"
                    style={{
                      background:
                        "linear-gradient(to right, #0D4FF72E 0%, #FFFFFF3D 40%, #FFFFFF1F 60%, #0D4FF736 100%)",
                    }}
                  />
                  <div className="absolute inset-0">
                    <div className="px-6 py-3 bg-light-grey rounded-3xl w-fit mx-auto">
                      <div className="text-dark-grey text-sm font-normal capitalize flex justify-center gap-2 items-center">
                        <span>
                          <Profile2User className="text-dark-grey max-md:size-5" />
                        </span>
                        <span>10,000+ daily users</span>
                      </div>
                    </div>
                    <div className="mt-5 flex flex-col justify-center">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-center justify-start text-light-black md:text-5xl text-3xl font-bold capitalize"
                      >
                        Predict smarter,
                      </motion.div>
                      <motion.div
                        initial={{ scale: 0, rotate: 0 }}
                        whileInView={{ scale: 1, rotate: 3.14 }}
                        transition={{ type: "spring", delay: 0.8 }}
                        className="px-12 py-1 md:py-2.5 origin-top-left bg-Blue inline-flex justify-center items-center gap-2.5 bg-primary mx-auto cursor-pointer hover:bg-primary/90"
                      >
                        <div className="text-center justify-start text-grey-1 md:text-5xl text-3xl font-bold capitalize py-2">
                          win bigger
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="text-center text-dark-grey text-base md:text-xl font-normal mt-6 capitalize">
                Puntrr uses AI to analyze stats, form, and performance trends
                helping you bet with strategy, not emotion.
              </div>
              <div className="flex gap-6 mt-12 md:w-fit mx-auto md:flex-row flex-col max-md:px-10">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="max-md:w-full"
                >
                  <PrimaryButton
                    icon={<ReceiveSquare />}
                    label="Download Now"
                    className="text-background md:text-lg text-base max-md:w-full"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="max-md:w-full"
                >
                  <Link href={"https://www.puntrr.ai"} target="_blank">
                    <PrimaryButton
                      icon={<Logout />}
                      label="Visit Website"
                      className="text-light-black bg-light-grey! hover:bg-grey-1! md:text-lg text-base max-md:w-full"
                    />
                  </Link>
                </motion.div>
              </div>
              <div className="text-center text-dark-grey text-base md:text-lg font-normal capitalize mt-6">
                available on appstore and playstore
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="border border-dark-grey rounded-4xl py-6 px-10 mt-6"
          >
            <div className="flex justify-between items-center">
              <div className="md:text-4xl text-2xl font-normal capitalize">
                <span className="text-light-black font-normal capitalize">
                  pustats{" "}
                </span>
                <span className="text-dark-grey font-normal capitalize">
                  (coming soon)
                </span>
              </div>
              <div className="h-8 w-0.5 bg-dark-grey"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
