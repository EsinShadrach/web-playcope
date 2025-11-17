"use client";
import { PrimaryButton } from "@/brand/components/buttons/primary_button";

export function FrequentlyAskedQuestions() {
  return (
    <div className="container mx-auto p-3 m-20 space-y-4">
      <PrimaryButton
        label="FAQs"
        className="bg-black2! text-dark-gray w-fit mx-auto"
      />
      <div className="text-center text-white text-5xl font-bold capitalize leading-[74.20px] mb-16">
        Everything You Need To Know
      </div>
      <div className="mx-auto max-w-5xl space-y-4">
        <FaqTile
          title="How does playcope make predictions?"
          subtitle="Our AI analyzes past match data, player form, team stats, injuries, and even motivation levels to give accurate predictions and confidence level for each match."
        />
        <FaqTile
          title="How does playcope make predictions?"
          subtitle="Our AI analyzes past match data, player form, team stats, injuries, and even motivation levels to give accurate predictions and confidence level for each match."
        />
        <FaqTile
          title="How does playcope make predictions?"
          subtitle="Our AI analyzes past match data, player form, team stats, injuries, and even motivation levels to give accurate predictions and confidence level for each match."
        />
      </div>
    </div>
  );
}

import { useState, useRef } from "react";

export default function FaqTile({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full">
      <div
        className={`py-7 px-12 w-full border border-black2 rounded-[50px] capitalize transition-colors cursor-pointer`}
        style={{
          background: open
            ? "radial-gradient(circle, rgba(30,30,30,1) 0%, rgba(12,12,12,1) 100%)"
            : "transparent",
          transition: "background 400ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        onClick={() => setOpen((prev) => !prev)}
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setOpen((prev) => !prev);
          }
        }}
      >
        <div className="w-full focus:outline-none flex items-center justify-between bg-transparent pointer-events-none">
          <div className="font-bold text-xl text-left pointer-events-none">
            {title}
          </div>
          <div className="flex items-center ml-6 pointer-events-none">
            <div
              className={`bg-foreground h-8 w-0.5 transition-transform duration-300 box-border rounded`}
              style={{
                transform: open ? "rotate(90deg)" : "rotate(0deg)",
              }}
            ></div>
          </div>
        </div>
        <div
          ref={contentRef}
          className={`overflow-hidden transition-all duration-300 ${
            open ? "opacity-100 mt-12" : "opacity-0 mt-0"
          }`}
          style={{
            maxHeight: open
              ? contentRef.current
                ? `${contentRef.current.scrollHeight}px`
                : "300px"
              : "0",
          }}
        >
          <div className="text-dark-gray text-base">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}
