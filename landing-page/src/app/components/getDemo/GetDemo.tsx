"use client";

import React from "react";
import { Btn } from "../btn/Btn";

export const GetDemo = () => {
  const handleClick = () => {
    console.log("Button wurde geklickt!");
  };

  return (
    <section className="text-center bg-[var(--main-background)] flex flex-col justify-center items-center p-10">
      <h2>
        Pellentesque suscipit <br />
        fringilla libero eu.
      </h2>
      <Btn handleClick={handleClick} title={"Get a Demo"} isIcon={true} />
    </section>
  );
};
