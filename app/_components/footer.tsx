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

export function Footer() {
  return (
    <div className="container mx-auto p-3">
      <div className="max-w-7xl mx-auto rounded-4xl relative overflow-hidden text-background">
        <Image alt="intelligence-ellipse" src={intelligenceEllipse} />
        <div className="relative z-10 flex gap-6 flex-col items-center py-24 px-4 pb-12">
          <div className="text-center justify-start intelligence-content">
            <span className="text-dark-grey text-3xl md:text-5xl font-bold capitalize">
              Football Intelligence,
            </span>
            <span className="text-3xl md:text-5xl font-bold capitalize">
              <br /> Starts Here
            </span>
          </div>
          <div className="text-center justify-start text-dark-grey text-base md:text-xl font-normal capitalize">
            Powered by AI and real match data, our tools help fans and{" "}
            <br className="max-md:hidden" />
            professionals understand the game beyond the surface
          </div>
          <div className="w-fit flex justify-center items-center mx-auto mt-2">
            <SocialMediasStack addInstagram />
            <div className="-translate-x-6">
              <PrimaryButton label="Follow Us" className="max-md:text-base" />
            </div>
          </div>
        </div>
        <Image
          alt="intelligence-starts-here"
          src={intelligenceStartsHere}
          className="object-cover absolute inset-0 w-full h-full -z-10"
        />
      </div>
      <div className="mt-20 flex justify-between md:flex-row flex-col gap-6">
        <div className="flex justify-between max-md:gap-10">
          <div className="space-y-3">
            <div className="text-light-black text-4xl md:text-7xl font-bold capitalize">
              playcope
            </div>
            <div className="justify-start text-dark-grey md:text-xl text-base font-normal capitalize max-w-md">
              follow our socials to benefit from what we have to offer
            </div>
            <div className="flex gap-3 mt-10">
              <div className=" size-10 px-2.5 py-3 bg-light-grey rounded-full outline outline-dark-grey flex flex-col justify-center items-center gap-2.5">
                <XLogo />
              </div>
              <div className=" size-10 px-2.5 py-3 bg-light-grey rounded-full outline outline-dark-grey flex flex-col justify-center items-center gap-2.5">
                <Tiktok />
              </div>
              <div className=" size-10 px-2.5 py-3 bg-light-grey rounded-full outline outline-dark-grey flex flex-col justify-center items-center gap-2.5">
                <Facebook />
              </div>
              <div className=" size-10 px-2.5 py-3 bg-light-grey rounded-full outline outline-dark-grey flex flex-col justify-center items-center gap-2.5">
                <InstaLogo />
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <div className="flex flex-col items-end gap-4">
              <button
                type="button"
                aria-label="Scroll to top"
                className="bg-primary rounded-full size-15 flex justify-center items-center p-6 transition hover:scale-105 active:scale-95"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <UpIcon className="size-12" />
              </button>
              <p className="font-bold md:text-lg text-sm text-end whitespace-nowrap">
                Back To The
                <br />
                Top
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-12 md:gap-10 text-light-black text-lg font-bold capitalize mt-5">
          <div>
            <div>Home</div>
            <div>Our Apps</div>
            <div>About Us</div>
          </div>
          <div>
            <div>Testimonials</div>
            <div>FAQs</div>
          </div>
          <div className="ml-10 md:block hidden">
            <div className="flex flex-col items-end gap-4">
              <button
                type="button"
                aria-label="Scroll to top"
                className="bg-primary rounded-full size-20 flex justify-center items-center p-6.5 transition hover:scale-105 active:scale-95"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <UpIcon className="size-10" />
              </button>
              <p className="font-bold text-lg text-end">
                Back To The
                <br />
                Top
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between md:my-20 md:text-lg text-xs my-10">
        <div className="text-light-black font-normal capitalize">
          copyright {new Date().getFullYear()}
        </div>
        <div className="justify-start text-light-black font-normal capitalize flex md:gap-8 gap-4">
          <div>Terms & Conditions</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </div>
  );
}
