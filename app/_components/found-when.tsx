import { IconButton } from "@/brand/components/buttons/icon_button";
import { Facebook, InstaLogo, Tiktok, XLogo } from "@/brand/components/icons";

export default function FoundedWhen() {
  return (
    <>
      <div className="md:hidden px-4 py-2 bg-linear-to-r from-neutral-700/25 via-stone-900/0 to-neutral-700/25 rounded-[79px] outline-1 outline-neutral-400/40 inline-flex flex-col justify-start items-start gap-2.5">
        <div className="inline-flex justify-center items-center gap-4">
          <div className="self-stretch px-4 rounded-[5px] border-r-2 border-light-black inline-flex flex-col justify-center items-center">
            <div className="text-center justify-start text-neutral-400 text-sm font-bold font-['Space_Grotesk'] capitalize leading-5">
              2024
            </div>
            <div className="justify-start text-neutral-400 text-[8px] font-normal font-['Space_Grotesk'] capitalize leading-3">
              founded
            </div>
          </div>
          <div className="self-stretch rounded-[5px] inline-flex flex-col justify-center items-center gap-4">
            <div className="inline-flex justify-start items-center gap-2">
              <IconButton className="size-10!">
                <XLogo className="size-4" />
              </IconButton>
              <IconButton className="size-10!">
                <Tiktok className="size-5" />
              </IconButton>
              <IconButton className="size-10!">
                <Facebook className="size-8" />
              </IconButton>
              <IconButton className="size-10!">
                <InstaLogo className="size-5" />
              </IconButton>
            </div>
          </div>
          <div className="self-stretch px-4 rounded-[5px] border-l-2 border-light-black inline-flex flex-col justify-center items-center gap-2.5">
            <div className="text-center justify-start text-neutral-400 text-sm font-bold font-['Space_Grotesk'] capitalize leading-5">
              300k+
            </div>
            <div className="justify-start text-neutral-400 text-[8px] font-normal font-['Space_Grotesk'] capitalize leading-3">
              total followers
            </div>
          </div>
        </div>
      </div>
      {/* desktop */}
      <div className="md:block hidden py-4 rounded-full px-7 bg-linear-to-r from-neutral-700/25 via-stone-900/0 to-neutral-700/25 outline outline-neutral-400/40">
        <div className="flex items-center justify-center gap-6">
          <div className="flex flex-col items-center self-stretch justify-center px-4 border-r-2 rounded-sm border-light-black">
            <div className="text-sm md:text-2xl font-bold text-center capitalize text-neutral-400 leading-5 md:leading-9">
              2024
            </div>
            <div className="text-neutral-400 text-xs md:text-sm font-normal capitalize leading-3 md:leading-5">
              founded
            </div>
          </div>

          <div className="flex items-center justify-center px-4 rounded-sm gap-4">
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
          <div className="px-4 rounded-sm border-l-2 border-light-black flex flex-col justify-center items-center gap-2.5">
            <div className="text-sm md:text-2xl font-bold text-center capitalize text-neutral-400 leading-5 md:leading-9">
              300k+
            </div>
            <div className="text-xs md:text-sm font-normal capitalize text-neutral-400 leading-3 md:leading-5">
              total followers
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
