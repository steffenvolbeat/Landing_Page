"use client";

import React from "react";

const SignUpBtn: React.FC = () => {
  const handleClick = () => {
    console.log("Button wurde geklickt!");
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: "var(--akzentcolor)",
      }}
      className="pt-2 pb-2 pl-5 pr-5 rounded-[6px] text-white text-lg"
    >
      Sign up
    </button>
  );
};

export default SignUpBtn;
