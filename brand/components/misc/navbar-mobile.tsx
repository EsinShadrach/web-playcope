import { PrimaryButton } from "@/brand/components/buttons/primary_button";
import { Star, Verify } from "@/brand/components/icons";
import { useState } from "react";
import { InstaLogo, XLogo } from "../icons";
import { NavbarLogo } from "./navbar-logo";

export default function NavBarMobile({ hideText }: { hideText: boolean }) {
  const [isOpened, setIsOpened] = useState(false);

  function toggle() {
    if (isOpened) {
      setIsOpened(false);
    } else {
      setIsOpened(true);
    }
  }

  return (
    <nav>
      <div
        className={`z-10 relative md:hidden flex bg-black2 w-full p-2 items-center border-b ${
          isOpened ? "border-light-black" : "rounded-full border-transparent"
        }`}
        style={{
          borderRadius: isOpened ? "10px 10px 0px 0px" : "",
        }}
      >
        <div className="flex w-full gap-2 relative z-10">
          <div className="w-fit">
            <NavbarLogo hideText={hideText} />
          </div>
          <div className="w-full" />
          <button className="bg-light-black rounded-full size-12 p-3">
            <InstaLogo />
          </button>
          <button className="bg-light-black rounded-full size-12 p-3">
            <XLogo />
          </button>
          <button onClick={toggle} className="rounded-full size-12 px-3">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 17H19M5 12H19M5 7H19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpened && (
        <div className="absolute nav-drawer bg-black2 inset-x-0 mx-3 rounded-b-md pb-4">
          <_Tabs />
          <div className="p-3">
            <PrimaryButton
              icon={<Verify />}
              label="Become A Member"
              className="w-full"
            />
          </div>
        </div>
      )}
    </nav>
  );
}

function _Tabs() {
  const tabs = [
    { text: "Home", link: "#top" },
    { text: "Our Apps", link: "#our-apps" },
    { text: "About Us", link: "about-us" },
  ];

  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="p-3 flex flex-col gap-0">
      {tabs.map((tab) => (
        <button
          onClick={(e) => {
            setActiveTab(tab.text);

            e.preventDefault();
            const element = document.getElementById(tab.link.replace("#", ""));

            if (element) {
              const yOffset = 0;

              let y =
                element.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;

              if (tab.link == "#top") y = 0;

              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
          className={`${
            activeTab == tab.text ? "bg-light-black" : ""
          } transition-all duration-300 rounded-full px-4 py-4 text-start flex gap-3 items-center`}
        >
          {activeTab === tab.text ? <Star /> : <></>}
          {tab.text}
        </button>
      ))}
    </div>
  );
}
