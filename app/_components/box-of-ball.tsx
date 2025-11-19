import {
  BallDot1,
  BallDot2,
  BallDot3,
  BallDot4,
  BallDot5,
} from "@/brand/components/icons";
import facebook from "@/public/facebook.png";
import insta from "@/public/insta.png";
import xApp from "@/public/x.jpg";
import laliga from "@/public/laliga_icon.jpeg.svg";
import bundelesLiga from "@/public/bundesliga_english_icon.jpeg.svg";
import premierLeague from "@/public/premier-league.svg";
import Image from "next/image";

export function BoxOfBall() {
  return (
    <div className="mx-auto mt-50 h-96 max-w-200 bgred-50/20 relative">
      <BallDot1 className="absolute left-0 top-20" />
      <BallDot2 className="absolute left-0 bottom-10" />
      <BallDot3 className="absolute -top-12 left-1/2" />
      <BallDot4 className="absolute right-0 top-10" />
      <BallDot5 className="absolute right-0 bottom-10" />
      <div className="absolute inset-0 h-88 bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,rgba(250,248,255,0.05)_0%,#0C0C0C_100%)] max-w-180 mx-auto rounded-3xl">
        <div className="h-full flex">
          <LeftImages />
          <div className="w-full bgred100" />
          <RightSize />
        </div>
      </div>
    </div>
  );
}

function LeftImages() {
  return (
    <div className="relative size-fit">
      <Image
        alt="facebook"
        className="size-20 origin-top-left rotate-[-23.26deg] rounded-[10px] outline-[5px] outline-black2 bg-[rgba(13,79,247,1)]"
        src={facebook}
      />
      <div className="size-20 bg-background/40 rounded-[10px] outline-[5px] outline-black2 absolute top-10 left-6">
        <Image alt="insta" src={insta} />
      </div>
      <div className="size-20 origin-top-left rotate-[18.45deg] bg-background/20 rounded-[10px] outline-[5px] outline-black2 absolute -bottom-[110px] left-4">
        <Image alt="x-app" src={xApp} />
      </div>
      <div className="size-20 origin-top-left absolute -bottom-32 left-0">
        <div className="size-40 border border-white/10 rounded-full overflow-hidden relative">
          <div
            className="mg-glass size-full backdrop-blur-xs"
            style={{
              filter: "url(#glass-distort)",
              WebkitBackdropFilter: "blur(4px)",
              backdropFilter: "blur(4px)",
            }}
          />
        </div>
        <div className="h-20 w-4 bg-black2 rounded-full rotate-30 -translate-y-4 rounded-t-md translate-x-4"></div>
      </div>
    </div>
  );
}

function RightSize() {
  return (
    <div className="relative size-fit">
      <Image alt="laliga" className="size-20 z-10 relative" src={laliga} />
      <div className="size-20 absolute top-11 left-10">
        <Image alt="bundles-liga" src={bundelesLiga} />
      </div>
      <div className="size-20 absolute -bottom-24 left-4">
        <Image alt="premier-league" src={premierLeague} />
      </div>
    </div>
  );
}
