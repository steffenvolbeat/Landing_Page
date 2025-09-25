"use client";

import React from "react";
import RegisterBtn from "../buttons/RegisterBtn";
import RegisterImage from "./RegisterImage";

const Register: React.FC = () => {
  return (
    <section
      className="w-full flex  min-h-fit justify-around items-center  bg-[#F5f7fa]  sm:flex-col sm:pb-10 sm:pt-10 md:flex-row md:pl-10 md:pr-10 lg:flex-row"
    >
      <div className=" flex flex-col gap-6 justify-center">
        <h1 className="text-5xl font-bold" style={{color: "var(--h-color)"}}>Lessons and insights</h1>
        <p className="text-5xl font-bold" style={{ color: "var(--akzentcolor)" }}>from 8 years</p>
        <p className="text-xs">
          Where to grow your business as a photographer: site or social media?
        </p>
        <RegisterBtn />
      </div>
      <div>
        <RegisterImage />
      </div>
    </section>
  );
};

export default Register;
