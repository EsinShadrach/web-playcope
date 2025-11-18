import { CurvedLines } from "@/brand/components/icons";
import { BoxOfBall } from "./_components/box-of-ball";
import { FrequentlyAskedQuestions } from "./_components/frequently-asked-questions";
import { JoinTheTribe } from "./_components/join-the-tribe";
import { PlaycopeIsABrand } from "./_components/playcope-is-a-brand";
import { PlaycopeVision } from "./_components/playcope-vision";
import { Spotlight } from "./_components/spotlights";
import { ThreeLineComponent } from "./_components/three-line";
import { WhatIsPlaycope } from "./_components/what-is-playcope";
import { WhatOurFansThink } from "./_components/what-our-fans-think";
import { ReadyToJoinTheFun } from "./_components/ready-to-join-the-fun";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <main id="top">
      <Spotlight />
      <BoxOfBall />
      <PlaycopeIsABrand />
      <div id="about-us">
        <WhatIsPlaycope />
      </div>
      <PlaycopeVision />
      <div id="our-apps">
        <ThreeLineComponent />
      </div>
      <JoinTheTribe />
      <div id="testimonials">
        <WhatOurFansThink />
      </div>
      <div id="faq">
        <FrequentlyAskedQuestions />
      </div>
      <ReadyToJoinTheFun />
      <Footer />
    </main>
  );
}
