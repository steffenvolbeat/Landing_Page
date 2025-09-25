import Link from "next/link";
import { navList } from "./navData";

const NavDesctop = () => {
  return (
    <nav
      style={{ color: "var(--link-header-color)" }}
      className="  flex  lg:text-[16px] text-[14px]     justify-between md:w-[340px] lg:w-[450px] xl:w-[600px]"
    >
      {navList.map((item) => {
        return (
          <Link
            key={item.id}
            href={item.url}
            className="relative inline-block group cursor-pointer"
          >
            <span>{item.text}</span>
            <span
              className="absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
              style={{ background: "var(--akzentcolor)" }}
            ></span>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavDesctop;
