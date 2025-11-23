"use client";

import { PrimaryButton } from "@/brand/components/buttons/primary_button";
import {
  Logo,
  Logout,
  ReceiveSquare,
  ThreeLine,
} from "@/brand/components/icons";
import Link from "next/link";

export function ThreeLineComponent() {
  return (
    <div className="relative mt-20">
      <div className="absolute inset-x-0 flex justify-between -top-20">
        <div className="relative z-30">
          <ThreeLine />
        </div>
        <div className="scale-x-[-1] relative z-30">
          <ThreeLine />
        </div>
      </div>
      <div className="w-[985px] h-[731px] absolute mt-32 z-10 left-1/2 right-1/2 -translate-x-1/2 rounded-full border-100 border-neutral-400/5 blur-lg" />
      <div className="container relative z-20 flex flex-col justify-center px-3 pt-56 mx-auto">
        <PrimaryButton
          label="What We Have Built So Far"
          className="bg-black2! text-dark-gray max-md:text-sm w-fit mx-auto"
        />
        <div className="relative w-full mt-10 md:mt-18">
          <div className="flex items-center mx-auto gap-1 md:gap-6 w-fit">
            <Logo className="max-md:size-8" />
            <div className="text-lg md:text-5xl font-bold text-white capitalize">
              puntrr
            </div>
          </div>
          <div className="w-full bg-background max-w-[1100px] mx-auto">
            <div className="justify-start mx-auto mt-4 md:mt-10 font-bold text-3xl md:text-7xl max-w-fit">
              <span className="text-light-black capitalize md:leading-[116.20px]">
                Predict smarter,
              </span>
              <span className="capitalize md:leading-[116.20px]">
                {" "}
                win bigger
              </span>
            </div>
            <div className="justify-start mt-4 text-sm md:text-2xl font-normal text-center capitalize text-dark-gray leading-4 md:leading-9">
              Puntrr uses AI to analyze stats, form, and performance trends{" "}
              <br className="max-md:hidden" />
              helping you bet with strategy, not emotion.
            </div>
            <div className="pb-20 mt-10 md:mt-32 space-y-6">
              <div className="relative z-1000 flex md:flex-row flex-col justify-center gap-4">
                <PrimaryButton
                  icon={<ReceiveSquare />}
                  label="Download Now"
                  className="px-6"
                />
                <Link
                  href={"https://puntrr.ai"}
                  referrerPolicy="no-referrer"
                  className="rounded-full cursor-pointer w-full"
                  target="_blank"
                >
                  <PrimaryButton
                    icon={<Logout />}
                    label="Visit Website"
                    className="bg-black2! px-6 text-dark-gray w-full"
                  />
                </Link>
              </div>
              <div className="text-sm md:text-lg text-center capitalize text-dark-gray leading-6">
                available on appstore and playstore
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
