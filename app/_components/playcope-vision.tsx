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
    <div className="container flex justify-between p-3 pt-24 mx-auto md:flex-row flex-col gap-3 relative z-40">
      <div className="space-y-4">
        <PrimaryButton
          label="What We Want To Achieve"
          className="bg-black2! text-dark-gray max-md:text-sm"
        />
        <div className="mt-8 text-lg md:text-5xl font-semibold">
          Playcope&apos;s Vision
        </div>
        <div className="max-w-108 text-dark-gray md:text-base text-sm">
          To redefine how the world understands football turning raw data into
          intelligent insights that make every fan smarter and every moment more
          meaningful.
        </div>
      </div>
      <div className="space-y-6 max-md:mt-5">
        <Connect
          index={1}
          title="Connect"
          subtitle="We Connect Fans To Smarter Insights And Build Communities That Make Conversations Around Football More Informed And Engaging."
        />
        <Connect
          index={2}
          title="Innovate"
          subtitle="We use artificial intelligence and data analytics to make football intelligence accessible to everyone. From predictions to scouting and performance tracking, our products turn raw football data into clear, usable knowledge that helps users make better decisions."
        />
        <Connect
          index={3}
          title="Connect"
          subtitle="We're starting from Africa but our ambition is worldwide. By building scalable tools and forming strategic partnerships, Playcope aims to grow into a global network for football data, fandom, and innovation."
        />
      </div>
    </div>
  );
}

function Connect({
  index,
  title,
  subtitle,
}: {
  index: number;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      className="w-full md:w-[776px] rounded-[30px] p-px"
      style={{
        background:
          "linear-gradient(-270deg, white 10%, rgba(13, 79, 247, 0.8) 40%, transparent 55%, #0D4FF70A 10%)",
      }}
    >
      <div className="w-full relative rounded-4xl overflow-clip">
        <div className="w-28 h-12 left-[-64px] top-[96.09px] absolute origin-top-left rotate-[-24.44deg] bg-primary rounded-full blur-2xl z-10" />
        <div className="w-28 h-12 left-[-74px] top-[74.09px] absolute origin-top-left rotate-[-24.44deg] bg-white rounded-full blur-lg z-10" />
        <Image
          alt="vision bg"
          src={visionBg}
          className="absolute inset-0 w-full h-full object-cover"
          fill
        />
        <div className="relative flex gap-0.5 p-3 pb-8 z-20">
          <div className="w-fit font-bold text-2xl pl-2 pr-6">{index}</div>
          <div className="w-full flex flex-col">
            <div className="font-bold text-2xl mb-2">{title}</div>
            <div>{subtitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
