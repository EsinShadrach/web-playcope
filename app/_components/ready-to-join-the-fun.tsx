import { PrimaryButton } from "@/brand/components/buttons/primary_button";
import { CurvedLines, Logout, ReceiveSquare } from "@/brand/components/icons";
import Link from "next/link";

export function ReadyToJoinTheFun() {
  return (
    <div className="relative md:mt-72">
      <div className="absolute">
        <CurvedLines className="w-full" />
      </div>
      <div className="space-y-5 capitalize w-fit mx-auto relative z-10 text-center">
        <div className="text-3xl md:text-6xl font-bold max-w-xl pt-24">
          Ready To Join The Fun?
        </div>
        <div className="text-dark-gray mt-7 max-md:text-sm">
          our first app puntrr is available on appstore and playstore
        </div>
        <div className="flex gap-4 md:w-fit mx-auto flex-col md:flex-row">
          <PrimaryButton
            icon={<ReceiveSquare />}
            label="Download Now"
            className="px-6 max-md:w-full"
          />
          <Link
            href={"https://puntrr.ai"}
            referrerPolicy="no-referrer"
            className="rounded-full cursor-pointer max-md:w-full"
            target="_blank"
          >
            <PrimaryButton
              icon={<Logout />}
              label="Visit Website"
              className="bg-black2! px-6 text-dark-gray max-md:w-full"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
