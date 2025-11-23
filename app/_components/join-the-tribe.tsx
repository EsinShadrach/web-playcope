import { PrimaryButton } from "@/brand/components/buttons/primary_button";

import eightGames from "@/public/8-goals.png";
import update from "@/public/update.png";
import productUpdate from "@/public/prouct-update.png";
import nextChapter from "@/public/next-chapter.png";
import earlyAccess from "@/public/early-access.png";
import { Oval } from "@/brand/components/icons/oval";
import Image from "next/image";

export function JoinTheTribe() {
  return (
    <div className="relative">
      {/* <div className="absolute inset-x-0 flex justify-between">
        <div className="relative z-30">
          <Oval />
        </div>
        <div className="scale-x-[-1] relative z-30">
          <Oval />
        </div>
      </div> */}
      <div className="container p-3 mx-auto mt-32 space-y-4">
        <PrimaryButton
          label="Trust The Process"
          className="bg-black2! text-dark-gray w-fit mx-auto max-md:text-sm"
        />
        <div className="text-center text-white text-2xl md:text-5xl font-bold capitalize leading-6 md:leading-[74.20px] mt-6">
          join the playcope tribe
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-2 w-full max-w-full mt-10 overflow-hidden">
          {/* A1 */}
          <div className="w-full h-full order-1 md:order-1 overflow-hidden">
            <Image
              alt="update"
              className="w-full h-full object-contain"
              src={update}
            />
          </div>
          {/* B - spans 2 rows on desktop, last on mobile */}
          <div className="w-full h-full md:row-span-2 order-5 md:order-2 overflow-hidden">
            <Image
              alt="8-goals"
              className="w-full h-full object-contain"
              src={eightGames}
            />
          </div>
          {/* C1 */}
          <div className="w-full h-full order-2 md:order-3 overflow-hidden">
            <Image
              alt="prod-update"
              className="w-full h-full object-contain"
              src={productUpdate}
            />
          </div>
          {/* A2 */}
          <div className="w-full h-full order-3 md:order-4 overflow-hidden">
            <Image
              alt="early-access"
              className="w-full h-full object-contain"
              src={earlyAccess}
            />
          </div>
          {/* C2 */}
          <div className="w-full h-full order-4 md:order-5 overflow-hidden">
            <Image
              alt="next-chapter"
              className="w-full h-full object-contain"
              src={nextChapter}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
