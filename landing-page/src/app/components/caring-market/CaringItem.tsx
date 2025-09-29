"use client";

type CarungItemProps = {
  img: string;
  title: string;
 
};


import React from "react";
import Image from "next/image";
import { ArrowRight } from "../Icons/Icons";

export const CaringItem = ({title,img}:CarungItemProps) => {
  return (
    <div className="relative mt-10 w-[368px] h-[366px] mb-30 ml-40">
      <Image
        src={img}
        alt={title}
        width={368}
        height={286}
        className="h-72 rounded-sm "
      />

      <div className="absolute left-5 bottom-0 w-80 h-44 rounded-b-sm self-center z-10 p-4 flex flex-col items-center gap-5 justify-end bg-[var(--main-background)] rounded-t-sm shadow-xl ">
        <h3 className="text-lg font-bold pt-1 "> <div className="text-[20px] text-center"> {title}</div> </h3>
        <button className="flex items-center gap-2 text-2xl text-[var(--akzentcolor)]">
        Read more <ArrowRight fill="var(--akzentcolor)" />
        </button>
      </div>
    </div>
  );
};
