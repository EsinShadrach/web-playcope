"use client";
import { UpIcon } from "@/brand/components/icons";
import Ellipse from "@/brand/components/icons/ellipse";
import man from "@/public/man-with-hands.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="md:mt-32 relative">
      <footer className="md:mt-100 relative mt-50">
        <div className="flex justify-between mb-12 container mx-auto p-3">
          <div className="flex gap-8 font-bold *:space-y-4 *:text-sm">
            <div>
              <FooterLink link="#top" text="home" noPadding isTop />
              <FooterLink link="#our-apps" text="Our Apps" noPadding />
              <FooterLink link="#about-us" text="About Us" noPadding />
            </div>
            <div>
              <FooterLink link="#testimonials" text="Testimonials" />
              <FooterLink link="#faq" text="FAQs" />
            </div>
          </div>
          <div className="flex flex-col items-end gap-4">
            <button
              type="button"
              aria-label="Scroll to top"
              className="bg-primary rounded-full size-13 md:size-26 flex justify-center items-center md:p-6.5 transition hover:scale-105 active:scale-95"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <UpIcon className="md:h-16 h-6" />
            </button>
            <p className="font-bold md:text-[26px] text-end">
              Back To The
              <br />
              Top
            </p>
          </div>
        </div>
        <p className="text-[20svw] font-bold leading-[1.15] text-center">
          Playcope
        </p>
        <div className="bg-white flex justify-between items-center text-primary px-6 md:px-12 py-6 *:max-md:text-xs *:whitespace-nowrap *:text-ellipsis gap-6 mt-1.5">
          <p>Copyright {new Date().getFullYear()}</p>
          <div className="space-x-2 md:space-x-10">
            <span>Terms & Condition</span>
            <span className="">Privacy Policy</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 right-1/2 -translate-x-1/2 -top-150 -z-10">
          {/* <Ellipse /> */}
        </div>
        <div className="absolute bottom-0 left-1/2">
          <Image alt="man" src={man} />
        </div>
      </footer>
    </div>
  );
}
function FooterLink({
  link,
  text,
  noPadding = false,
  isTop = false,
}: {
  link: string;
  text: string;
  noPadding?: boolean;
  isTop?: boolean;
}) {
  const id = link.replace("#", "");

  return (
    <p>
      <a
        href={link}
        className="capitalize"
        onClick={(e) => {
          e.preventDefault();
          const element = document.getElementById(id);
          if (element) {
            const yOffset = noPadding ? 0 : -100;
            let y =
              element.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;

            if (isTop) y = 0;

            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }}
      >
        {text}
      </a>
    </p>
  );
}
