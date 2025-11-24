import React from "react";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode; // Accept any JSX inside
}

export function IconButton({
  children,
  className = "",
  ...props
}: IconButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full size-9 md:size-14 bg-black2 ${className} transition-colors disabled:opacity-50 disabled:cursor-not-allowed group`}
      {...props}
    >
      <div className="flex items-center justify-center p-2 rounded-full size-8 md:size-10 group-hover:size-14 transition-all duration-300 bg-light-black">
        {children}
      </div>
    </button>
  );
}
