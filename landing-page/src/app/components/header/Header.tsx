import Link from "next/link";
import { Burger } from "../Icons/Burger";
import Nav from "./NavDesctop";
import SignUpBtn from "../buttons/SignUpBtn";
import NavDesctop from "./NavDesctop";
import NavMobil from "./NavMobil";


const Header = () => {
  return (
    <div
      className=" bg-[#f5f7fa] h-[84px] w-full flex justify-between items-center px-4 transition-colors duration-300"
      style={{ color: "var(--link-header-color)" }}
    >
      {/* Mobile Navigation */}
      <div className="md:hidden group relative">
        <Burger className="h-10 w-10  cursor-pointer" />
        <div className="absolute hidden group-hover:block ">
          <NavMobil />
        </div>
      </div>
      {/* Logo & Nav */}
      <div className=" flex items-center gap-2">
        <img className="hidden sm:block" src="/Icon.png" alt="" />
        {/*Nexcent mit CSS-Variable für den Dark Mode */}
        <span
          className="text-[28px] font-bold transition-colors duration-300"
          style={{ color: "var(--header-text-color)" }}
        >
          Nexcent
        </span>
      </div>
      <div className="hidden md:block">
        <NavDesctop />
      </div>

      
      
      {/* Login & Sign Up */}
      <div className="flex items-center gap-3 w-[154px]">
        <Link
          href={"#"}
          className="text-[16px] transition-colors duration-300"
          style={{ color: "var(--akzentcolor)" }}
        >
          {" "}
          Login
        </Link>
        <SignUpBtn />
      </div>
    </div>
  );
};

export default Header;
