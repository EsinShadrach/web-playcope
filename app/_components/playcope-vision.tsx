import { PrimaryButton } from "@/brand/components/buttons/primary_button";
import {
  InstaGradient,
  PlaycopeGradient,
  TikTokGradient,
  XGradient,
} from "@/brand/components/icons";
import visionBg from "@/public/vision-background.png";
import Image from "next/image";

export function PlaycopeVision() {
  return (
    <div className="container flex justify-between p-3 pt-24 mx-auto">
      <div className="space-y-4">
        <PrimaryButton
          label="What We Want To Achieve"
          className="!bg-black2 text-dark-gray"
        />
        <div className="mt-8 text-5xl font-semibold">
          Playcope&apos;s Vision
        </div>
        <div className="max-w-[27rem] text-dark-gray">
          To redefine how the world understands football turning raw data into
          intelligent insights that make every fan smarter and every moment more
          meaningful.
        </div>
      </div>
      <div className="space-y-6">
        <Connect
          index={1}
          title="Connect"
          subtitle="We Connect Fans To Smarter Insights And Build Communities That Make Conversations Around Football More Informed And Engaging."
          height="12rem"
        />
        <Connect
          index={2}
          title="Innovate"
          subtitle="We use artificial intelligence and data analytics to make football intelligence accessible to everyone.  From predictions to scouting and performance tracking, our products turn raw football data into clear, usable knowledge that helps users make better decisions."
          height="17rem"
        />
        <Connect
          index={3}
          title="Connect"
          subtitle="We’re starting from Africa but our ambition is worldwide. By building scalable tools and forming strategic partnerships, Playcope aims to grow into a global network for football data, fandom, and innovation."
          height="15rem"
        />
      </div>
    </div>
  );
}

function Connect({
  index,
  title,
  subtitle,
  height,
}: {
  index: number;
  height: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      className="w-[776px] rounded-[30px] p-px"
      style={{
        background:
          "linear-gradient(-270deg, white 10%, rgba(13, 79, 247, 0.8) 40%, transparent 55%, #0D4FF70A 10%)",
        height: height,
      }}
    >
      {!false && (
        <div
          className="w-[776px] relative rounded-[30px] overflow-hidden"
          style={{
            height: height,
          }}
        >
          <Image
            alt="vision-bg"
            className="w-[776px] left-0 top-0 absolute rounded-[30px]"
            src={visionBg}
            style={{
              height: height,
            }}
          />
          <div className="w-28 h-12 left-[-64px] top-[96.09px] absolute origin-top-left rotate-[-24.44deg] bg-primary rounded-full blur-2xl" />
          <div className="w-28 h-12 left-[-74px] top-[74.09px] absolute origin-top-left rotate-[-24.44deg] bg-white rounded-full blur-lg" />
          <div className="left-[48px] top-[13px] absolute justify-start text-white text-5xl font-bold capitalize leading-[74.20px]">
            {index}
          </div>
          <div className="left-[96px] top-[13px] absolute justify-start text-white text-5xl font-bold capitalize leading-[74.20px]">
            {title}
          </div>
          <div className="w-[485px] left-[96px] top-[95px] absolute justify-start text-foreground text-lg font-normal capitalize leading-6">
            {subtitle}
          </div>
          {false && (
            <div>
              <div className="w-14 h-14 left-[634px] top-[73px] absolute bg-white rounded-full blur-md" />
              <div className="w-14 h-14 left-[634px] top-[73px] absolute rounded-full blur-xl" />
              <div className="w-9 h-10 left-[716.59px] top-[117px] absolute origin-top-left rotate-[83.19deg] outline-2 outline-offset-[-1px] outline-neutral-700/25 blur-[1.25px]" />
              <div className="w-9 h-10 left-[633.59px] top-[68px] absolute origin-top-left rotate-[83.19deg] outline-2 outline-offset-[-1px] outline-neutral-700/25 blur-[1.25px]" />
              <div className="w-11 h-2 left-[695.76px] top-[96px] absolute origin-top-left rotate-[-52.05deg] bg-white rounded-full blur-sm" />
              <div className="w-9 h-10 left-[686.50px] top-[47.50px] absolute outline-8 outline-offset-[-4px] outline-white blur" />
              <div className="w-11 h-2 left-[681.72px] top-[131.25px] absolute origin-top-left rotate-[56.33deg] bg-white rounded-full blur-sm" />
              <div className="w-11 h-2 left-[595.16px] top-[91px] absolute origin-top-left rotate-[15.97deg] bg-white rounded-full blur-sm" />
              <div className="w-16 h-16 px-7 py-5 left-[629px] top-[68px] absolute bg-background rounded-[35px] outline-[5px] outline-offset-[-5px] outline-Gray1 inline-flex justify-center items-center gap-2.5">
                <PlaycopeGradient />
              </div>
              <div className="size-12 px-2.5 py-3 left-[704px] top-[140px] absolute bg-background rounded-full inline-flex flex-col justify-start items-start gap-2.5">
                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full p-1 rounded-full bg-linear-to-tl from-white to-neutral-700">
                  <div className="relative flex items-center justify-center w-full h-full p-2 m-auto overflow-hidden rounded-full bg-background">
                    <XGradient />
                  </div>
                </div>
              </div>
              <div className="size-12 left-[554px] top-[62px] absolute bg-background rounded-full">
                <div className="absolute top-0 left-0 flex items-center justify-center p-1 rounded-full size-full bg-linear-to-tl from-white to-neutral-700">
                  <div className="relative flex items-center justify-center m-auto overflow-hidden rounded-full size-full bg-background">
                    <TikTokGradient />
                  </div>
                </div>
              </div>
              <div className="size-12 left-[704px] top-[14px] absolute bg-background rounded-full">
                <div className="absolute top-0 left-0 flex items-center justify-center p-1 rounded-full size-full bg-linear-to-tr from-white to-neutral-700">
                  <div className="relative flex items-center justify-center w-full h-full m-auto overflow-hidden rounded-full bg-background">
                    <InstaGradient />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
