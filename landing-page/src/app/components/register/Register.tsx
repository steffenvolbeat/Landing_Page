"use client";

import React from "react";
import RegisterImage from "./RegisterImage";
import { Btn } from "../btn/Btn";

const Register: React.FC = () => {
  const handleClick = () => {
    console.log("Button wurde geklickt!");
  };

  return (
    <section
      className="mt-20 w-full flex  min-h-fit justify-around items-center  bg-[var(--main-background)] sm:flex-col sm:pb-10 sm:pt-10 md:flex-row md:pl-10 md:pr-10 lg:flex-row"
    >
      <div className=" flex flex-col gap-6 justify-center">
        <h1 className="text-5xl font-bold" style={{color: "var(--h-color)"}}>Lessons and insights</h1>
        <span className="text-5xl font-bold" style={{ color: "var(--akzentcolor)" }}>from 8 years</span>
        <p className="text-xs">
          Where to grow your business as a photographer: site or social media?
        </p>
        <Btn handleClick={handleClick} title={"Register"} />
      </div>
      <div>
        <RegisterImage />
      </div>
    </section>
  );
};

export default Register;
