import { PrimaryButton } from "@/brand/components/buttons/primary_button";
import {
  Facebook,
  Flash,
  Tiktok,
  Verify,
  XLogo,
} from "@/brand/components/icons";
import panorama from "@/public/new/panorama.png";
import Image from "next/image";
import premierLeague from "@/public/new/premier-league.svg";
import uefa from "@/public/new/uefa.svg";
import ligue1 from "@/public/new/ligue1.svg";
import bundesliga from "@/public/new/bundesliga.svg";
import laliga from "@/public/new/laliga.svg";
import serieA from "@/public/new/seriea.svg";
import mls from "@/public/new/mls.svg";

const leagues = [
  {
    name: "Premier League",
    image: premierLeague,
  },
  {
    name: "UEFA Champions League",
    image: uefa,
  },
  {
    name: "Ligue 1",
    image: ligue1,
  },
  {
    name: "Bundesliga",
    image: bundesliga,
  },
  {
    name: "La Liga",
    image: laliga,
  },
  {
    name: "Serie A",
    image: serieA,
  },
  {
    name: "Major League Soccer",
    image: mls,
  },
];

export function HomeHero() {
  const PanoramaBg = () => {
    return (
      <svg
        width="1728"
        height="680"
        viewBox="0 0 1728 680"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-94 0C649.056 216.861 1068.39 224.559 1822 0V680C1068.32 446.396 649.104 459.126 -94 680V0Z"
          fill="#F8F8F8"
        />
      </svg>
    );
  };

  const TOP_PATH = 'path("M-94 0 C 649.056 216.861, 1068.39 224.559, 1822 0")';
  const BOTTOM_PATH =
    'path("M-94 680 C 649.104 459.126, 1068.32 446.396, 1822 680")';

  return (
    <section id="top" className="min-h-screen mt-24">
      <div className="">
        <div className="flex w-fit mx-auto gap-4 items-center justify-center">
          <div className="text-center text-light-black text-7xl font-normal capitalize">
            One Ecosystem
          </div>
          <div className="flex gap-4">
            <div className="flex items-center">
              <div className="size-12 flex justify-center items-center text-foreground border rounded-full p-3 border-dark-grey bg-light-grey">
                <XLogo />
              </div>
              <div className="-translate-x-4 size-12 flex justify-center items-center text-foreground border rounded-full p-3 border-dark-grey bg-light-grey">
                <Tiktok />
              </div>
              <div className="-translate-x-8 size-12 flex justify-center items-center text-foreground border rounded-full p-3 border-dark-grey bg-light-grey">
                <Facebook />
              </div>
            </div>
            <div className="-ml-8">
              <div className="text-center text-xl font-bold capitalize">
                500k+ football fans
              </div>
              <div className="text-lg font-normal capitalize">
                trusts and follows us
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-7xl font-normal capitalize pt-3">
          Endless Football
        </div>
      </div>
      <div className="text-center text-dark-gray text-xl font-normal capitalize leading-8 pt-5">
        Our products combine cutting-edge AI with football intuition <br />
        to help you understand, predict, and enjoy the game on a whole new level
      </div>
      <div className="flex items-center justify-center gap-4 pt-5">
        <PrimaryButton
          icon={<Verify />}
          label="Become A Member"
          className="text-background"
        />
        <PrimaryButton
          icon={<Flash className="text-light-black!" />}
          label="See Live Products"
          className="bg-grey-1!"
        />
      </div>
      <div className="relative">
        {/* Top Banner */}
        <div className="top-banner">
          {leagues.map((league, index) => (
            <div
              key={league.name}
              className="absolute flex items-center gap-3 -top-8"
              style={{
                offsetPath: TOP_PATH,
                offsetDistance: `${15 + (index / (leagues.length - 1)) * 70}%`,
                offsetRotate: "auto",
              }}
            >
              <Image src={league.image} alt={league.name} className="size-8" />
              <span className="text-xs font-semibold text-light-black/60 uppercase tracking-wider">
                {league.name}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute left-0 -z-10 -top-15 w-full flex justify-center">
          <div className="relative h-[680px]">
            {/* PANORAMA 1 */}
            <PanoramaBg />
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="absolute left-0 -z-10 -bottom-15 w-full flex justify-center">
          <div className="relative h-[680px]">
            {/* PANORAMA 2 */}
            <PanoramaBg />
          </div>
        </div>
        <div className="bottom">
          {leagues.map((league, index) => (
            <div
              key={league.name + "bottom"}
              className="absolute flex items-center gap-3 top-4"
              style={{
                offsetPath: BOTTOM_PATH,
                offsetDistance: `${15 + (index / (leagues.length - 1)) * 70}%`,
                offsetRotate: "auto",
              }}
            >
              <Image src={league.image} alt={league.name} className="size-8" />
              <span className="text-xs font-semibold text-light-black/60 uppercase tracking-wider">
                {league.name}
              </span>
            </div>
          ))}
        </div>

        <Image alt="panorama" src={panorama} className="z-10" />
      </div>
    </section>
  );
}
