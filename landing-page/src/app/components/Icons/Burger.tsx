import React from "react";

export const Burger: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 6L4 6"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 12L4 12"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 18H4"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};