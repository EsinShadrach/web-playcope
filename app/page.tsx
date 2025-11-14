import { BoxOfBall } from "./_components/box-of-ball";
import { JoinTheTribe } from "./_components/join-the-tribe";
import { PlaycopeIsABrand } from "./_components/playcope-is-a-brand";
import { PlaycopeVision } from "./_components/playcope-vision";
import { Spotlight } from "./_components/spotlights";
import { ThreeLineComponent } from "./_components/three-line";
import { WhatIsPlaycope } from "./_components/what-is-playcope";

export default function Home() {
  return (
    <main>
      <Spotlight />
      <BoxOfBall />
      <PlaycopeIsABrand />
      <WhatIsPlaycope />
      <PlaycopeVision />
      <ThreeLineComponent />
      <JoinTheTribe />
    </main>
  );
}
