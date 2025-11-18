import React from "react";

export default function Ellipse(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="662"
      height="875"
      viewBox="0 0 662 875"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_3556_3781)">
        <ellipse
          cx="330.757"
          cy="437.368"
          rx="328.188"
          ry="155.566"
          transform="rotate(115.064 330.757 437.368)"
          fill="url(#paint0_linear_3556_3781)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_3556_3781"
          x="4.57764e-05"
          y="0.000289917"
          width="661.513"
          height="874.735"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="66.4"
            result="effect1_foregroundBlur_3556_3781"
          />
        </filter>
        <linearGradient
          id="paint0_linear_3556_3781"
          x1="-112.608"
          y1="396.559"
          x2="678.581"
          y2="441.542"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0C0C0C" />
          <stop offset="1" stopColor="#3B3B3B" stopOpacity="0.22" />
        </linearGradient>
      </defs>
    </svg>
  );
}
