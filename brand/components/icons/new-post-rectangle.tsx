import React from "react";

export default function NewPostRectangle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="317"
      height="165"
      viewBox="0 0 317 165"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="5"
        width="307"
        height="155"
        rx="25"
        fill="url(#paint0_linear_3437_5680)"
        stroke="url(#paint1_linear_3437_5680)"
        stroke-width="10"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3437_5680"
          x1="158.5"
          y1="0"
          x2="158.5"
          y2="165"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0C0C0C" stop-opacity="0" />
          <stop offset="1" stop-color="#1E1E1E" stop-opacity="0.23" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3437_5680"
          x1="158.5"
          y1="0"
          x2="158.5"
          y2="165"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0" />
          <stop offset="1" stop-color="#3B3B3B" stop-opacity="0.22" />
        </linearGradient>
      </defs>
    </svg>
  );
}
