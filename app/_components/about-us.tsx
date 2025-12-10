"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      damping: 15,
      stiffness: 100,
      delay: 0.3,
    },
  },
};

export function AboutUs() {
  return (
    <section id="about-us" className="min-h-screen">
      <div className="container mx-auto p-3">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          className="px-6 py-2 bg-light-grey rounded-full w-fit mx-auto"
          variants={fadeInUp}
        >
          <span className="text-sm md:text-lg text-light-black font-normal uppercase tracking-wide">
            About Us
          </span>
        </motion.div>
        <div className="flex gap-4 mt-10 max-w-300 mx-auto relative md:flex-row flex-col">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            variants={slideInLeft}
            className="relative border border-grey-1 rounded-4xl p-8 w-full max-w-2xl space-y-4"
          >
            <div className="text-light-black md:text-5xl text-4xl font-normal capitalize">
              what is playcope..?
            </div>
            <div className="text-dark-grey md:text-base text-sm">
              Playcope is a football intelligence company built to help fans,
              bettors, analysts, and brands see football in a smarter way. We
              believe football isn&apos;t just about the final whistle it&apos;s
              data, emotion, and patterns waiting to be understood. At Playcope,
              we turn complex football data into simple, powerful insights using
              artificial intelligence. Our mission is to make the game clearer,
              more predictable, and more exciting for everyone from casual fans
              to serious analysts. Our first product,{" "}
              <Link href={"https://www.puntrr.ai"} target="_blank">
                <span className="text-primary font-semibold">Puntrr</span>
              </Link>
              , brings that vision to life using AI to help users make smarter
              football predictions through real-time stats, risk analysis, and
              performance insights, but{" "}
              <Link href={"https://www.puntrr.ai"} target="_blank">
                <span className="text-primary font-semibold">Puntrr </span>
              </Link>
              is just the beginning. Playcope is building a full ecosystem of
              tools that connect the dots between football and fan engagement
              shaping the future of how Africa and the world experience
              football.
            </div>

            {/* Badge */}
            <motion.div
              variants={scaleUp}
              className="year-badge absolute z-10 text-primary left-1/2 -translate-x-1/2 bottom-0 translate-y-[calc(50%+8px)] md:left-auto md:top-auto md:translate-y-0 md:right-0 md:translate-x-[calc(50%+8px)]"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <StarThree />
              </motion.div>
              <div className="absolute inset-0 flex justify-center items-center text-background font-bold">
                2024
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="max-w-lg w-full border border-grey-1 rounded-4xl bg-linear-to-br from-primary/5 to-white/25 overflow-clip relative max-md:h-96"
          >
            <div className="absolute -z-10 -bottom-20 -right-30">
              <div className="w-[455px] h-[455px] bg-linear-to-b from-stone-50 to-white rounded-full outline-2 outline-light-grey flex justify-center items-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-80 h-80 bg-[#E9E9E93B] rounded-full outline-2 outline-light-grey flex justify-center items-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                    className="w-48 h-48 bg-[#E9E9E94D] rounded-full outline-2 outline-light-grey flex justify-center items-center"
                  >
                    <div className="size-24 bg-grey-1 rounded-full outline-2 outline-light-grey" />
                  </motion.div>
                </motion.div>
              </div>
            </div>

            <div className="h-full flex flex-col justify-between py-6">
              <div className="text-center text-light-black text-3xl md:text-4xl font-normal capitalize">
                we get up to
              </div>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                  className="text-center justify-start text-primary text-5xl md:text-7xl font-bold capitalize"
                >
                  10M+
                </motion.div>
                <div className="text-center justify-start text-dark-grey text-2xl md:text-3xl font-normal capitalize">
                  monthly impressions
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StarThree() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M49.9434 0L53.3749 14.0635L59.4059 0.903564L60.1139 15.3623L68.5265 3.5816L66.4853 17.913L76.9754 7.93732L72.2589 21.6235L84.4473 13.8133L77.2259 26.3595L90.6722 20.9972L81.2069 31.95L95.425 29.2292L84.0579 38.1928L98.5339 38.2121L85.6759 44.8624L99.8867 47.6209L86.0025 51.7177L99.4344 57.1157L85.0258 58.5109L97.1934 66.3534L82.7811 64.9965L93.2446 75L79.3495 70.9401L87.7308 82.743L74.8552 76.1268L80.8513 89.3027L69.4605 80.3693L72.8547 94.4418L63.3604 83.5141L64.03 97.9746L56.7753 85.4476L54.6962 99.7736L49.9434 86.1L45.1906 99.7736L43.1114 85.4476L35.8567 97.9746L36.5263 83.5141L27.032 94.4418L30.4262 80.3693L19.0354 89.3027L25.0315 76.1268L12.1559 82.743L20.5372 70.9401L6.64209 75L17.1056 64.9965L2.69332 66.3534L14.861 58.5109L0.452286 57.1157L13.8842 51.7177L-7.62939e-06 47.6209L14.2108 44.8624L1.35278 38.2121L15.8288 38.1928L4.46176 29.2292L18.6798 31.95L9.21456 20.9972L22.6608 26.3595L15.4394 13.8133L27.6278 21.6235L22.9113 7.93732L33.4014 17.913L31.3602 3.5816L39.7728 15.3623L40.4808 0.903564L46.5118 14.0635L49.9434 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
