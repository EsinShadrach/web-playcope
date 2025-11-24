import { PrimaryButton } from "@/brand/components/buttons/primary_button";
import { Flash, Verify } from "@/brand/components/icons";
import FoundedWhen from "./found-when";

export function PlaycopeIsABrand() {
  return (
    <div className="mt-48 px-3">
      <div className="text-center text-white text-lg md:text-5xl font-bold capitalize leading-6 md:leading-[74.20px]">
        playcope, more than a brand <br />
        it's a football ecosystem all in one
      </div>
      <div className="mt-3 text-xs md:text-lg font-normal text-center capitalize justify text-foreground leading-3 md:leading-6">
        Our products combine cutting-edge AI with football intuition <br />
        to help you understand, predict, and enjoy the game on a whole new level
      </div>
      <div className="mx-auto mt-10 md:mt-15 w-full md:w-fit">
        <FoundedWhen />
      </div>
      <div className="flex justify-center mt-10 md:mt-24 gap-4 md:flex-row flex-col">
        <PrimaryButton
          icon={<Verify />}
          label="Become A Member"
          // className="px-3! py-2!"
          className="py-3! text-base! "
        />
        <PrimaryButton
          icon={<Flash />}
          label="See Live Products"
          className="bg-black2! py-3! text-dark-gray text-base!"
        />
      </div>
    </div>
  );
}
