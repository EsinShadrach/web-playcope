import { PrimaryButton } from "@/brand/components/buttons/primary_button";
import { Star, Verify } from "@/brand/components/icons";
import { AnimatePresence, motion } from "framer-motion";
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
        className={`z-10 relative md:hidden flex bg-light-grey/80 backdrop-blur-lg mt-5 w-full p-2 items-center border-b  ${
          isOpened ? "border-grey-1" : "rounded-full border-transparent"
        }`}
        style={{
          borderRadius: isOpened ? "10px 10px 0px 0px" : "",
        }}
      >
        <div className="flex w-full gap-2 relative z-10 items-center">
          <div className="w-fit">
            <NavbarLogo hideText={hideText} />
          </div>
          <div className="w-full" />
          <button className="text-foreground border rounded-full p-3 border-dark-grey bg-light-grey">
            <InstaLogo className="size-4" />
          </button>
          <button className="text-foreground border rounded-full p-3 border-dark-grey bg-light-grey">
            <XLogo className="size-4" />
          </button>
          <button
            onClick={toggle}
            className="rounded-full size-12 px-3 outline-none flex items-center justify-center"
          >
            <motion.svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={isOpened ? "open" : "closed"}
            >
              <motion.path
                variants={{
                  closed: { d: "M5 7H19" },
                  open: { d: "M5 5L19 19" },
                }}
              />
              <motion.path
                d="M5 12H19"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
              />
              <motion.path
                variants={{
                  closed: { d: "M5 17H19" },
                  open: { d: "M5 19L19 5" },
                }}
              />
            </motion.svg>
          </button>
        </div>
      </div>

      <div className="relative">
        <AnimatePresence>
          {isOpened && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute nav-drawer bg-light-grey inset-x-0 rounded-b-[10px] overflow-hidden"
            >
              <_Tabs onSelect={() => setIsOpened(false)} />
              <div className="p-3 pb-7">
                <PrimaryButton
                  icon={<Verify />}
                  label="Become A Member"
                  className="w-full text-background max-md:text-base"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

function _Tabs({ onSelect }: { onSelect: () => void }) {
  const tabs = [
    { text: "Home", link: "#top" },
    { text: "Our Apps", link: "#our-apps" },
    { text: "About Us", link: "about-us" },
  ];

  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="p-3 flex flex-col gap-0">
      {tabs.map((tab, i) => (
        <button
          key={i}
          onClick={(e) => {
            setActiveTab(tab.text);

            setTimeout(() => {
              onSelect();
            }, 300);

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
            activeTab == tab.text ? "bg-grey-1" : ""
          } transition-all duration-300 rounded-full px-4 py-4 text-start flex gap-3 items-center`}
        >
          {activeTab === tab.text ? <Star /> : <></>}
          {tab.text}
        </button>
      ))}
    </div>
  );
}
