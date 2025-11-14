import { PrimaryButton } from "@/brand/components/buttons/primary_button";
import { Flash, Verify } from "@/brand/components/icons";
import FoundedWhen from "./found-when";

export function PlaycopeIsABrand() {
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
