import { IconButton } from "@/brand/components/buttons/icon_button";
import { Facebook, InstaLogo, Tiktok, XLogo } from "@/brand/components/icons";

export default function FoundedWhen() {
  return (
    <>
      {/* <div className="w-full h-4 outline outline-neutral-400/40 rounded-full"></div> */}
      {/* desktop */}
      <div className="md:block py-4 rounded-full px-7 bg-linear-to-r from-neutral-700/25 via-stone-900/0 to-neutral-700/25 outline outline-neutral-400/40">
        <div className="flex items-center justify-center gap-2 md:gap-6">
          <div className="flex flex-col items-center self-stretch justify-center px-4 border-r-2 rounded-sm border-light-black">
            <div className="text-sm md:text-2xl font-bold text-center capitalize text-neutral-400 leading-5 md:leading-9">
              2024
            </div>
            <div className="text-neutral-400 text-xs md:text-sm font-normal capitalize leading-3 md:leading-5">
              founded
            </div>
          </div>

          <div className="flex items-center justify-center md:px-4 rounded-sm gap-2 md:gap-4">
            <IconButton>
              <XLogo className="size-5" />
            </IconButton>
            <IconButton>
              <Tiktok className="size-5" />
            </IconButton>
            <IconButton>
              <Facebook className="size-8" />
            </IconButton>
            <IconButton>
              <InstaLogo className="size-5" />
            </IconButton>
          </div>

          <div className="px-4 rounded-sm border-l-2 border-light-black flex flex-col justify-center items-center gap-1">
            <div className="text-sm md:text-2xl font-bold text-center capitalize text-neutral-400 leading-5 md:leading-9">
              500k+
            </div>
            <div className="text-xs md:text-sm font-normal capitalize text-neutral-400 leading-3 md:leading-5 text-center">
              total followers
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
