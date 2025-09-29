"use client";

import React from "react";
import styles from "./btn.module.css";
import { ArrowRight } from "../Icons/Icons";

type BtnProps = {
  handleClick: () => void;
  title: string;
  isIcon?: boolean;
};

export const Btn = ({ handleClick, title, isIcon }: BtnProps) => {
  return (
    <button
      onClick={handleClick}
      className={`
        flex justify-center items-center gap-3 pt-2.5 pb-2.5 pl-5 pr-5 rounded-[6px] text-white text-lg max-w-32
        ${styles.btn_bg}
        `}>
      {title}
      {isIcon ? <ArrowRight /> : ""}
    </button>
  );
};
