import { PrimaryButton } from "@/brand/components/buttons/primary_button";
import {
  ArrowCursor,
  Logo,
  Logout,
  Profile2User,
  ReceiveSquare,
} from "@/brand/components/icons";
import Star2 from "@/brand/components/icons/star-2";
import person1 from "@/public/new/person-1.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export function OurApps() {
  return (
    <section id="our-apps" className="min-h-screen md:mt-36 mt-14">
      <div className="container mx-auto p-3 flex justify-between md:flex-row flex-col">
        <div className="space-y-8">
          <div className="px-6 py-3 bg-light-grey rounded-3xl w-fit max-md:mx-auto">
            <div className="text-light-black text-sm md:text-lg font-normal capitalize">
              our products
            </div>
          </div>
          <div className="justify-start text-Light-Black text-4xl md:text-7xl font-normal capitalize md:leading-25 max-md:text-center leading-9">
            what we have <br className="max-md:hidden" />
            built so far
          </div>
          <div className="justify-start text-dark-grey text-xl md:text-2xl max-md:my-4 max-md:mb-10 font-normal capitalize md:leading-9 md:-mt-8 max-md:text-center">
            These are the solutions we&apos;re developing for{" "}
            <br className="max-md:hidden" />
            our users.
          </div>
        </div>

        <div className="w-full max-w-xl">
          <div
            className="h-150 rounded-4xl p-[0.5px] overflow-x-clip"
            style={{
              background:
                "linear-gradient(to bottom right, #FF3B3066 25%, #0D4FF7 50%, #FFFFFF 90%)",
            }}
          >
            <div className="bg-background h-full w-full rounded-[31.5px] px-0 p-6">
              <div className="flex justify-between items-center pb-6 px-6">
                <div className="size-10" />
                <div className="flex items-center text-primary mx-auto w-fit">
                  <Logo className="size-7" />
                  <div className="text-2xl font-bold capitalize">puntrr</div>
                </div>
                <div className="w-8 h-0 rounded-xl outline outline-dark-grey" />
              </div>
              <div>
                <div className="h-58 w-full relative">
                  <div
                    className="absolute inset-0 blur-xl"
                    style={{
                      background:
                        "linear-gradient(to right, #0D4FF72E 0%, #FFFFFF3D 40%, #FFFFFF1F 60%, #0D4FF736 100%)",
                    }}
                  />
                  <div className="absolute inset-0">
                    <div className="px-6 py-3 bg-light-grey rounded-3xl w-fit mx-auto">
                      <div className="text-dark-grey text-sm font-normal capitalize flex justify-center gap-2 items-center">
                        <span>
                          <Profile2User className="text-dark-grey max-md:size-5" />
                        </span>
                        <span>10,000+ daily users</span>
                      </div>
                    </div>
                    <div className="mt-5 flex flex-col justify-center">
                      <div className="text-center justify-start text-light-black md:text-5xl text-3xl font-bold capitalize">
                        Predict smarter,
                      </div>
                      <div className="px-12 py-1 md:py-2.5 origin-top-left rotate-[3.14deg] bg-Blue inline-flex justify-center items-center gap-2.5 bg-primary mx-auto">
                        <div className="text-center justify-start text-grey-1 md:text-5xl text-3xl font-bold capitalize py-2">
                          win bigger
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center text-dark-grey text-base md:text-xl font-normal mt-6 capitalize">
                Puntrr uses AI to analyze stats, form, and performance trends
                helping you bet with strategy, not emotion.
              </div>
              <div className="flex gap-6 mt-12 md:w-fit mx-auto md:flex-row flex-col max-md:px-10">
                <PrimaryButton
                  icon={<ReceiveSquare />}
                  label="Download Now"
                  className="text-background md:text-lg text-base max-md:w-full"
                />
                <PrimaryButton
                  icon={<Logout />}
                  label="Visit Website"
                  className="text-light-black bg-light-grey! hover:bg-grey-1! md:text-lg text-base max-md:w-full"
                />
              </div>
              <div className="text-center text-dark-grey text-base md:text-lg font-normal capitalize mt-6">
                available on appstore and playstore
              </div>
            </div>
          </div>
          <div className="border border-dark-grey rounded-4xl py-6 px-10 mt-6">
            <div className="flex justify-between items-center">
              <div className="md:text-4xl text-2xl font-normal capitalize">
                <span className="text-light-black font-normal capitalize">
                  pustats{" "}
                </span>
                <span className="text-dark-grey font-normal capitalize">
                  (coming soon)
                </span>
              </div>
              <div className="h-8 w-0.5 bg-dark-grey"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
