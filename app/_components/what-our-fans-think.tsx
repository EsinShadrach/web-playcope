import { PrimaryButton } from "@/brand/components/buttons/primary_button";

export function WhatOurFansThink() {
  return (
    <div className="container mx-auto p-3 mt-20 space-y-4">
      <PrimaryButton
        label="Testimonials"
        className="bg-black2! text-dark-gray w-fit mx-auto"
      />
      <div className="text-center text-white text-5xl font-bold capitalize leading-[74.20px] mb-16">
        What Our Fans Think
      </div>
      <div className="flex gap-2 h-full">
        <CommentComponent />
        <LineSeparator />
        <CommentComponent />
        <LineSeparator />
        <CommentComponent />
      </div>
    </div>
  );
}

function CommentComponent() {
  return (
    <div className="flex flex-col w-full capitalize space-y-18 mt-4">
      <div className="max-w-sm">
        <div>
          Playcope is actually changing the game 🔥. The AI predictions are spot
          on and the stats make betting way easier. Real lifesaver!
        </div>
      </div>
      <div className="max-w-md border-t pt-6 border-black2">
        <UserAvatar />
        <div className="mt-18 max-w-sm">
          Playcope is actually changing the game 🔥. The AI predictions are spot
          on and the stats make betting way easier. Real lifesaver!
        </div>
      </div>

      <div className="max-w-md border-t pt-6 border-black2">
        <UserAvatar />
      </div>
    </div>
  );
}

function LineSeparator() {
  return (
    <div className="w-px h-140 mr-4 flex flex-col gap-3">
      <div className="w-px h-full bg-[linear-gradient(to_bottom,rgba(13,79,247,0)_0%,rgba(13,79,247,0.3)_25%,rgba(255,255,255,1.0)_50%,rgba(13,79,247,0.3)_75%,rgba(13,79,247,0)_100%)]" />
      <div className="w-px h-full bg-[linear-gradient(to_bottom,rgba(13,79,247,0)_0%,rgba(13,79,247,0.3)_25%,rgba(255,255,255,1.0)_50%,rgba(13,79,247,0.3)_75%,rgba(13,79,247,0)_100%)]" />
    </div>
  );
}

function UserAvatar() {
  return (
    <div className="flex gap-4">
      <div className="size-12 rounded-full bg-linear-to-tr from-pink-500 via-red-400 to-yellow-400" />
      <div>
        <div className="text-white text-normal font-bold capitalize">
          John Doe
        </div>
        <div className="text-dark-gray text-sm">Social Media User</div>
      </div>
    </div>
  );
}
