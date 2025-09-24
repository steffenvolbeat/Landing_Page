"use client";

import React from "react";
import ArrowRight from "../Icons/ArrowRight";

const GetDemoBtn: React.FC = () => {
  const handleClick = () => {
    console.log("Button wurde geklickt!");
  };

    return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: "var(--akzentcolor)",
      }}
      className="flex justify-center items-center gap-3 pt-2.5 pb-2.5 pl-5 pr-5 rounded-[6px] text-white text-lg"
    >
      Get a Demo <ArrowRight/>
    </button>
  );
};

export default GetDemoBtn;