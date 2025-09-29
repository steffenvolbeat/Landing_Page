"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "../Icons/Icons";

export const CaringItem = () => {
  return (
    <div className="relative mt-10 w-[368px] h-[366px] mb-30 ml-40">
      <Image
        src="/test-image.png"
        alt="Gefetchtes Bild"
        width={368}
        height={286}
        className="h-72 rounded-b-sm "
      />

      <div className="absolute left-5 bottom-0 w-80 h-44 rounded-b-sm self-center z-10 p-4 flex flex-col items-center gap-5 justify-end bg-[var(--main-background)] rounded-t-sm shadow-xl ">
        <h3 className="text-lg font-bold pt-1 ">Dummy Text Lorem ipsum dolor </h3>
        <button className="flex items-center gap-2 text-2xl text-[var(--akzentcolor)]">
        Read more <ArrowRight fill="var(--akzentcolor)" />
        </button>
      </div>
    </div>
  );
};
