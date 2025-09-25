"use client";
import Link from "next/link";
import Image from "next/image";
import NavDesctop from "./NavDesctop";
import NavMobil from "./NavMobil";
import { Btn } from "../btn/Btn";
import { Burger } from "../Icons/Icons";
import ThemeToggleBtn from "../ui/button/ThemeToggleBtn";

export default function Header() {
  const handleClick = () => {
    console.log("Button wurde geklickt!");
  };
  return (
    <div
      className="h-[84px] w-full flex justify-between items-center px-4 transition-colors duration-300"
      style={{ color: "var(--link-header-color)" }}>
      {/* Mobile Navigation */}
      <div className="md:hidden group relative">
        <Burger className="h-10 w-10  cursor-pointer" />
        <div className="absolute scale-0 translate-x-[-300px] group-hover:translate-x-0  group-hover:scale-100 transition-all duration-800">
          <NavMobil />
        </div>
      </div>
      {/* Logo & Nav */}
      <div className="  items-center gap-2 hidden sm:flex">
        <Image
          className=""
          src="/Icon.png"
          alt="Nexcent logo"
          width={32}
          height={32}
          priority
        />

        <span style={{ color: "--link-header-color" }} className="text-[28px] font-bold ">Nexcent</span>
      </div>
      <div className="hidden md:block">
        <NavDesctop />
      </div>

      {/* Login & Sign Up */}
      <div className="flex items-center justify-end gap-4 w-[220px]">
        <Link
          href={"#"}
          className="text-[16px]"
          style={{ color: "var(--akzentcolor)" }}>
          {" "}
          Login
        </Link>
        <Btn handleClick={handleClick} title={"Sign up"} />
        <ThemeToggleBtn />
      </div>
    </div>
  );
}
