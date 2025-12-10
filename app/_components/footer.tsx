"use client";
import { PrimaryButton } from "@/brand/components/buttons/primary_button";
import {
  Facebook,
  InstaLogo,
  Tiktok,
  UpIcon,
  XLogo,
} from "@/brand/components/icons";
import intelligenceStartsHere from "@/public/new/intelligence-bg.png";
import intelligenceEllipse from "@/public/new/intelligence-ellipses.png";
import Image from "next/image";
import { SocialMediasStack } from "./playcope-vision";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, damping: 15, stiffness: 100 },
  },
};

const hoverScale = {
  scale: 1.1,
  transition: { type: "spring" as const, stiffness: 300 },
};

export function Footer() {
  return (
    <div className="container mx-auto p-3 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-20%" }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              when: "beforeChildren",
              staggerChildren: 0.2,
            },
          },
        }}
        className="max-w-7xl mx-auto rounded-4xl relative overflow-hidden text-background"
      >
        <Image alt="intelligence-ellipse" src={intelligenceEllipse} />
        <div className="relative z-10 flex gap-6 flex-col items-center py-24 px-4 pb-12">
          <motion.div
            variants={fadeInUp}
            className="text-center justify-start intelligence-content"
          >
            <span className="text-dark-grey text-3xl md:text-5xl font-bold capitalize">
              Football Intelligence,
            </span>
            <span className="text-3xl md:text-5xl font-bold capitalize">
              <br /> Starts Here
            </span>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="text-center justify-start text-dark-grey text-base md:text-xl font-normal capitalize"
          >
            Powered by AI and real match data, our tools help fans and{" "}
            <br className="max-md:hidden" />
            professionals understand the game beyond the surface
          </motion.div>
          {/* <motion.div
            variants={fadeInUp}
            className="w-fit flex justify-center items-center mx-auto mt-2"
          >
            <SocialMediasStack addInstagram />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="-translate-x-6"
            >
              <PrimaryButton label="Follow Us" className="max-md:text-base" />
            </motion.div>
          </motion.div> */}
        </div>
        <Image
          alt="intelligence-starts-here"
          src={intelligenceStartsHere}
          className="object-cover absolute inset-0 w-full h-full -z-10"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-20%" }}
        variants={staggerContainer}
        className="mt-20 flex justify-between md:flex-row flex-col gap-6"
      >
        <div className="flex justify-between max-md:gap-10">
          <div className="space-y-3">
            <motion.div
              variants={fadeInUp}
              className="text-light-black text-4xl md:text-7xl font-bold capitalize"
            >
              playcope
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="justify-start text-dark-grey md:text-xl text-base font-normal capitalize max-w-md"
            >
              follow our socials to benefit from what we have to offer
            </motion.div>
            <motion.div
              variants={staggerContainer}
              className="flex gap-3 mt-10"
            >
              {[
                { icon: <XLogo />, url: "https://www.x.com/playcope/" },
                {
                  icon: <Tiktok />,
                  url: "https://www.tiktok.com/@playcope.com",
                },
                {
                  icon: <Facebook />,
                  url: "https://www.facebook.com/share/17sSLqRSoJ/",
                },
                {
                  icon: <InstaLogo />,
                  url: "https://www.instagram.com/playcope",
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeInUp}
                  whileHover={hoverScale}
                  className="size-10 px-2.5 py-3 bg-light-grey rounded-full outline outline-dark-grey flex flex-col justify-center items-center gap-2.5 cursor-pointer"
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          <div className="md:hidden">
            <div className="flex flex-col items-end gap-4">
              <motion.button
                type="button"
                aria-label="Scroll to top"
                variants={scaleUp}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-primary rounded-full size-15 flex justify-center items-center p-6"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <UpIcon className="size-12" />
              </motion.button>
              <motion.p
                variants={fadeInUp}
                className="font-bold md:text-lg text-sm text-end whitespace-nowrap"
              >
                Back To The
                <br />
                Top
              </motion.p>
            </div>
          </div>
        </div>
        <motion.div
          variants={staggerContainer}
          className="flex gap-12 md:gap-10 text-light-black text-lg font-bold capitalize mt-5"
        >
          <motion.div
            variants={staggerContainer}
            className="flex flex-col gap-1"
          >
            <FooterLink id="top">Home</FooterLink>
            <FooterLink id="our-apps">Our Apps</FooterLink>
            <FooterLink id="about-us">About Us</FooterLink>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            className="flex flex-col gap-1"
          >
            <FooterLink id="testimonials">Testimonials</FooterLink>
            <FooterLink id="faq">FAQs</FooterLink>
          </motion.div>
          <div className="ml-10 md:block hidden">
            <div className="flex flex-col items-end gap-4">
              <motion.button
                type="button"
                aria-label="Scroll to top"
                variants={scaleUp}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-primary rounded-full size-20 flex justify-center items-center p-6.5"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <UpIcon className="size-10" />
              </motion.button>
              <motion.p
                variants={fadeInUp}
                className="font-bold text-lg text-end"
              >
                Back To The
                <br />
                Top
              </motion.p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div className="flex items-center justify-between md:mt-20 md:text-lg text-xs mt-10 mb-5">
        <div className="text-light-black font-normal capitalize">
          copyright {new Date().getFullYear()}
        </div>
        <div className="justify-start text-light-black font-normal capitalize flex md:gap-8 gap-4">
          <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
            Terms & Conditions
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
            Privacy Policy
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function FooterLink({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.1, x: 5, color: "#0D4FF7" }}
      transition={{ type: "spring" as const, stiffness: 300 }}
      onClick={() => {
        const element = document.getElementById(id);
        if (element) {
          const y = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }}
      className="cursor-pointer mb-1 w-fit"
    >
      {children}
    </motion.div>
  );
}
