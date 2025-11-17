import { PrimaryButton } from "@/brand/components/buttons/primary_button";
import { CurvedLines, Logout, ReceiveSquare } from "@/brand/components/icons";
import Link from "next/link";

export function ReadyToJoinTheFun() {
  return (
    <div className="relative mt-72">
      <div className="absolute">
        <CurvedLines className="w-full" />
      </div>
      <div className="space-y-5 capitalize w-fit mx-auto relative z-10 text-center">
        <div className="text-6xl font-bold max-w-xl pt-24">
          Ready To Join The Fun?
        </div>
        <div className="text-dark-gray mt-7">
          our first app puntrr is available on appstore and playstore
        </div>
        <div className="flex gap-4 w-fit mx-auto">
          <PrimaryButton
            icon={<ReceiveSquare />}
            label="Download Now"
            className="px-6"
          />
          <Link
            href={"https://puntrr.ai"}
            referrerPolicy="no-referrer"
            className="rounded-full cursor-pointer"
            target="_blank"
          >
            <PrimaryButton
              icon={<Logout />}
              label="Visit Website"
              className="bg-black2! px-6 text-dark-gray"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
