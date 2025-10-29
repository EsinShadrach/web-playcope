import { BallIcon, SpotlightSvg } from "@/brand/components/icons";

export default function Home() {
  return (
    <main className="relative">
      <Spotlight />
      <BoxOfBall />
    </main>
  );
}

export function BoxOfBall() {
  return (
    <div className="mx-auto mt-50 h-96 max-w-[50rem]">
      <div className="w-fit">
        <div className="flex items-center gap-3">
          <div className="rounded-full size-6 bg-black2" />
          <div className="rounded-full size-4 bg-black2" />
          <div className="rounded-full size-2 bg-black2" />
        </div>
        <BallIcon className="text-black2" />
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
        <div className="border rounded-full border-y-white/20 border-x-transparent size-12"></div>
      </div>
    </>
  );
}
