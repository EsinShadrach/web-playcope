"use client";

import tribalPattern from "@/public/new/tribal-patterns.png";
import visionBg from "@/public/new/vision-bg.png";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

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
    <section id="playcope-vision" className="min-h-screen overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-20%" }}
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
            index={3}
            src={"/new/curve-wave.png"}
            title="Expand"
            content="Built in Africa, aimed at the world. Through scalable tools and key partnerships, we’re creating a global ecosystem for football data and fandom."
          >
            <div className="flex justify-center items-center text-primary">
              <div className="translate-x-8">
                <svg
                  width="88"
                  height="100"
                  viewBox="0 0 88 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.7714 1.56443C30.8326 1.53065 28.941 1.93592 27.0832 3.05858L27.085 3.0535C26.169 3.6076 25.2052 4.41033 24.2912 4.60447C21.3005 5.24158 18.7784 6.93592 15.9316 7.83592C14.5774 8.26307 13.926 9.08729 13.9667 10.4832C13.4112 11.4838 12.5343 12.1101 11.5155 12.5887C10.6129 13.0109 9.7529 13.4933 9.48419 14.5584L9.47103 14.5687C8.40953 15.7988 7.29322 16.9863 6.21071 18.8252L39.4009 7.9949C37.965 6.63768 36.4741 5.48904 38.1335 3.40643C36.6452 3.50701 35.5929 4.36541 34.3391 4.17264C35.0505 3.1199 36.5731 3.34275 37.3865 2.30858C35.8156 1.8824 34.2792 1.59061 32.7714 1.56443ZM50.5826 8.13592C49.184 8.22225 47.8384 8.33201 46.6777 9.33084C45.2988 10.5097 43.749 10.8447 42.1854 9.53358C41.0053 8.54334 39.8552 8.73084 38.5169 9.37498C35.4267 10.8662 32.2569 12.1986 29.1225 13.5945C21.8504 16.8488 14.581 20.106 7.31444 23.366C4.99108 24.1215 4.88815 24.3314 5.42244 26.6326C5.81294 28.3127 6.51753 30.0812 4.53497 31.3342C4.31765 31.4319 4.13374 31.5906 4.00579 31.7908C3.87785 31.991 3.81142 32.224 3.81467 32.4611C3.81284 32.4622 3.81094 32.463 3.80897 32.4637C3.29433 34.2515 3.72589 35.9896 4.05255 37.7457C4.26017 38.8574 4.78012 38.815 5.6391 38.4092C7.58256 37.4881 9.55451 36.625 11.5245 35.7621C17.7532 33.0394 23.9831 30.3187 30.2141 27.6C30.3887 27.6073 30.5636 27.5914 30.734 27.5527C30.5317 27.659 30.3447 27.7851 30.2426 28.0219L23.8529 31.7455L14.2313 36.6195C11.4748 37.0926 9.08406 38.5732 6.47137 39.4133C4.85437 39.932 5.17572 40.4918 6.27789 41.2135C7.30914 42.4488 8.82851 42.7541 10.2536 43.2342L10.2595 43.2308C11.3638 43.7457 12.4615 44.2777 13.5782 44.7676C14.6165 45.2265 15.5817 45.3851 16.2136 44.0758C16.5688 43.3328 17.2148 43.225 17.9886 43.5781C19.1942 44.1367 20.4706 44.1533 21.7612 43.9316L21.76 43.9328C21.7629 43.9328 21.7655 43.9329 21.7679 43.9332L21.7743 43.9385L21.7834 43.9344C22.2725 43.9767 22.7555 43.983 23.18 43.6738C23.764 43.6738 24.353 43.6279 24.93 43.6861C27.6774 43.965 30.5384 43.0365 33.1847 44.4908C33.6871 44.766 34.1556 44.2209 34.6047 43.9933C39.372 41.5673 44.1345 39.13 48.8923 36.6814C55.2109 33.4438 61.5272 30.2066 67.8412 26.9699C68.3825 26.6912 69.6159 26.5695 68.5404 25.4806V25.4717C67.803 23.9949 67.1423 22.49 66.8806 20.8447L66.8857 20.8389C66.8022 19.6125 66.3817 18.4885 65.8492 17.3908C65.3876 16.4502 64.8678 16.1887 63.7904 16.6652C61.2967 17.7699 58.7388 18.7779 56.1831 19.6867C53.6274 20.5955 51.2541 22.0232 48.5067 22.3937L48.4984 22.3928L48.4998 22.392C48.4749 21.9736 48.8546 22.0213 49.0836 21.8943L62.6409 14.3887C62.6906 13.1303 62.2363 11.999 61.7534 10.8765L61.7505 10.8779L61.7511 10.8765C61.1015 9.24061 59.9622 8.76209 58.3152 9.41678C57.1985 9.87694 56.0085 10.1364 54.8007 10.183V10.1793L54.792 10.1824L53.8531 10.107C52.5325 9.82635 51.702 8.74451 50.582 8.13572L50.5826 8.13592ZM70.536 29.4263C70.2289 29.4447 69.8819 29.5728 69.4725 29.7865C64.4744 32.3931 59.4319 34.9146 54.4037 37.4613C48.4951 40.4613 42.5775 43.4299 36.6903 46.4617C36.3195 46.6506 35.278 46.6101 35.775 47.533C36.424 48.7342 36.2274 50.0039 36.2607 51.2633C36.2601 51.2634 36.2595 51.2637 36.259 51.264V51.2691C36.245 51.8863 36.2321 52.5028 36.2203 53.1187C36.3584 54.1071 36.7226 55.0509 37.2851 55.8773L37.2914 55.8787L37.2869 55.8806L38.0056 56.832L39.69 58.9285C39.9776 60.8785 40.9766 60.8996 42.6629 60.3262C48.7756 58.2437 54.9488 56.3306 61.0987 54.3541L61.4537 54.7178L61.4586 54.717L54.7555 57.8713C53.639 58.1678 52.6256 58.6867 51.6226 59.2496C51.4757 59.2332 51.327 59.2575 51.193 59.3198C51.059 59.382 50.9449 59.4799 50.8632 59.6025C48.2007 60.5875 45.6067 61.7466 43.098 63.072C43.0567 63.0527 43.0094 63.05 42.9661 63.0645C42.9228 63.0789 42.8868 63.1094 42.8655 63.1496C42.3249 63.2082 41.8171 63.4363 41.4154 63.8008C40.4836 64.009 39.4362 64.3109 39.4859 65.4156C39.6101 68.1773 38.6464 70.6885 37.9294 73.2648L37.9276 73.2654C37.7071 73.6474 37.6099 74.0874 37.6489 74.5261C37.688 74.9648 37.8615 75.381 38.1461 75.7185C38.6927 76.3697 39.4185 75.6019 40.0184 75.3849C49.123 72.1026 58.22 68.7995 67.3092 65.4756C68.5108 65.0379 70.0527 64.8437 70.7823 63.9879C71.5668 63.0648 70.5053 61.5771 70.587 60.3117C70.6896 59.7687 70.7939 59.2258 70.8964 58.6808C70.8967 58.6802 70.8972 58.6797 70.898 58.6793C71.4446 57.0082 72.7829 55.7779 73.4663 54.1826L76.583 49.8767C77.245 48.465 78.8689 48.0201 79.7314 46.8078L79.6911 46.8215L79.7225 46.8043C81.5772 45.673 82.3704 43.7564 83.6766 41.7623L75.2428 44.3387C74.7651 44.3699 74.2948 44.4396 73.8287 44.5293C74.0761 44.3874 74.2931 44.1985 74.4673 43.9734C74.9857 43.7263 75.5091 43.4847 76.0238 43.2289C78.7394 41.8806 81.7194 41.0951 84.2752 39.408C84.2063 39.3953 84.1438 39.3599 84.0978 39.3074C84.1563 39.339 84.2149 39.3709 84.2752 39.408C84.5219 38.6721 84.4296 37.9236 84.2895 37.1947L84.2946 37.2055C84.0958 36.173 83.6397 35.6435 82.5199 36.3883C81.8122 36.8924 80.996 37.2254 80.1362 37.3609L80.1295 37.365C80.1295 37.3623 80.1301 37.3597 80.1311 37.3572C78.5746 37.2406 76.9682 37.2709 75.8998 35.8185H75.9049C75.4044 35.1355 74.8721 35.6277 74.3646 35.8289C70.4415 37.3963 66.5195 38.9664 62.5987 40.5392C62.3044 40.5664 62.0231 40.633 61.7475 40.7195C61.9159 40.5574 62.0636 40.375 62.164 40.1457C65.0001 38.6833 67.8328 37.2162 70.6619 35.7443C71.8954 35.1019 73.9118 34.6396 74.1461 33.7326C74.4514 32.557 72.5362 31.5916 71.8387 30.3562C71.4484 29.6691 71.048 29.3957 70.5364 29.4263H70.536ZM71.0494 65.6914C70.8787 65.6801 70.6593 65.7291 70.3776 65.8443C60.4719 69.9095 50.5568 73.9521 40.6325 77.9721C39.8746 78.2863 39.7112 78.5615 40.1001 79.3451C41.0477 81.2508 41.9191 83.1971 42.4074 85.2846L42.4039 85.2851H42.4074V85.2875C42.4659 85.8609 42.6062 86.4418 42.5689 87.0101C42.4801 88.325 42.7197 88.7289 44.1574 88.0935C50.735 85.1814 57.3837 82.432 63.9595 79.5183C66.7586 78.2777 68.6648 76.0736 69.8343 73.25L69.8276 73.2506C69.8292 73.25 69.8298 73.2492 69.8314 73.2476C71.5281 71.317 71.7927 69.0088 71.6063 66.584C71.5635 66.0332 71.4252 65.7158 71.0498 65.6912L71.0494 65.6914ZM81.9701 69.3002C81.1794 69.306 80.6622 70.1185 80.2957 70.8457C79.9681 71.4935 79.7308 72.1871 79.453 72.8613L79.4507 72.8635C78.9645 73.8605 78.5756 74.7515 77.0332 74.508C75.9488 74.3367 74.4614 75.1928 74.5661 76.2144C74.7825 78.348 73.3469 80.1748 73.7871 82.2572C73.9564 82.4117 74.1212 82.4701 74.2834 82.4744C74.0876 82.5924 73.9047 82.7336 73.7497 82.9244C73.4763 83.9603 73.1781 84.9928 73.4675 86.0779L73.4728 86.0773C74.3178 87.9281 74.9525 88.1637 76.7785 87.6453C78.9902 87.0144 78.9812 85.1412 79.3472 83.4506C79.6823 82.5845 79.9286 81.7096 79.8276 80.6779L76.6327 81.6414L76.6307 81.6502C76.3795 81.7439 76.0925 81.6728 75.8405 81.7767C76.0035 81.6476 76.1483 81.4963 76.2579 81.3025C76.801 80.9865 77.3173 80.6039 77.8942 80.3639C81.8929 78.7103 82.5409 75.2248 82.8408 71.54C82.8585 70.751 83.4087 69.6498 82.3262 69.3498C82.2104 69.3168 82.0905 69.3002 81.9701 69.3006V69.3002ZM63.9472 80.8574C57.2185 84.3111 50.7902 87.682 44.2835 90.8957C42.6115 91.7234 42.3168 92.6234 43.1776 94.1148C43.5429 95.4625 44.4937 96.3107 45.6606 96.9777V96.9793L45.6618 96.9789L45.6626 96.9793L45.6661 96.9799C46.0989 97.5574 46.7088 97.7826 47.3967 97.8564C49.8336 99.2859 52.7425 97.9957 54.0825 94.8896C55.7865 93.9297 57.4797 92.9308 59.1979 91.9885C60.3012 91.3834 61.0787 90.6353 60.8171 89.2582L60.8184 89.256C61.1469 88.3508 62.3219 88.1248 62.5454 87.1383C62.3451 85.0082 64.1514 83.2556 63.9491 80.8609L63.9472 80.8574Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <Image src={tribalPattern} alt="tribal-pattern" />
            </div>
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
        href="https://www.x.com/playcope/"
        target="_blank"
        rel="noopener noreferrer"
        variants={itemVariants}
        whileHover={{ scale: 1.2, x: 0, zIndex: 50 }}
        className="size-12 flex justify-center items-center text-foreground border rounded-full p-3 border-dark-grey bg-light-grey relative"
      >
        <XLogo />
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
          href="https://www.instagram.com/playcope"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover={{ scale: 1.2, x: -25, zIndex: 50 }}
          className="-translate-x-12 size-12 flex justify-center items-center text-foreground border rounded-full p-3 border-dark-grey bg-light-grey relative"
        >
          <InstaLogo />
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
      className="rounded-4xl w-full max-w-sm relative overflow-hidden min-h-[400px] cursor-pointer"
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
