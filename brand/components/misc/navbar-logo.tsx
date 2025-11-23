import { Logo } from "../icons";

export function NavbarLogo({ hideText }: { hideText: boolean }) {
  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      aria-label="Go to top"
      className={
        "relative flex items-center text-xl font-bold gap-3 cursor-pointer min-h-12 min-w-12"
      }
      style={{ minHeight: "48px" }}
    >
      <span
        className={`
            flex items-center justify-center
            transition-all duration-300 ease-in-out
            ${
              hideText
                ? "bg-primary w-12 h-12 rounded-full shadow-md"
                : "bg-transparent w-9 h-9 rounded-none"
            }
          `}
        style={{
          position: "relative",
          minWidth: hideText ? "3rem" : "2.25rem",
          minHeight: hideText ? "3rem" : "2.25rem",
          transitionProperty:
            "background, border-radius, width, height, min-width, min-height",
          willChange: "background, border-radius, width, height",
        }}
      >
        <Logo
          className={`
              transition-all duration-300 ease-in-out
              ${
                hideText
                  ? "h-7 w-7 text-white fill-white"
                  : "h-9 w-9 text-primary fill-primary"
              }
            `}
          style={{
            transitionProperty: "color, fill, width, height",
            willChange: "color, fill, width, height",
          }}
        />
      </span>
      {/* Brand text transitions away */}
      <span
        className={`
            transition-all duration-300 ease-in-out
            origin-left
            ${
              hideText
                ? "opacity-0 scale-95 translate-x-[-5px] pointer-events-none"
                : "opacity-100 scale-100 translate-x-0"
            }
          `}
        style={{
          transitionProperty: "opacity, transform",
          willChange: "opacity, transform",
          display: "inline-block",
          marginLeft: hideText ? "0px" : "0.5rem",
        }}
      >
        Playcope
      </span>
    </button>
  );
}
