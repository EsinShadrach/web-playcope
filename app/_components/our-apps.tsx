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
    <section id="our-apps" className="min-h-screen mt-36">
      <div className="container mx-auto p-3 flex justify-between">
        <div className="space-y-8">
          <div className="px-6 py-3 bg-light-grey rounded-3xl w-fit">
            <div className="text-light-black text-lg font-normal capitalize">
              our products
            </div>
          </div>
          <div className="justify-start text-Light-Black text-7xl font-normal capitalize leading-25">
            what we have <br />
            built so far
          </div>
          <div className="justify-start text-dark-grey text-2xl font-normal capitalize leading-9 -mt-8">
            These are the solutions we’re developing for
            <br />
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
                  <_Star image={person1} />

                  <div
                    className="absolute inset-0 blur-xl"
                    style={{
                      background:
                        "linear-gradient(to right, #0D4FF72E 0%, #FFFFFF3D 40%, #FFFFFF1F 60%, #0D4FF736 100%)",
                    }}
                  />
                  <div className="absolute inset-0">
                    <div className="px-6 py-3 bg-light-grey rounded-3xl w-fit mx-auto">
                      <div className="text-light-black text-sm font-normal capitalize flex justify-center gap-2 items-center">
                        <span>
                          <Profile2User className="text-light-black" />
                        </span>
                        <span>10,000+ daily users</span>
                      </div>
                    </div>
                    <div className="mt-5 flex flex-col justify-center">
                      <div className="text-center justify-start text-light-black text-5xl font-bold capitalize">
                        Predict smarter,
                      </div>
                      <div className="px-12 py-2.5 origin-top-left rotate-[3.14deg] bg-Blue inline-flex justify-center items-center gap-2.5 bg-primary mx-auto">
                        <div className="text-center justify-start text-grey-1 text-5xl font-bold capitalize py-2">
                          win bigger
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center text-dark-grey text-xl font-normal mt-6 capitalize">
                Puntrr uses AI to analyze stats, form, and performance trends
                helping you bet with strategy, not emotion.
              </div>
              <div className="flex gap-6 mt-12 w-fit mx-auto">
                <PrimaryButton
                  icon={<ReceiveSquare />}
                  label="Download Now"
                  className="text-background"
                />
                <PrimaryButton
                  icon={<Logout />}
                  label="Visit Website"
                  className="text-light-black bg-light-grey! hover:bg-grey-1!"
                />
              </div>
              <div className="text-center text-dark-grey text-lg font-normal capitalize mt-6">
                available on appstore and playstore
              </div>
            </div>
          </div>
          <div className="border border-dark-grey rounded-4xl py-6 px-10 mt-6">
            <div className="flex justify-between items-center">
              <div className="">
                <span className="text-light-black text-4xl font-normal capitalize">
                  pustats{" "}
                </span>
                <span className="text-dark-grey text-4xl font-normal capitalize">
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

function _Star({ image }: { image: StaticImport }) {
  return (
    <div className="size-21 flex justify-center relative z-10">
      <Star2 />
      <div className="absolute inset-0 flex justify-center items-center">
        <Image alt="person" src={image} />
      </div>
      <ArrowCursor className="absolute -bottom-3 rotate-10 right-2" />
    </div>
  );
}
