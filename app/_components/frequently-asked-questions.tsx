"use client";
import { useState, useRef } from "react";

export function FAQs() {
  return (
    <section id="faq" className="min-h-screen max-md:mt-20">
      <div className="container mx-auto p-4">
        <div className="px-6 py-2 bg-light-grey rounded-full w-fit mx-auto">
          <span className="md:text-lg text-sm text-light-black font-normal uppercase tracking-wide">
            FAQs
          </span>
        </div>
        <div className="text-center text-light-black text-4xl md:text-7xl font-normal capitalize mt-10 leading-12">
          Everything You Need <br className="max-md:hidden" />
          To Know
        </div>
        <div className="flex flex-col gap-6 mt-10 max-w-5xl mx-auto">
          <FaqTile
            title="What is Playcope?"
            subtitle="Playcope is a football intelligence company built to help fans, bettors, analysts, and brands see football in a smarter way."
          />
          <FaqTile
            title="What is Playcope?"
            subtitle="Playcope is a football intelligence company built to help fans, bettors, analysts, and brands see football in a smarter way."
          />
          <FaqTile
            title="What is Playcope?"
            subtitle="Playcope is a football intelligence company built to help fans, bettors, analysts, and brands see football in a smarter way."
          />
          <FaqTile
            title="What is Playcope?"
            subtitle="Playcope is a football intelligence company built to help fans, bettors, analysts, and brands see football in a smarter way."
          />
          <FaqTile
            title="What is Playcope?"
            subtitle="Playcope is a football intelligence company built to help fans, bettors, analysts, and brands see football in a smarter way."
          />
        </div>
      </div>
    </section>
  );
}

function FaqTile({ title, subtitle }: { title: string; subtitle: string }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full">
      <div
        className={`py-5 px-8 md:px-12 w-full border border-grey-1 rounded-[50px] capitalize transition-colors cursor-pointer text-dark-grey`}
        style={{
          background: open
            ? "radial-gradient(circle, #DEDEDE 0%, #F8F8F8 100%)"
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
          <div
            className={`text-lg md:text-xl text-left pointer-events-none transition-colors duration-300 ${
              open ? "text-foreground" : "text-dark-grey"
            }`}
          >
            {title}
          </div>
          <div className="flex items-center ml-6 pointer-events-none">
            <div
              className={`bg-dark-grey h-6 md:h-8 w-0.5 transition-transform duration-300 box-border rounded`}
              style={{
                transform: open ? "rotate(90deg)" : "rotate(0deg)",
              }}
            />
          </div>
        </div>
        <div
          ref={contentRef}
          className={`overflow-hidden transition-all duration-300 ${
            open ? "opacity-100 mt-6 md:mt-12" : "opacity-0 mt-0"
          }`}
          style={{
            maxHeight: open
              ? contentRef.current
                ? `${contentRef.current.scrollHeight}px`
                : "300px"
              : "0",
          }}
        >
          <div className="text-base">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}
