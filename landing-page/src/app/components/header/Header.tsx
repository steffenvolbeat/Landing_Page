"use client";
import Link from "next/link";
import Image from "next/image";
import NavDesctop from "./NavDesctop";
import NavMobil from "./NavMobil";
import { Btn } from "../btn/Btn";
import { Burger } from "../Icons/Icons";

export default function Header() {
  const handleClick = () => {
    console.log("Button wurde geklickt!");
  };
  return (
    <div className=" bg-[#f5f7fa] h-[84px] w-full flex justify-between items-center">
      <div className="md:hidden group relative">
        <Burger className="h-10 w-10  cursor-pointer" />
        <div className="absolute hidden group-hover:block ">
          <NavMobil />
        </div>
      </div>

      <div className=" flex items-center gap-2">
        <Image
          className="hidden sm:block"
          src="/Icon.png"
          alt="Nexcent logo"
          width={32}
          height={32}
          priority
        />

        <span className="text-[28px] font-bold ">Nexcent</span>
      </div>
      <div className="hidden md:block">
        <NavDesctop />
      </div>

      <div className="flex items-center gap-3 w-[154px]">
        <Link
          href={"#"}
          className="text-[16px]"
          style={{ color: "var(--akzentcolor)" }}>
          {" "}
          Login
        </Link>
        <Btn handleClick={handleClick} title={"Sign up"} />
      </div>
    </div>
  );
}
