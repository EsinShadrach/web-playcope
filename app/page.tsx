import {
  BallDot1,
  BallDot2,
  BallDot3,
  BallDot4,
  BallDot5,
  Flash,
  SpotlightSvg,
  Verify,
} from "@/brand/components/icons";
import FoundedWhen from "./_components/found-when";
import { PrimaryButton } from "@/brand/components/buttons/primary_button";
import { WhatIsPlaycope } from "./_components/what-is-playcope";

export default function Home() {
  return (
    <main className="relative mb-20">
      <Spotlight />
      <BoxOfBall />
      <PlaycopeIsABrand />
      <WhatIsPlaycope />
    </main>
  );
}

export function BoxOfBall() {
  return (
    <div className="mx-auto mt-50 h-96 max-w-[50rem] bgred-50/20 relative">
      <BallDot1 className="absolute left-0 top-20" />
      <BallDot2 className="absolute left-0 bottom-10" />
      <BallDot3 className="absolute -top-12 left-1/2" />
      <BallDot4 className="absolute right-0 top-10" />
      <BallDot5 className="absolute right-0 bottom-10" />
      <div className="absolute inset-0 h-[22rem] bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_rgba(250,_248,_255,_0.05)_0%,_#0C0C0C_100%)] max-w-[45rem] mx-auto rounded-3xl">
        content
      </div>
    </div>
  );
}

function Spotlight() {
  return (
    <>
      <div className="fixed top-0 left-0 -z-10">
        <SpotlightSvg />
      </div>
      <div className="fixed top-0 right-0 -z-10 transform scale-x-[-1]">
        <SpotlightSvg />
      </div>
    </>
  );
}

function PlaycopeIsABrand() {
  return (
    <div className="mt-48">
      <div className="text-center text-white text-5xl font-bold capitalize leading-[74.20px]">
        playcope, more than a brand <br />
        it’s a football ecosystem all in one
      </div>
      <div className="mt-3 text-lg font-normal text-center capitalize justify text-foreground leading-6">
        Our products combine cutting-edge AI with football intuition <br />
        to help you understand, predict, and enjoy the game on a whole new level
      </div>
      <div className="mx-auto mt-15 w-fit">
        <FoundedWhen />
      </div>
      <div className="flex justify-center mt-24 itemscenter gap-4">
        <PrimaryButton icon={<Verify />} label="Become A Member" />
        <PrimaryButton
          icon={<Flash />}
          label="See Live Products"
          className="!bg-black2 py-4 text-dark-gray"
        />
      </div>
    </div>
  );
}
