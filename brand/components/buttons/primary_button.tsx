import React from "react";

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: React.ReactNode;
  loading?: boolean;
}

export function PrimaryButton({
  label,
  icon,
  loading = false,
  className = "",
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      className={`flex items-center justify-center px-6 py-3 text-lg font-normal rounded-full bg-primary gap-2 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors ${className} leading-6 cursor-pointer`}
      {...props}
      disabled={props.disabled || loading}
    >
      {loading && (
        <svg
          className="w-5 h-5 text-white animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4l-3 3 3 3h-4z"
          ></path>
        </svg>
      )}
      {!loading && icon && <span>{icon}</span>}
      <span>{label}</span>
    </button>
  );
}
