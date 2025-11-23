import { PrimaryButton } from "@/brand/components/buttons/primary_button";

export function WhatIsPlaycope() {
  return (
    <div className="relative">
      <div className="mt-32 mx-3">
        <div className="w-full h-px bg-[linear-gradient(to_right,rgba(13,79,247,0)_0%,rgba(13,79,247,0.2)_25%,rgba(255,255,255,0.24)_50%,rgba(13,79,247,0.2)_75%,rgba(13,79,247,0)_100%)]" />
        <div className="mt-10 md:mt-28 w-full h-px bg-[linear-gradient(to_right,rgba(13,79,247,0)_0%,rgba(13,79,247,0.3)_25%,rgba(255,255,255,0.5)_50%,rgba(13,79,247,0.3)_75%,rgba(13,79,247,0)_100%)]" />

        <div className="relative flex h-[800px] justify-between items-center container mx-auto">
          {/* <div className="size-[800px] absolute left-1/2 right-1/2 -translate-x-1/2 bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,rgba(255,255,255,0.10)_0%,rgba(175.31,197.79,255,0)_100%)] rounded-full mx-auto" /> */}

          <div className="flex h-[1020px]">
            <div className="w-px h-full bg-[linear-gradient(to_bottom,rgba(13,79,247,0)_0%,rgba(13,79,247,0.15)_25%,rgba(110,110,110,0.55)_50%,rgba(13,79,247,0.15)_75%,rgba(13,79,247,0)_100%)]" />
            <div className="ml-6 md:ml-28 w-px h-full bg-[linear-gradient(to_bottom,rgba(13,79,247,0)_0%,rgba(13,79,247,0.3)_25%,rgba(255,255,255,1.0)_50%,rgba(13,79,247,0.3)_75%,rgba(13,79,247,0)_100%)]" />
          </div>

          <div className="relative z-30 flex flex-col justify-center gap-8">
            <PrimaryButton
              label="About Us"
              className="bg-black2! self-center mb-2 max-md:text-sm"
            />
            <div className="text-lg md:text-5xl font-bold text-center text-white capitalize">
              what is playcope
            </div>
            <div className="max-w-[721px] p-3 text-center justify-start">
              <span className="text-sm md:text-lg font-normal capitalize text-dark-gray leading-6">
                Playcope is a football intelligence company built to help fans,
                bettors, analysts, and brands see football in a smarter way. We
                believe football isn&apos;t just about the final whistle
                it&apos;s data, emotion, and patterns waiting to be understood.
                <br />
                At Playcope, we turn complex football data into simple, powerful
                insights using artificial intelligence. Our mission is to make
                the game clearer, more predictable, and more exciting for
                everyone from casual fans to serious analysts.
                <br />
                Our first product,{" "}
              </span>
              <span className="font-bold capitalize text-sm md:text-lg text-light-gray leading-6">
                Puntrr
              </span>
              <span className="text-sm md:text-lg font-normal capitalize text-dark-gray leading-6">
                , brings that vision to life using AI to help users make smarter
                football predictions through real-time stats, risk analysis, and
                performance insights.
                <br />
                But{" "}
              </span>
              <span className="font-bold capitalize text-sm md:text-lg leading-6">
                Puntrr
              </span>
              <span className="text-sm md:text-lg font-normal capitalize text-dark-gray leading-6">
                {" "}
                is just the beginning. Playcope is building a full ecosystem of
                tools that connect the dots between football and fan engagement
                shaping the future of how Africa and the world experience
                football.
              </span>
            </div>
          </div>

          <div className="flex h-[1020px]">
            <div className="mr-6 md:mr-28 w-px h-full bg-[linear-gradient(to_bottom,rgba(13,79,247,0)_0%,rgba(13,79,247,0.3)_25%,rgba(255,255,255,1.0)_50%,rgba(13,79,247,0.3)_75%,rgba(13,79,247,0)_100%)]" />
            <div className="w-px h-full bg-[linear-gradient(to_bottom,rgba(13,79,247,0)_0%,rgba(13,79,247,0.15)_25%,rgba(110,110,110,0.55)_50%,rgba(13,79,247,0.15)_75%,rgba(13,79,247,0)_100%)]" />
          </div>
        </div>
        <div className="mb-10 md:mb-28 w-full h-px bg-[linear-gradient(to_right,rgba(13,79,247,0)_0%,rgba(13,79,247,0.3)_25%,rgba(255,255,255,0.5)_50%,rgba(13,79,247,0.3)_75%,rgba(13,79,247,0)_100%)]" />
        <div className="w-full h-px bg-[linear-gradient(to_right,rgba(13,79,247,0)_0%,rgba(13,79,247,0.2)_25%,rgba(255,255,255,0.24)_50%,rgba(13,79,247,0.2)_75%,rgba(13,79,247,0)_100%)]" />
      </div>
      {/* <div className="size-[1012px] bg-[radial-gradient(ellipse_44.26%_44.26%_at_47.83%_45.85%,rgba(59,59,59,0.88)_0%,rgba(30,30,30,0)_100%)] rounded-full absolute -bottom-[85%] left-1/2 right-1/2 -translate-x-1/2" /> */}
    </div>
  );
}
