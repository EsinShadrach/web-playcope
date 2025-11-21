import {
  ArrowCursor,
  BallDot1,
  BallDot2,
  BallDot3,
  BallDot4,
  BallDot5,
  Logo,
} from "@/brand/components/icons";
import facebook from "@/public/facebook.png";
import insta from "@/public/insta.png";
import xApp from "@/public/x.jpg";
import laliga from "@/public/laliga_icon.jpeg.svg";
import bundelesLiga from "@/public/bundesliga_english_icon.jpeg.svg";
import premierLeague from "@/public/premier-league.svg";
import eightGoals from "@/public/8-goals.png";
import Image from "next/image";
import NewPostRectangle from "@/brand/components/icons/new-post-rectangle";

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
          <div className="w-full ml-20 bg-ed-200/10 relative">
            <div className="w-fit h-fit absolute  top-16">
              <CursorStuff
                text="Socials"
                bg="bg-light-black"
                fg="text-light-black"
              />
            </div>
            <div className="w-fit h-fit absolute top-32 left-1/2 -translate-x-1/2">
              <CursorStuff
                text="All In One"
                bg="bg-primary"
                fg="text-primary"
                left
              />
            </div>
            <div className="text-light-black w-fit absolute -right-10 top-20 -translate-x-1/2">
              <CursorStuff
                text="Football"
                bg="bg-foreground"
                fg="text-foreground"
                left
              />
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-red-50 w-fit left-1/2 -translate-x-1/2">
              <div className="absolute bottom-10 mx-auto w-64 h-16 px-1.5 py-[5px] bg-light-black/20 rounded-[50px] inline-flex flex-col justify-start items-start gap-2.5">
                <div className="inline-flex justify-start items-center gap-10">
                  <div className="flex justify-start items-start gap-4">
                    <div className="w-14 h-14 px-5 py-3.5 bg-primary rounded-[30px] flex justify-start items-center gap-2.5">
                      <Logo className="" />
                    </div>
                    <div className="w-20 inline-flex flex-col justify-start items-start gap-[5px]">
                      <div className="self-stretch justify-start text-white text-lg font-bold font-['Space_Grotesk'] capitalize leading-6">
                        playcope
                      </div>
                      <div className="self-stretch justify-start text-white text-sm font-normal font-['Space_Grotesk'] capitalize leading-5">
                        new post
                      </div>
                    </div>
                  </div>
                  <Image
                    className="w-14 h-14 rounded-full"
                    src={eightGoals}
                    alt="8-goals"
                  />
                </div>
              </div>{" "}
              <NewPostRectangle className="w-fit mx-auto" />
            </div>
          </div>
          <RightSize />
        </div>
      </div>
    </div>
  );
}

function LeftImages() {
  return (
    <div className="relative size-fit translate-y-10">
      <div className="size-20">
        <Image
          alt="facebook"
          className="size-20 origin-top-left rotate-[-23.26deg] rounded-[10px] outline-[5px] outline-black2 bg-[rgba(13,79,247,1)]"
          src={facebook}
        />
      </div>
      <div className="size-20 bg-background/40 rounded-[10px] outline-[5px] outline-black2 absolute top-10 left-6">
        <Image alt="insta" src={insta} />
      </div>
      <div className="size-20 origin-top-left rotate-[18.45deg] bg-background/20 rounded-[10px] outline-[5px] outline-black2 absolute -bottom-[110px] left-4">
        <Image alt="x-app" src={xApp} />
      </div>
      <div className="size-20 origin-top-left absolute -bottom-20 left-9">
        <div className="size-40 border-y border-white/10 rounded-full overflow-hidden relative">
          <div
            className="mg-glass size-full backdrop-blur-xs"
            style={{
              filter: "url(#glass-distort)",
              WebkitBackdropFilter: "blur(4px)",
              backdropFilter: "blur(4px)",
            }}
          />
        </div>
        <div className="h-20 w-6 bg-black2 rounded-full rotate-25 -translate-y-3 rounded-t-md translate-x-4"></div>
      </div>
    </div>
  );
}

function RightSize() {
  return (
    <div className="relative size-fit translate-y-10">
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

function CursorStuff({
  bg,
  fg,
  text,
  left = false,
}: {
  bg: string;
  text: string;
  fg: string;
  left?: boolean;
}) {
  const cursor = left
    ? "-right-4 -bottom-3"
    : "rotate-110 -translate-x-4.5 -translate-y-4.5";

  return (
    <div className="relative w-fit">
      <div
        className={`w-fit h-10 px-5 py-1.5 rounded-full flex justify-center items-center gap-2.5 ${bg}`}
      >
        <div className="text-lg font-bold capitalize leading-6">{text}</div>
      </div>
      <ArrowCursor className={`absolute size-7 ${cursor} ${fg}`} />
    </div>
  );
}
