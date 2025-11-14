import React from "react";

export function XGradient(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="27"
      height="24"
      viewBox="0 0 27 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_3460_3878)">
        <path
          d="M21.253 0H25.3735L16.3735 10.1867L27 24H18.6506L12.1446 15.6267L4.66265 24H0.542169L10.1928 13.12L0 0H8.56627L14.4759 7.68L21.253 0ZM19.7892 21.5467H22.0663L7.31928 2.29333H4.8253L19.7892 21.5467Z"
          fill="url(#paint0_linear_3460_3878)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_3460_3878"
          x1="13.5"
          y1="0"
          x2="13.5"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#3B3B3B" />
        </linearGradient>
        <clipPath id="clip0_3460_3878">
          <rect width="27" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
