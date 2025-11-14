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
      {false && (
        <div className="absolute inset-x-0 flex justify-between">
          <div className="relative z-30">
            <Oval />
          </div>
          <div className="scale-x-[-1] relative z-30">
            <Oval />
          </div>
        </div>
      )}
      <div className="container p-3 mx-auto mt-32 space-y-4">
        <PrimaryButton
          label="Trust The Process"
          className="!bg-black2 text-dark-gray w-fit mx-auto"
        />
        <div className="text-center text-white text-5xl font-bold capitalize leading-[74.20px]">
          join the playcope tribe
        </div>
        <div className="flex gap-2 w-fit mt-10 h-[40rem]">
          <div className="flex flex-col w-full gap-2">
            <div className="w-full h-full">
              <Image alt="update" className="w-full h-full" src={update} />
            </div>
            <div className="w-full h-full">
              <Image
                alt="prod-update"
                className="w-full h-full"
                src={earlyAccess}
              />
            </div>
          </div>
          <div className="w-full h-full">
            <Image
              alt="8-goals"
              className="w-full h-full mx-auto"
              src={eightGames}
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <div className="w-full h-full">
              <Image
                alt="prod-update"
                className="w-full h-full"
                src={productUpdate}
              />
            </div>
            <div className="w-full h-full">
              <Image
                alt="prod-update"
                className="w-full h-full"
                src={nextChapter}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
