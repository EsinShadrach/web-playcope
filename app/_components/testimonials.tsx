import React from "react";
import Image from "next/image";
import person1 from "@/public/new/person-1.svg";
import person2 from "@/public/new/person-2.svg";
import person3 from "@/public/new/person-3.svg";
import person4 from "@/public/new/person-4.svg";
import person5 from "@/public/new/person-5.svg";

const testimonials = [
  {
    content:
      "Playcope Is Actually Changing The Game 🔥. The AI Predictions Are Spot On And The Stats Make Betting Way Easier. Real Lifesaver!",
    name: "Ancient Tibetan Monk Rafe",
    role: "Social Media User",
    avatar: person1,
  },
  {
    content:
      "No Cap, Playcope Dey Try Abeg 😭👏. The App Sabi Give Correct Predictions I Don Dey Win Small Small Since I Start Using Am 😂💰",
    name: "Obito Thy Fat",
    role: "Social Media User",
    avatar: person2,
  },
  {
    content:
      "Playcope Is Too Underrated Right Now 🤫🔥. The Accuracy Is Mad, And The Coped Slip Feature Just Makes Sense! No Stress, Just Smart Predictions.",
    name: "Sweet Official",
    role: "Social Media User",
    avatar: person3,
  },
  {
    content:
      "Playcope Is Actually Changing The Game 🔥. The AI Predictions Are Spot On And The Stats Make Betting Way Easier. Real Lifesaver!",
    name: "Tobi Ekundayo",
    role: "Social Media User",
    avatar: person4,
  },
  {
    content:
      "No Cap, Playcope Dey Try Abeg 😭👏. The App Sabi Give Correct Predictions I Don Dey Win Small Small Since I Start Using Am 😂💰",
    name: "Adeleye 9ja",
    role: "Social Media User",
    avatar: person5,
  },
  {
    content:
      "Playcope Is Too Underrated Right Now 🤫🔥. The Accuracy Is Mad, And The Coped Slip Feature Just Makes Sense! No Stress, Just Smart Predictions.",
    name: "Rafe Esin",
    role: "Social Media User",
    avatar: person1,
  },
];

// Duplicate items for seamless loop (2 sets is enough for -50% translation)
const duplicatedTestimonials = [...testimonials, ...testimonials];

export function Testimonials() {
  return (
    <section className="py-24 bg-background overflow-hidden h-screen max-h-[900px]">
      <div className="container mx-auto px-2 md:px-4 h-full flex flex-col">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 space-y-4 shrink-0 px-2">
          <div className="px-6 py-2 bg-light-grey rounded-full">
            <span className="text-sm md:text-lg text-light-black font-normal uppercase tracking-wide">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl text-center text-light-black font-normal capitalize">
            What Our Fans Think
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative grow overflow-hidden">
          {/* Top Fade */}
          <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-background to-transparent z-10 pointer-events-none" />

          {/* Column 1 - Up */}
          <div className="flex flex-col overflow-hidden relative h-full">
            <div className="flex flex-col gap-6 animate-[marquee-up_40s_linear_infinite] pb-6">
              {duplicatedTestimonials.map((item, index) => (
                <TestimonialCard key={`c1-${index}`} {...item} />
              ))}
            </div>
          </div>

          {/* Column 2 - Down */}
          <div className="hidden md:flex flex-col overflow-hidden relative h-full">
            <div className="flex flex-col gap-6 animate-[marquee-down_40s_linear_infinite] pb-6">
              {duplicatedTestimonials.map((item, index) => (
                <TestimonialCard key={`c2-${index}`} {...item} />
              ))}
            </div>
          </div>

          {/* Column 3 - Up */}
          <div className="hidden lg:flex flex-col overflow-hidden relative h-full">
            <div className="flex flex-col gap-6 animate-[marquee-up_40s_linear_infinite] pb-6">
              {duplicatedTestimonials.map((item, index) => (
                <TestimonialCard key={`c3-${index}`} {...item} />
              ))}
            </div>
          </div>

          {/* Bottom Fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  content,
  name,
  role,
  avatar,
  className = "",
}: {
  content: string;
  name: string;
  role: string;
  avatar: any;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col justify-between p-5 md:p-8 bg-light-grey rounded-3xl w-full shrink-0 ${className} space-y-4`}
    >
      <div className="flex items-center gap-4">
        <div className="relative size-12 rounded-full overflow-hidden bg-gray-200 shrink-0">
          <Image src={avatar} alt={name} fill className="object-cover" />
        </div>
        <div className="flex flex-col">
          <span className="text-base font-semibold text-light-black">
            {name}
          </span>
          <span className="text-sm text-dark-grey font-light">{role}</span>
        </div>
      </div>
      <p className="text-lg md:text-xl text-dark-grey leading-relaxed font-normal">
        {content}
      </p>
    </div>
  );
}
