import {
  BallDot1,
  BallDot2,
  BallDot3,
  BallDot4,
  BallDot5,
} from "@/brand/components/icons";

export function BoxOfBall() {
  return (
    <div className="mx-auto mt-50 h-96 max-w-[50rem] bgred-50/20 relative">
      <BallDot1 className="absolute left-0 top-20" />
      <BallDot2 className="absolute left-0 bottom-10" />
      <BallDot3 className="absolute -top-12 left-1/2" />
      <BallDot4 className="absolute right-0 top-10" />
      <BallDot5 className="absolute right-0 bottom-10" />
      <div className="absolute inset-0 h-[22rem] bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_rgba(250,_248,_255,_0.05)_0%,_#0C0C0C_100%)] max-w-[45rem] mx-auto rounded-3xl">
        content
      </div>
    </div>
  );
}
