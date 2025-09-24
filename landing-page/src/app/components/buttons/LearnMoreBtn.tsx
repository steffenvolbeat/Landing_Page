"use client";

import React from "react";

const LearnMoreBtn: React.FC = () => {
  const handleClick = () => {
    console.log("Button wurde geklickt!");
  };

    return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: "var(--akzentcolor)",
      }}
      className="pt-2.5 pb-2.5 pl-5 pr-5 rounded-[6px] text-white text-lg"
    >
      Learn More
    </button>
  );
};

export default LearnMoreBtn;