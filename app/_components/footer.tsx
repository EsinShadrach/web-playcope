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
        <div className="absolute flex gap-6 flex-col">
          <Image alt="intelligence-ellipse" src={intelligenceEllipse} />
          <div className="text-center justify-start">
            <span className="text-dark-grey text-5xl font-bold capitalize">
              Football Intelligence,
            </span>
            <span className="text-5xl font-bold capitalize">
              <br />
              Starts Here
            </span>
          </div>
          <div className="text-center justify-start text-dark-grey text-xl font-normal capitalize">
            Powered by AI and real match data, our tools help fans and <br />
            professionals understand the game beyond the surface
          </div>
          <div className="w-fit flex justify-center items-center mx-auto mt-2">
            <SocialMediasStack addInstagram />
            <div className="-translate-x-6">
              <PrimaryButton label="Follow Us" />
            </div>
          </div>
        </div>
        <Image alt="intelligence-starts-here" src={intelligenceStartsHere} />
      </div>
      <div className="mt-20 flex justify-between">
        <div className="space-y-3">
          <div className="text-light-black text-7xl font-bold capitalize">
            playcope
          </div>
          <div className="justify-start text-dark-grey text-xl font-normal capitalize max-w-md">
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
        <div className="flex gap-10 text-light-black text-lg font-bold capitalize">
          <div>
            <div>Home</div>
            <div>Our Apps</div>
            <div>About Us</div>
          </div>
          <div>
            <div>Testimonials</div>
            <div>FAQs</div>
          </div>
          <div className="ml-10">
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
      <div className="flex items-center justify-between my-20">
        <div className="text-light-black text-lg font-normal capitalize">
          copyright {new Date().getFullYear()}
        </div>
        <div className="justify-start text-light-black text-lg font-normal capitalize flex gap-8">
          <div>Terms & Conditions</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </div>
  );
}
