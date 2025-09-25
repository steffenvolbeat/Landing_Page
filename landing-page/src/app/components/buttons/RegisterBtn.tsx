"use client";

import React from "react";

const RegisterBtn: React.FC = () => {
  const handleClick = () => {
    console.log("Button wurde geklickt!");
  };

    return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: "var(--akzentcolor)",
      }}
      className="pt-2.5 pb-2.5 pl-5 pr-5 w-32 h-13 rounded-[6px] text-white text-lg"
    >
      Register
    </button>
  );
};

export default RegisterBtn;